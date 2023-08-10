const startButton = document.getElementById('startButton');
const imageContainer = document.getElementById('image-container');

// 게임 시작하기 버튼
startButton.addEventListener('click', function () {
    window.location.href = 'question.html';
});

function animateImage() {
    const test_character = document.getElementById("test_character");
    
    // 이미지 크기와 투명도를 변화시켜 애니메이션 효과 생성
    test_character.style.width = "75%";
    test_character.style.opacity = "1";
    // 일정 시간 후 이미지 축소하는 애니메이션
    setTimeout(function() {
        test_character.style.width = "50%"; // 원하는 크기로 조정
    }, 400); // 400ms(0.4초) 후에 축소 애니메이션 시작
}

// 페이지 로드 시 이미지 애니메이션 시작
window.onload = function() {
    animateImage();
};
