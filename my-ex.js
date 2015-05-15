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
        //document.cookie=name+"="+value;
        alert(name+"="+value);
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
            
        ]
        url: 'https://gw90.github.io/scratch-extensions/my-ex.js'
    };

    // Register the extension
    ScratchExtensions.register('Useful Block Extension', descriptor, ext);
    
    
})({});
