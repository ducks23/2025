import Link from "next/link"
import { notFound } from "next/navigation"
import { getNoteById, getFormattedDate } from "@/utils/notes"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit } from "lucide-react"

interface NotePageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: NotePageProps) {
  const note = getNoteById(params.id)

  if (!note) {
    return {
      title: "Note Not Found",
    }
  }

  return {
    title: `${note.title} | Jesse Leonard's Notes`,
    description: note.content.split("\n")[0].replace(/^#+ /, ""),
  }
}

export default function NotePage({ params }: NotePageProps) {
  const note = getNoteById(params.id)

  if (!note) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <Button variant="ghost" asChild className="pl-0 hover:pl-0">
                <Link href="/notes" className="flex items-center text-muted-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to all notes
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/notes/edit/${note.id}`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </Button>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter mb-4">{note.title}</h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <p className="text-muted-foreground">{getFormattedDate(note.date)}</p>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <MarkdownRenderer content={note.content} />
          </div>

          <div className="mt-12 pt-6 border-t">
            <Button variant="ghost" asChild className="pl-0 hover:pl-0">
              <Link href="/notes" className="flex items-center text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all notes
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
