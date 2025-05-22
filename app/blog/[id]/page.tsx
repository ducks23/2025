import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPostById, getFormattedDate } from "@/utils/blog"
import { BlogContent } from "@/components/blog/blog-content"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostById(params.id)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} | Jesse Leonard's Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostById(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6 pl-0 hover:pl-0">
              <Link href="/blog" className="flex items-center text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Link>
            </Button>

            <h1 className="text-4xl font-bold tracking-tighter mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <p className="text-muted-foreground">
                {getFormattedDate(post.date)} • {post.author}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
          </div>

          <BlogContent content={post.content} />

          <div className="mt-12 pt-6 border-t">
            <Button variant="ghost" asChild className="pl-0 hover:pl-0">
              <Link href="/blog" className="flex items-center text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
