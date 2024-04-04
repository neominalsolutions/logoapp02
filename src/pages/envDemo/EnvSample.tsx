import React, { useEffect } from 'react';

function EnvSample() {
	useEffect(() => {
		fetch(`${process.env.REACT_APP_PRODUCT_ENDPOINT}`).then();
	});

	return (
		<div>
			<div>Env: {process.env.REACT_APP_ENV}</div>
			<div>Bucket: {process.env.REACT_APP_ENV_S3_BUCKET}</div>
		</div>
	);
}

export default EnvSample;
