import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, 'public', 'service-images');
const outputFilePath = path.join(__dirname, 'src', 'data', 'serviceImages.json');

const data = {};

if (fs.existsSync(baseDir)) {
    const categories = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());
    for (const cat of categories) {
        const catPath = path.join(baseDir, cat);
        const files = fs.readdirSync(catPath).filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
        data[cat] = files.map(f => `/service-images/${cat}/${f}`);
    }
}

fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));
console.log('Image map generated at', outputFilePath);
