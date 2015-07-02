(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function(url) {
        // Code that gets executed when the block is run
        xmlhttp=new XMLHttpRequest();
        
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'contents of %s', 'get_contents', 'http://scratch.mit.edu/',],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Get Contents', descriptor, ext);
})({});