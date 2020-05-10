import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'

import Square from './Components/Square'

const App = () => {
	const [ { x, y }, set ] = useSpring(() => ({ x: 0, y: 0 }))

	const bind = useGesture(({ down, movement: [ mx, my ] }) =>
		set({ x: down ? mx : 0, y: down ? my : 0 })
	)

	return (
		<Container>
			<animated.div
				{...bind()}
				draggable
				style={{ x, y, background: 'red', height: 30, width: 30 }}
			/>
		</Container>
	)
}

const Container = styled.div`
	margin: 0 auto;
	max-width: 80%;
	display: block;
`

export default App
