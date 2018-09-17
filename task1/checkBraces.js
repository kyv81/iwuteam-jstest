const checkBraces = str => {
    const stack = [];
    const bracesMap = {
        "(": ")",
        "[": "]",
        "{": "}",
        "<": ">"
    };
    
    const keys = Object.keys(bracesMap);
    const vals = Object.values(bracesMap);

    const re = str.match(/[()\[\]{}<>]/g);

    if (!re) {
        return 0;
    }

    const len = re.length;

    for (let i = 0; i < len; i++) {
        if (keys.includes(re[i])) {
            stack.push(re[i]);
        } else {
            if (!stack.length) {
                return 1;
            }
            
            const lastElement = stack.pop();
            const currentElement = re[i];
            const lastIndex = keys.indexOf(lastElement);
            const currentIndex = vals.indexOf(currentElement);

            if (lastIndex !== currentIndex) {
                return 1;
            }
        }
    }

    return 0;
}

console.log(checkBraces("---(++++)---")); // 0
console.log(checkBraces("")); // 0
console.log(checkBraces("before ( middle []) after ")); // 0
console.log(checkBraces(") (")); // 1
console.log(checkBraces("} {")); // 1
console.log(checkBraces("(  [  <>  ()  ]  <>  )")); // 0
console.log(checkBraces("   (      [)")); // 1
console.log(checkBraces("<(   >)")); // 1