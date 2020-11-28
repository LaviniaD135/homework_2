function addTokens(input, tokens){
    if(typeof(input) != "string") throw new Error('Invalid array format');
    if(input.length < 6) throw new Error('Input should have at least 6 characters');
    if(!input.includes("...")) return input;
     
    
    tokens.forEach(token => {
     let resultValue ="${x}"
     let [value] = Object.values(token);
     resultValue = resultValue.replace("x",value);
     let result = input.replace("...",resultValue);
     input = result;
    });
    return input;
 }
 
 const app = {
     addTokens: addTokens
 }
 
 module.exports = app;
 
 