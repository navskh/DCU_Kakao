// d12e932af4f61210b599c667d0fd392bf28fd310

// import express from 'express';
// 위에서 다운로드 받은 json 파일을 import 한다 (저는 이름을 변경했습니다.)
import credential from './credential.json' assert { type: 'json' };
const { client_email, private_key } = credential;

import { google } from 'googleapis';

async function bootstrap() {
    // json 파일을 가지고 인증할 때 다음과 같이 사용합니다.
    // scope는 spread sheet만 주었습니다.
    const authorize = new google.auth.JWT(client_email, null, private_key, [
        'https://www.googleapis.com/auth/spreadsheets',
    ]);
    // google spread sheet api 가져오기
    const googleSheet = google.sheets({
        version: 'v4',
        auth: authorize,
    });
    // 실제 스프레드시트 내용 가져오기
    const context = await googleSheet.spreadsheets.values.get({
        spreadsheetId: '1pxqm76kCDFkolyGVgmGs96_ydmHDfTfQh6pqiuzFqXI',
        range: 'A1:H10000',
    });

    const thisData = context.data.values;

    thisData.forEach(data => {});
}
bootstrap();

/**
 * 데이터 정리는 어떻게 해줄 것이냐.
 * 이름으로 push 해서 만드는 식으로 하면 됨.
 * 성 영훈 {
 *      BR : number,
 *      NEW: O/X,
 *      CUR: O/X,
 *      OLD: O/X,
 *      PR: O/X,
 *      EV: num-num-num-num (시도 숫자로 집계한다.)
 * }
 */

const broList = ['이영기', '성영훈', '박태준'];

class dcu {
    constructor() {
        this.BR = br;
        this.NEW = new_verse;
        this.CUR = cur_verse;
        this.OLD = old;
        this.PR = pr;
        this.EV = ev;
    }
}

class Bro {
    constructor(name) {
        this.name = name;
        this.myDCU = [];
    }
    add(dcu) {
        this.myDCU.push(dcu);
    }
}
