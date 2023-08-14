const express = require('express');
const axios = require('axios');

const app = express();

app.get('/oauth/callback', async (req, res) => {
    const code = req.query.code;

    try {
        const { data } = await axios.post(
            'https://kauth.kakao.com/oauth/token',
            {
                grant_type: 'authorization_code',
                client_id: '27693bf47a4aa957cd926851e42af215',
                redirect_uri: 'https://developers.kakao.com/tool/demo/oauth',
                code: code,
            },
        );

        const accessToken = data.access_token;
        console.log(accessToken);
        // 이후 accessToken을 사용하여 사용자 정보 등을 얻을 수 있습니다.

        res.send('로그인 성공!');
    } catch (error) {
        console.log(error.message);
        res.send('로그인 실패');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
