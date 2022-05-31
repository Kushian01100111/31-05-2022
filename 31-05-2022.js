// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
      let string = "",
          arr =  [];
    if(typeof iterable == 'string'){
      string = iterable.split("")
    }else{
      string = iterable
    }
    for(let i = 0; i < string.length; i++){
      if(!arr.includes(string[i])){
         arr.push(string[i])
      }else if(string[i] !== string[i+1]){
        arr.push(string[i+1])
      }
    }
    
    if( isNaN(arr[0])){
       return arr.join("").split("")
    }else{
      return arr.map(n => Number(n)).filter(n =>{
        if(!isNaN(n)){
          return n
        }
      })
    }
    
   
  }