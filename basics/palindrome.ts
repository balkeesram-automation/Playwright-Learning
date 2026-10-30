const word = "madam";
let result = "";
for(let i=word.length-1;i>=0;i--){
    result= result+word[i];
}
if (word==result)
    console.log("Palindrome");
else
    console.log("Not a Palindrome");
