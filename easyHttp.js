function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make a HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {

    this.http.open('GET', url, true);
    
    // this is required to assign this to a context which the below function can get the data from
    let self = this;
    this.http.onload = function() {

        if (self.http.status === 200) {
            callback(self.http.responseText);
        }else {
            callback('Error:' + self.http.status)
        }
    }

    this.http.send();
}

// Make a HTTP POST Request
easyHTTP.prototype.post = function (url, callback) {

    this.http.open('POST', url, true); 
    
    // No need here as arror functon sorts out context problems
    this.http.onload = ()=>{

        if (this.http.status === 201) {
            callback(this.http.responseText)
        } else {
            callback('Error:' + this.http.status)
        }
    }
    this.http.send(); 
    
}


// Make a HTTP PUT Request
easyHTTP.prototype.put = function (url, callback) {

    this.http.open('PUT', url, true); 
    
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