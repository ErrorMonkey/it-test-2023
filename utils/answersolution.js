const correctAnswers = [
  {
    question:
      "클라우드를 통해 애플리케이션을 개발하는 데 필요한 모든 하드웨어 및 소프트웨어 리소스를 제공하고 관리합니다. 개발자와 IT 운영팀은 인프라 또는 플랫폼을 자체적으로 빌드하고 유지관리할 필요 없이 애플리케이션을 개발, 실행, 관리할 수 있습니다. 고객은 여전히 코드를 작성하고 데이터와 애플리케이션을 관리해야 하지만, 클라우드 서비스 제공업체에서 앱을 빌드하고 배포하는 환경을 관리하고 유지관리하는 서비스는?",
    answer: "A",
    select1: "Paas",
    select2: "Iaas",
    select3: "SaaS",
    select4: "CaaS",
  },
  {
    question:
      "서버리스 컴퓨팅은 클라우드 환경에서 애플리케이션을 실행할 때 서버 관리의 부담을 덜어주는 모델입니다. AWS에서 이를 실현하기 위한 핵심 서비스 중 하나는?",
    answer: "C",
    select1: "EC2",
    select2: "S3",
    select3: "Lambda",
    select4: "RDS",
  },
  {
    question:
      "생성형 언어모델의 취약점을 최소화하기 위한 보안 대책으로 어떤 것이 효과적일까요?",
    answer: "A",
    select1:
      "모델의 훈련 데이터에서 편견을 제거하고 다양한 데이터를 사용하여 학습함.",
    select2:
      "모델이 생성한 텍스트에 대한 감독적인 모니터링 시스템을 구축하여 악의적인 사용을 감지함.",
    select3:
      "사용자가 생성한 텍스트에 대한 검증 시스템을 도입하여 부적절한 내용을 차단함.",
    select4:
      "모델의 활용 영역을 제한하여 특정 도메인 외의 정보를 생성하지 못하도록 함.",
  },
  {
    question:
      "최근 인공지능 기술 활용이 증가하면서 다양한 보안 위협이 증가하고 있다. 머신러닝 학습 과정에서의 적대적 머신러닝 공격 유형 중 다른 것은?",
    answer: "A",
    select1:
      "모델 평가 과정에서의 공격: 훈련된 모델을 평가하는 과정에서 악의적으로 제작된 데이터를 사용하여 모델을 혼동시키는 방식.",
    select2:
      "잡음 주입: 훈련 데이터에 소량의 잡음을 추가하여 모델의 성능을 저하시키거나 오도하게 만드는 방법.",
    select3:
      " 탈옥 공격: 모델이 예측을 수행하는 동안 해당 모델에 대한 추가 정보를 추출하는 시도.",
    select4:
      "레이블 스니핑: 훈련 데이터에 악의적인 의도를 담아 머신러닝 모델이 특정 클래스에 대해 오분류하도록 유도하는 기술.",
  },
  {
    question:
      "TCP/IP 기반 네트워크에서 동작하는 발행-구독 기반의 메시징 프로토콜로 최근 IoT환경에서 자주 사용되고 있는 프로토콜은?",
    answer: "A",
    select1: "MTSP",
    select2: "MQTT",
    select3: "Zigbee",
    select4: "CoAP",
  },
  {
    question:
      "클라우드를 통해 애플리케이션을 개발하는 데 필요한 모든 하드웨어 및 소프트웨어 리소스를 제공하고 관리합니다. 개발자와 IT 운영팀은 인프라 또는 플랫폼을 자체적으로 빌드하고 유지관리할 필요 없이 애플리케이션을 개발, 실행, 관리할 수 있습니다. 고객은 여전히 코드를 작성하고 데이터와 애플리케이션을 관리해야 하지만, 클라우드 서비스 제공업체에서 앱을 빌드하고 배포하는 환경을 관리하고 유지관리하는 서비스는?",
    answer: "A",
  },
  {
    question:
      "무선 통신을 이용하여 개체를 식별하고 정보를 읽거나 쓸 수 있는 기술인 RFID(Radio-Frequency Identification)는 IoT 환경에서 사용될 수 있습니다. RFID를 사용하는 IoT 기술의 예시로 옳은 것은?",
    answer: "C",
    select1: "심박수 측정기",
    select2: "스마트 홈 조명 제어",
    select3: "자동차 주차 관리 시스템",
    select4: "실시간 주식 시세 모니터링",
  },
  {
    question:
      "버전 관리 항목 중 저장소에 새로운 버전의 파일로 갱신하는 것을 의미하는 용어는?",
    answer: "D",
    select1: "형상 감사(Configuration Audit)",
    select2: "롤백 (Rollback)",
    select3: "단위 테스트(Unit Test)",
    select4: "체크인(Check-In)",
  },
  {
    question: "클린코드 작성원칙에 대한 설명으로 틀린 것은? ",
    answer: "B",
    select1: "코드의 중복을 최소화 한다",
    select2: "코드가 다른 모듈에 미치는 영향을 최대화하도록 작성한다",
    select3: "누구든지 코드를 쉽게 읽을 수 있도록 작성한다",
    select4: "간단하게 코드를 작성한다",
  },
  {
    question:
      "클라우드를 통해 애플리케이션을 개발하는 데 필요한 모든 하드웨어 및 소프트웨어 리소스를 제공하고 관리합니다. 개발자와 IT 운영팀은 인프라 또는 플랫폼을 자체적으로 빌드하고 유지관리할 필요 없이 애플리케이션을 개발, 실행, 관리할 수 있습니다. 고객은 여전히 코드를 작성하고 데이터와 애플리케이션을 관리해야 하지만, 클라우드 서비스 제공업체에서 앱을 빌드하고 배포하는 환경을 관리하고 유지관리하는 서비스는?",
    answer: "A",
  },
];

function getCorrectAnswers() {
  // console.log("correctAnswers:", correctAnswers);
  return correctAnswers;
}

module.exports = { getCorrectAnswers };
