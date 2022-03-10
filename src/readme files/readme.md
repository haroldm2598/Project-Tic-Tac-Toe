Timeline project

- atleast 1-2 weeks better 1 week

PROCEDURE

- use Npm (js)
- scss npm and make it live (scss)
- BEM and em, rem sizes (scss)
- resuable function (js)
- focusing module pattern and factory function (js)

FONTS

- Fira sans black
- PT serif

@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700;900&family=PT+Serif&display=swap');

### Use

font-family: 'Fira Sans', sans-serif;
font-family: 'PT Serif', serif;

### Setup sass/scss without live-sass

https://www.youtube.com/watch?v=pGcCWhl6ePQ

Progress // TARGET COMPLETION 2weeks or less

## Jan-31 / Feb 1

- Done Structuring Folder
- Done Completing rules and procedure for work
- Done Creating HTML and CSS as for basic static

## Feb 7

- Creating basic javascript
- Must connect it into html

## Feb 8

- Js basic function wheres can clickable and validation wheres cannot click again DONE
  - SOLUTION:: scope and of the const playerTurn
- Pushing value of the playerTurn in to array

## Feb 9

- Logic of FizzBuzz must be the answer to alternate changing players

## Feb 10

- Still the same. ## Feb9
- Focus on looping gameBoard and trying to get and set of the fields of that.
- Must try webdevsimplied way of switching player for tictactoe

## Feb 11

- SOLUTION:: parameter "{ once: true }" answer to not repeating clicking of eventListener to the same element
- SOLUTION:: switching ternary by using 'variable not declared and using var = !var'

## Feb 14

- Focusing on changing player turn innerHTML
  - SOLUTION:: creating a new function and return both of getassign and new assign variable with design
- Reset gameBoard reset UI PROGRESSING

## Feb 15

- Solve clicking but removing once true is necessary. Find a way using ternary

## Feb 16

- update on checking if element is empty therefore using var.childNodes.length if empty checking

## Feb 18

- Maybe restructure the html inorder to find the childNodes.length of the mainBox
- Add remove attribute to the reset button
- Is must next week is the last day of making this app.

## Feb 21

- Maybe priority logic game in array before adding remove all element and length in order to read it.
- set a numbers in gameboard and then get the value of it.

### Winning Condition

<ul>
  <li>[0, 1, 2]</li>
  <li>[3, 4, 5]</li>
  <li>[6, 7, 8]</li>
  <li>[0, 3, 6]</li>
  <li>[1, 4, 7]</li>
  <li>[2, 5, 8]</li>
  <li>[0, 4, 8]</li>
  <li>[2, 4, 6]</li>
</ul>

## Feb 22

- Setting a board
- get value of board
- logical statement after all of that is working

## Feb 28 - March 3

- Setting board should input the correct place of an array
- therefore it would put the responded value to the array
- mainBox should push into array and must be a number in order to make logical condition

  #### PROBLEM :: {

  - if we push number how will the array categorize the sign of the player?
  - categorize in order to know who will win the game

  }

- loop the mainBox in order to get the index and push into array (board)
- if we click the correct mainbox event should push the index of it
- inorder to insert specific element array index must try to use splice + find method

  #### SOLVE :: {

  - cause if only the last player who sign is the winner of the game
  - no need to push the sign so the index of it will be categorise as the position of the sign
  - who ever last push and result of the game will be winner
  - focusing on the get board result then analyze put some logical reasoning

    #### PROBLEM :: {

    - it might cause result the winner if even thought doesn't complete the game

    }

  }

- Try use regex to replace inside array of quotes if the array has quotes

## March 4 - March 7

#### PROBLEM:: {

- proper placing must try to add null

}

#### SOLVE:: {

- using splice and inserting index
- replacing deleteItem from 0 into 1

}

- Getting the value of the board then compare it
- Using comparison operator

## March 8 - March 10

- Get the index of arr board of specific player
- Then compare it inside of winning Condition function
- Try to Factory module the (winningCondition) innside MainBox EventListener
