for (var line = "#";
    line.length < 8;
    line += "#")
  console.log(line);


for (var number = 1; number <= 100; number++) {
  var output = "";
  if (number % 3 == 0)
    output += "Fizz";
  if (number % 5 == 0)
    output += "Buzz";
  console.log(output || number);
}

var size =  8
var board = ""

for (var length = 0; length < size; length ++) {
 for (var height = 0; height < size; height++) {
  if((length + height)%2 ==0)
    board += " ";
  else
    board += "#";
}
board += "\n"
}

console.log (board);