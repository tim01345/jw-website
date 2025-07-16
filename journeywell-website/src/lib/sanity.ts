 import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// Helper function to fetch blog posts
export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      author->{
        name,
        image,
        bio
      },
      categories[]->{
        title
      },
      mainImage,
      readTime,
      featured
    }
  `)
}

// Helper function to fetch a single blog post
export async function getBlogPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      author->{
        name,
        image,
        bio
      },
      categories[]->{
        title
      },
      mainImage,
      body,
      readTime,
      featured
    }
  `, { slug })
}

// Helper function to fetch business listings
export async function getBusinessListings() {
  return client.fetch(`
    *[_type == "business"] | order(name asc) {
      _id,
      name,
      slug,
      description,
      category,
      address,
      phone,
      website,
      image,
      featured
    }
  `)
}

// Helper function to fetch a single business
export async function getBusiness(slug: string) {
  return client.fetch(`
    *[_type == "business" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      description,
      category,
      address,
      phone,
      website,
      image,
      gallery,
      hours,
      featured,
      story
    }
  `, { slug })
} 