var add = function(a,b){
    return a+b;
}

function complexExp(add){
    console.warn(add(200,300));
}

complexExp(add);

// annonymous function with call back


// function complexExp(add){
//     console.warn(add(200,300));
// }

// complexExp(function(a,b){
//     return a+b;
// });