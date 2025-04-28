import fs from 'fs/promises';
import path from 'path';

const sourceDirectory = path.join(
	new URL('.', import.meta.url).pathname,
	'files'
);
const destinationDirectory = path.join(
	new URL('.', import.meta.url).pathname,
	'files_copy'
);

const copy = async () => {
	try {
		await fs.access(sourceDirectory);
		throw new Error('FS operation failed');
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log('Source directory does not exist.');
			return;
		}
	}

	try {
		await fs.access(destinationDirectory);
		throw new Error('FS operation failed');
	} catch (error) {
		if (error.code === 'ENOENT') {
			await fs.mkdir(destinationDirectory);
		} else {
			console.log('Destination directory already exists.');
		}
		const files = await fs.readdir(sourceDirectory);
		await Promise.all(
			files.map(async (file) => {
				const sourceFile = path.join(sourceDirectory, file);
				const destinationFile = path.join(destinationDirectory, file);
				await fs.copyFile(sourceFile, destinationFile);
			})
		);
		console.log('Files copied successfully!');
	}
};

await copy();
