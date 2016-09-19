
const stars = function(count) //function that creates rows of stars.
{                            // for example stars(5) prints "*****"
  if(count === 0)
    return '';

  return '*' + stars(count - 1);
};

const spaces = function(count) //function that will handle spacing.
{                             //the same function as stars() but with
  if(count === 0)            // space character instead of obelisk(*)
    return '';

  return " " + spaces(count - 1);
};

const triangleStars = function(count) //main body of function that will
{                                     // create triangle from stars
  if(count === 0)                   //termination case
    return '';
  //prints 1 smaller triangle, goes to newline, then handles spacing and adds new stars row
  //as you can sense, number of spaces is depending on the row we print.
  //so when we are in upper part, we have 1 asterisk and others are spaces.
  // the number of them is number of rows - 1 because that 1 is asterisk
  // in the lower part we have all asterisks and no spaces.
  return triangleStars(count - 1) + "\n" + spaces(row_count - count) + stars(2 * count - 1);
};

const row_count = 5;
console.log(triangleStars(row_count));
