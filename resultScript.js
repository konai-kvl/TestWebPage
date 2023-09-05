
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
    charac_img_path: './Images/Result/Level0/level1_charac.png',
    level_title_path: './Images/Result/Level0/result_title_level0.png',
    type_img_path: './Images/Result/Level0/level0_type.png',
    psn_img_path: './Images/Result/Level0/level0_psn.png',
    tip_img_path: './Images/Result/Level0/level0_tip.png',
    plan_img_path: './Images/Result/Level0/recommend_plan_level0.png',
    download_img_path: './Images/Result/Level0/lv0 오늘만 사는 파산 아티스트.png'
};
const result_level1 = {
    charac_img_path: './Images/Result/Level1/level2_charac.png',
    level_title_path: './Images/Result/Level1/result_title_level1.png',
    type_img_path: './Images/Result/Level1/level1_type.png',
    psn_img_path: './Images/Result/Level1/level1_psn.png',
    tip_img_path: './Images/Result/Level1/level1_tip.png',
    plan_img_path: './Images/Result/Level1/recommend_plan_level1.png',
    download_img_path: './Images/Result/Level1/lv20 상상으로 절약하는 메타버스 절약러.png'
};
const result_level2 = {
    charac_img_path: './Images/Result/Level2/level3_charac.png',
    level_title_path: './Images/Result/Level2/result_title_level2.png',
    type_img_path: './Images/Result/Level2/level2_type.png',
    psn_img_path: './Images/Result/Level2/level2_psn.png',
    tip_img_path: './Images/Result/Level2/level2_tip.png',
    plan_img_path: './Images/Result/Level2/recommend_plan_level2.png',
    download_img_path: './Images/Result/Level2/lv39 아낀다고 아꼈는데 알뜰 초급자.png'
};
const result_level3 = {
    charac_img_path: './Images/Result/Level3/level4_charac.png',
    level_title_path: './Images/Result/Level3/result_title_level3.png',
    type_img_path: './Images/Result/Level3/level3_type.png',
    psn_img_path: './Images/Result/Level3/level3_psn.png',
    tip_img_path: './Images/Result/Level3/level3_tip.png',
    plan_img_path: './Images/Result/Level3/recommend_plan_level3.png',
    download_img_path: './Images/Result/Level3/lv63 내꿈은 저축왕 알뜰살뜰 주부7단.png'
};
const result_level4 = {
    charac_img_path: './Images/Result/Level4/level5_charac.png',
    level_title_path: './Images/Result/Level4/result_title_level4.png',
    type_img_path: './Images/Result/Level4/level4_type.png',
    psn_img_path: './Images/Result/Level4/level4_psn.png',
    tip_img_path: './Images/Result/Level4/level4_tip.png',
    plan_img_path: './Images/Result/Level4/recommend_plan_level4.png',
    download_img_path: './Images/Result/Level4/lv99 매너온도 99 맑은 눈의 절약킹.png'
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
    window.location.href = 'index.html'
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
    shareContent();
    const currentLink = window.location.href; 
    const tempInput = document.createElement("input");
    tempInput.value = currentLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("링크가 복사되었습니다.");
});


// copyLink.addEventListener("click", () => {
//     const currentLink = window.location.href; // 현재 페이지의 링크 가져오기
//     const thumbnailImageSrc = returnWebShareImg(point); // 썸네일 이미지 경로 설정
  
//     // 가상의 div 요소를 생성합니다.
//     const container = document.createElement("div");
  
//     // 텍스트와 이미지를 div 요소 내에 추가합니다.
//     container.innerHTML = `
//       <a href="${currentLink}">링크</a>
//       <img src="${thumbnailImageSrc}" alt="썸네일 이미지">
//     `;
  
//     // div 요소를 문서에 추가합니다.
//     document.body.appendChild(container);
  
//     // div 요소 내의 내용을 선택하고 복사 명령을 실행합니다.
//     const range = document.createRange();
//     range.selectNode(container);
//     const selection = window.getSelection();
//     selection.removeAllRanges();
//     selection.addRange(range);
  
//     try {
//       // 복사 명령을 실행합니다.
//       document.execCommand("copy");
//       alert("링크와 썸네일 이미지가 복사되었습니다.");
//     } catch (err) {
//       console.error("복사 실패: ", err);
//     }
  
//     // div 요소를 문서에서 제거합니다.
//     document.body.removeChild(container);
//   });
  
  

