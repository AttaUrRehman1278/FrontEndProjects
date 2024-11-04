// console.log("This is the problem to count number of palindromes");

// function countPalindromicSubstrings(s) {
//     let count = 0;
//             function expandAroundCenter(left, right) {
//                 while (left >= 0 && right < s.length && s[left] === s[right]) {
//                     count++;  // Found a palindromic substring
//                     left--;
//                     right++;
//                 }
//             }

//             for (let i = 0; i < s.length; i++) {
//                 // Odd-length palindromes (centered at one character)
//                 expandAroundCenter(i, i);

//                 // Even-length palindromes (centered between two characters)
//                 expandAroundCenter(i, i + 1);
//             }

//             return count;
//         }

// console.log(countPalindromicSubstrings("abba")); // Output: 6
// console.log(countPalindromicSubstrings("level")); // Output: 7
function countPalindromicSubstrings(s) {
    const n = s.length;
    let count = 0;

    // Create a 2D DP array initialized to false
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    // Fill the DP table
    for (let i = n - 1; i >= 0; i--) {  // Start from the end of the string
        for (let j = i; j < n; j++) {     // Check each substring starting from 'i' to 'j'
            // Check if substring s[i...j] is a palindrome
            if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                count++; // If it's a palindrome, increment the count
            }
        }
    }

    return count;
}

console.log(countPalindromicSubstrings("abba")); // Output: 6
console.log(countPalindromicSubstrings("level")); // Output: 7
