import { Transform } from 'stream';

const transform = async () => {
	const reverseTransform = new Transform({
		transform(chunk, encoding, callback) {
			const original = chunk.toString();
			const reversed = original.split('').reverse().join('');
			const result = `Original: ${original}\nReverted: ${reversed}\n\n`;
			callback(null, result);
		},
	});

	process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
