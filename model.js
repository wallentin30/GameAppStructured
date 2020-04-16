var apiURL = "https://games-world.herokuapp.com";

//  function getGamesList() {
//     return fetch(apiURL + '/games')

// }
// 

//async await
async function getGamesList() {
    const response = await fetch(apiURL + "/games", {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    const arrayOfGames = response.json();

    console.log(arrayOfGames);
    

    return arrayOfGames;
}


// function getGamesList(callbackFunction){
//     fetch(apiURL + "/games", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         }
//     }).then(function(response){
//        // console.log("request response ", response);
        
//         return response.json();
//     }).then(function(arrayOfGames){
//         //console.log('raspuns la request :', arrayOfGames);
        
//         callbackFunction(arrayOfGames);
//     });
// }


//async await
async function deleteGame(gameID) {
    const newDelete = await fetch(apiURL + "/games/" + gameID, {
        method: "DELETE"
    })
    const response = newDelete.text();
    return response;
}

// //promise with callback
// function deleteGame(gameID, callbackFunction) {
//     fetch(apiURL + "/games/" + gameID, {
//         method: "DELETE"
//     }).then(function(r){
//         return r.text();
//     }).then(function(apiresponse){
//         callbackFunction(apiresponse);
//     });
// }

// async await
async function createGameRequest(gameObject) {
    const response = await fetch(apiURL + "/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: gameObject
    });
    
    const createdGame = response.json();

    return createdGame;
}

// // promise with callback
// function createGameRequest(gameObject, callbackCreateGame){
//     fetch(apiURL + "/games", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: gameObject
//     }).then(function(response){
//         return response.json();
//     }).then(function(createdGame){
//        // console.log(createdGame);
//         callbackCreateGame(createdGame);
//     });
// }


//async function


async function reloadData() {
    const reload = await fetch(apiURL + "/regenerate-games", {
        method: "GET",
        headers: {
            'Content-Type' : "application/x-www-form-urlencoded"
        }
    })
    const response = reload.text();
    return response;
}


// //promise callback
// function reloadData() {
//     fetch(apiURL + "/regenerate-games", {
//         method: "GET",
//         headers: {
//             'Content-Type' : "application/x-www-form-urlencoded"
//         }
//     }).then(function(response){
//         return response.text();
//     }).then(function(regenerateGame){
//     })
// }

// async await
async function editGame(id, updatedGameObject) {
    const response = await fetch(`${apiURL}/games/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type' : "application/x-www-form-urlencoded"
        },
        body: updatedGameObject
    });
    const gameResponse = response.json();

    return gameResponse;
}




/*function editGame(id, updatedGameObject, callback){
  
    fetch(`${apiURL}/games/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type' : "application/x-www-form-urlencoded"
        },
        body: updatedGameObject
    }).then(function(response){
        return response.text();
    }).then(function(editGameResponse) {
       callback(editGameResponse)  
    })
}*/








// "application/json"
// {"cheie": "valoare", "cheie2": "valoare2"}

//application/x-www-form-urlencoded
// cheie=valoare&cheie2=valoare