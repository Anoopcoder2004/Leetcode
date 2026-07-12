function rotateTheBox(boxGrid: string[][]): string[][] {
    const m: number = boxGrid.length;
    const n: number = boxGrid[0].length;

    for(let row = 0; row < m; row++){
        let write: number = n - 1;

        for(let col = n - 1; col >= 0; col--){

            if(boxGrid[row][col] === '*'){
                write = col - 1;
            }
            else if(boxGrid[row][col] === '#'){
                boxGrid[row][col] = '.';
                boxGrid[row][write] = '#';
                write--;
            }
        }
    }
    //Rotate
    const result: string[][] = Array.from({length:n},()=>Array(m).fill('.'));

    for(let row = 0; row < m; row++){
        for(let col = 0; col < n; col++){
            result[col][m - 1 - row] = boxGrid[row][col]; 
        }
    }return result;

};

// Step 1:
// Simulate gravity before rotation.
// Since rotating the box clockwise makes gravity act downward,
// we can instead let every stone fall to the right.

// For each row:
// - Start a write pointer at the last column.
// - Traverse from right to left.
// - If an obstacle ('*') is found, reset the write pointer
//   to the cell just before the obstacle.
// - If a stone ('#') is found, move it to the write position
//   and decrement the write pointer.
// - Empty cells ('.') are ignored.

// Step 2:
// Rotate the matrix 90° clockwise.
// The mapping is:
// rotated[col][m - 1 - row] = box[row][col]

// Return the rotated matrix.

// Complexity
// Time Complexity: O(m × n)
// Gravity simulation: O(m × n)
// Rotation: O(m × n)
// Space Complexity: O(m × n)
// Required for the rotated matrix.