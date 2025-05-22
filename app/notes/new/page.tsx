"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Download } from "lucide-react"
import type { Note } from "@/utils/notes"

export default function NewNotePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [activeTab, setActiveTab] = useState("edit")

  const generateJsonTemplate = (): Partial<Note> => {
    const id = title
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-")
    const date = new Date().toISOString().split("T")[0]
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)

    return {
      id,
      title,
      date,
      content,
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter mb-8 text-center">Create New Note</h1>

          <Card>
            <CardHeader>
              <CardTitle>Markdown Note Creator</CardTitle>
              <CardDescription>
                Create a new note in Markdown format. You can preview your note as you write it.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter note title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g. kubernetes, aws, reference"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Tabs defaultValue="edit" onValueChange={setActiveTab}>
                  <TabsList className="mb-2">
                    <TabsTrigger value="edit">Edit</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="edit" className="mt-0">
                    <Textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="# Your Markdown Note

Write your note using Markdown syntax.

## Subheading

- List item 1
- List item 2

```javascript
// Code block
console.log('Hello world');
```"
                      rows={20}
                      className="font-mono text-sm"
                    />
                  </TabsContent>
                  <TabsContent value="preview" className="mt-0 border rounded-md p-4 min-h-[300px]">
                    {content ? (
                      <MarkdownRenderer content={content} />
                    ) : (
                      <p className="text-muted-foreground italic">Preview will appear here...</p>
                    )}
                  </TabsContent>
                </Tabs>
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
