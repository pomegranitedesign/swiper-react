import styled from 'styled-components'
import { animated } from 'react-spring'

export default styled(animated.button)`
	background-color: #eb4d4b;
	height: 80px;
	width: 80px;
	border-radius: 3px;
	border: none;
	box-shadow: 0px 12px 20px -10px rgba(0, 0, 0, 0.40);
	transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
	margin: 200px auto;
	display: block;
	cursor: pointer;

	outline: none;
	&::-moz-focus-inner {
		border: none;
	}

	&:active {
		box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.40);
		transform: translateY(5px);
	}
`
