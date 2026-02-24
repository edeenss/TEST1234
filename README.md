# 덕후 테스트 앱

Vite + React + React Router 로 만든 10문제 덕후 테스트입니다.

## 설치 및 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 로 접속하면 됩니다.

## 라우팅

- `/` : 홈 화면
- `/otaku-test` : 덕후 테스트 (10문제, 이미지 자리 있음)
- `/otaku-result` : 점수/정답률/덕력 랭크 결과 화면

## 이미지 넣는 방법

`src/OtakuTestPage.jsx` 안 이미지 자리 주석 부분에 `img` 태그를 추가하고, `src` 경로만 채워 넣으면 됩니다.

```jsx
<img
  src={`/images/q${currentQuestion.id}.png`}
  alt={`Q${currentQuestion.id}`}
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>
```

원하시면 문제 텍스트, 보기, 정답 인덱스(`ANSWERS`)를 실제 덕후 테스트 데이터로 바꾸면 됩니다.
# TEST1234