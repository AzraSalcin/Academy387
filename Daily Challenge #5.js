

var board = [ 
  ['R','K','B','Q','K','B','K','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','k','b','q','k','b','k','r'] ];

console.log(board.join('\n') + '\n\n');

// pomjeri kraljicu 
board[3][3] = board[7][3];
board[7][3] = ' ';
console.log(board.join('\n'));

// pomjeri konja
board[5][2] = board[7][1];
board[7][1] = ' ';
console.log(board.join('\n'));

