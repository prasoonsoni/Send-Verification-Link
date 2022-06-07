# Phone-and-Mail-Verification-With-Link
Verify your E-Mail and Phone Number using link sent over mail and sms.

## Endpoints
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

User will receive E-Mail as given in the following image.
<img src="https://user-images.githubusercontent.com/75159757/172431277-b10c0404-c333-4dde-bed7-71d488f9c52c.png" width="700px"/>

When user click the confirm button, e-mail verification is done.
<img src="https://user-images.githubusercontent.com/75159757/172433417-475f2d81-207e-42a9-bc4e-04f662bd6843.png" width="700px"/>

### ```GET /user/verify/phone?token=your-verification-token```
This is the endpoint for verification of phone number.

User will receive SMS as given in the following image.

<img src="https://user-images.githubusercontent.com/75159757/172432956-793ae967-6d92-4e2f-97ca-5af71238cbf0.jpg" width="400px"/>

When user click the link, phone number verification is done.

<img src="https://user-images.githubusercontent.com/75159757/172433976-cf0ada18-3754-48a8-9b48-90260a86def6.jpg" width="400px"/>
