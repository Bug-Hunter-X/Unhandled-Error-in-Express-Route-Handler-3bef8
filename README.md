# Unhandled Error in Express Route Handler

This repository demonstrates a common error in Express.js applications: missing error handling in route handlers.  Specifically, the `/users/:id` route doesn't handle cases where the requested user ID is invalid (e.g., not found in the database).

The `bug.js` file contains the flawed code.  The `bugSolution.js` file shows the corrected code with proper error handling.

This can lead to unexpected crashes or 500 Internal Server Errors.  Robust error handling improves application stability and provides better user experience.

## How to Reproduce

1. Clone this repository.
2. Run `npm install express`
3. Run `node bug.js`
4. Try accessing `/users/1` (assuming such a user exists) and `/users/99999` (assuming such a user does not exist). Observe the difference in behavior.

## Solution

The solution includes comprehensive error handling using try...catch blocks and sending appropriate error responses to the client.