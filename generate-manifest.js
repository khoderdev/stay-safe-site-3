import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticDir = path.join(__dirname, 'public'); // Directory containing static assets
const manifestPath = path.join(staticDir, 'static-manifest.json');

// Recursively get all files in a directory
const getFiles = (dir) => {
	let results = [];
	const list = fs.readdirSync(dir);

	list.forEach((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat && stat.isDirectory()) {
			results = results.concat(getFiles(filePath)); // Recursively get files in subdirectories
		} else {
			results.push(filePath);
		}
	});

	return results;
};

// Generate the manifest
const files = getFiles(staticDir);
const manifest = files.map((file) => file.replace(staticDir, ''));

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('Static manifest generated:', manifestPath);