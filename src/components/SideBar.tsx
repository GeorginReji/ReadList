import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { FC, JSX } from 'react'

interface props {}

const SidebarContainer = styled(Box)({
	color: 'black',
	backgroundColor: 'blue',
	width: '100px',
	height: '500px',
	padding: 8,
	borderRadius: 4,
})

const SideBar: FC<props> = (): JSX.Element => {
	return <SidebarContainer></SidebarContainer>
}

export default SideBar
