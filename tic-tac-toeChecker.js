// 1 if "X" won,
// 2 if "O" won,
// -1 if the board is not yet finished (there are empty spots),
// 0 if it's a cat's game (i.e. a draw).

function isSolved(board) {

  if (board[0][0] === board[0][1] && board[0][0] === board[0][2] &&  board[0][0] !== 0 ) return board[0][0];
  if (board[1][0] === board[1][1] && board[1][0] === board[1][2] &&  board[1][0] !== 0 ) return board[1][0];
  if (board[2][0] === board[2][1] && board[2][0] === board[2][2] &&  board[2][0] !== 0 ) return board[2][0];
  if (board[0][0] === board[1][0] && board[0][0] === board[2][0] &&  board[0][0] !== 0 ) return board[0][0];
  if (board[0][1] === board[1][1] && board[0][1] === board[2][1] &&  board[0][1] !== 0 ) return board[0][1];
  if (board[0][2] === board[1][2] && board[0][2] === board[2][2] &&  board[0][2] !== 0 ) return board[0][2];
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2] &&  board[0][0] !== 0 ) return board[0][0];
  if (board[0][2] === board[1][1] && board[0][2] === board[2][0] &&  board[0][2] !== 0 ) return board[0][2];
  if (board.join().includes('0')) return -1
  return 0 
}

console.log(isSolved([[0, 1, 2], [0, 1, 2], [2, 1, 0]]));
console.log(isSolved([[2, 2, 2], [0, 1, 2], [2, 1, 0]]));
console.log(isSolved([[0, 2, 2], [0, 1, 2], [2, 1, 0]]));
console.log(isSolved([[1, 2, 1], [2, 2, 1], [1, 1, 2]]));