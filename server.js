import express from 'express';
import { bootstrap } from './google-api.js';

const app = express();
const port = 3005;

// cors 를 허용해준다.
// import cors
import cors from 'cors';
app.use(cors());

app.get('/', async (req, res) => {
    const data = await bootstrap();
    res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
