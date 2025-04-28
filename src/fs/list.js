import fs from 'fs/promises';
import path from 'path';

const sourceDirectory = path.join(
	new URL('.', import.meta.url).pathname,
	'files'
);

const list = async () => {
	try {
		await fs.access(sourceDirectory);
		throw new Error('FS operation failed');
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log('Source directory does not exist.');
			return;
		}
	}
	const files = await fs.readdir(sourceDirectory);
    const title = files.length === 1 ? 'File' : 'Files';
	if (files.length === 0) {
		console.log('Directory is empty.');
		return;
	}
	console.log(`${files.length} ${title} in the ${sourceDirectory} directory:`, files);
};

await list();
