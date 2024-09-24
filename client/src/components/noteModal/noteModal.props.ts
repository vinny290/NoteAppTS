import { Note } from '@/utils/notes.props'

export interface NoteModalProps {
	isOpen: boolean
	onRequestClose: () => void
	currentNote: Note | null
}
