const { createClient } = require('@sanity/client')

// Initialize Sanity client
const client = createClient({
  projectId: 'pve3jpy2', // Your project ID from Vercel env
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: 'skeTOtN1A5pilpzHORpZDUACSXyR61THucIYTP56fqTvTfh03eJplcHh7igf9x7b9vW6cK9xnM3yOFwJfBgX0DOsFkxoYbXYxK2tB1njYmp6RavtErdDE6kCFS3BjFS2cCu0ZleglJbl3n6iWyDgqDYWMMtif0PPDk920TEKIzobL2rooWSz'
})

async function populateCMS() {
  console.log('🚀 Starting to populate JourneyWell CMS...\n')

  try {
    // Step 1: Create Author (Tim Simmons)
    console.log('👤 Creating author...')
    const author = await client.create({
      _type: 'author',
      name: 'Tim Simmons',
      slug: {
        _type: 'slug',
        current: 'tim-simmons'
      },
      bio: [
        {
          _type: 'block',
          _key: 'bio1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'bio1span',
              text: 'Founder of JourneyWell, passionate about supporting local businesses in Baton Rouge and helping them thrive in the digital age. With years of experience in business development and community building, Tim is dedicated to creating meaningful connections between businesses and their customers.'
            }
          ]
        }
      ]
    })
    console.log('✅ Author created:', author.name)

    // Step 2: Create Categories
    console.log('\n📂 Creating categories...')
    const categories = [
      'Local Business Spotlight',
      'Industry Insights', 
      'Community News',
      'Business Resources'
    ]

    const createdCategories = []
    for (const categoryTitle of categories) {
      const category = await client.create({
        _type: 'category',
        title: categoryTitle,
        slug: {
          _type: 'slug',
          current: categoryTitle.toLowerCase().replace(/\s+/g, '-')
        },
        description: `Content related to ${categoryTitle.toLowerCase()}`
      })
      createdCategories.push(category)
      console.log('✅ Category created:', category.title)
    }

    // Step 3: Create Welcome Blog Post
    console.log('\n📝 Creating welcome blog post...')
    const welcomePost = await client.create({
      _type: 'post',
      title: 'Welcome to JourneyWell - Supporting Baton Rouge Businesses',
      slug: {
        _type: 'slug',
        current: 'welcome-to-journeywell'
      },
      author: {
        _type: 'reference',
        _ref: author._id
      },
      categories: [
        {
          _type: 'reference',
          _ref: createdCategories.find(c => c.title === 'Community News')._id
        }
      ],
      publishedAt: new Date().toISOString(),
      excerpt: 'Introducing JourneyWell - your partner in discovering and supporting the amazing local businesses that make Baton Rouge special.',
      body: [
        {
          _type: 'block',
          _key: 'intro1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'intro1span',
              text: 'Welcome to JourneyWell! We\'re thrilled to launch this platform dedicated to celebrating and supporting the incredible local businesses that make Baton Rouge such a vibrant community.'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'mission1',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'mission1span',
              text: 'Our Mission'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'mission2',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'mission2span',
              text: 'At JourneyWell, we believe that local businesses are the heart and soul of our community. They create jobs, support families, and contribute to the unique character that makes Baton Rouge home. Our mission is to help these businesses thrive by:'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'list1',
          style: 'normal',
          listItem: 'bullet',
          children: [
            {
              _type: 'span',
              _key: 'list1span',
              text: 'Showcasing their stories and highlighting what makes them special'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'list2',
          style: 'normal',
          listItem: 'bullet',
          children: [
            {
              _type: 'span',
              _key: 'list2span',
              text: 'Providing valuable insights and resources for business growth'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'list3',
          style: 'normal',
          listItem: 'bullet',
          children: [
            {
              _type: 'span',
              _key: 'list3span',
              text: 'Creating connections between businesses and the community they serve'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'future1',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'future1span',
              text: 'What\'s Coming'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'future2',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'future2span',
              text: 'In the coming weeks, you\'ll see this platform come alive with business spotlights, industry insights, community news, and practical resources. We\'re committed to being your go-to source for everything related to the local business ecosystem in Baton Rouge.'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'closing1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'closing1span',
              text: 'Thank you for joining us on this journey. Together, we\'ll help Baton Rouge businesses not just survive, but truly thrive.'
            }
          ]
        }
      ],
      readTime: 3,
      featured: true
    })
    console.log('✅ Welcome post created:', welcomePost.title)

    // Step 4: Create Sample Business (Community Coffee)
    console.log('\n🏢 Creating sample business...')
    const business = await client.create({
      _type: 'business',
      name: 'Community Coffee',
      slug: {
        _type: 'slug',
        current: 'community-coffee'
      },
      description: 'Louisiana\'s premier coffee roaster, serving fresh, quality coffee since 1919. A true Baton Rouge institution committed to community and excellence.',
      category: 'restaurant',
      address: '3332 Partridge Ln, Baton Rouge, LA 70809',
      phone: '(225) 291-3900',
      website: 'https://www.communitycoffee.com',
      hours: {
        monday: '6:00 AM - 8:00 PM',
        tuesday: '6:00 AM - 8:00 PM',
        wednesday: '6:00 AM - 8:00 PM',
        thursday: '6:00 AM - 8:00 PM',
        friday: '6:00 AM - 8:00 PM',
        saturday: '7:00 AM - 8:00 PM',
        sunday: '7:00 AM - 7:00 PM'
      },
      story: [
        {
          _type: 'block',
          _key: 'story1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'story1span',
              text: 'For over 100 years, Community Coffee has been more than just a coffee company - they\'ve been a cornerstone of Louisiana culture. Founded in 1919, this family-owned business has grown from a small New Orleans operation to the largest family-owned coffee company in America, all while maintaining their commitment to quality and community.'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'story2',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'story2span',
              text: 'What sets Community Coffee apart is their dedication to the perfect roast and their deep Louisiana roots. Every batch is carefully crafted to deliver the rich, bold flavor that Louisianians have come to love and expect.'
            }
          ]
        }
      ],
      featured: true
    })
    console.log('✅ Business created:', business.name)

    console.log('\n🎉 CMS population complete! Your JourneyWell website now has:')
    console.log('   - 1 Author (Tim Simmons)')
    console.log('   - 4 Categories')
    console.log('   - 1 Welcome Blog Post')
    console.log('   - 1 Featured Business (Community Coffee)')
    console.log('\n🌟 You can now visit your admin panel to see the content!')
    console.log('   Local: http://localhost:3000/admin')
    console.log('   Production: https://jw-webpage-1f0gxok3p-tims-projects-98c8acbc.vercel.app/admin')

  } catch (error) {
    console.error('❌ Error populating CMS:', error)
  }
}

// Run the script
populateCMS() 