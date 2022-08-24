import { promises as fs } from 'fs';
import path from 'path';

function cashe(): Promise<string[]> {
    const folderName = path.join(__dirname, '../../public/output');

    return fs.readdir(folderName);
}

export default cashe;
