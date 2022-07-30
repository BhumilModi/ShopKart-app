# Ecommerce (React) Coding Assessment

## Overview

To submit this assessment, I have used React Framework and uploaded the code on (https://github.com/BhumilModi/krypto-assesment)this github repository.

The purpose of this assessment is to assess your **skills and approach to composing a simple web app** given an API feed.

## What I did?

We had to Create a E-Commerce website using React , in addition to that I user Tailwind CSS.

I have include a `README` with setup instructions. There are no other Documentation.

Also, add very short info for the following to your `README`:

- Describe all the application functionalities
- Are there any improvements you could make to your submission?
- What would you do differently if you were allocated more time?

Application Functionalities:

- There is user Authentication using useContext Hook , a person can login or signup using email and password.
- Once logged in a person can see all the products , on clicking the product a modal appears where one can add product to favourites or add to cart
- Cart Page where they can see all the products added to the cart also place order shows a modal for confirmation and empty the cart.

## How should the application work?

The user of this react application should be able to view all the products. The application should have the following workflow,

1. Create the login/register functionality.
2. Once the user is authenticated
3. Users can add the products to the cart page
4. Also user can add their favourite products

## Development Setup

- Clone this repo
- `npm install` - To install the dependencies
- `npm run server` - To start the JSON server
- `npm start` - To start the react app

## This project's user interface should like this.

### Login/Register page

<img width="1512" alt="Screenshot 2022-07-24 at 10 44 13 AM" src="https://user-images.githubusercontent.com/52570524/180701451-5ccce009-0384-426c-b1bc-d7536fd7b142.png">

### Home page

<img width="1512" alt="Screenshot 2022-07-24 at 10 45 58 AM" src="https://user-images.githubusercontent.com/52570524/180701523-b679c753-68ff-47f1-9a1b-f4cc04d88fea.png">

### Product detail page

<img width="675" alt="Screenshot 2022-07-24 at 10 53 17 AM" src="https://user-images.githubusercontent.com/52570524/180701655-7c3d3120-ff81-445a-81d9-b2152db8a776.png">

### Cart page

<img width="1415" alt="Screenshot 2022-07-24 at 10 50 18 AM" src="https://user-images.githubusercontent.com/52570524/180701661-a587033d-4616-40f8-9260-dfd3e8b97152.png">

<img width="1472" alt="Screenshot 2022-07-24 at 10 51 16 AM" src="/photos/confirmation.png">

## API Usage

API can be launched using npm run server.
| Endpoint | Result |
|------------------------------|-----------------------------------------------------|
| /users | Lists all available users |
| /products | Lists all available products |
| /orders | Lists all available orders  
| /favourites | Lists all available favourites

More info about API usage can be found at the [Postman Collection](https://www.getpostman.com/collections/9f28d57ae334429e1f1f)
