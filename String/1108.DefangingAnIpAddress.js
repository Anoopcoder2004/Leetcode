// Approach

// iterate through all string elements and  push  to op array.
// when the current element is "." replace that with "[.]" and push to op array

// /**
//  * @param {string} address
//  * @return {string}
//  */
var defangIPaddr = function(address) {
    let op = "";
    for(ch of address){
        if(ch == "."){
            op+="[.]";
            continue;
        }
        op+=ch;
    }return op;
    
};