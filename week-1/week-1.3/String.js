function getLength(str){
    console.log("Original String:", str);
    console.log("Length:", str.length);

}
getLength("Hello World");


function findIndexOf(str, target){
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
    console.log("Index;", str.lastIndexOf(target));
   
}
findIndexOf("Hello World World World", "World");