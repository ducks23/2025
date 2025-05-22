import blogPosts from "@/data/blog-posts.json"

export type BlogPost = {
  id: string
  title: string
  date: string
  excerpt: string
  author: string
  content: Array<{
    type: string
    content: string
    language?: string
    items?: string[]
  }>
  tags: string[]
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts as BlogPost[]
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.id === id)
}

export function getFormattedDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
