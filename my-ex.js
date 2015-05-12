(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.report_n = function(str1, str2) {
        // Code that gets executed when the block is run
        return str1 + "" + str2;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'string add %s and %s', 'report_n', "Hello ", "World"]
        ]
    };

    // Register the extension
    ScratchExtensions.register('My extension', descriptor, ext);
})({});
