//argv will be a list of all the arguments starting from the node and the file.
//This is how we deal with creating dynamic values in file operation executions.
process.argv.splice(0, 2);
console.log("--".repeat(30));

let x = process.argv[0];
let y = process.argv[1];
if( x === y){
    console.log("True");
}
else{
    console.log("False");
}
