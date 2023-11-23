// SNS 공유하기 목록 보기
function toggleSnsList() {
  const snsList = document.querySelector(".sns-list");
  snsList.classList.toggle("show");

  const icons = document.querySelectorAll(".link-icon, .copy-btn");
  let delay = 0;

  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.toggle("show");
    }, delay);
    delay += 100;
  });
}

// 링크 복사하기
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

// 트위터(X) 공유하기
function shareTwitter() {
  var sendText = "itTest";
  var sendUrl = "http://115.85.183.132:8000/";
  window.open(
    `https://twitter.com/intent/tweet?url=${sendUrl}&text=${sendText}`,
    "2023_IT_TEST",
    "width=400, height=400"
  );
}

// 페이스북 공유하기
function shareFacebook() {
  var sendUrl = "http://115.85.183.132:8000";
  window.open(
    "http://www.facebook.com/sharer/sharer.php?u=" + sendUrl,
    "facebook",
    "toolbak=0, status=0.width=655,height=520"
  );
}

// 카카오톡 공유하기
function shareKakao() {
  Kakao.init("ca85f3701e06028b7519f363fadaaf14");
  Kakao.Link.createDefaultButton({
    container: "#btnKakao",
    objectType: "feed",
    content: {
      title: "it-test",
      description: "2023 it 능력고사",
      imageUrl:
        "http://github.com/ErrorMonkey/it-test-2023/assets/100561986/70ed8baa-5f5f-43cf-9e6e-0808789e0d84",
      link: {
        mobileWebUrl: "http://115.85.183.132:8000",
        webUrl: "http://115.85.183.132:8000",
      },
    },
  });
}