// 결과 다운로드 버튼 클릭 이벤트
download_result.addEventListener('click', function () {

    if(point >= 0 && point <= 20) {
        download_img_url = result_level0.download_img_path
    } else if(point >= 30 && point <= 40) {
        download_img_url = result_level1.download_img_path
    } else if(point >= 50 && point <= 60) {
        download_img_url = result_level2.download_img_path
    } else if(point >= 70 && point <= 80) {
        download_img_url = result_level3.download_img_path
    } else if(point >= 90 && point <= 100) {
        download_img_url = result_level4.download_img_path
    } 
    // 새로운 링크 요소 생성
    const imageUrl = download_img_url
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
        level_type_img = result_level0.type_img_path
        level_psn_img = result_level0.psn_img_path
        level_tip_img = result_level0.tip_img_path
        plan_img = result_level0.plan_img_path
    } else if(point >= 30 && point <= 40) {
        level_title_img = result_level1.level_title_path
        character_img = result_level1.charac_img_path
        level_type_img = result_level1.type_img_path
        level_psn_img = result_level1.psn_img_path
        level_tip_img = result_level1.tip_img_path
        plan_img = result_level1.plan_img_path
        
    } else if(point >= 50 && point <= 60) {
        level_title_img = result_level2.level_title_path
        character_img = result_level2.charac_img_path
        level_type_img = result_level2.type_img_path
        level_psn_img = result_level2.psn_img_path
        level_tip_img = result_level2.tip_img_path
        plan_img = result_level2.plan_img_path
        
    } else if(point >= 70 && point <= 80) {
        level_title_img = result_level3.level_title_path
        character_img = result_level3.charac_img_path
        level_type_img = result_level3.type_img_path
        level_psn_img = result_level3.psn_img_path
        level_tip_img = result_level3.tip_img_path
        plan_img = result_level3.plan_img_path
        
    } else if(point >= 90 && point <= 100) {
        level_title_img = result_level4.level_title_path
        character_img = result_level4.charac_img_path
        level_type_img = result_level4.type_img_path
        level_psn_img = result_level4.psn_img_path
        level_tip_img = result_level4.tip_img_path
        plan_img = result_level4.plan_img_path
        
    } 

    imageContainer.src = `${character_img}`
    imageContainer.style.width = '78%'
    imageContainer.style.maxWidth = '480px'

    resultDiv.src = `${level_title_img}`
    resultDiv.style.width = '60%'
    resultDiv.style.maxWidth = '480px'

    planImg.src = plan_img

    resultTypeLabel.src = `${level_type_img}`
    resultTypeLabel.style.width = '100%'

    resultPsnLabel.src = level_psn_img
    resultPsnLabel.style.width = '100%'

    saveTipLabel.src = level_tip_img
    saveTipLabel.style.width = '100%'
}

// 카카오톡 공유 이미지 썸네일 경로 반환
function returnKakaoShareImg(point) {
    if(point >= 0 && point <= 20) {
        return 'https://github.com/konai-kvl/TestWebPage/assets/87636557/2a09ff6b-400f-43c3-b314-6d9bd97e08aa'
    } else if(point >= 30 && point <= 40) {
        return 'https://github.com/konai-kvl/TestWebPage/assets/87636557/1c4ddf79-6f77-49ce-b51c-fafc5b048988'
    } else if(point >= 50 && point <= 60) {
        return 'https://github.com/konai-kvl/TestWebPage/assets/87636557/3cfc3572-a21e-42df-bbd2-5a0f45c8bd2a'
    } else if(point >= 70 && point <= 80) {
        return 'https://github.com/konai-kvl/TestWebPage/assets/87636557/36ca8214-16b8-4a3d-b6e7-e57867614b4d'
    } else if(point >= 90 && point <= 100) {
        return 'https://github.com/konai-kvl/TestWebPage/assets/87636557/489a4e0f-3173-4a9f-9586-f48bfe762308'
    } 
}

// 웹링크 공유 이미지 썸네일 경로 반환
function returnWebShareImg(point) {
    if(point >= 0 && point <= 20) {
        return 'https://github.com/konai-kvl/TestWebPage/assets/87636557/26e211f0-762a-44c4-9250-dc0f5698ecee'
    } else if(point >= 30 && point <= 40) {
        return 'https://github.com/konai-kvl/TestWebPage/assets/87636557/d72b2de8-d21c-40b4-8cd3-3d675ad7de5c'
    } else if(point >= 50 && point <= 60) {
        return 'https://github.com/konai-kvl/TestWebPage/assets/87636557/b55fd40e-c1a9-49e9-b326-7e7b42b9c1a6'
    } else if(point >= 70 && point <= 80) {
        return 'https://github.com/konai-kvl/TestWebPage/assets/87636557/77ba98dc-6278-46c5-a2f1-d614346db453'
    } else if(point >= 90 && point <= 100) {
        return 'https://github.com/konai-kvl/TestWebPage/assets/87636557/7342fc26-11f3-4e66-baac-5b673f4a4385'
    } 
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
        imageUrl: returnKakaoShareImg(point),
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
// url, title, image
function shareContent(point) {
    if(point >= 0 && point <= 20) {
        const ogUrlMetaTagURL = document.querySelector('meta[property="og:url"]');
        if (ogUrlMetaTagURL) {
            ogUrlMetaTagURL.setAttribute("content", window.location.href);
        }
        const ogUrlMetaTagTitle = document.querySelector('meta[property="og:title"]');
        if (ogUrlMetaTagTitle) {
            ogUrlMetaTagTitle.setAttribute("content", "Lv. 0 오늘만 사는 파산아티스트");
        }
        const ogUrlMetaTagImage = document.querySelector('meta[property="og:image"]');
        if (ogUrlMetaTagImage) {
            ogUrlMetaTagImage.setAttribute("content", 'https://github.com/konai-kvl/TestWebPage/assets/87636557/26e211f0-762a-44c4-9250-dc0f5698ecee');
        }
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