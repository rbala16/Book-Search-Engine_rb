# 21 MERN: Book Search Engine

## Description
Fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. 


## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```


## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```
## License 
MIT License

## Installation
1. Clone the repository
2. Install the following: 
- npm install

## Instructions
💻   
Run the following command at the terminal:

`npm run start` <br>
- Go to http://localhost:3000 to view the app on local server<br>

- Go to  to view https://book-service-engine-rb-0d6196b18c14.herokuapp.com/ the functionality on heroku app

## Contributing
Rajni bala : (https://github.com/rbala16)

## Questions
✉️ Contact me with any questions: [Email:]bala12rajni@gmail.com , [Github](https://github.com/rbala16)<br />

## Mock-Up

Let's start by revisiting the web application's appearance and functionality.

As you can see in the following screenshoot, a user can type a search term (in this case, "javascript") in a search box and the results appear:

![Screenshoot shows "javascript" typed into a search box and books about Star Wars appearing as results.](./assets/demo1.jpg)

The user can save books by clicking "Save This Book!" under each search result, as shown in the following screenshoot:

![Screenshoot shows user clicking "Save This Book!" button to save books that appear in search results. The button label changes to "Book Already Saved" after it is clicked and the book is saved.](./assets/demo3.jpg)

A user can view their saved books on a separate page, as shown in the following screenshoot:

![The Viewing  Books page shows the books that the user  has saved.](./assets/demo2.jpg)





## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.<br>
https://book-service-engine-rb-0d6196b18c14.herokuapp.com/

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.<br>
https://github.com/rbala16/Book-Search-Engine_rb
---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
