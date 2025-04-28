const parseEnv = () => {
	const envVariables = [];

	for (const [key, value] of Object.entries(process.env)) {
		if (key.startsWith('RSS_')) {
			envVariables.push({
				key: key,
				value: value,
			});
		}
	}

	const resultToPrint = envVariables
		.map((env) => {
			return `${env.key}=${env.value}`;
		})
		.join('; ');
	console.log(resultToPrint);
};

parseEnv();
