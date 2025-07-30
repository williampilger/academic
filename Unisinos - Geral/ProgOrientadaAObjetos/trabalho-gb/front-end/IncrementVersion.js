var fs = require('fs');

console.log('Incrementing build number...');

var files = ['public/manifest.json', 'package.json'];

const IncrementVersion = (filename) => {

    fs.readFile( filename ,function(err,content) {
        if (err) throw err;
        var metadata = JSON.parse(content);
        
        var version = metadata.version.split('.');
        metadata.version = `${version[0]}.${version[1]}.${ Number(version[2])+1 }`;
        fs.writeFile(filename, JSON.stringify(metadata, null, 2),function(err){
            if (err) throw err;
            console.log(`Current build number: ${metadata.version}`);
        })
    });
}

files.forEach( (file) => {
    IncrementVersion(file);
});
