const{table}=require('table');

const data=[
    ['ID','NAME','SURNAME','AGE','SAVOL','ANSWER','JAVOB','RESULT'],
    [1,'Ali','Valiyev',23,'nima?','a','a','✓']
];

const output=table(data);
console.log(output);