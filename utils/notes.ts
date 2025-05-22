import notes from "@/data/notes.json"

export type Note = {
  id: string
  title: string
  date: string
  content: string
  tags: string[]
}

export function getAllNotes(): Note[] {
  return notes as Note[]
}

export function getNoteById(id: string): Note | undefined {
  return getAllNotes().find((note) => note.id === id)
}

export function getFormattedDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
