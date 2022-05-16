//My first node.js app reading a text file on the desktop

var fs = require("fs");
var text = fs.readFileSync("../Node/text.txt").toString('utf-8');
var textByLine = text.split(" ")
console.log(textByLine);

textByLine.forEach(checkLength);

function checkLength(item){
	var numLength = item.length;
	console.log(numLength);
}








