(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.pi = function() {
        return 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;
    };
    
    ext.sub_pi = function(min, max) {
        return "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679".substring(min-1,max+1);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'pi', 'pi'],
            ['r', 'digits %n to %n of pi', 'sub_pi', 1, 10]
        ]
    };

    // Register the extension
    ScratchExtensions.register('Unused Blocks for Extensions', descriptor, ext);
})({});
