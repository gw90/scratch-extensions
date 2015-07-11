(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.explode = function(str, sep, num) {
        // Code that gets executed when the block is run
      var myarr = str;
      var myarr = mystr.split(sep);
      var myvar = myarr[num];
      return myvar;

    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'explode %s for %s return %n', 'explode', "hello,world", ",", 1],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Data Blocks', descriptor, ext);
})({});
