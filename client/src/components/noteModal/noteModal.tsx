import style from '@/components/noteModal/noteModal.module.css'
import { createNote, updateNoteById } from '@/store/notesSlice'
import { useAppDispatch } from '@/utils/hooks/useAppDispatch'
import { validateForm } from '@/utils/validateform'
import { useEffect, useState } from 'react'
import { NoteModalProps } from './noteModal.props'

const NoteModal = ({ isOpen, onRequestClose, currentNote }: NoteModalProps) => {
	const dispatch = useAppDispatch()
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [titleError, setTitleError] = useState(false)
	const [contentError, setContentError] = useState(false)

	useEffect(() => {
		if (isOpen) {
			if (currentNote) {
				setTitle(currentNote.title)
				setContent(currentNote.content)
			} else {
				resetForm()
			}
		} else {
			resetForm()
		}
	}, [isOpen, currentNote])

	const resetForm = () => {
		setTitle('')
		setContent('')
		setTitleError(false)
		setContentError(false)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (validateForm(title, content)) {
			if (currentNote) {
				dispatch(updateNoteById({ ...currentNote, title, content }))
			} else {
				dispatch(createNote({ title, content }))
			}
			onRequestClose()
		} else {
			setTitleError(!title.trim())
			setContentError(!content.trim())
		}
	}

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
		setTitleError(false)
	}

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value)
		setContentError(false)
	}

	const handleClose = () => {
		resetForm()
		onRequestClose()
	}

	return (
		<div
			className={`modal fade ${isOpen ? 'show' : ''}`}
			style={{ display: isOpen ? 'block' : 'none' }}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>
							{currentNote ? 'Редактировать заметку' : 'Создать заметку'}
						</h5>
						<button
							type='button'
							className='btn-close'
							onClick={onRequestClose}
						></button>
					</div>
					<div className='modal-body'>
						<form onSubmit={handleSubmit}>
							<div className='mb-3'>
								<label htmlFor='titleNote' className='form-label'>
									Заголовок
								</label>
								<input
									type='text'
									className={`form-control ${style.titleModal} ${
										titleError ? 'border-danger' : ''
									}`}
									id='titleNote'
									value={title}
									placeholder='Заголовок'
									onChange={handleTitleChange}
								/>
								{titleError && (
									<div className='text-danger'>Заголовок обязателен</div>
								)}
							</div>
							<div className='mb-3'>
								<label htmlFor='contentNote' className='form-label'>
									Содержание
								</label>
								<textarea
									className={`form-control ${style.contentModal} ${
										contentError ? 'border-danger' : ''
									}`}
									id='contentNote'
									rows={5}
									placeholder='Ввод...'
									value={content}
									onChange={handleContentChange}
								/>
								{contentError && (
									<div className='text-danger'>Содержание обязательно</div>
								)}
							</div>
							<div className='d-flex justify-content-end mt-3'>
								<button type='submit' className='btn btn-success'>
									Сохранить
								</button>
								<button
									type='button'
									className='btn btn-secondary ms-2'
									onClick={handleClose}
								>
									Отмена
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NoteModal
