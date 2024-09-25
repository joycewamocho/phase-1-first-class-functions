function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(f){
     const name =function(){
        return "This is a named function"
     }
     return name;
}

function returnsAnAnonymousFunction (){
    return function(){

        return "This is anonymous function"
    }
}