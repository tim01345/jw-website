# Sanity CMS Setup for JourneyWell Website

## Overview

Your JourneyWell website is now connected to Sanity CMS! This allows you to manage your content (blog posts, business listings, authors, etc.) through a user-friendly interface.

## What's Been Set Up

### 1. Sanity Project
- **Project ID**: `pve3jpy2`
- **Dataset**: `production`
- **Organization**: JourneyWell

### 2. Content Types (Schemas)
- **Posts**: Blog articles with title, content, author, categories, images
- **Authors**: Writer profiles with bio and photo
- **Categories**: Blog post categories
- **Businesses**: Local business listings with details, hours, gallery
- **Block Content**: Rich text content with images and formatting

### 3. Admin Interface
- Accessible at: `http://localhost:3000/admin` (development)
- Or: `https://your-domain.com/admin` (production)

## Getting Started

### 1. Set Up Environment Variables

Copy the environment template and update it:
```bash
cp env.local.template .env.local
```

Your `.env.local` should contain:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=pve3jpy2
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skeTOtN1A5pilpzHORpZDUACSXyR61THucIYTP56fqTvTfh03eJplcHh7igf9x7b9vW6cK9xnM3yOFwJfBgX0DOsFkxoYbXYxK2tB1njYmp6RavtErdDE6kCFS3BjFS2cCu0ZleglJbl3n6iWyDgqDYWMMtif0PPDk920TEKIzobL2rooWSz
```

### 2. Get Your API Token

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your "My Sanity Project" project
3. Go to Settings → API
4. Create a new token with "Editor" permissions
5. Copy the token and add it to your `.env.local` file

### 3. Access the Admin Interface

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000/admin`
3. Log in with your Sanity account
4. Start creating content!

## Content Management

### Creating Blog Posts

1. Go to `/admin`
2. Click "Post" in the sidebar
3. Click "Create new Post"
4. Fill in:
   - Title (required)
   - Slug (auto-generated from title)
   - Author (select from existing authors)
   - Main Image
   - Categories
   - Published Date
   - Excerpt (short description)
   - Body (full article content)
   - Read Time (in minutes)
   - Featured (checkbox for homepage)

### Creating Authors

1. Go to `/admin`
2. Click "Author" in the sidebar
3. Click "Create new Author"
4. Fill in name, bio, and upload a photo

### Creating Business Listings

1. Go to `/admin`
2. Click "Business" in the sidebar
3. Click "Create new Business"
4. Fill in business details, hours, gallery images, and story

### Creating Categories

1. Go to `/admin`
2. Click "Category" in the sidebar
3. Create categories like "Local Business", "Industry Insights", etc.

## Using Content in Your Website

The following helper functions are available in `src/lib/sanity.ts`:

```typescript
import { getBlogPosts, getBlogPost, getBusinessListings, getBusiness } from '@/lib/sanity'

// Get all blog posts
const posts = await getBlogPosts()

// Get a specific blog post by slug
const post = await getBlogPost('my-blog-post-slug')

// Get all businesses
const businesses = await getBusinessListings()

// Get a specific business by slug
const business = await getBusiness('business-name-slug')
```

## Rendering Rich Text Content

Use the `PortableText` component to render rich text from Sanity:

```tsx
import PortableText from '@/components/PortableText'

function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <PortableText value={post.body} />
    </article>
  )
}
```

## Deployment

When deploying to Vercel, make sure to add your environment variables:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `pve3jpy2`
   - `NEXT_PUBLIC_SANITY_DATASET`