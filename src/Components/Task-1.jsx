import Calculator from './Calculator/Calculator'
import { Link } from 'react-router-dom'

export const arrow = "< -"

export default function Task_1() {
	return (
		<div className="flex">
			<Calculator />
			<Link to="/" className="text-2xl mt-2">{arrow} Back to home</Link>
		</div>
	)
}