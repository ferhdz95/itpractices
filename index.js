

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
/* */