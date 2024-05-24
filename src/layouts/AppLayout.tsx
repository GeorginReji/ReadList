import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '@/components/SideBar'
import AppBar from '@/components/AppBar'
import { Box, styled } from '@mui/material'
import { colors } from '@/styles/colors'

interface LayoutProps {}

const LayoutWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: colors.bgPrimary,
	display: 'flex',
	color: 'white',
	overflowY: 'hidden',
	gap: '1rem',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
}))

const AppLayout: React.FC<LayoutProps> = () => {
	const [open, setOpen] = React.useState(false)
	const sideBarHandler = {
		open,
		setOpen,
	}
	return (
		<LayoutWrapper>
			<SideBar {...sideBarHandler} />
			<Box
				component='main'
				sx={{ display: 'flex', flexDirection: 'column', paddingTop: '64px' }}
			>
				<AppBar {...sideBarHandler} />
				<Outlet />
			</Box>
		</LayoutWrapper>
	)
}

export default AppLayout
