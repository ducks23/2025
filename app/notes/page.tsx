import Link from "next/link"
import { getAllNotes, getFormattedDate } from "@/utils/notes"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus } from "lucide-react"

export const metadata = {
  title: "Notes | Jesse Leonard",
  description: "Personal notes and references on software development, cloud technologies, and more.",
}

export default function NotesPage() {
  const notes = getAllNotes()

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Notes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Personal notes, references, and cheatsheets for quick access.
          </p>
          <Button asChild>
            <Link href="/notes/new">
              <Plus className="mr-2 h-4 w-4" />
              Create New Note
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {notes.map((note) => (
            <Card key={note.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="line-clamp-2">
                  <Link href={`/notes/${note.id}`} className="hover:text-primary transition-colors">
                    {note.title}
                  </Link>
                </CardTitle>
                <CardDescription>{getFormattedDate(note.date)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {note.content.split("\n")[0].replace(/^#+ /, "")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link href={`/notes/${note.id}`} className="flex items-center text-primary">
                    View note
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {notes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No notes found.</p>
            <Button asChild>
              <Link href="/notes/new">Create your first note</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
