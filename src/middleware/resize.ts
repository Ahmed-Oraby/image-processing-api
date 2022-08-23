import path from 'path';
import sharp from 'sharp';

function resize(
    fileName: string,
    width: number,
    height: number,
    imgName: string
): Promise<sharp.OutputInfo> {
    return sharp(path.join(__dirname, '../../public/full/') + fileName)
        .resize(width, height)
        .toFile(path.join(__dirname, '../../public/output/') + imgName);
}

export default resize;
