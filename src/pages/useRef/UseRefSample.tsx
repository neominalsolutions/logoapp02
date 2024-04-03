import React, { useEffect, useRef, useState } from 'react';

function UseRefSample() {
	// 1. Kullanım şekli
	// Tanımı: useRef component içerisinde state değişikliği durumunda elimizdeki mevcut değişken değerlerini kaybetmemek için useRef ile değişken değerlerini memoize ediyoruz.

	// Senaryo => bir fiyat değerinin değişimi takip edeceğimiz bir component tasarlıyoruz. önceki değer ile bir sonraki değer arasında nasıl bir fark olduğunu hesaplayıp ekrana bu farklı yüzdesel olarak yazdırıcağız.

	// değer bir sonraki renderda değişene kadar korunmuş oluyor.
	const oldPrice = useRef<number>(0);
	const pricePercent = useRef<number>(10);
	const [price, setPrice] = useState<number>(10);

	// let _oldPrice = 0;

	// console.log('...rendering _oldPrice', _oldPrice);

	// 2. HTML elementin DOM'daki gerçek referansına erişip, state değişimi olsa dahi elemente gerçek referansı üzerinden müdehale etmemizi sağlayan bir yöntem.

	const onPriceChange = (event: any) => {
		oldPrice.current = price; // useRef senkron çalışır.
		// _oldPrice = price;
		// console.log('_oldPrice', _oldPrice);
		const value =
			(Number(event.target.value) - Number(oldPrice.current)) /
			oldPrice.current;
		pricePercent.current = Number(value.toFixed(2)) * 100;

		setPrice(event.target.value);
	};

	return (
		<div>
			Old Price: {oldPrice.current}
			<br></br>
			{/* _Old Price2: {_oldPrice} */}
			<br></br>
			New Price: {price}
			<br></br>
			<span>Değişim Oranı : {pricePercent.current} %</span>
			<br></br>
			New Price:
			<input
				type="text"
				defaultValue={price}
				onBlur={onPriceChange}
				placeholder="new price"
			/>
		</div>
	);
}

export default UseRefSample;
