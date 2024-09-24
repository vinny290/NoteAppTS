import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const response = await fetch('http://localhost:4000/notes')
		const notes = await response.json()
		res.status(200).json(notes)
	} catch (error) {
		res.status(500).json({ message: 'Failed to fetch notes' })
	}
}
