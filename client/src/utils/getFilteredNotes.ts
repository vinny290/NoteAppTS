import { Note } from './notes.props'

export const getFilteredNotes = (
	notes: Note[],
	filterDate: string | null,
	filterLetters: string | null
): Note[] => {
	return notes.filter(note => {
		const isDateMatch = filterDate
			? new Date(note.createdAt).toLocaleDateString() ===
			  new Date(filterDate).toLocaleDateString()
			: true

		const isTitleMatch = filterLetters
			? note.title.toLowerCase().includes(filterLetters.toLowerCase())
			: true

		return isDateMatch && isTitleMatch
	})
}
