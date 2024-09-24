import { SortOrder } from './getSortedNotes.props'
import { Note } from './notes.props'

export const getSortedNotes = (notes: Note[], sortOrder: SortOrder): Note[] => {
	return [...notes].sort((a, b) => {
		const dateA = new Date(a.createdAt)
		const dateB = new Date(b.createdAt)
		return sortOrder === 'new'
			? dateB.getTime() - dateA.getTime()
			: dateA.getTime() - dateB.getTime()
	})
}
