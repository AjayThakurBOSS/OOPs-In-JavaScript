// Execution Context

// const userName = 'ajay';

// function login() {
//     const password = "secret";
//     console.log(`${userName} is loging in using ${password}`);
// }

// login();


function callApi(method) {
    return function() {

        //api
        console.log(`fetching data from ${url} using ${method}`);
    }
}

const url = "http://example.com/api";
callApi('GET')(url);