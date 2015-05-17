(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.set_cookie = function(name, value) {
        var today = new Date();
        var yyyy = today.getFullYear();
        yyyy = yyyy+10;
        document.cookie=name+"="+value+";expires=Wed, 18 Dec "+yyyy+" 12:00:00 GMT";
        //document.cookie = name + "=" + value + "; Wed, 18 Dec 2023 12:00:00 GMT";
        //document.cookie=name+"="+value+"; expires=Thu, 18 Dec 2015 12:00:00 UTC;";
        //alert(name+"="+value);
    };
    
    ext.read_cookie = function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    };
    
    ext.del_cookie = function(name){
        document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
    
    function delCookie(name) {
        document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
    
    ext.del_all_cookies = function(name){
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++){
            delCookie(cookies[i].split("=")[0]);
        }
        //
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'set cookie with name:%s and value:%s', 'set_cookie', 'hello', 'world'],
            [' ', 'delete cookie with name:%s', 'del_cookie', 'hello'],
            ['r', 'value of cookie with name:%s', 'read_cookie', 'hello'],
            [' ', 'delete all cookies', 'del_all_cookies'],
            
        ],
        url:'http://gw90.github.io/My-Scratch-Extension/'
    };

    // Register the extension
    ScratchExtensions.register('Cookie', descriptor, ext);
    
    
})({});
