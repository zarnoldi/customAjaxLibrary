// https://jsonplaceholder.typicode.com/

const http = new easyHTTP; 

// GET posts

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {

// if (err) {
//     console.log(err);
// } else {
//     console.log(response);
// }
// });


// http.post('https://jsonplaceholder.typicode.com/posts', function (err, response) {

// if (err) {
//     console.log(err);
// } else {
//     console.log(response);
// }
// });


// http.put('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {

// if (err) {
//     console.log(err);
// } else {
//     console.log(response);
// }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {

if (err) {
    console.log(err);
} else {
    console.log(response);
}
});


