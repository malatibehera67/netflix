let str = "Ab,c,de!$";

//  res []

function reverse(str) {
  console.log("str ", str);
  let res = [];
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    console.log("i j ", i, j);
    if (!isLetter(str.charAt(i))) {
      res[i] = str.charAt(i);
      i++;
      console.log("i special ", i, j);
    }
    if (!isLetter(str.charAt(j))) {
      res[j] = str.charAt(j);
      j--;
      console.log("j special ", i, j);
    }
    console.log(
      " isLetter(str.charAt(i) && isLetter(str.charAt(j) ",
      i,
      j,
      str.charAt(i),
      str.charAt(j),
      isLetter(str.charAt(i) && isLetter(str.charAt(j)))
    );
    if (isLetter(str.charAt(i)) && isLetter(str.charAt(j))) {
      res[j] = str.charAt(i);
      res[i] = str.charAt(j);
      i++;
      j--;
      console.log(" i j not special ", i, j);
    }
    // i++;
    // j--;
    console.log(" res ", res);
  }
  console.log(" res ", res);
  return res.join("");
}
function isLetter(ch) {
  if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
    return true;
  }
  return false;
}
console.log(" print ");
console.log(reverse(str));
