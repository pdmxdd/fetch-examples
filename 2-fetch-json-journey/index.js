require('isomorphic-fetch');

// what does fetch return?
const fetchPromise = fetch('http://localhost:8000/example.json', {"method": "GET"});

// what the heck is a promise?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 
// A JS Promis is an object that is a temporary proxy while some action is still being evaluated and has to do with asynchronous programming.
// console.log(fetchPromise);

// According to the docs we can assign a promise handler function (callback) that will execute once the promise has resolved
const jsonPromise = fetchPromise.then(function(response) { // the parameter (response) is the promise resolved data
    // let's print out what this fetchPromise resolution is:
    // console.log(response);
    // console.log(response.body);

    // this is great, but I still don't see the response body of the HTTP request
    // from more research a fetch() method returns a Response Object
    // https://developer.mozilla.org/en-US/docs/Web/API/Response

    // it looks like I can call .json() on this response object and it will return the JSON payload of this Response object.

    json = response.json();
    // console.log(`our json is: ${json}`);
    // oh dear lord, response.json() returns a Promise....
    // i'm going to have to unpack this with a .then() method as well....
    return json;
});

json = jsonPromise.then(function(json) {
    // please, please, be json and not another promise
    // console.log(json);
    // there we go we finally have some json

    // can we return it and work with it outside of this .then() callback function?
    return json;
});

// it doesn't look like we can -- and it printed it out in a different order (a clue as to what is going on)
console.log(json);
