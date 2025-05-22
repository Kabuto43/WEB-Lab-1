import WordCounter from "./WordCounter/WordCounter"
import { Link } from 'react-router-dom'
import { arrow } from "./Task-1"

export default function Task_2() {
	return (
		<div>
			<Link to="/" className="text-2xl mt-2">{arrow} Back to home</Link>
			<WordCounter />
		</div>
	)
}