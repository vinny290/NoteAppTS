import { Note } from '@/utils/notes.props'

export interface NoteCardProps {
	note: Note
	onClick: () => void
	onEdit: (e: React.MouseEvent<HTMLButtonElement>) => void
	onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void
}
