
const resultDiv = document.getElementById('level');
const imageContainer = document.getElementById('image-container');

const resultTypeLabel = document.getElementById('result-my-type-label');
const resultPsnLabel = document.getElementById('result-my-psn-label');
const saveTipLabel = document.getElementById('result-save-tip-label');

const facebookShareButton = document.getElementById('facebookShareButton');
const twitterShareButton = document.getElementById('twitterShareButton');
const kakaoShareButton = document.getElementById('kakaoShareButton');
const instaShareButton = document.getElementById('instaShareButton');

const useMona = document.getElementById('move-to-mona');
const findMonaPlan = document.getElementById('move-to-find-plan');
const planImg = document.getElementById('recommend-plan-img');
const restartButton = document.getElementById('restart');
const copyLink = document.getElementById('result-copy-link');

const download_result = document.getElementById('download-result');

// 현재 페이지의 URL에서 매개변수 값 읽기
const urlParams = new URLSearchParams(window.location.search);
const point = urlParams.get('option');

const result_level0 = {
    charac_img_path: './Images/mona_character.png',
    level_title_path: './Images/result_title_level0.png',
    type: "사고 싶은 것이 너무 많은 당신!\n월급은 통장을 스쳐지나갈 뿐 ...ㅠㅠ",
    psn: "혹시 왜 통장에 늘 돈이 없는지 고민하고 계시진 않나요? 미래에 대한 걱정보다는 현재의 즐거움과 만족감을 추구하는 성향이예요. \n월급 받으면? 그동안 사고싶었던 모든 것을 다 사버리는 편! 자잘한 소비를 아껴 모으기보다는 한 탕 크게 버는게 낫다고 생각하고, 이번 주 로또 당첨자는 나 아닐까? 기대해요.\n나를 위한 소비를 통해 스트레스를 해소하는 편이고, 때로는 미래에 대한 계획을 간과해 어려움을 겪을 수도 있어요. 그렇기 때문에 금전적인 관리와 미래를 위한 계획을 강화하는 것이 중요합니다.",
    tip: "● 배달 시킬 땐 시간을 넉넉히~ 알뜰배달을 애용해요!\n●적금 들어서 정기적으로 저축하자고요!\n● 태끌 모아 태산! 편의점에서 통신사 할인을 받아요~\n● 알뜰폰으로 바꿔볼까요? 데이터, 전화, 문자 다 무제한으로 쓸 수 있는 요금제가 있어요!",
    plan_img_path: './Images/recommend_plan_level0.png',
    download_img_path: './Images/level0_download.png'
};
const result_level1 = {
    charac_img_path: './Images/mona_character.png',
    level_title_path: './Images/result_title_level1.png',
    type: "약간은 아껴보려 하고있지만\n생각에 그치는 타입! ㅠㅠ",
    psn: "소확행보다 대확행! 일확천금의 꿈을 꿔요.\n일상의 작은 즐거움을 놓치지 않으며, 삶을 풍요롭게 만드는 것에 높은 우선순위를 두는 타입이예요.\n그런 탓에 약속을 거절하지 못해서 친구들 모임에 꼭 참여하게 되기도 해요. 나를 위한 소비를 통해 스트레스를 해소하는 편이라 한번 꽂힌 물건은 계속 생각나고, 끝내 결제 버튼에 손이 가는 당신!\n텀블러를 갖고 다녀야겠다 생각하지만 결국 일회용 컵을 쓰고, 배달 음식을 줄여야겠다고 생각하지만 실천이 안되지는 않나요?\n생각만 했던 절약 방법들을 이번에는 한번 실천해볼까요?",
    tip: "● 샤워는 20분 선으로 끝내기\n● 마트갈 때 장바구니는 필수!\n● 태끌 모아 태산! 편의점에서 통신사 할인을 받아요~\n● 들어놓은 적금은 최대한 유지하는걸 목표로!\n● 알뜰폰으로 바꿔볼까요? 데이터, 전화, 문자 다 무제한으로 쓸 수 있는 요금제가 있어요!",
    plan_img_path: './Images/recommend_plan_level1.png',
    download_img_path: './Images/level0_download.png'
};
const result_level2 = {
    charac_img_path: './Images/mona_character.png',
    level_title_path: './Images/result_title_level2.png',
    type: "소소한 절약 습관을 갖고있는\n성장하는 주인공 타입",
    psn: "스스로 소소한 절약 습관을 갖고있지만 완벽하지는 않다고 생각해요. 그래도 합리적인 소비 습관을 개발하고 낭비를 줄이기 위해 노력하는 모습을 갖고 있어요.\n가끔은 원했던 물건을 충동구매해 스트레스를 해소하려고 하곤 해요. 최저가 찾는 것도 스트레스! 최저가를 꼼꼼히 따져가며 사기보다는 적당한 가격이면 타협해요. 모임을 주도하지는 않지만 친구들이 부르면 모임에 잘 참여하는 편!\n앞으로 미래를 위한 계획을 세우고 지속적인 노력을 통해 절약 능력을 향상시키면 좋을 것 같아요.",
    tip: "● 샤워는 20분 선으로 끝내기\n● 마트갈 때 장바구니는 필수!\n● 태끌 모아 태산! 편의점에서 통신사 할인을 받아요~\n● 들어놓은 적금은 최대한 유지하는걸 목표로!\n● 알뜰폰으로 바꿔볼까요? 데이터, 전화, 문자 다 무제한으로 쓸 수 있는 요금제가 있어요!",
    plan_img_path: './Images/recommend_plan_level2.png',
    download_img_path: './Images/level0_download.png'
};
const result_level3 = {
    charac_img_path: './Images/mona_character.png',
    level_title_path: './Images/result_title_level3.png',
    type: "생활화된 알뜰 습관을 가지고 있는\n현명한 소비자 유형",
    psn: "지혜롭게 절약하고 금전을 관리하는 능력을 가진 유형이에요. 꾸준히 소득을 늘리고 지출을 관리하면서 재정적으로 안정된 미래를 꿈꿔요. \n평소 예산을 세우고 계획을 세워 효율적으로 돈을 쓰는 편이예요. 불필요한 지출은 자제하고, 할인과 혜택을 최대한 활용하려고 노력한답니다. \n종종 자신만의 절약 꿀팁을 친구와 지인들에게 추천해 주기도 해요! 어디 내놓아도 굶어죽지 않을 것 같다는 말을 듣곤 하는 알뜰살뜰한 타입이예요.\n이미 잘 실천하고 있지만, 아래의 절약 팁도 참고해보세요~",
    tip: "● 샤워는 20분 선으로 끝내기\n● 마트갈 때 장바구니는 필수!\n● 태끌 모아 태산! 편의점에서 통신사 할인을 받아요~\n● 들어놓은 적금은 최대한 유지하는걸 목표로!\n● 알뜰폰으로 바꿔볼까요? 데이터, 전화, 문자 다 무제한으로 쓸 수 있는 요금제가 있어요!",
    plan_img_path: './Images/recommend_plan_level3.png',
    download_img_path: './Images/level0_download.png'
};
const result_level4 = {
    charac_img_path: './Images/mona_character.png',
    level_title_path: './Images/result_title_level4.png',
    type: "낭비? 그게 뭐죠?\n500원씩 아껴 집도 살 예정입니다만?",
    psn: "생활력 높고 저축하는 습관을 갖고 계시군요! \n돈을 쓸 때보다 통장에 모이는 돈을 확인할 때 더 즐거움을 느껴요. 계획적인 소비를 선호하고 한 물건을 살 때도 신중히 고민해요. 가성비를 중요시해서 무언가를 살 때, 싸고 질 좋으면 장땡! 작은 돈이라도 소중하게 생각하며 알뜰살뜰히 모으는 편이예요. 장 보러 갈 땐 장바구니를, 카페에 갈 땐 텀블러를 쓰곤 해요. 한 푼 두 푼 아껴 부자되자! 식당에 갈 땐 쿠폰을 무조건 찍고, 편의점에 갈 땐 할인방법이 머릿속에 박혀있습니다.이미 알뜰폰도 사용하고 계시죠? 박수쳐드립니다 짝짝짝!",
    tip: "● 샤워는 20분 선으로 끝내기\n● 마트갈 때 장바구니는 필수!\n● 태끌 모아 태산! 편의점에서 통신사 할인을 받아요~\n● 들어놓은 적금은 최대한 유지하는걸 목표로!\n● 알뜰폰으로 바꿔볼까요? 데이터, 전화, 문자 다 무제한으로 쓸 수 있는 요금제가 있어요!",
    plan_img_path: './Images/recommend_plan_level4.png',
    download_img_path: './Images/level0_download.png'
};

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
// 모나 요금제 찾아보기
findMonaPlan.addEventListener('click', function () {
    window.location.href = 'https://mobilemona.co.kr/view/plan/findListNext.aspx'
});
// 결과 링크 복사
copyLink.addEventListener("click", () => {
    const currentLink = window.location.href; // 현재 페이지의 링크 가져오기

    // 가상의 텍스트 입력 상자 생성하여 복사
    const tempInput = document.createElement("input");
    tempInput.value = currentLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("링크가 복사되었습니다.");
  });

