import React from 'react';
import logo from './logo.svg';
import './App.css';
import MediaCard from './components/MediaCard';
import Row from './components/Row';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Row>
					<p>P element with Row </p>
				</Row>
				<Row>
					<MediaCard
						title="M-1"
						description="Lorem Impsum"
						buttons={[{ text: 'share' }]}
						imageUrl="https://plus.unsplash.com/premium_photo-1712016874970-ee8062157b31?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
				</Row>

				<Row>
					<MediaCard
						title="M-2"
						description="Lorem Impsum2"
						buttons={[{ text: 'copy' }, { text: 'cut' }]}
						imageUrl="https://unsplash.com/photos/a-picture-of-the-ocean-with-waves-coming-in-VoCxF9DrjIU"
					/>
				</Row>
			</header>
		</div>
	);
}

export default App;
