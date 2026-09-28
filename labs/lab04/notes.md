# NOTES

One guard clause I used was on the increment selection thing, making it so it had to be at least 0.1. Without that
clause, the user was able to select really small and weird values, and that just made it ugly.

When I tested out-of-range inputs, an error message came up, becuase I used my clauses correctly. However, this 
wasn't always the case, at first some clauses weren't used correctly, and my program would just generate infinite
rows instead of printing an error. (If the selected row count was that high.)

I would only need to change my if statement to include another difficulty value, as everything else mainly references
the experiences ID directly.
