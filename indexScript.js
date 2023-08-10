const startButton = document.getElementById('startButton');
const imageContainer = document.getElementById('image-container');

// 게임 시작하기 버튼
startButton.addEventListener('click', function () {
    window.location.href = 'question.html';
});

imageContainer.innerHTML = `<img src='./Images/demo.png' alt="Image">`;