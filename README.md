#Image Processing API

##Available scripts

###npm run test
Compiles typescript files and then run the app tests using jasmine

###npm run build
Compiles the typescript

###npm run start
Start the server

###node build/index
Run production code inside the 'build' folder

Run tests --> npm run test
Start server --> npm run start
Build files -> npm run build
Run production code -> node build/index

##Accessible endpoints

###'/'
Welcome user

###'/api/images'
The API that process the images

##Usage:

1. Go the API endpoint: '/api/images'
2. Enter the URL query parameters (key-value paris) as follows:
   *filename --> the name of the image to be processed.
   *width --> the width of the image to be processed.
   \*height --> the height of the image to be processed.
3. An example:
   http://localhost:3000/api/images?filename=img1.jpg&width=600&height=300

##Notes:

*Images to be used are placed inside "/public/full" folder, so if you like to use one of your own just put it there.
*Resized processed images can be found inside "/public/output" folder
