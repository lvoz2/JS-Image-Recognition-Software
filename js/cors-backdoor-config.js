// cors-backdoor-config.js
module.exports = {
    
    // Same as the CLI target parameter
    target: 'https://lvoz2.github.io/JS-Image-Recognition-Software/text.txt',
    // Custom Headers
    headers: {
        // Set the common CORS headers
        'Access-Control-Allow-Origin': 'https://lvoz2.github.io/JS-Image-Recognition-Software/number_recognition.html'
    },
    
    // Logger Options
    debug: {
        name: 'cors-backdoor',
        level: 'trace',
        prettyPrint: true
    }
};
