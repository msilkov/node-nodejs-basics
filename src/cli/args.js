import { argv } from 'node:process';

const parseArgs = () => {
	const args = argv.slice(2);

	const parsedValues = [];

	for (let i = 0; i < args.length; i += 2) {
		const key = args[i].slice(2);
		const value = args[i + 1];

		if (value !== undefined) {
			parsedValues.push(`${key} is ${value}`);
		}
	}

	console.log(parsedValues.join(', '));
};

parseArgs();
