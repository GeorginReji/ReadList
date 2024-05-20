import { FC, JSX } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '@/components/SideBar'
import { Box, styled } from '@mui/material'

interface props {}

const LayoutWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: '#10141F',
	display: 'flex',
	color: 'white',
	overflowY: 'hidden',
	height: '100vh',
	gap: '1rem',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
}))

const AppLayout: FC<props> = (): JSX.Element => {
	return (
		<LayoutWrapper>
			<SideBar />
			<div className='test'>
				<Outlet />
			</div>
		</LayoutWrapper>
	)
}

export default AppLayout
