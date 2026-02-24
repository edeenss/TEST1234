import { Routes, Route, Link } from "react-router-dom";
import OtakuTestPage from "./OtakuTestPage.jsx";
import ResultPage from "./ResultPage.jsx";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #ff9a9e 0, #fad0c4 35%, #fbc2eb 70%, #a18cd1 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          letterSpacing: "0.2em",
          textShadow: "0 0 15px rgba(0,0,0,0.4)",
        }}
      >
        덕후 테스트
      </h1>
      <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
        당신의 진짜 덕력, 지금 바로 확인해 보세요!
      </p>
      <Link
        to="/otaku-test"
        style={{
          marginTop: "2rem",
          padding: "1rem 2.5rem",
          borderRadius: "999px",
          border: "none",
          background:
            "linear-gradient(135deg, #ff9a9e, #fecfef, #f6d365, #fda085)",
          color: "#2b244d",
          fontWeight: "bold",
          fontSize: "1.1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          textDecoration: "none",
        }}
      >
        시작하기
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/otaku-test" element={<OtakuTestPage />} />
      <Route path="/otaku-result" element={<ResultPage />} />
    </Routes>
  );
}
