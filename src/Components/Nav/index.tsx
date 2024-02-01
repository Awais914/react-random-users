import { Link } from "react-router-dom";

const Nav = () => (
	<nav className="dark:bg-gray-900 p-4 w-full top-0 z-10 text-center">
		<div className="container mx-auto">
		<Link to='/' className="text-white text-xl font-bold">React Users Listing</Link>
		</div>
	</nav>
);

export default Nav;
