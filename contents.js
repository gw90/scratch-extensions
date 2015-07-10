(function(ext) {
  
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };


    ext.get-contents = function(url) {
        // Code that gets executed when the block is run
        file_get_contents("http://"+url);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'contents of http://%s', 'get-contents', 'scratch.mit.edu'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Get Contents', descriptor, ext);
})({});

