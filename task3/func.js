const findMaxPosInStr = (str, firstChar, secondChar) => {
    if (str === '' || (firstChar === '' && secondChar === '')) {
        return -1;
    }

    const firstIdx = str.toLowerCase().lastIndexOf(firstChar);
    const secondIdx = str.toLowerCase().lastIndexOf(secondChar); 
    
    if (secondChar === '' || firstIdx !== -1 && secondIdx === -1) {
        return firstIdx;
    } else if (firstChar === '' || secondIdx !== -1) {
        return secondIdx;
    } else if (firstIdx !== -1 && secondIdx !== -1) {
        return Math.max(firstIdx, secondIdx);
    } else {
        return -1;
    }
}

console.log(findMaxPosInStr('')); // -1 
console.log(findMaxPosInStr('Some text')); // -1
console.log(findMaxPosInStr('Some text', 's')); // 0
console.log(findMaxPosInStr('Some text', 'm', 't')); // 8
console.log(findMaxPosInStr('Some text', 'm', '')); // 2
console.log(findMaxPosInStr('Some text', '', 't')); // 8
console.log(findMaxPosInStr('Some text', '', '')); // -1