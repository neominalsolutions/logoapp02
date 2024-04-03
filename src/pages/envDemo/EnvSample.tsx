import React from 'react';
function EnvSample() {
	return <div>Bucket: {process.env.REACT_APP_ENV_S3_BUCKET}</div>;
}

export default EnvSample;
