import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, './files/fileToCalculateHashFor.txt');
const algorithm = 'sha256';

const calculateHash = async () => {
	const hash = createHash(algorithm);
	const fileStream = createReadStream(filePath);

	await pipeline(fileStream, hash);
	const hashValue = hash.digest('hex');
	console.log(hashValue);
};

await calculateHash();
