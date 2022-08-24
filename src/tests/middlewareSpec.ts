import { validateFileName, validateNumber } from '../middleware/validate';
import resize from '../middleware/resize';

describe('Test validation', () => {
    it('testing file name validation', () => {
        expect(validateFileName('img1.jpg')).toBe(true);
        expect(validateFileName('any.jpg')).toBe(false);
        expect(validateFileName('img1.png')).toBe(false);
    }),
        it('testing number validation', () => {
            expect(validateNumber(500)).toBe(true);
            expect(validateNumber(Number('400'))).toBe(true);
            expect(validateNumber(Number('xyz'))).toBe(false);
        });
});

describe('Test sharp', () => {
    it('testing image resizing', async () => {
        const imgData = await resize('img1.jpg', 200, 200, 'img1_200x200.jpg');
        expect(imgData.format).toBe('jpeg');
        expect(imgData.height).toBe(200);
        expect(imgData.width).toBe(200);
    });
});
