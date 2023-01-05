const wordsArray = 
[
    'rope',
    'pore',
    'repo',
    'red rum',
    'murder',
    'listen',
    'silent',
    'endeavour'
];

console.log(wordsArray)

let array = [];
const arraySorted = [];
let notFound = true;
let added = false;
let firstTime = true
let doNothing = 0
let trueArray = [];

searchArray = (checkWord) =>{
    trueArray = [];
    arraySorted.forEach((oneArray) =>{
        const check = oneArray.some(usedWord => usedWord === checkWord);
        trueArray.push(check)
    });
    const checkForTrue = trueArray.some(found => found === true)
    return checkForTrue;
};

while(notFound){
    wordsArray.forEach((word, indexWord)=>{
        wordsArray.every((checkWord, index)=>{
            if(word.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') === checkWord.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')){
                if(!firstTime){
                    if(searchArray(checkWord)){
                        doNothing = 1;
                        return true;
                    }if(!searchArray(checkWord) && indexWord === wordsArray.length - 1){
                        array.push(wordsArray[index]);
                        arraySorted.push(array);
                        array = [];
                        return false
                    }if(index === wordsArray.length - 1){
                        array.push(wordsArray[index]);
                        arraySorted.push(array);
                        array = [];
                        return false;
                    }else {
                        array.push(wordsArray[index]);
                        return true;
                    }
                } if(firstTime){
                    array.push(wordsArray[index]);
                }
            } if (index != wordsArray.length - 1){
                return true;
            } if (index === wordsArray.length - 1 && array.length != 0){
                arraySorted.push(array);
                firstTime = false;
                array = [];
                notFound = false
            }    
        });
    });
};

console.log(arraySorted);