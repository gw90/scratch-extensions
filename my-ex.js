(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.random = function() {
        // Code that gets executed when the block is run
        return Math.floor(Math.random());
    };
    
    ext.report_n = function(num) {
        // Code that gets executed when the block is run
        return num;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'random number between 1 and 10', 'random'],
            ['r', 'report %n', 'report_n', 10]
        ]
    };

    // Register the extension
    ScratchExtensions.register('My extension', descriptor, ext);
})({});
