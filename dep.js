async function loadDEP() {
    const response = await fetch(
        'https://dcustats-02545af8aae9.herokuapp.com/dep',
    );
    const data = await response.json();

    // 주말인 경우 처리
    if (data.isWeekend) {
        $('#depTitle').text('오늘은 쉽니다');
        // 혹은 다른 표시 방법도 가능
        return; // 추가 로직을 실행하지 않고 종료
    }

    parseDEP(data?.default);
}

function parseDEP(data) {
    // title 먼저 찍어주기
    $('#depTitle').text(data.title);

    const { content } = data;

    const thisLength = content.length;
    // content 이등분하기
    const firstHalf = content.slice(0, thisLength / 2);
    const secondHalf = content.slice(thisLength / 2, thisLength);

    // 이등분한 content 를 각각 찍어주기
    printDEP(firstHalf, '#depFirst');
    printDEP(secondHalf, '#depSecond');
}

function printDEP(data, target) {
    console.log(data);
    data.forEach(element => {
        const title =
            element.대제목 + ' ' + element.중제목 + ' ' + element.소제목;
        const { text, verse } = element;

        $(target).append(`<p class="lgTitle">${element.대제목}</p>`);
        $(target).append(`<p class="mdTitle">${element.중제목}</p>`);
        $(target).append(`<p class="smTitle">${element.소제목}</p>`);
        $(target).append(
            `<li class="depContent"><a href='#' class="text-link" onclick='openModal("${title}", "${verse}", "${text}")'>${element.verse} <a></li>`,
        );
    });
}

function openModal(title, verse, text) {
    $('#modalTitle').text(title);
    $('#modalVerse').text(verse);
    $('#modalText').text(text);
    $('#myModal').show();
}

function closeModal() {
    $('#myModal').hide();
}

window.onclick = function (event) {
    if (event.target.id == 'myModal') {
        $('#myModal').hide();
    }
};
