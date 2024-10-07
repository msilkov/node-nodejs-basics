import fs from 'fs/promises';

const read = async () => {
	const fileToRead = 'src/fs/files/fileToRead.txt';

	try {
		await fs.access(fileToRead);
		const fileData = await fs.readFile(fileToRead, { encoding: 'utf8' });
		console.log(fileData);
	} catch (error) {
		if (error.code === 'ENOENT') {
			throw new Error('FS operation failed');
		} else {
			throw error;
		}
	}
};

await read();
