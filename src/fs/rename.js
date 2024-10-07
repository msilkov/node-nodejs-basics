import fs from 'fs/promises';

const rename = async () => {
	const renameFilePath = 'src/fs/files/wrongFilename.txt';
	const newFilePath = 'src/fs/files/properFilename.md';

	try {
		await fs.access(renameFilePath);
	} catch (error) {
		if (error.code === 'ENOENT') {
			throw new Error('FS operation failed');
		} else {
			throw error;
		}
	}

	try {
		await fs.access(newFilePath);
		throw new Error('FS operation failed');
	} catch (error) {
		if (error.code !== 'ENOENT') {
			throw error;
		}
	}

	await fs.rename(renameFilePath, newFilePath);
};

await rename();
