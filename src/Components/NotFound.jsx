import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from "./Task-1"

export default function NotFound() {
	return (
		<div>
			<p className="text-9xl">NOT FOUND</p>
			<Link to="/" className="text-2xl mt-2">{arrow} Back to home</Link>
		</div>
	)
}
