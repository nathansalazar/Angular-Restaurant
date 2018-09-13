//requires
const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require( 'body-parser' );

//uses
app.use(express.static( 'server/public' ));

//PORT listening
app.listen(PORT, function(){
    console.log('server running on:', PORT);
})