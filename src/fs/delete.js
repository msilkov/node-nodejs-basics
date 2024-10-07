import fs from 'fs/promises';

const remove = async () => {
	const fileToDelete = 'src/fs/files/fileToRemove.txt';
	try {
		await fs.access(fileToDelete);
		await fs.rm(fileToDelete);
	} catch (error) {
		if (error.code === 'ENOENT') {
			throw new Error('FS operation failed');
		} else {
			throw error;
		}
	}
};

await remove();
