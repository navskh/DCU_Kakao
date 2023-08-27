import express from 'express';
import { bootstrap } from './google-api.js';

const app = express();
const port = process.env.PORT || 3000;

// cors 를 허용해준다.
// import cors
import cors from 'cors';
app.use(cors());

app.get('/', async (req, res) => {
    const data = await bootstrap();
    res.send(data);
});

app.get('/dep', async (req, res) => {
    // 주어진 날짜 설정
    const givenDate = new Date('2023-08-28');
    // 현재 날짜
    const currentDate = new Date();
    // 두 날짜 사이의 밀리초 차이
    const differenceInMilliseconds = currentDate - givenDate;
    // 밀리초를 일로 변환 (1일 = 24시간 = 1440분 = 86400초 = 86400000밀리초)
    const differenceInDays =
        Math.floor(differenceInMilliseconds / 86400000) + 1;

    let thisIndex = differenceInDays % 24;
    if (thisIndex == 0) thisIndex = 24;

    const thisDep = await import(`./dep/DEP${thisIndex}일차.json`, {
        assert: { type: 'json' },
    });
    res.send(thisDep);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
