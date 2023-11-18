# IT 능력고사


> it 얼마나 알고있니? 


## Introduce
> 트렌드 능력고사를 참고하여 만든 it 능력고사 사이트입니다.

## Develop period
> 23.11.09 ~ 23.11.23

<h2>Stack</h2>
<div align="left">
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
	<img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jQuery&logoColor=white" />
	<br>
	<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/>
	<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
	<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" />
</div>
<br>
	<h2>Tools</h2>
<div align=left>
	<img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat&logo=VisualStudioCode&logoColor=white" />
	<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white" />
	<img src="https://img.shields.io/badge/figma-F24E1E?style=flat&logo=figma&logoColor=white" />
</div>

### Getting Started Guide
### Requirements
For building and running the application you need:

- [Node.js 16.14.2](https://nodejs.org/download/release/v16.14.2/)
- [Npm 8.5.1](https://www.npmjs.com/package/npm/v/8.5.1)

### Installation
``` bash
$ git clone https://github.com/ErrorMonkey/it-test-2023.git
$ cd it-test-2023
```

#### Enviroment
#### Dev
```
$ nvm use v.16.14.2
$ npm install 
$ npm run dev
```
#### Production
```
$ nvm use v.16.14.2
$ npm install 
$ npm run start
```
---
## Screen Layout 📺
| Main page  |  Quiz page   |  Result page   |  
| :------------: | :------------: | :------------: |
|  <img width="329" src="https://user-images.githubusercontent.com/50205887/208036155-a57900f7-c68a-470d-923c-ff3c296ea635.png"/> |  <img width="329" src=""/>|  <img width="329" src=""/>|  

---

## Architecture

### Directory
```bash
├── README.md
├── app.js
├── package-lock.json
├── package.json
├── controller : 
│   ├── Capplicants.js : 응시자ID, 점수 계산
│   ├── Ccomments.js : 만점자 댓글 달기 기능
├── model : 
│   ├── index.js
│   ├── applicants.js :응시자ID, 점수 데이터베이스 모델
│   └── comments.js :만점자 댓글 데이터베이스 모델
├── public : 
│   ├── CSS
│   ├── img
│   └── JS
│   	└── sharesns.js : SNS 공유하기 기능
├── routes :
│   └── index.js
├── utils :
│   ├── resultValue.js : 점수에 따른 결과페이지 이미지 반환
│   └── answersolution.js : 문항별 정답 배열 저장
└── views : 
    ├── index.ejs
    ├── result.ejs
    └── test2023.ejs
```

## Update - (수정 필요)

* 0.2.1
    * 수정: 문서 업데이트 (모듈 코드 동일)
* 0.2.0
    * 수정: `setDefaultXYZ()` 메서드 제거
    * 추가: `init()` 메서드 추가
* 0.1.1
    * 버그 수정: `baz()` 메서드 호출 시 부팅되지 않는 현상 (@컨트리뷰터 감사합니다!)
* 0.1.0
    * 첫 출시
    * 수정: `foo()` 메서드 네이밍을 `bar()`로 수정
* 0.0.1
    * 작업 진행 중

## Infomation

* 이세윤 - dominobomb@gmail.com
* 이산하 - sanppi@naver.com
* 한기선 - mssk2490@gmail.com
* 권구호 - kguho9202@gmail.com
* 이다현 - da0956@gmail.com

## Contribute

1. (<https://github.com/ErrorMonkey/it-test-2023>)을 포크합니다.
2. (`git checkout -b feature/itTest`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some itTest'`) 명령어로 커밋하세요.
4. (`git push origin feature/itTest`) 명령어로 브랜치에 푸시하세요. 
5. Pull request 를 보내주세요.

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
