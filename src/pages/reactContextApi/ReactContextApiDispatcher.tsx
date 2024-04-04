import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

function ReactContextApiDispatcher() {
    // UseContext Hook yugulamadaki global state yakalamak amaçlı kullanılır.
	const { counter, setCounter } = useContext(CounterContext) as any;

	// sayac state 1 artıracağız

	return (
		<div>
			Güncel Sayac : {counter}
			<button
				className="p-5 border-2 border-gray-600"
				onClick={() => {
					// global state değişimi yap.
					setCounter(counter + 1);
				}}
			>
				(+)
			</button>
			<hr></hr>
		</div>
	);
}

export default ReactContextApiDispatcher;
