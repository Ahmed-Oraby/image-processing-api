import fs from 'fs';
import path from 'path';

export function validateNumber(num: number): boolean {
    return !isNaN(Number(num));
}

export function validateFileName(file: string): boolean {
    let folderName = path.join(__dirname, '../../public/full');
    let files = fs.readdirSync(folderName);
    return files.includes(file);
}
