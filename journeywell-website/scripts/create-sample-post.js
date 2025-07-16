// Usage: node scripts/create-sample-post.js
// Requires: axios (npm install axios)

const axios = require('axios');

const SANITY_PROJECT_ID = 'pve3jpy2';
const SANITY_DATASET = 'production';
const SANITY_API_TOKEN = 'skeTOtN1A5pilpzHORpZDUACSXyR61THucIYTP56fqTvTfh03eJplcHh7igf9x7b9vW6cK9xnM3yOFwJfBgX0DOsFkxoYbXYxK2tB1njYmp6RavtErdDE6kCFS3BjFS2cCu0ZleglJbl3n6iWyDgqDYWMMtif0PPDk920TEKIzobL2rooWSz';
const API_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${SANITY_DATASET}`;

// 1. Create a new category
const categoryDoc = {
  _type: 'category',
  title: 'AI & Automation',
  slug: { _type: 'slug', current: 'ai-automation' },
  description: 'Posts about artificial intelligence and automation.'
};

// 2. Create a new post (with placeholder author and image)
const postDoc = (categoryId, authorId) => ({
  _type: 'post',
  title: 'How AI is Transforming Web Design',
  slug: { _type: 'slug', current: 'ai-transforming-web-design' },
  author: { _type: 'reference', _ref: authorId },
  categories: [{ _type: 'reference', _ref: categoryId }],
  publishedAt: new Date().toISOString(),
  excerpt: 'Explore how artificial intelligence is revolutionizing the web design industry, from automation to creativity.',
  body: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: 'AI is rapidly changing the landscape of web design. In this article, we explore the latest trends and tools.' }
      ]
    }
  ],
  readTime: 5,
  featured: true
});

async function getCategoryIdBySlug(slug) {
  // Properly encode the GROQ query as a single query parameter
  const groq = `*[_type==\"category\" && slug.current==\"${slug}\"][0]{_id}`;
  const queryUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${SANITY_DATASET}?query=${encodeURIComponent(groq)}`;
  const res = await axios.get(queryUrl, { headers: { Authorization: `Bearer ${SANITY_API_TOKEN}` } });
  return res.data.result?._id;
}

async function getPostBySlug(slug) {
  const groq = `*[_type==\"post\" && slug.current==\"${slug}\"][0]{_id, title}`;
  const queryUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${SANITY_DATASET}?query=${encodeURIComponent(groq)}`;
  const res = await axios.get(queryUrl, { headers: { Authorization: `Bearer ${SANITY_API_TOKEN}` } });
  return res.data.result;
}

async function main() {
  try {
    // 1. Create the category (ignore result, always fetch by slug)
    try {
      await axios.post(
        API_URL,
        { mutations: [{ create: categoryDoc }] },
        { headers: { Authorization: `Bearer ${SANITY_API_TOKEN}` } }
      );
      console.log('Category creation attempted.');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error && err.response.data.error.description && err.response.data.error.description.includes('already exists')) {
        console.log('Category already exists, fetching by slug...');
      } else {
        throw err;
      }
    }
    // Always fetch the category ID by slug
    const categoryId = await getCategoryIdBySlug('ai-automation');
    if (!categoryId) throw new Error('Failed to find category ID after creation.');
    console.log('Using category:', categoryId);

    // 2. Find an author (fallback to first author if exists)
    const authorQueryUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${SANITY_DATASET}?query=*[_type==%22author%22][0]{_id}`;
    const authorRes = await axios.get(authorQueryUrl, { headers: { Authorization: `Bearer ${SANITY_API_TOKEN}` } });
    const authorId = authorRes.data.result?._id;
    if (!authorId) throw new Error('No author found in Sanity. Please create one in Studio.');
    console.log('Using author:', authorId);

    // 3. Create the post
    const postRes = await axios.post(
      API_URL,
      { mutations: [{ create: postDoc(categoryId, authorId) }] },
      { headers: { Authorization: `Bearer ${SANITY_API_TOKEN}` } }
    );
    console.log('Post creation response:', JSON.stringify(postRes.data, null, 2));
    // Always fetch the post by slug to confirm creation and get its ID
    const post = await getPostBySlug('ai-transforming-web-design');
    if (!post?._id) {
      console.log('Could not find post after creation.');
    } else {
      console.log('Created post:', post._id, '-', post.title);
    }
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

main(); 