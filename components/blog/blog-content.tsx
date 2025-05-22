import type { BlogPost } from "@/utils/blog"
import { cn } from "@/lib/utils"

interface BlogContentProps {
  content: BlogPost["content"]
  className?: string
}

export function BlogContent({ content, className }: BlogContentProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="leading-7">
                {block.content}
              </p>
            )
          case "heading":
            return (
              <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                {block.content}
              </h2>
            )
          case "list":
            return (
              <ul key={index} className="list-disc pl-6 space-y-2">
                {block.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )
          case "code":
            return (
              <pre key={index} className="p-4 bg-muted rounded-md overflow-x-auto">
                <code className="text-sm font-mono">{block.content}</code>
              </pre>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
