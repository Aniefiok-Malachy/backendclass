console.log('Node Module Wrapper Explorer Demo');
console.log('_filename in wrapper Explorer', __filename);
console.log('_dirname in wrapper Explorer', __dirname);

module.exports.greet = function (name){
    console.log(`Hello ${name}`)
}

