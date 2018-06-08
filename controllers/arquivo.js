module.exports = function () {
    controller = {};
    
    
    controller.gravar = function (req, res) {
        var fs = require('fs');
        fs.writeFile('./Contatos.txt', JSON.stringify(req.body), {flag: "a"} , (err) => {
            if (err)
                throw err;
            console.log('The file has been saved!');
        });
    };
    return controller;
}