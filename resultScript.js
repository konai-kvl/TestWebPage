const facebookShareButton = document.getElementById('facebookShareButton');
const twitterShareButton = document.getElementById('twitterShareButton');
const kakaoShareButton = document.getElementById('kakaoShareButton');

const imageContainer = document.getElementById('image-container');
const resultDiv = document.getElementById('result');

// 현재 페이지의 URL에서 매개변수 값 읽기
const urlParams = new URLSearchParams(window.location.search);
const point = urlParams.get('option');

// 공유하기 버튼
facebookShareButton.addEventListener('click', function () {
    shareOnFacebook();
});
twitterShareButton.addEventListener('click', function () {
    shareOnTwitter();
});
kakaoShareButton.addEventListener('click', function () {
    // shareOnFacebook();
});

// 결과창
function showLevel() {
    imageContainer.innerHTML = `<img src="Image.jpg" alt="Image">`;

    resultDiv.textContent = `${resultContent(point)}`;
    resultDiv.style.fontSize = '24px';
    resultDiv.style.textAlign = 'center';
    resultDiv.style.whiteSpace = 'pre-line';
    resultDiv.style.lineHeight = 1.5;
    resultDiv.style.font = 'bold';

    // document.querySelector('.quiz-container').appendChild(resultDiv);
    document.appendChild(resultDiv);
}

function resultContent(point) {
    if(point >= 0 && point <= 20) {
        result = "Lv. 0\n오늘만 사는 파산아티스트"
    } else if(point >= 30 && point <= 40) {
        result = "Lv. 20\n상상으로 절약하는 메타버스 절약러"
    } else if(point >= 50 && point <= 60) {
        result = "Lv. 39\n아낀다고 아꼈는데! 알뜰 초급자"
    } else if(point >= 70 && point <= 80) {
        result = "Lv. 63\n내꿈은 저축왕 알뜰살뜰 주부7단"
    } else if(point >= 90 && point <= 100) {
        result = "Lv. 99\n매너온도 99% 맑은 눈의 절약킹"
    } 

    return result
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}
function shareOnTwitter() {
    const text = encodeURIComponent('Check out this awesome website!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

showLevel();