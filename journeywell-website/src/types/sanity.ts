export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface Author {
  _id: string
  name: string
  image?: SanityImage
  bio?: string
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  publishedAt: string
  author: Author
  categories: Category[]
  mainImage: SanityImage
  body: any[] // Portable Text
  readTime: number
  featured?: boolean
}

export interface Business {
  _id: string
  name: string
  slug: {
    current: string
  }
  description: string
  category: string
  address: string
  phone: string
  website: string
  image: SanityImage
  gallery?: SanityImage[]
  hours?: {
    [key: string]: string
  }
  featured: boolean
  story?: any[] // Portable Text
}

export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
} 