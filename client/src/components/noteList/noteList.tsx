import style from '@/components/noteList/noteList.module.css'
import { deleteNoteById, fetchNotes } from '@/store/notesSlice'
import { getFilteredNotes } from '@/utils/getFilteredNotes'
import { getSortedNotes } from '@/utils/getSortedNotes'
import { SortOrder } from '@/utils/getSortedNotes.props'
import { useAppDispatch } from '@/utils/hooks/useAppDispatch'
import { Note } from '@/utils/notes.props'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NoteCard from '../noteCard/noteCard'
import NoteModal from '../noteModal/noteModal'

const NotesList: FC = () => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const notes: Note[] = useSelector(
		(state: { notes: { notes: Note[] } }) => state.notes.notes
	)
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [currentNote, setCurrentNote] = useState<Note | null>(null)
	const [filterDate, setFilterDate] = useState('')
	const [filterLetters, setFilterLetters] = useState('')
	const [sortOrder, setSortOrder] = useState<SortOrder>('new')

	const sortedNotes = getSortedNotes(notes, sortOrder)
	const filteredNotes = getFilteredNotes(sortedNotes, filterDate, filterLetters)

	useEffect(() => {
		dispatch(fetchNotes())
	}, [dispatch])

	const handleEdit = (note: Note) => {
		setCurrentNote(note)
		setModalIsOpen(true)
	}

	const handleDelete = (id: string) => {
		if (confirm('Вы уверены, что хотите удалить эту заметку?')) {
			dispatch(deleteNoteById(id))
		}
	}

	const handleNoteClick = (id: string) => {
		router.push(`/note/${id}`)
	}

	const handleCloseModal = () => {
		setCurrentNote(null)
		setModalIsOpen(false)
	}

	return (
		<div>
			<div className='d-flex justify-content-center mb-4'>
				<button
					type='button'
					className='btn btn-primary btn-lg mb-2'
					onClick={() => {
						setCurrentNote(null)
						setModalIsOpen(true)
					}}
				>
					Создать заметку
					<i className='bi bi-plus-square ms-2'></i>
				</button>
			</div>

			<div className={`d-flex justify-content-end mb-4 ${style.wrap}`}>
				<select
					className='form-select d-inline-block w-auto'
					value={sortOrder}
					onChange={e => setSortOrder(e.target.value as SortOrder)}
				>
					<option value='new'>Сначала новые</option>
					<option value='old'>Сначала старые</option>
				</select>

				<input
					type='date'
					value={filterDate}
					onChange={e => setFilterDate(e.target.value)}
					className='form-control d-inline-block w-auto ms-2'
				/>

				<input
					type='text'
					placeholder='Фильтровать по первым буквам'
					value={filterLetters}
					onChange={e => setFilterLetters(e.target.value)}
					className='form-control d-inline-block w-auto ms-2'
				/>
			</div>

			<div className='row'>
				{filteredNotes.map((note: Note) => (
					<NoteCard
						key={note.id}
						note={note}
						onClick={() => handleNoteClick(note.id)}
						onEdit={e => {
							e.stopPropagation()
							handleEdit(note)
						}}
						onDelete={e => {
							e.stopPropagation()
							handleDelete(note.id)
						}}
					/>
				))}
			</div>

			<NoteModal
				isOpen={modalIsOpen}
				onRequestClose={handleCloseModal}
				currentNote={currentNote}
			/>
		</div>
	)
}

export default NotesList
