function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make a HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {

    this.http.open('GET', url, true);
    
    this.http.onload = ()=> {

        if (this.http.status === 200) {
            callback(null, self.http.responseText);
        }else {
            callback('Error:' + this.http.status, null)
        }
    }

    this.http.send();
}

// Make a HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {

    this.http.open('POST', url, true); 
    this.http.setRequestHeader('Content-type', 'application/json')
    
    this.http.onload = ()=>{

        if (this.http.status === 201) {
            callback(null, this.http.responseText, this.http.status)
        } else {
            callback('Error:', null, this.http.status )
        }
    }
  
    this.http.send(JSON.stringify(data)); 
    
}


// Make a HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {

    this.http.open('PUT', url, true); 
    
    // No need here as arror functon sorts out context problems
    this.http.onload = ()=>{

        if (this.http.status === 200) {
            callback(null, this.http.responseText, this.http.status)
        } else {
            callback('Error:', null, this.http.status)
        }
    }
    this.http.send(JSON.stringify(data)); 
    
}


// Make a HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {

    this.http.open('DELETE', url, true); 
    
    // No need here as arror functon sorts out context problems
    this.http.onload = ()=>{

        if (this.http.status === 200) {
            callback(this.http.responseText)
        } else {
            callback('Error:' + this.http.status)
        }
    }
    this.http.send(); 
    
}