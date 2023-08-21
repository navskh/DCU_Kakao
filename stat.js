// jQuery로 table의 행을 클릭하면 해당 행의 정보를 가져와서 modal에 뿌려준다.

window.onload = async function () {
    // fetch 를 localhost:3000 을 호출하여 데이터를 가져온다.
    const response = await fetch('http://localhost:3000');
    const data = await response.json();

    makeDCU(data);
};

// data 가지고 table 만들어주기
function makeDCU(data) {
    data.forEach(element => {
        console.log(element);
        const thisOYO = [];

        const thisBrightEmoji =
            brightEmoji[Math.floor(Math.random() * brightEmoji.length)];
        const thisSadEmoji =
            sadEmoji[Math.floor(Math.random() * sadEmoji.length)];

        element[2] != ''
            ? thisOYO.push(thisBrightEmoji)
            : thisOYO.push(thisSadEmoji);
        element[3] != ''
            ? thisOYO.push(thisBrightEmoji)
            : thisOYO.push(thisSadEmoji);
        element[4] != ''
            ? thisOYO.push(thisBrightEmoji)
            : thisOYO.push(thisSadEmoji);

        let prayer = '';
        element[5] != '' ? (prayer = thisBrightEmoji) : (prayer = thisSadEmoji);

        $('#broList').append(`<tr>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td style="font-size: 25px">${thisOYO.join('-')}</td>
          <td style="font-size: 25px">${prayer}</td>
          <td>${element[6]}</td>
        </tr>`);
    });
}

const brightEmoji = ['😀', '😃', '😄', '😁', '😆', '🤗'];
const sadEmoji = ['😭', '😓', '😢', '😥', '😰'];
