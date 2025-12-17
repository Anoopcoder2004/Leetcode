// Create sets to track numbers seen in each row
// Create sets to track numbers seen in each column
// Create sets to track numbers seen in each 3×3 sub-box

// Loop through each row of the board
  // Loop through each column of the board

    // Get the current cell value

    // Skip the cell if it is empty ('.')

    // Calculate the index of the 3×3 box the cell belongs to

    // Check if the number already exists in the current row,
    // current column, or current 3×3 box

    // If a duplicate is found, the Sudoku is invalid

    // Otherwise, add the number to the row, column, and box sets

// If all cells are processed without conflicts, the Sudoku is valid


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array.from({ length:9},()=>new Set());
    const cols = Array.from({ length:9},()=>new Set());
    const boxes = Array.from({ length:9},()=>new Set());
    
    for(let i = 0;i < 9; i++){
        for(let j = 0;j < 9;j ++){
            const num = board[i][j];
            if(num ==="."){
                continue;
            }
            const boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3);
            if(rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)){
                return false;
            }
            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }
    return true;
};