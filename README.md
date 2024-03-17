# worldref

### Register page
- Regster form that takes username and password as inputs and store it in backend
<img src='./worldref/public/register.png'/>

### Login Page
- Login form that takes username and password as inputs
- Implemented a login function that checks the credentials and sets the authentication status from the backend
- If the login is successful, update the authentication status to true.
- If the login fails, display an alert error message.
<img src='./worldref/public/login.png'/>

### Product page
- Products Page contains card component that displays the card information, including a Title, image, price and description. Product is fetched from backend.
- Implemented two buttons in the card component.
- "Add to Cart" button: Cart page is only accessible to authenticated users. 
- "Check Details" button: Details page is only accessible to authenticated users. 
- If a non-authenticated user tries to access these buttons, redirect to the login page.
<img src='./worldref/public/product.png'/>

### Home Page
- Home Page contains card component that displays the card information, including a Title, image, price and description.
<img src='./worldref/public/home.png'/>