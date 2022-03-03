# The "Bulls & Cows" game

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**

Implement `Bulls and cows` game so the user can run and play it using command line.

- the program randomly generates a number of 4 different digits
- and asks a player to guess
- the player enters a number of 4 different digits
- the program check the entered number (if it has exactly 4 different digits)
- then computer compares a try with the generated number and shows a result of 'bulls' and 'cows'
- `bull` - guessed digit is on its place (index)
- `cow` - guessed digit exists in the number but the place (index) is wrong
- the game ends when the numbers is found
- Please create separate modules for generating a number, calculating bulls and cows, input/output operations

## Example
Computer makes `1234`, user prints `1345`. The result is one `bull` (guessed
digit `1` is on it's place) and 2 `cows` (digits `3` and `4` are present but on
wrong places).
