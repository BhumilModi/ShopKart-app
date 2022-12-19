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

## Development Setup

- Clone this repo
- `npm install` - To install the dependencies
- `npm run server` - To start the JSON server
- `npm start` - To start the react app

## This project's user interface should like this.

For this I have added all the screenShots in the Public/photos.

## API Usage

API can be launched using npm run server.
| Endpoint | Result |
|------------------------------|-----------------------------------------------------|
| /users | Lists all available users |
| /products | Lists all available products |
| /orders | Lists all available orders  
| /favourites | Lists all available favourites

More info about API usage can be found at the [Postman Collection](https://www.getpostman.com/collections/9f28d57ae334429e1f1f)
