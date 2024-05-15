import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import BookList from '@/pages/BookList'
import Error from '@/pages/Error'
import AppLayout from '@/layouts/AppLayout'

const route = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/readList',
				element: <BookList />,
			},
			{
				path: 'genre/:genreId',
				element: <BookList />,
			},
		],
	},
])

export default route
