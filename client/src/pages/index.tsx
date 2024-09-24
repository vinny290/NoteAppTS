import NotesList from '@/components/noteList/noteList'
import React from 'react'

const HomePage: React.FC = () => {
	return (
		<div className='container-xxl'>
			<div>
				<h1 className='d-flex justify-content-center'>Заметки</h1>
				<small className='text-body-secondary d-flex justify-content-center mb-5'>
					тестовое задание
				</small>
				<NotesList />
			</div>
		</div>
	)
}

export default HomePage
