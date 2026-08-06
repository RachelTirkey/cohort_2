function explainParseInt(value){
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("after parseInt:", result);
}

explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14")