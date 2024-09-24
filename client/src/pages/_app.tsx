import { store } from '@/store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

const NoteApp = ({ Component, pageProps }: AppProps) => {
	return (
		<div>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</div>
	)
}

export default NoteApp
