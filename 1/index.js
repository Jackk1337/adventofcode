// Include fs module
var fs = require("fs");

// Use fs.readFile() method to read the file
fs.readFile("input.txt", "utf8", function (err, data) {
  //Split the lines
  lines = data.split("\n");
  var total = 0;
  lines.forEach((line) => {
    console.log(line);
    line = line.replace(/oneight/g, "18");
    line = line.replace(/eighthree/g, "83");
    line = line.replace(/twone/g, "21");
    line = line.replace(/eightwo/g, "82");
    line = line.replace(/one/g, "1");
    line = line.replace(/two/g, "2");
    line = line.replace(/three/g, "3");
    line = line.replace(/four/g, "4");
    line = line.replace(/five/g, "5");
    line = line.replace(/six/g, "6");
    line = line.replace(/seven/g, "7");
    line = line.replace(/eight/g, "8");
    line = line.replace(/nine/g, "9");
    console.log(line);
    //For each line, get just the numbers
    const r = /[0-9]/g;
    var lineNumberArray = line.match(r);
    var firstItem = lineNumberArray[0];
    var lastItem = lineNumberArray[lineNumberArray.length - 1];
    var lineNumber = firstItem + lastItem;
    total = total + parseInt(lineNumber);
    console.log("First: " + firstItem);
    console.log("Last: " + lastItem);
    console.log(lineNumber);
  });
  console.log(total);
});
