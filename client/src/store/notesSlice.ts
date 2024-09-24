import { NotesState } from '@/store/storeTypes.props' // Импортируем типы
import { Note } from '@/utils/notes.props'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { AppDispatch } from './store'

const initialState: NotesState = {
	notes: [],
	status: 'idle',
	error: null,
}

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		setNotes(state, action: PayloadAction<Note[]>) {
			state.notes = action.payload
		},
		addNote(state, action: PayloadAction<Note>) {
			state.notes.push(action.payload)
		},
		updateNote(state, action: PayloadAction<Note>) {
			const index = state.notes.findIndex(note => note.id === action.payload.id)
			if (index !== -1) {
				state.notes[index] = action.payload
			}
		},
		deleteNote(state, action: PayloadAction<string>) {
			state.notes = state.notes.filter(note => note.id !== action.payload)
		},
	},
})

export const { setNotes, addNote, updateNote, deleteNote } = notesSlice.actions

// Типизированный thunk action
export const fetchNotes = () => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get('http://localhost:4000/notes')
		dispatch(setNotes(response.data))
	} catch (error) {
		console.error('Failed to fetch notes:', error)
	}
}

export const createNote =
	(newNote: Omit<Note, 'id' | 'createdAt'>) =>
	async (dispatch: AppDispatch) => {
		try {
			const noteWithId: Note = {
				...newNote,
				id: uuidv4(),
				createdAt: new Date().toISOString(),
			}
			const response = await axios.post(
				'http://localhost:4000/notes',
				noteWithId
			)
			dispatch(addNote(response.data))
		} catch (error) {
			console.error('Failed to create note:', error)
		}
	}

export const updateNoteById =
	(updatedNote: Note) => async (dispatch: AppDispatch) => {
		try {
			const response = await axios.put(
				`http://localhost:4000/notes/${updatedNote.id}`,
				updatedNote
			)
			dispatch(updateNote(response.data))
		} catch (error) {
			console.error('Failed to update note:', error)
		}
	}

export const deleteNoteById = (id: string) => async (dispatch: AppDispatch) => {
	try {
		await axios.delete(`http://localhost:4000/notes/${id}`)
		dispatch(deleteNote(id))
	} catch (error) {
		console.error('Failed to delete note:', error)
	}
}

export default notesSlice.reducer
