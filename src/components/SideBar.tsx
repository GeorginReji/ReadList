import * as React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { FC, JSX } from 'react'
import { colors } from '@/styles/colors'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

// Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import HomeIcon from '@mui/icons-material/Home'
import Groups3Icon from '@mui/icons-material/Groups3'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'

interface SideBarProps {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const drawerWidth = 240

const sideBarOptions = [
	{
		name: 'Home',
		icon: <HomeIcon />,
		route: '/',
	},
	{
		name: 'ReadList',
		icon: <BookmarkAddIcon />,
		route: '/ReadList',
	},
	{
		name: 'BookMark',
		icon: <BookmarksIcon />,
		route: '/BookMark',
	},
	{
		name: 'Book Club',
		icon: <Groups3Icon />,
		route: '/BookClub',
	},
]

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	}
}

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	backgroundColor: colors.bgSecondary,
	color: colors.white,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	backgroundColor: colors.bgSecondary,
	color: colors.white,
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}))

const SideBar: FC<SideBarProps> = ({ open, setOpen }): JSX.Element => {
	const [value, setValue] = React.useState(0)
	const theme = useTheme()

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}
	return (
		<Box sx={{ backgroundColor: colors.bgSecondary }}>
			<Drawer variant='permanent' open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose} color='primary'>
						{theme.direction === 'rtl' ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<Tabs
					orientation='vertical'
					value={value}
					onChange={handleChange}
					aria-label='Vertical tabs example'
					sx={{ borderRight: 1, borderColor: 'divider' }}
				>
					{sideBarOptions.map((item, index) => (
						<Tab
							icon={item.icon}
							label={open ? item.name : ''}
							key={item.name}
							{...a11yProps(index)}
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								padding: '0px',
								gap: '5px',
								color: colors.white,
								minHeight: '3rem',
							}}
						/>
					))}
				</Tabs>
				<Divider />
			</Drawer>
		</Box>
	)
}

export default SideBar
