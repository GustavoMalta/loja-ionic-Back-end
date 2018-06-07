module.exports = function () {
    controller = {};
    
    
    controller.gravar = function (req, res) {
        var fs = require('fs');
        fs.writeFile('/arquivo.txt', 'Hello Node.js', (err) => {
            if (err)
                throw err;
            console.log('The file has been saved!');
        });
    };
    return controller;
}