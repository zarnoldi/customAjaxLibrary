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

const data = {
    title: 'my post', 
    body: 'This is a post'

}

// // POST
// http.post('https://jsonplaceholder.typicode.com/posts', data,  function (err, response, status) {

// if (err) {
//     console.log(err + status);
// } else {
//     console.log(`status ${status} - ${response}`);
// }
// });

// PUT
http.put('https://jsonplaceholder.typicode.com/posts/99', data, function (err, response, status) {

if (err) {
    console.log(err + status);
} else {
    console.log(`status ${status} - ${response}`);
}
});

// // DELETE
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {

// if (err) {
//     console.log(err);
// } else {
//     console.log(response);
// }
// });
