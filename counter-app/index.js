// Given an n x n binary matrix 
// Example 1:

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
// Example 2:

// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 

// Constraints:

// n == image.length
// n == image[i].length
// 1 <= n <= 20
// images[i][j] is either 0 or 1.
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let first = 0;
    let sec = 0;
    let arr = [][];
    for (let i = 0; i < image.length; i++){
         
         for (let j = 0; j < image.length; j++) {
            
             if (image[i][j] === 0) {
                  arr = image[i][j]++;
             }
             else if (image[i][j] === 1) {
                 arr = image[i][j]--;
             }
        }
        
     } 
};

    