// 결과 다운로드 버튼 클릭 이벤트
download_result.addEventListener('click', function () {
    // 새로운 링크 요소 생성
    const imageUrl = './Images/level0_download.png'
    const link = document.createElement("a");
    link.href = imageUrl;

    // 다운로드할 파일 이름 설정 (선택적)
    const filename = imageUrl.split("/").pop(); // URL에서 파일 이름 추출
    link.download = filename;

    // 링크를 클릭하여 다운로드 시작
    document.body.appendChild(link);
    link.click();

    // 링크 요소 삭제
    document.body.removeChild(link);
});

// 결과 페이지
function showResult(point) {
    if(point >= 0 && point <= 20) {
        level_title_img = result_level0.level_title_path
        character_img = result_level0.charac_img_path
        level_type = result_level0.type
        level_psn = result_level0.psn
        level_tip = result_level0.tip
        plan_img = result_level0.plan_img_path
    } else if(point >= 30 && point <= 40) {
        level_title_img = result_level1.level_title_path
        character_img = result_level1.charac_img_path
        level_type = result_level1.type
        level_psn = result_level1.psn
        level_tip = result_level1.tip
        plan_img = result_level1.plan_img_path
    } else if(point >= 50 && point <= 60) {
        level_title_img = result_level2.level_title_path
        character_img = result_level2.charac_img_path
        level_type = result_level2.type
        level_psn = result_level2.psn
        level_tip = result_level2.tip
        plan_img = result_level2.plan_img_path
    } else if(point >= 70 && point <= 80) {
        level_title_img = result_level3.level_title_path
        character_img = result_level3.charac_img_path
        level_type = result_level3.type
        level_psn = result_level3.psn
        level_tip = result_level3.tip
        plan_img = result_level3.plan_img_path
    } else if(point >= 90 && point <= 100) {
        level_title_img = result_level4.level_title_path
        character_img = result_level4.charac_img_path
        level_type = result_level4.type
        level_psn = result_level4.psn
        level_tip = result_level4.tip
        plan_img = result_level4.plan_img_path
    } 

    imageContainer.innerHTML = `<img src=${character_img} alt="Image">`;
    resultDiv.innerHTML = `<img src=${level_title_img} alt="Image">`;
    planImg.src = plan_img

    resultTypeLabel.textContent = level_type
    resultTypeLabel.style.fontSize = '24px';
    resultTypeLabel.style.whiteSpace = 'pre-line';
    resultTypeLabel.style.lineHeight = '34.75px';
    resultTypeLabel.style.margin = '20px 110px'
    resultTypeLabel.style.textAlign = 'center';
    resultTypeLabel.style.fontWeight = 500

    resultPsnLabel.textContent = level_psn
    resultPsnLabel.style.fontSize = '20px';
    resultPsnLabel.style.whiteSpace = 'pre-line';
    resultPsnLabel.style.lineHeight = 1.5;
    resultPsnLabel.style.margin = '20px 53px'
    resultPsnLabel.style.textAlign = 'start'

    saveTipLabel.textContent = level_tip
    saveTipLabel.style.fontSize = '20px';
    saveTipLabel.style.whiteSpace = 'pre-line';
    saveTipLabel.style.lineHeight = 1.5;
    saveTipLabel.style.margin = '20px 53px'
    saveTipLabel.style.textAlign = 'start'
    saveTipLabel.style.lineHeight = '28.96px'
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

// 카카오톡 공유하기 기능
Kakao.init('ff7a17f75d28483cf203553d036aa097');
function kakaoShare() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${resultContent(point)}`,
        description: '절약 유형 테스트 결과입니다.',
        imageUrl: './Images/result_title.png',
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
function resultContent(point) {
    if(point >= 0 && point <= 20) {
        result = "Lv. 0 오늘만 사는 파산아티스트"
    } else if(point >= 30 && point <= 40) {
        result = "Lv. 20 상상으로 절약하는 메타버스 절약러"
    } else if(point >= 50 && point <= 60) {
        result = "Lv. 39 아낀다고 아꼈는데! 알뜰 초급자"
    } else if(point >= 70 && point <= 80) {
        result = "Lv. 63 내꿈은 저축왕 알뜰살뜰 주부7단"
    } else if(point >= 90 && point <= 100) {
        result = "Lv. 99 매너온도 99% 맑은 눈의 절약킹"
    } 

    return result
}

showResult(point);