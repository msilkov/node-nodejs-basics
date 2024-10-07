import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
	const sourceDir = 'src/fs/files';
	const duplicateDir = 'src/fs/files_copy';

	try {
		await fs.access(sourceDir);
	} catch (error) {
		if (error.code === 'ENOENT') {
			throw new Error('FS operation failed');
		}
		throw error;
	}

	try {
		await fs.access(duplicateDir);
		throw new Error('FS operation failed');
	} catch (error) {
		if (error.code !== 'ENOENT') {
			throw error;
		}
	}
	await fs.mkdir(duplicateDir);

	const files = await fs.readdir(sourceDir);

	await Promise.all(
		files.map(async (file) => {
			const sourceFile = path.join(sourceDir, file);
			const duplicateFile = path.join(duplicateDir, file);
			await fs.copyFile(sourceFile, duplicateFile);
		})
	);
};

await copy();
