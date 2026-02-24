import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const score = state.score ?? 0;
  const total = state.total ?? 10;
  const percent = state.percent ?? 0;
  const rank = state.rank ?? "뉴비 덕후";

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f0c29 0, #302b63 40%, #24243e 70%, #ff9a9e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "2rem 1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          background: "rgba(8, 6, 30, 0.92)",
          borderRadius: "28px",
          padding: "2.5rem 2rem",
          boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
          border: "1px solid rgba(255,255,255,0.16)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,154,158,0.9), transparent 60%)",
            top: "-140px",
            right: "-120px",
            opacity: 0.55,
            filter: "blur(1px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(161,140,209,0.9), transparent 60%)",
            bottom: "-140px",
            left: "-80px",
            opacity: 0.6,
            filter: "blur(1px)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Otaku Power Result
          </p>
          <h1
            style={{
              marginTop: "0.6rem",
              fontSize: "2.2rem",
              lineHeight: 1.2,
              color: "#fbc2eb",
              textShadow: "0 0 15px rgba(252, 164, 255, 0.9)",
            }}
          >
            당신의 덕력은
            <br />
            <span
              style={{
                fontSize: "2.8rem",
                background:
                  "linear-gradient(120deg, #ff9a9e, #f6d365, #a1c4fd)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {rank}
            </span>
            입니다!
          </h1>

          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            }}
          >
            <div
              style={{
                padding: "1rem 0.75rem",
                borderRadius: "18px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  opacity: 0.75,
                  marginBottom: "0.25rem",
                }}
              >
                점수
              </p>
              <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                {score} / {total}
              </p>
            </div>
            <div
              style={{
                padding: "1rem 0.75rem",
                borderRadius: "18px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  opacity: 0.75,
                  marginBottom: "0.25rem",
                }}
              >
                정답률
              </p>
              <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                {percent}%
              </p>
            </div>
            <div
              style={{
                padding: "1rem 0.75rem",
                borderRadius: "18px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  opacity: 0.75,
                  marginBottom: "0.25rem",
                }}
              >
                덕력 랭크
              </p>
              <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>{rank}</p>
            </div>
          </div>

          <div
            style={{
              marginTop: "1.8rem",
              padding: "1.2rem 1rem",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.18)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            이 정도면 이미{" "}
            <span style={{ color: "#f6d365", fontWeight: 700 }}>
              주변에 덕질 전도
            </span>
            를 하고 다니는 레벨입니다.
            <br />
            친구들에게도 이 테스트를 돌려 보고, 진짜 레전드가 누구인지 확인해
            보세요!
          </div>

          <div
            style={{
              marginTop: "2.2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.8rem",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={() => navigate(-1)}
              style={{
                padding: "0.85rem 1.8rem",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(135deg, #ff9a9e, #fecfef, #f6d365)",
                color: "#28142c",
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
                cursor: "pointer",
              }}
            >
              다시 채점 보기
            </button>
            <Link
              to="/otaku-test"
              style={{
                padding: "0.85rem 1.6rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.35)",
                background: "transparent",
                color: "white",
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              테스트 다시 하기
            </Link>
            <Link
              to="/"
              style={{
                padding: "0.85rem 1.6rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.35)",
                background: "transparent",
                color: "white",
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              홈으로
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
