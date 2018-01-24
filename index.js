

function querydb(where, limit, callback){
    let result = `${where}${limit}`;
    setTimeout(function(){
        callback(null, result);
    }, 1000)
    //
}

querydb("a", "b", function(error, result){
    console.log("Error: ", error);
    console.log("Resultado: ", result);
    querydb("c", "d", function(error, result){
        console.log("Error: ", error);
        console.log("Resultado: ", result);
    })
})


var promise2 = function (where, limit){
    let result = `${where}${limit}`;
    return new Promise (function (resolve, reject){
        if (result != null){
            resolve(result);
        }else{
            reject(Error("Doesn't Work"));
        } 
    })
}

promise2("aaa ", " bbbb").then(function (uid){
    console.log(uid);
    promise2(uid, "aaa ").then(function (uid){
        console.log(uid);
        promise2(uid, "aaa ").then(function (uid){
            console.log(uid);
            promise2(uid, "aaa ").then(function (uid){
                console.log(uid);
            }).catch(function (error){
                    console.log(error);
            });
        }).catch(function (error){
                console.log(error);
        });
    }).catch(function (error){
            console.log(error);
        });
}).catch(function (error){
    console.log(error);
});

promise2("a", "b") // 'ab'
    .then( (res) => {
        return promise2(res, '->c')
    }) // 'ab->c'
    .then(function (res) {
        return promise2(res, '->z')
    }) // 'ab->c->z'
    .then(console.log); // Imprime 'ab->c->z'

async function asincrono(where, limit){
    var a = await promise2(where, limit);
    console.log(a);
    var b = await promise2(a, where);
    console.log(b);
    var c = await promise2(b, where);
    console.log(c);
    var d = await promise2(c, where);
    console.log(d);
}

//asincrono("aaa ", " bbbb");
/*ar promise1 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        return `${where}${limit}`
    }, 1000)
  });
  
console.log(promise1);

//console.log(querydb("a", "b"))
/***********************************************************/
/*Declare dos callbacks con diferente tiempo y los mande llamar todos al mismo tiempo,
utilice un contador para que cada vez que acabara el proceso sumara uno y compruebo despues de eso si se llego a 5*/
function querydb1(where, limit, counter, callback){
    let result = `${where}${limit}`;
    counter++;
    setTimeout(function(){
        callback(null, result);
        if(counter == 5){
            console.log("Everyone Finish");
        }
    }, 1000)
    return counter;
    //
}

function querydb2(where, limit, counter, callback){
    let result = `${where}${limit}`;
    
    setTimeout(function(){
        callback(null, result);
        counter++;
        if(counter == 5){

            console.log("Everyone Finish");
        }
    }, 100)
    return counter;
    //
}

var counter = 0; 

counter = querydb1("tarea ", "en proceso1", counter, function(error, result){
    console.log("Resultado: ", result);
});
counter = querydb2("tarea ", "en proceso2", counter, function(error, result){
    console.log("Resultado: ", result);
});
counter = querydb1("tarea ", "en proceso3", counter, function(error, result){
    console.log("Resultado: ", result);
});
counter = querydb2("tarea ", "en proceso4", counter, function(error, result){
    console.log("Resultado: ", result);
});
counter = querydb1("tarea ", "en proceso5", counter, function(error, result){
    console.log("Resultado: ", result);
});