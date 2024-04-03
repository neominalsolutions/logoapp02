import React, { memo, useState } from 'react';
import logo from '../../logo.svg';

type HeaderProps = {
	title: string;
};

// header props da bir değişilik varsa ben render olurum bunun dışında render olmam.
const Header = memo(function Header({ title }: HeaderProps) {
	console.log('...re-render');
	return (
		<div>
			<h1>{title}</h1>
			<img width={50} height={50} src={logo} alt="logo" />
		</div>
	);
});

// Not Parent Component içinde çağırılan Child Componentlerde gereksiz render'ı ortadan kaldırmak için Child Componenti React memo ile sarmallıyalım.

// amaç parent component de bir state değişiminden header component direkt olarak etkileniyor mu görmek
function ReactMemoSample() {
	const [title, setTitle] = useState<string>('');
	const [random, setRandom] = useState<number>(0);

	return (
		<div>
			Random: {random}
			<hr></hr>
			<Header title={title} />
			<button
				className="border-2 p-5 border-gray-500"
				onClick={() => {
					setTitle(`title-${Math.random() * 100}`);
				}}
			>
				Change Title
			</button>
			<button
				className="border-2 p-5 border-gray-500"
				onClick={() => {
					setRandom(Math.random() * 100);
				}}
			>
				generate Random
			</button>
		</div>
	);
}

export default ReactMemoSample;
