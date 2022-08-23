# Image Processing API Project

## Available scripts

### `npm run build`

Compiles the typescript files

### `npm run test`

Compiles typescript files and then run the app tests using jasmine

### `npm run start`

Start the development server using nodemon

## Run the production server

### `node build/index`

Run production server inside the '/build' folder

## Accessible endpoints

** Assuming that the server runs on localhost (127.0.0.1) and port 3000**

-   'localhost:3000/' --> A welcome massege

-   'localhost:3000/api/images' --> The API endpoint that process the images

## Usage:

1. Go the API endpoint: '/api/images'
2. Enter the URL query parameters (key-value pairs) as follows:
    - filename --> the name and extension of the image to be processed.
    - width --> the width of the image to be processed.
    - height --> the height of the image to be processed.
3. An example on localhost (127.0.0.1) and port 3000:
   http://localhost:3000/api/images?filename=img1.jpg&width=600&height=300

## Notes:

-   Images to be used are placed inside "/public/full" folder, so if you like to use one of your own just put it there.
-   Resized processed images can be found inside "/public/output" folder
