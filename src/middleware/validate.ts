import fs from 'fs';
import path from 'path';

export function validateNumber(num: number): boolean {
    return !isNaN(num) && num > 0;
}

export function validateFileName(file: string): boolean {
    const folderName = path.join(__dirname, '../../public/full');
    const files = fs.readdirSync(folderName);
    return files.includes(file);
}
