import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function refreshLLMs() {
	try {
		const jsonPath = path.join(__dirname, 'llms-text.json');
		const jsonData = await fs.readFile(jsonPath, 'utf8');
		const entries = JSON.parse(jsonData);

		for (const entry of entries) {
			const { name, url } = entry;
			console.log(`Fetching content for ${name} from ${url}...`);
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
			}
			const content = await response.text();
			const filePath = path.join(__dirname, `${name}-llms.txt`);
			await fs.writeFile(filePath, content, 'utf8');
			console.log(`Saved content to ${filePath}`);
		}
		console.log('All entries processed successfully.');
	} catch (error) {
		console.error('Error:', error.message);
	}
}

refreshLLMs();
