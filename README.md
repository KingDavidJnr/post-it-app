# post-it-app
Welcome to Post-it; a simple social media app project that allows users to create new accounts, make posts and comment on posts.

## Documentation
This is a brief, but succinct guide on how to clone, install and use the app on your machine. The list to the documentation is shared below:
```
https://documenter.getpostman.com/view/25799102/2s93JruPpj
```
## Deployment
The API is currently deployed on Render static hosting, and the live link to the API is shared as below:
```
https://post-it-app-api.onrender.com/posts
```

## Database Model
The database design model can be viewed through the URL on the next line:
```
https://dbdesigner.page.link/d3Fe1FKHWsvmeBus8
```

## Installation Guide
Once again, welcome to the Post-It Social app.

* To clone this project to your machine:
```
git clone https://github.com/KingDavidJnr/post-it-app.git
```
* change directory into the app on your terminal by using the command:
```
cd post-it-app
```
* Use 'npm install' command to install all dependecies as specified in the package.json file.
* To start the server, type this command on your terminal while you're inside the app directory:
```
npm start
```
## Sample GET Request
* To fetch all posts on the app, send a HTTP GET request to the API:
```
curl localhost:8080/posts
```
* You will get a status response as specified below:
```
{"success":true,"message":"Posts fetched successfully","data":[]}
```

## Sample Users Request
* To fetch all user accounts on the app, send this following request:
```
curl localhost:8080/users
```
* You will get a status response as below:
```
{"success":true,"message":"Users accounts fetched successfully","data":[]}
```

Thanks for coming by to check Post-it social media app.
<hr>

