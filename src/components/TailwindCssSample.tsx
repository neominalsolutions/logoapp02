import { useState } from 'react';

type TailwindCssSampleProps = {
	display: string;
};

export default function TailwindCssSample({ display }: TailwindCssSampleProps) {
	const [flextype, setFlextype] = useState<string>(display);

	return (
		<>
			<div className={`flex ${flextype} lg:visible xs:invisible`}>
				<div className="basis-1/4 text-xs">01</div>
				<div className="basis-1/4">02</div>
				<div className="basis-1/2 font-medium bg-blue-300">03</div>
				<button
					onClick={() => {
						setFlextype(flextype === 'flex-col' ? 'flex-row' : 'flex-col');
					}}
					className="text-white bg-blue-gray-500 rounded p-5 border-solid border-2 mt-2 hover:bg-gray-300"
				>
					Button 1
				</button>
			</div>
		</>
	);
}
