const apiUrl = 'http://ec2-43-201-231-11.ap-northeast-2.compute.amazonaws.com:3001'; // API의 주소
const pplCount = document.getElementById('ppl-count');

let count = 0;

// API 호출 함수
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('API 호출 중 문제가 발생했습니다.');
    }
    data = await response.json();
    count = data.visitors;
    console.log('API 응답 데이터:', data);

    console.log(count);

    let value = `현재까지 ${count}명이 참여했어요!`;
    pplCount.innerText = value;
  } catch (error) {
    console.error('API 호출 오류:', error.message);
  }
}

// API 호출 실행
fetchData();