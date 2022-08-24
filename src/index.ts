import express, { NextFunction } from 'express';
import path from 'path';
import cashe from './middleware/cashe';
import resize from './middleware/resize';
import { validateNumber, validateFileName } from './middleware/validate';

const app = express();
const port = 3000;

app.use('/assets', express.static(path.join(__dirname, '../public')));

app.use(
    '/api/images/',
    (req: express.Request, res: express.Response, next: NextFunction): void => {
        const width = Number(req.query.width);
        const height = Number(req.query.height);

        //validate the file name , width, and height of the image
        if (validateFileName(req.query.filename as string)) {
            if (validateNumber(width) && validateNumber(height)) {
                next();
            } else {
                res.send(
                    '<h2>Error: width and height must be positive numbers!</h2>'
                );
            }
        } else {
            res.send('<h2>Error: file name doesnot exist!</h2>');
        }
    },

    (req: express.Request, res: express.Response): void => {
        const imgName =
            path.parse(req.query.filename as string).name +
            '_' +
            req.query.width +
            'x' +
            req.query.height +
            '.jpg';

        //check to see if image is already cashed
        //if not process a new one
        cashe().then((files) => {
            if (files.includes(imgName)) {
                res.sendFile(
                    path.join(__dirname, '../public/output/') + imgName
                );
            } else {
                resize(
                    req.query.filename as string,
                    Number(req.query.width),
                    Number(req.query.height),
                    imgName
                ).then(() => {
                    res.sendFile(
                        path.join(__dirname, '../public/output/') + imgName
                    );
                });
            }
        });
    }
);

//welcome message for users
app.get('/', (req: express.Request, res: express.Response): void => {
    res.send(`<h1>Welcome to the Image Processing API</h1>
        <h2>Please go to the endpoint: '/api/images' and enter the query parameters to process an image</h2>
        <p>For example: <a href="http://localhost:3000/api/images?filename=img1.jpg&width=600&height=300">Try this!</a></p> 
    `);
});

//start listening on the specified port
app.listen(port, '127.0.0.1', (): void => {
    console.log('listening on port:', port);
});

export default app;
