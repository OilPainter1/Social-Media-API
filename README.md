# Social-Media-API

This server-side app is an API that allows the user to make http requests to add, retrieve, remove, and edit data about new users, friends, and thoughts. Paired with a front-end app, a social media platform can be made.

## Technologies Used:
- Node.js
- Express.js
- Mongoose ODM
- Insomnia
- MongoDB Compass

## Organization
- routes folder: contains routes to handle different incoming http requests
- config folder: connects app to MongoDB
- models folder: outlines schema of Thought and User data
- server.js: starts express server

## Running the App:
### In the command line:
- run git clone https://github.com/OilPainter1/Social-Media-API.git
- cd into the project
- run npm i
- run node server.js
#### The command line should log "app listening on port: 3002"
#### Open insomnia and begin making http requests on local host at port 3002

## Video Walkthrough: 
https://drive.google.com/file/d/1psmzGro_xmp-tcyxN2cHf0VqpynhN7ww/view

## Image:
<img width="990" alt="Social-Media-API-Screen-Shot" src="https://user-images.githubusercontent.com/109541412/222523105-60f56ab4-4028-46d1-8d3a-0371edfdcc6f.png">
