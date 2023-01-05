const wordsArray = 
[
    'rope',
    'pore',
    'repo',
    'red rum',
    'murder',
    'repo',
    'listen',
    'silent',
    'endeavour',
];

let array = [];
const arraySorted = [];
let counter = 0;
let sorting = true;

console.log(wordsArray)

wordsArray.forEach((word)=>{
    while(sorting){
        
        if(word.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') === wordsArray[counter].replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')){
            array.push(wordsArray[counter]);
            if(counter < wordsArray.length - 1){
                counter = counter + 1;
            }else{
                arraySorted.push(array);
                sorting = false
            }
        }else{
            if(array.length === 0){
                break;
            } else {
                arraySorted.push(array);
                array = [];
                break;
            }
            
        }
    };
});

console.log(arraySorted);

