import React, { useMemo, useState } from 'react';

// component içisinde tutulan bir değeri belirli bir state değişimi olana kadar memoize edebiliriz.
// yoksa her bir render da ilgili değer tekrardan hesaplanır. bunu ortadan kaldırmak için kullanıyoruz.
function UseMemoSample() {
	const [counter, setCounter] = useState<number>(0);
	const [x, setX] = useState<number>(0);
	const [y, setY] = useState<number>(0);

	// ilk component doma basıldığında hesaplama yapılıp arayüze yazılan ve sonrasında herhangi bir hesaplamaya tabi tutulmayacak bir değeriniz varsa mantıklı bir kullanım senaryosu sağlar.
	function expensiveCal() {
		console.log('calculating...');
		return x * y;
	}

	// const calcResult = useMemo(() => expensiveCal(), []); boş dependencyli hali component doma basıldığında bir kez çalışır domdan çıkana kadar memoization sürer.
    
	const calcResult = useMemo(() => expensiveCal(), [x, y]);
	// calcResult değerini state değişse dahi memoize etmek istiyoruz.
	// [] ile sayfa ilk doma basıldığında bir kez memoization alacağız, herhangi bir state bağlı değil diyoruz
	// x veya y değerlerinden bir değiştiğinde memoization'ı boz anlamına geliyor

	return (
		<div>
			Hesaplanan Değer : {calcResult}
			<hr></hr>
			Sayac : {counter}
			<br></br>
			x:{' '}
			<input
				type="text"
				value={x}
				onChange={(event: any) => {
					setX(Number(event.target.value));
				}}
			/>
			y:{' '}
			<input
				type="text"
				value={y}
				onChange={(event: any) => {
					setY(Number(event.target.value));
				}}
			/>
			<button
				className="border-2 p-5"
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				(+)
			</button>
		</div>
	);
}

export default UseMemoSample;
