import { env } from 'process';
import React from 'react';

function EnvSample() {
	return (
		<div>
			<div>Env: {process.env.REACT_APP_ENV}</div>
			<div>Bucket: {process.env.REACT_APP_ENV_S3_BUCKET}</div>
		</div>
	);
}

export default EnvSample;
