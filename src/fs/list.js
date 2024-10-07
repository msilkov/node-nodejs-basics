import fs from 'fs/promises';

// implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

const list = async () => {
	const folderPath = 'src/fs/files';
	try {
		await fs.access(folderPath);
		const files = await fs.readdir(folderPath);
		for (const file of files) console.log(file);
	} catch (error) {
		if (error.code === 'ENOENT') {
			throw new Error('FS operation failed');
		} else {
			throw error;
		}
	}
};

await list();
