# **Full Stack University Project: E-Commerce App with Admin Panel**

### Project Code: DLBCSPJWD01

**Tech Stack:**  
React, Redux Toolkit, TailwindCSS, MongoDB, Express.js, Node.js, Cloudinary, PayPal Sandbox, JavaScript, HTML5, CSS3

---

<img width="742" alt="Ecommerce Website Screenshot" src="https://github.com/user-attachments/assets/8f6222d3-a0c3-4599-8647-4715b95bc815">

---

## **Project Overview**

This project is an advanced **E-Commerce Web Application** built using the **MERN Stack** (MongoDB, Express.js, React, and Node.js). It provides a comprehensive platform for users to shop for products, manage their accounts, track orders, and complete secure payments using PayPal. Additionally, an integrated admin panel offers seamless management of products, customers, and orders.

The app is fully scalable and features a responsive design, making it accessible across all devices. With efficient state management using Redux Toolkit, the platform ensures fast load times and a smooth user experience.

---

## **Design Layout**

<img width="1188" alt="Design Layout" src="https://github.com/user-attachments/assets/a04d8bdb-4c1f-4eb8-ae7a-001400325afb">

---

<img width="1425" alt="Admin Panel Layout" src="https://github.com/user-attachments/assets/1e9c5d74-d14a-4ade-a337-f0ae5a0507b0">

---

## **Tech Stack**

### **Frontend:**
- **React.js:** Dynamic and interactive UI
- **Redux Toolkit:** Efficient state management
- **Vite:** Lightning-fast build tool
- **TailwindCSS:** Customizable and responsive design
- **Axios:** For seamless API requests
- **React-Router-Dom:** Smooth page routing

### **Backend:**
- **Node.js:** High-performance backend environment
- **Express.js:** Lightweight framework for handling requests
- **MongoDB:** NoSQL database for scalability and flexibility (via Mongoose)
- **Bcrypt.js:** Secure password hashing
- **JSON Web Token (JWT):** User authentication and authorization

### **External Services:**
- **PayPal SDK:** Secure and easy online payments
- **Cloudinary:** Efficient image storage and management

---

## **Features**

- **User Authentication:** Secure login, registration, and session management (Bcrypt.js & JWT).
- **Shopping Cart:** Add/remove products, checkout functionality.
- **Admin Panel:** Manage products, customers, and orders.
- **Payment Integration:** Secure PayPal payments for orders.
- **Image Management:** Upload and manage product images with Cloudinary.
- **Scalability:** Designed to handle an expanding product catalog and user base.

---

## **Installation and Setup Instructions**

### **Prerequisites**

Ensure that the following are installed on your system:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (for database)
- [Git](https://git-scm.com/) (for version control)

### **Cloning the Repository**

1. Clone the project to your local machine:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

### **Backend Setup**

1. Navigate to the backend directory:
    ```bash
    cd server
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm run dev
    ```

### **Frontend Setup**

1. Navigate to the frontend directory:
    ```bash
    cd client
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm run dev
    ```


### **Environment Variables**

Create a `.env` file in the root directory and configure the following environment variables:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

----------

Running the Application

Ensure MongoDB is running locally or provide a MongoDB Atlas connection string in your .env file.

Once both the frontend and backend servers are running, the app will be accessible at:
        Backend: http://localhost:5000
        Frontend: http://localhost:5173
