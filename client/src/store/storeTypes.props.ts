import { Note } from '@/utils/notes.props'

export interface NotesState {
	notes: Note[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
}
