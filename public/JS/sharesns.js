function toggleSnsList() {
  const snsList = document.querySelector(".sns-list");
  snsList.classList.toggle("show");

  const icons = document.querySelectorAll('.link-icon, .copy-btn');
  let delay = 0;

  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.toggle('show');
    }, delay);
    delay += 100; 
  });
}

function clip() {
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = "http://115.85.183.132:8000";
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("링크가 복사되었습니다!");
}

function shareTwitter() {
  var sendText = "itTest"; // 전달할 텍스트
  var sendUrl = "http://115.85.183.132:8000/"; // 전달할 URL
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
}
function shareFacebook() {
  var sendUrl = "http://115.85.183.132:8000"; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}
function shareKakao() {
  // 사용할 앱의 JavaScript 키 설정
  Kakao.init("ca85f3701e06028b7519f363fadaaf14");
  // 카카오링크 버튼 생성
  Kakao.Link.createDefaultButton({
    container: "#btnKakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "it-test", // 보여질 제목
      description: "2023 it 능력고사", // 보여질 설명
      imageUrl:
        "https://github.com/ErrorMonkey/it-test-2023/assets/100561986/70ed8baa-5f5f-43cf-9e6e-0808789e0d84", // 콘텐츠 URL
      link: {
        mobileWebUrl: "http://115.85.183.132:8000",
        webUrl: "http://115.85.183.132:8000",
      },
    },
  });
}

// function snsListAni() {
//   const snsList = document.querySelector(".sns-list");
//   const iconArr = document.querySelectorAll(".sns-list li");
//   const iconGroup = document.querySelector(".sns-list li");
//   if (snsList.style.opacity == 1) {
//     snsList.style.opacity = 0;
//     iconArr.forEach((el) => {
//       el.style.transform = "translateY(50%)";
//       el.style.scale = 0 + "%";
//     });
//   } else {
//     snsList.style.opacity = 1;
//     iconArr.forEach((el, i) => {
//       const iconAni = () => {
//         el.style.transform = "translateY(0)";
//         el.style.scale = 100 + "%";
//       };
//       setTimeout(iconAni, 80 * i);
//     });
//   }
// }
