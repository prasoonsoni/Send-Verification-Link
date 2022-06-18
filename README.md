<!-- PROJECT LOGO -->
<p align="center">
    <a href="https://github.com/prasoonsoni/Send-Verification-Link">
    <img src="https://cdn-icons-png.flaticon.com/512/3472/3472620.png" alt="Logo" width="80" height="80">
    </a>
  <h1 align="center">Send Verification Link ✅</h1>

  <p align="center">
    <a href="https://github.com/prasoonsoni/Send-Verification-Link"><strong>Explore the docs »</strong></a>
    <br />
    •
    <a href="https://github.com/prasoonsoni/Send-Verification-Link/issues">Report Bug</a>
    •
    <a href="https://github.com/prasoonsoni/Send-Verification-Link/issues">Request Feature</a>
    •
  </p>
</p>

<!-- BADGES -->
<p align="center">
  <a href="https://github.com/prasoonsoni/Send-Verification-Link/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/prasoonsoni/Send-Verification-Link.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/prasoonsoni/Send-Verification-Link/network/members">
    <img src="https://img.shields.io/github/forks/prasoonsoni/Send-Verification-Link?style=for-the-badge">
  </a>  
  <a href="https://github.com/prasoonsoni/Send-Verification-Link/stargazers">
    <img src="https://img.shields.io/github/stars/prasoonsoni/Send-Verification-Link?style=for-the-badge">
  </a>
  <a href="https://github.com/prasoonsoni/Send-Verification-Link/issues">
    <img src="https://img.shields.io/github/issues/prasoonsoni/Send-Verification-Link?style=for-the-badge">
  </a>
</p>

<!-- ABOUT THE PROJECT -->
## <img src="https://openclipart.org/download/307315/1538154643.svg" width="32" height="32"> About The Project
Verify your E-Mail and Phone Number using link sent over mail and sms.

## <img src="https://cdn-icons-png.flaticon.com/512/427/427735.png" width="32" height="32"> Features

* Send verification link to e-mail address and phone number.
* Verify e-mail address and phone number when user clicks on verification link.

## <img src="https://techstackapps.com/media/2019/11/TechStackApps-logo-icon.png" width="32" height="32"> Tech Stack

* Node.js
* Express.js
* MongoDB
* Node Mailer
* Twilio
* JavaScript

<!-- SCREENSHOTS -->
## <img src="https://cdn-icons-png.flaticon.com/512/6823/6823853.png" width="32" height="32"> Screenshots

### E-Mail Verification

User will receive E-Mail as given in the following image.

<img src="https://user-images.githubusercontent.com/75159757/172431277-b10c0404-c333-4dde-bed7-71d488f9c52c.png" width="700px"/>

When user click the confirm button, e-mail verification is done.

<img src="https://user-images.githubusercontent.com/75159757/172433417-475f2d81-207e-42a9-bc4e-04f662bd6843.png" width="700px"/>

### Phone Verification

User will receive SMS as given in the following image.

<img src="https://user-images.githubusercontent.com/75159757/172432956-793ae967-6d92-4e2f-97ca-5af71238cbf0.jpg" width="400px"/>

When user click the link, phone number verification is done.

<img src="https://user-images.githubusercontent.com/75159757/172433976-cf0ada18-3754-48a8-9b48-90260a86def6.jpg" width="400px"/>

When user click the confirm button, e-mail verification is done.

<img src="https://user-images.githubusercontent.com/75159757/172433417-475f2d81-207e-42a9-bc4e-04f662bd6843.png" width="700px"/>

<!-- ENDPOINTS -->
## <img src="https://cdn-icons-png.flaticon.com/512/603/603197.png" width="32" height="32"> Endpoints
### ```POST /user/create```
- Body
```json
{
    "name":"your-name",
    "email":"your-email",
    "phone":"your-phone"
}
```
- Success Response
```json
{
    "success": true,
    "message": "Account created. Please Verify your E-Mail Address and Phone Number."
}
```
- Response When E-Mail Address Exists
```json
{
    "success": true,
    "message": "E-Mail address already in use."
}
```
- Response When Phone Number Exists
```json
{
    "success": true,
    "message": "Phone number already in use."
}
```
- Response When Error Occurs Creating account
```json
{
    "success": true,
    "message": "Error creating account. Try Again!!"
}
```
### ```GET /user/verify/mail?token=your-verification-token```
This is the endpoint for verification of e-mail address.

### ```GET /user/verify/phone?token=your-verification-token```
This is the endpoint for verification of phone number.

<!-- GETTING STARTED -->
## <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" width="32" height="32"> Getting Started

To get a local copy up and running follow these simple steps.
### Prerequisites
In order to get a copy of the project you will require you to have Node.js (v14+) and the NPM package manager installed. If you don't have it, you can download the latest version of Node.js from the [official website](https://nodejs.org/en/download/) which also installs the NPM package manager by default.
### Installation
Open the terminal in the folder in which you wish to clone the repository and enter the following command:
``` 
git clone https://github.com/prasoonsoni/Send-Verification-Link.git
cd Send-Verification-Link
```
Install all the NPM packages:
```
npm i
```
In order to run the server:
```
npm i -D nodemon (One time installation)
npx nodemon index.js
```
In order to run the frontend:
```
npm run start
```

> **Note that you will have to add your own `.env` file at the root directory and add your own environment variables for the project to build.**

Following are the environment variables used for backend:
- `MONGO_URI` = The MongoDB connection string.
- `HOST` = The domain name (usually http://localhost:3000).
- `EMAIL` = Your E-Mail Address.
- `PASSWORD` = Your Password.
- `JWT_SECRET` = Your JWT Secret
- `JWT_EXPIRES_IN` = Your JWT expiration time.
- `TWILIO_ACCOUNT_SID` = Your Twilio Account SID.
- `TWILIO_AUTH_TOKEN` = Your Twilio Account Auth Token.
- `TWILIO_PHONE_NUMBER` = Your Twilio Phone Number.

<!-- CONTRIBUTING -->
## <img src="https://hpe-developer-portal.s3.amazonaws.com/uploads/media/2020/3/git-icon-1788c-1590702885345.png" width=32 height=32> Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourAmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some YourAmazingFeature'`)
4. Push to the Branch (`git push origin feature/YourAmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png" width=32 height=32> Contact

### Prasoon Soni
[`E-Mail`](mailto:prasoonsoni.work@gmail.com)
[`LinkedIn`](https://www.linkedin.com/in/prasoonsoni/)

