import React, { useRef } from 'react';

function UseRefHtmlSample() {
	// Html elementinin referansını inputRef bağladık
	const inputRef = useRef<HTMLInputElement>(null);

	console.log('...rendering');

	return (
		<div>
			<input ref={inputRef} className="border-2" />
			<button
				className="border-2"
				onClick={() => {
					if (inputRef.current) {
						inputRef.current.value = '';
					}
				}}
			>
				Temizle
			</button>
			<button
				className="border-2"
				onClick={() => {
					if (inputRef.current) {
						inputRef.current.focus();
						inputRef.current.style.backgroundColor = 'red';
						inputRef.current.style.color = 'white';
					}
				}}
			>
				Focus
			</button>
		</div>
	);
}

export default UseRefHtmlSample;
