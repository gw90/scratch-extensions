(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };
    
    ext.inf = function() {
        return Infinity;
    };
    
    ext.neg_inf = function() {
        return -Infinity;
    };
    
    ext.inf_b = function(num) {
        return isFinite(num);
    };
    
    ext.mod = function(uno, dos) {
        return uno % dos;
    };
    
    ext.set_cookie = function(name, value) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        alert(name + "=" + value + "; " + expires);
        //document.cookie = name + "=" + value + "; " + expires;
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

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', '%n ^ %n', 'power', 2, 3],
            ['r', 'infinity', 'inf',],
            ['r', 'negative infinity', 'neg_inf'],
            ['b', '%n is finite?', 'inf_b'],
            ['r', 'remainder of %n divided by %n', 'mod'],
            [' ', 'set cookie with name:%s and value:%s', 'set_cookie', 'hello', 'world'],
            ['r', 'value of cookie with name:%s', 'read_cookie', 'hello'],
            
        ],
        url:'https://gw90.github.io/scratch-extensions/my-ex.js'
    };

    // Register the extension
    ScratchExtensions.register('Useful Block Extension', descriptor, ext);
    
    
})({});
