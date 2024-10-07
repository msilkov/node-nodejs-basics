import { env } from 'node:process';

const parseEnv = () => {
	const envVars = env;
	const rssVars = Object.entries(envVars)
		.filter(([key]) => key.startsWith('RSS_'))
		.map(([key, value]) => `${key}=${value}`)
		.join('; ');

	console.log(rssVars);
};

parseEnv();
