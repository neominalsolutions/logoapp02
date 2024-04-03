import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function RootLayout() {
	return (
		<div className="container mx-auto flex flex-col">
			<nav className="w-full bg-blue-500 text-white p-5">
				<Link to="/react-Memo">React Memo</Link>{' '}
				<Link to="/use-Memo">Use Memo</Link>{' '}
				<Link to="/use-Callback">Use Callback</Link>{' '}
				<Link to="/use-Ref">Use Ref</Link>{' '}
			</nav>
			<main className="w-full p-10">
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;
