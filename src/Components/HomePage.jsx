import { Link } from 'react-router-dom'

const navLinkClass = "hover:text-white hover:-translate-y-1 transform transition duration-200";

export default function HomePage() {
	return (
		<div className="text-4xl">
			<header className="p-10 flex gap-100 bg-green-500 relative">
				<div className="relative group translation-all duration-200">
					<h1 className="cursor-pointer text-black group-hover:text-white group-hover:-translate-y-1 transform transition duration-200">Logo</h1>
					<div className="Logotype absolute top-full left-0 mt-2 w-48 p-2 
					bg-white shadow-lg rounded-xl hidden group-hover:block z-10">
						<p>Artem Shyrokov</p>
						<img src="./react.svg" alt="Logotype" className="w-full h-auto rounded" />
					</div>
				</div>
				<nav className="tasks flex gap-10">
					<Link to="/task-1" className={navLinkClass}>Task - 1</Link>
					<Link to="/task-2" className={navLinkClass}>Task - 2</Link>
					<Link to="/task-3" className={navLinkClass}>Task - 3</Link>
				</nav>
			</header>
		</div>
	)
}