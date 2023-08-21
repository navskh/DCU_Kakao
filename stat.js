// jQuery로 table의 행을 클릭하면 해당 행의 정보를 가져와서 modal에 뿌려준다.

window.onload = async function () {
    $('#todayDate').text(`(${new Date().toLocaleDateString()})`);
    // fetch 를 localhost:3000 을 호출하여 데이터를 가져온다.
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < 2; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createFirework(x, y);
    }

    makeDCU(data);
};

function isDidIt(x) {
    return x != '' && x != '#N/A';
}

// data 가지고 table 만들어주기
function makeDCU(data) {
    data.forEach(element => {
        console.log(element);
        const thisBrightEmoji =
            brightEmoji[Math.floor(Math.random() * brightEmoji.length)];
        const thisSadEmoji =
            sadEmoji[Math.floor(Math.random() * sadEmoji.length)];

        const thisBR = isDidIt(element[1]) ? element[1] : 0;

        const thisOYO = [];
        isDidIt(element[2])
            ? thisOYO.push(thisBrightEmoji)
            : thisOYO.push(thisSadEmoji);
        isDidIt(element[3])
            ? thisOYO.push(thisBrightEmoji)
            : thisOYO.push(thisSadEmoji);
        isDidIt(element[4])
            ? thisOYO.push(thisBrightEmoji)
            : thisOYO.push(thisSadEmoji);

        let prayer = '';
        isDidIt(element[5]) != ''
            ? (prayer = thisBrightEmoji)
            : (prayer = thisSadEmoji);

        let thisEV = isDidIt(element[6]) ? element[6].split('-') : [0, 0, 0, 0];

        $('#broList').append(`<tr>
          <td>${element[0]}</td>
          <td>${thisBR}</td>
          <td style="font-size: 25px">${thisOYO.join('-')}</td>
          <td style="font-size: 25px">${prayer}</td>
          <td>${thisEV.join('-')}</td>
        </tr>`);
    });
}

const brightEmoji = ['😀', '😃', '😄', '😁', '😆', '🤗'];
const sadEmoji = ['😭', '😓', '😢', '😥', '😰'];
