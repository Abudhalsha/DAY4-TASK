//1-Do the below programs in anonymous function & IIFE
//(a) Print odd numbers in an array:-

//IIFE:-
(function(Array){
    for( i=0;i<Array.length;i++){
        if(Array[i]%2!==0){
            console.log(Array[i])
        }
       
    }

})([1,2,3,4,5,6,7,8,9])

//(b) Convert all the strings to title caps in a string array

// anonymous :-
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("abudhal sha "));

//(c)- Sum of all numbers in an array:-

(function (array){
     let sum= 0
    for(let i=0 ; i<array.length ; i++){
        sum= sum+array[i]
    }
    console.log(sum)
})([1,2,3,4,5,6,7,8])



   //(e)- Return all the palindromes in an array"-

   // (g)-Remove duplicates from an array:-

   var arr= ["apple", "mango", "apple",
"orange", "mango", "mango"];
  let removeDuplicates= function (arr) {
   return [...new Set(arr)];
}
 
console.log(removeDuplicates(arr));

