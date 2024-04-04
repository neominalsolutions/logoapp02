import React from 'react';
import TailwindCssSample from '../../components/TailwindCssSample';
import Row from '../../components/Row';
import MediaCard from '../../components/MediaCard';
import CounterProvider from '../../contexts/CounterContext';
import App from '../../App';

function UISample() {
	return (
		<div>
			<div className="App">
				<header className="App-header">
					<TailwindCssSample display="flex-col" />

					<Row>
						<p>P element with Row </p>
					</Row>
					<Row>
						<MediaCard
							title="M-1"
							description="Lorem Impsum"
							buttons={[{ text: 'share', type: 'share' }]}
							imageUrl="https://plus.unsplash.com/premium_photo-1712016874970-ee8062157b31?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</Row>

					<Row>
						<MediaCard
							title="M-2"
							description="Lorem Impsum2"
							buttons={[
								{ text: 'copy', type: 'copy' },
								{ text: 'cut', type: 'cut' },
							]}
							imageUrl="https://unsplash.com/photos/a-picture-of-the-ocean-with-waves-coming-in-VoCxF9DrjIU"
							onButtonClick={(type: string) => {
								console.log('type', type);
								alert(type);
							}}
						/>
					</Row>

					<h1 className="text-3xl font-bold underline">Hello world!</h1>
				</header>
			</div>
		</div>
	);
}

export default UISample;
