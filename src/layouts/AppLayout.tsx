import { FC, JSX } from 'react'
// import { Outlet } from 'react-router-dom'
import SideBar from '@/components/SideBar'

interface props {}

const AppLayout: FC<props> = (): JSX.Element => {
	return (
		<div>
			<h1>This is SideBar</h1>
			<SideBar />
			{/* <Outlet /> */}
		</div>
	)
}

export default AppLayout
