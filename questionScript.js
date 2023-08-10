const questionDiv = document.getElementById('question');
const imageContainer = document.getElementById('image-container');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// 상태바 Property
const progressBar = document.getElementById('progress-bar');
const question_count = document.getElementById('question-count');
let progress = 0;
let point = 0;

// 질문 Array
const questions = [
    '출근 후 카페에 갔다.',
    '아 맞다! 쿠폰..',
    '(띠링~)\n이번 달 통신비 고지서가 날아왔다.',
    '편의점에 갔다. ',
    '퇴근 후 마트에 간다.\n봉투 필요하세요?',
    '최신 유행 드라마가 보고싶은데,\nOTT 구독할까?\n(넷플릭스, 왓차, 디즈니)',
    '덥다!\n샤워 한 판 때릴까?',
    '배고픈데...\n저녁은 배달시킬까?',
    '핸드폰 살 때',
    '하늘에서\n500만원이 떨어졌다!',
];

// 이미지 Array
const images = [
    './Images/demo.png', 
    './Images/demo.png', 
    './Images/demo.png', 
    './Images/demo.png', 
    './Images/demo.png', 
    './Images/demo.png', 
    './Images/demo.png', 
    './Images/demo.png', 
    './Images/demo.png', 
    './Images/demo.png', 
    './Images/demo.png', 
    './Images/demo.png', 
];

const button1Text = [
    '500원 할인 받는 텀블러에 주세요!',
    '도장 찍어주세요~',
    '알뜰폰이라 통신비 저렴하지롱!',
    '통신사 할인할게요!',
    '장바구니 챙겨왔지롱!',
    '친구에게 톡보낸다. 너 남는 자리 있냐?',
    '물부족국가에서...! 물 아깝게!\n10분만에 후다닥',
    '당연히 더 싼 알뜰배달로 시켜야지!',
    '요금제, 가격, 비교 꼼꼼히 해야지!',
    '적금 들어야겠다'
]
const button2Text = [
    '일회용 컵에 주세요',
    '(쌩~ 나가기)',
    '조금 비싼데... 고정 지출이니 어쩔 수 없지',
    '그냥 결제해주세요!',
    '봉투 하나 주세요!',
    '지금 바로 결제해서 본다',
    '1시간동안 따닷~하게 샤워',
    '식는건 못참아, 반짝배달!',
    '무조건 최신 유행 폰으로~',
    '꽁돈이다! 바로 질러야지'
]

// 현재 질문 Index
let currentQuestionIndex = 0;

// 버튼 2개 클릭 이벤트
button1.addEventListener('click', function () {
    // 버튼 선택함에 따라 상태바 업데이트
    updateProgressBar();
    // 질문이 끝나기 전까진 showPage, 질문이 끝난다면 showResult
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        point += 10;
        showPage();
    } else {
        showResult();
    }
});

button2.addEventListener('click', function () {
    updateProgressBar();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showPage();
    } else {
        showResult();
    }
});

// 선택지 버튼 문구 변경
function updateButtonText() {
    button1.textContent = button1Text[currentQuestionIndex]
    button2.textContent = button2Text[currentQuestionIndex]
}

// 질문이 있을 때 showPage
function showPage() {
    showImage();
    showQuestion();
    updateButtonText();
}

// 이미지 보여주기
function showImage() {
    const imageUrl = images[currentQuestionIndex];
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image">`;
}

// 질문 출력하기
function showQuestion() {
    questionDiv.textContent = questions[currentQuestionIndex];
}

// 로딩 후 결과 페이지로 이동
function showResult() {
    const loadingContainer = document.getElementById("loadingContainer");

    // Show loading container
    loadingContainer.style.display = "flex";

    // Wait for a brief moment (e.g., 2 seconds)
    setTimeout(function() {
        // Hide loading container
        loadingContainer.style.display = "none";

        // Redirect to another HTML file
        window.location.href = `resultPage.html?option=${point}`;
        // 다음 페이지로 넘어갈 때 URL에 매개변수 추가
    }, 2000); // 2000 milliseconds = 2 seconds

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

// 상태바 업데이트
function updateProgressBar() {
    progress += 1; 
    if (progress > 10) {
        progress = 10;
    }
    progressBar.style.width = `${progress * 10}%`;
    question_count.textContent = `${progress}/10`;

    // 페이지 로딩이 끝나면 상태바 숨기기
    if (progress === 100) {
        setTimeout(function () {
            progressBar.style.display = 'none';
        }, 500); // 0.5초 뒤에 상태바 숨김
    }
}


// 초기 페이지 로드 시 첫 번째 페이지 표시
showPage();

