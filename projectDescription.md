# Project Description: Personal Finance Tracker

We (I, but I'm using we) created a **Personal Finance Tracker** application that allows users to efficiently manage their income, expenses, and budgets. The application enables users to categorize their expenses, track their financial habits with charts, and manage financial goals. 
The project includes a user authentication system that allows users to register and securely log in to their personalized accounts.
Once logged in, users can add, view, edit, and delete their expenses and visualize their spending habits over time through interactive charts.

You can access the live project [here](https://final-project-meelvidushi-e8i1.vercel.app/dashboard). The app is responsive and works on desktop and mobile. Users must sign up to create an account or use the following credentials for testing:
- **Username**: `testuser@example.com`
- **Password**: `testpassword`
**Register** with the above. Don't try to just login!

## Additional Instructions

To fully use the project:
1. Navigate to the homepage and create a new account by providing your email and password. 
2. Once logged in, you can start adding your income and expenses, categorizing them, and viewing charts of your spending.
3. Use the "Logout" button to securely end your session.

Alternatively, you can use the provided login credentials above for testing without needing to register.

## Technologies Used

We used a combination of **React** and **TypeScript** for the frontend to ensure a modern, maintainable, and strongly-typed user interface. The **backend** is built using **Node.js** and **Express.js**, serving as the API for handling user authentication and expense management. For data storage, we used **MongoDB** with **Mongoose** to manage user information and expense data. 
To visualize the user's financial data, we integrated **Chart.js** to display dynamic charts based on user inputs. **Axios** was used for making HTTP requests between the frontend and backend, and **Vercel** was used to deploy the frontend. The backend is deployed on **Vercel** as well, which was a difficult endeavor since it's built for purely frontend applications. 

## Challenges Faced

One of the primary challenges we faced was setting up user authentication in a secure and scalable way. We had to ensure that the login and registration system was secure while allowing for smooth integration with the expense management features. Another challenge was ensuring that the data visualization charts reflected real-time data accurately, which involved fine-tuning the state management and the API communication between the frontend and backend. Lastly, deploying both backend and frontend on Vercel was challenging. 

## Team Responsibilities

- **Vidushi Meel** was responsible for all. 
