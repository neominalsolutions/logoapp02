import React, { createContext, useState } from 'react';

export const CounterContext = createContext<number>(0);
// içerisinde global state barınacağı context yapımız

// children provider kullanacak alt componentler.
const CounterProvider = ({ children }: any) => {
	const [counter, setCounter] = useState<number>(0);

	const values: any = {
		counter,
		setCounter,
	};

	return (
		<CounterContext.Provider value={values}>{children}</CounterContext.Provider>
	);
};

export default CounterProvider;
