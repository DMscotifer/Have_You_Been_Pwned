# Requests Homework

## Learning Objectives
- Practice making JavaScript requests and displaying the data in the page
- Practice traversing the data structure received from an API

## Option 2: Deck of Cards API

## Tasks
- Make an XMLHttpRequest to get data on cards back from this API: [ `http://deckofcardsapi.com/`](http://deckofcardsapi.com/)

- Remember that you'll first need to get the deck id, then use that id to generate the deck
- Get back two cards from the deck and displaying the suit and rank (you can use `ul`s and `li`s, `p` tags, or anything you want)
  - try to use small, reuseable functions
    - for example, one for getting the the deck id, one to handle looping through all the data, then using a separate function to create and render each item
- Add an `<img>` to each card

## Extensions
- Calculate the score of the two cards combined and display it on the page
- Create a button to draw two new cards (i.e. a reset button)
