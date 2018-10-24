const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app
    .use((req, res) => res.send('Hello World!'))
    .listen(port, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Server listening on ${port}`)
    });
