function toggleSnsList() {
  const snsList = document.querySelector(".sns-list");
  snsList.classList.toggle("show");
}

let nowUrl = window.location.href;
function copyUrl() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard.writeText(nowUrl).then((res) => {
    alert("주소가 복사되었습니다!");
  });
}

function clip() {
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  // 여기 수정하면 될거 같습니다?
  url = "window.location.href";
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
      imageUrl: "http://115.85.183.132:8000", // 콘텐츠 URL
      link: {
        mobileWebUrl: "http://115.85.183.132:8000",
        webUrl: "http://115.85.183.132:8000",
      },
    },
  });
}
