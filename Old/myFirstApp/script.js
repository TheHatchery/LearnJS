// always declare all used modules at the top of the file
const fs = require('fs');

// promptly is a more modern i/o tool to gather user input that supports async/await, avoiding the need for callbacks.
const promptly = require('promptly'); // see - https://www.npmjs.com/package/promptly

// we can only use async/await features inside a function that has been 
// declared as asynchronous with the async keyword before the function keyword
// so let's define a 'main' function that will be invoked later on.
const main = async () => {

    const text = await fs.readFile('../text.txt', 'utf-8');
    const textByLine = text.split("\n") ; // split text into lines based on newline character
    const wordToLookFor = await promptly.prompt('What word are you looking for?');
    
    // use array.reduce to iterate over each line in the textByLine variable and return an object for each iteration
    const match = textByLine.reduce(
        (result, textLine, lineIndex) => {
            const wordsForLine = textLine.split(' ');
            const matchingWordIndex = wordsForLine.findIndex(val => val === wordToLookFor);

            if (matchingWordIndex > -1) {
                // we have a match! (indexes are zero based!)
                return {
                    matchingLineNumber: lineIndex + 1,
                    matchingWordNumber: matchingWordIndex + 1,        
                };
            }

            // there was no match for this line, so return the previous result for this iteration of the reduce loop
            return result;
        }, 
        { 
            matchingLineNumber: 0,
            matchingWordNumber: 0,
        },
    );

    if (match.matchingLineNumber > 0) {
        console.log(`We found a match for "${wordToLookFor}" on line number ${match.matchingLineNumber} as word number ${match.matchingWordNumber}.`);
    } else {
        console.log(`No match found  for "${wordToLookFor}". Please try another word.`)
    }
};


// invoke our 'main' function, then terminate the script.
main();