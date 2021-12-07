const fs = require('fs');

export const readFile = (path: String, ) => {
    const file = fs.readFileSync(path,'utf8');
    return file;
}
