import { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

function ReactContextApiSelector() {
	const { counter } = useContext(CounterContext) as any;

	// dispatcherdaki state yakaladığımız component.
	return <div>Sayac: {counter}</div>;
}

export default ReactContextApiSelector;
