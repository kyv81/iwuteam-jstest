const testObj = {
    a: {
        b: {
            c: {
                d: 1
            }
        }
    }
};

const deepCopy = obj => {
    const newObj = {};
    
    for (let prop in obj) {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            newObj[prop] = deepCopy(obj[prop]);
        } else {
            newObj[prop] = obj[prop];
        }
    }

    return newObj;
};

const newObj = deepCopy(testObj);
testObj.a.b.c.d = 2;
console.log(testObj); // {a: {b: {c: {d: 2}}}} 
console.log(newObj); // {a: {b: {c: {d: 1}}}}
