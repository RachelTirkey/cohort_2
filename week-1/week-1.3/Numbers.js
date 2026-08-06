function explainParseInt(value){
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("after parseInt:", result);
}

explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value){
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("after parseFloat:", result);
}

explainParseFloat("42");
explainParseFloat("42px");
explainParseFloat("3.14")