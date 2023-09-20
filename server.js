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
    const givenDate = new Date('2023-09-21');
    // 현재 날짜
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        // 주말인 경우
        res.send({ isWeekend: true });
        return;
    }

    let differenceInDays = 0;
    for (
        let d = new Date(givenDate);
        d <= currentDate;
        d.setDate(d.getDate() + 1)
    ) {
        const checkWeek = d.getDay(); // 0 (Sunday) ~ 6 (Saturday)
        if (checkWeek !== 0 && checkWeek !== 6) {
            // 제외: 0 (일요일), 6 (토요일)
            differenceInDays++;
        }
    }

    let thisIndex = differenceInDays % 24;
    if (thisIndex == 0) thisIndex = 24;

    try {
        const thisDep = await import(`./dep/DEP${thisIndex}일차.json`, {
            assert: { type: 'json' },
        });
        res.send(thisDep);
    } catch (error) {
        res.status(500).send({ message: 'Error loading the JSON file.' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
