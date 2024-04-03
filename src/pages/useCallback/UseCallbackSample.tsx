import React, { memo, useCallback, useState } from 'react';

// Not bir child component action Props'a sahip ise React.memo ile sarmallansa dahi, action Props function tipinde yani referans type oludğu için Parent component değişiminde child component re-render olacaktır. Bunu engellemek için child component'e ait action Proplar useCallBack ise memoize edilmek zorundadır.

type ItemProps = {
	text: string;
	OnDelete: () => void;
};

const Item = memo(function ({ text, OnDelete }: ItemProps) {
	console.log('...rendering');
	return (
		<>
			{text}
			<button
				onClick={() => {
					OnDelete(); // props emit işlemi
				}}
				className="bg-gray-600 p-10 border-2"
			>
				Sil
			</button>
		</>
	);
});

function UseCallbackSample() {
	const colors = ['bg-blue-500', 'bg-blue-300', 'bg-red-300', 'bg-purple-500'];

	// parent ile alakalı bgColor değiştiren bir state Item componenti ile hiçbir alakası yok.
	const [bgColor, setBgColor] = useState<string>('');

	const items = [
		{
			text: 'Item-1',
		},
		{
			text: 'Item-2',
		},
	];

	const changeBgColor = () => {
		const colorIndex = Math.round(Math.random() * colors.length - 1);
		setBgColor(colors[colorIndex]);
	};

	// her bir butona basıldığında child componenteki function tekrardan referansı oluşmasın, function referansını memoization yapmak için kullandık.
	const onItemDeleteClick = useCallback(() => {
		console.log('delete item');
	}, []);

	return (
		<div className={bgColor}>
			{items.map((item: any, index: number) => {
				return (
					<Item key={index} text={item.text} OnDelete={onItemDeleteClick} />
				);
			})}
			<button onClick={changeBgColor}>Change BgColor</button>
		</div>
	);
}

export default UseCallbackSample;
