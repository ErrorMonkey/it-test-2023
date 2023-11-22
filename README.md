# IT 능력고사

## Introduce
> 제 1회 IT 능력고사

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
	<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=Sequelize&logoColor=white" />
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
|  <img width="329" height="250" src="https://github.com/ErrorMonkey/it-test-2023/assets/100561986/99935116-8c67-478b-983c-a588e8b41c9a.jpg"/> |  <img width="329"  height="250" src="https://github.com/ErrorMonkey/it-test-2023/assets/100561986/ea0eef16-c91f-4d56-ac2e-a4cdaa8b4219.jpg"/>|  <img width="329" src=""/>|  

---

## Architecture

### Directory
```bash
├── README.md
├── app.js
├── package-lock.json
├── package.json
├── controller : 
│   ├── Capplicants.js : 응시자ID, 응시자 score 계산, 응시자/평균점수/만점자 계산
│   ├── Ccomments.js : 만점자 댓글 달기 기능, 댓글 조회
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

## Infomation

* 이세윤(FE) - dominobomb@gmail.com
* 이산하(FE) - sanppi@naver.com
* 한기선(FE) - mssk2490@gmail.com
* 권구호(BE) - kguho9202@gmail.com
* 이다현(BE) - da0956@gmail.com

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
