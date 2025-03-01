import express from 'express';
import { PORT } from './config.js';
import expressApp from './express-app.js';

const StartServer = async() => {

    // console.log(`Starting the Express App...${JSON.stringify(process.env)}`)
    const app = express();
    
    await expressApp(app);

    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(`Some error occurred: ${JSON.stringify(err)}`);
        process.exit();
    })
}

StartServer();