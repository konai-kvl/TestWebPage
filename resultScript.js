
const resultDiv = document.getElementById('level');
const imageContainer = document.getElementById('image-container');
const resultContentLabel = document.getElementById('result');

const facebookShareButton = document.getElementById('facebookShareButton');
const twitterShareButton = document.getElementById('twitterShareButton');
const kakaoShareButton = document.getElementById('kakaoShareButton');
const instaShareButton = document.getElementById('instaShareButton');

const useMona = document.getElementById('use-mona');
const restartButton = document.getElementById('restart');

const download_result = document.getElementById('download-result');
const testResultContainer = document.getElementById('result-container')

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
    kakaoShare();
});
instaShareButton.addEventListener('click', function () {
    if (isInstagramAppInstalled()) {
        openInstagramApp();
    } else {
        redirectToInstagramWebsite();
    }
});
function isInstagramAppInstalled() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes("instagram");
}
function openInstagramApp() {
    // Instagram 앱으로 이동하는 스킴을 호출
    window.location.href = "instagram://";
}
function redirectToInstagramWebsite() {
    // 웹 브라우저에서 Instagram 사이트로 이동
    window.location.href = "https://www.instagram.com";
}

// 테스트 다시하기 버튼
restartButton.addEventListener('click', function () {
    window.location.href = 'question.html'
});
// 모나 서비스 이용해보기 버튼
useMona.addEventListener('click', function () {
    window.location.href = 'https://mobilemona.co.kr'
});

// 결과 다운로드 버튼 클릭 이벤트
download_result.addEventListener('click', function () {
    const capture = document.querySelector("#capture")
    html2canvas(capture).then(canvas => {
        saveImg(canvas.toDataURL('image/jpg'), '결과 이미지');
    });
});

const saveImg = (uri, filename) => {
    let link = document.createElement('a');

    document.body.appendChild(link);

    link.href = uri;
    link.download = filename;
    link.click();

    document.body.removeChild(link);
};

// 결과창
function showLevel() {
    imageContainer.innerHTML = `<img src='./Images/demo.png' alt="Image">`;

    resultDiv.textContent = `${resultContent(point)}`;
    resultDiv.style.fontSize = '24px';
    resultDiv.style.textAlign = 'center';
    resultDiv.style.whiteSpace = 'pre-line';
    resultDiv.style.lineHeight = 1.5;
    resultDiv.style.font = 'bold';

}

function resultContent(point) {
    if(point >= 0 && point <= 20) {
        level = "Lv. 0\n오늘만 사는 파산아티스트"
    } else if(point >= 30 && point <= 40) {
        level = "Lv. 20\n상상으로 절약하는 메타버스 절약러"
    } else if(point >= 50 && point <= 60) {
        level = "Lv. 39\n아낀다고 아꼈는데! 알뜰 초급자"
    } else if(point >= 70 && point <= 80) {
        level = "Lv. 63\n내꿈은 저축왕 알뜰살뜰 주부7단"
    } else if(point >= 90 && point <= 100) {
        level = "Lv. 99\n매너온도 99% 맑은 눈의 절약킹"
    } 

    return level
}

function showResult() {
    resultContentLabel.textContent = "결과입니다.".repeat(100)
    resultContentLabel.style.fontSize = '18px';
    resultContentLabel.style.textAlign = 'center';
    resultContentLabel.style.whiteSpace = 'pre-line';
    resultContentLabel.style.lineHeight = 1.5;
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
function shareOnInstagram() {
    
}

// 카카오톡 공유하기 기능
Kakao.init('ff7a17f75d28483cf203553d036aa097');
function kakaoShare() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${resultContent(point)}`,
        description: '절약 유형 테스트 결과입니다.',
        imageUrl: 'https://github.com/gom1n/ImageSwipeWebTest/assets/87636557/84296335-c191-4c23-a3a9-6ab776f8cf3b',
        link: {
          mobileWebUrl: 'https://konai-kvl.github.io/TestWebPage/',
          webUrl: 'https://konai-kvl.github.io/TestWebPage/',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    })
}


showLevel();
showResult();