"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { BlogPost } from "@/utils/blog"
import { Copy, Download } from "lucide-react"

export default function NewBlogPostPage() {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [tags, setTags] = useState("")
  const [content, setContent] = useState("")

  const generateJsonTemplate = (): Partial<BlogPost> => {
    const id = title
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-")
    const date = new Date().toISOString().split("T")[0]
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)

    // Parse content into blocks
    const contentBlocks = content.split("\n\n").map((block) => {
      if (block.startsWith("# ")) {
        return {
          type: "heading",
          content: block.replace("# ", ""),
        }
      } else if (block.startsWith("```")) {
        const lines = block.split("\n")
        const language = lines[0].replace("```", "")
        const codeContent = lines.slice(1, -1).join("\n")
        return {
          type: "code",
          language,
          content: codeContent,
        }
      } else if (block.startsWith("- ")) {
        const items = block.split("\n").map((item) => item.replace("- ", ""))
        return {
          type: "list",
          items,
        }
      } else {
        return {
          type: "paragraph",
          content: block,
        }
      }
    })

    return {
      id,
      title,
      date,
      excerpt,
      author: "Jesse Leonard",
      content: contentBlocks,
      tags: tagsArray,
    }
  }

  const handleCopyJson = () => {
    const json = JSON.stringify(generateJsonTemplate(), null, 2)
    navigator.clipboard.writeText(json)
    alert("JSON template copied to clipboard!")
  }

  const handleDownloadJson = () => {
    const json = JSON.stringify(generateJsonTemplate(), null, 2)
    const blob = new Blob([json], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${generateJsonTemplate().id}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter mb-8 text-center">Create New Blog Post</h1>

          <Card>
            <CardHeader>
              <CardTitle>Blog Post Template Generator</CardTitle>
              <CardDescription>
                Fill out the form below to generate a JSON template for a new blog post. You can then add this to your
                blog-posts.json file.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter blog post title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Enter a brief summary of the post"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g. kubernetes, devops, aws"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <div className="text-sm text-muted-foreground mb-2">
                  <p>Format your content using these conventions:</p>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Use blank lines to separate paragraphs</li>
                    <li>Start headings with # (e.g. # My Heading)</li>
                    <li>Start list items with - (e.g. - List item)</li>
                    <li>Wrap code blocks in ``` (e.g. ```python)</li>
                  </ul>
                </div>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter your blog post content"
                  rows={15}
                  className="font-mono text-sm"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleCopyJson}>
                <Copy className="mr-2 h-4 w-4" />
                Copy JSON
              </Button>
              <Button onClick={handleDownloadJson}>
                <Download className="mr-2 h-4 w-4" />
                Download JSON
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
