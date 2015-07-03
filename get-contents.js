(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.get_contents = function(url) {
        // Code that gets executed when the block is run
        console.log(url);
        $.get(url, function(responseText) {
            return responseText;
            console.log(responseText)
        });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'contents of %s', 'get_contents', 'https://scratch.mit.edu/'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Get Contents', descriptor, ext);
})({});
