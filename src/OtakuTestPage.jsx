import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  {
    id: 1,
    title: "Q1. 이 애니의 제목은?",
    description: "이미지 보고 작품명을 맞혀 보세요.",
  },
  {
    id: 2,
    title: "Q2. 이 캐릭터의 이름은?",
    description: "이름, 성 모두 정확히 알고 있나요?",
  },
  {
    id: 3,
    title: "Q3. 이 명대사가 나오는 작품은?",
    description: "“○○○은(는) 배신하지 않아.”",
  },
  {
    id: 4,
    title: "Q4. 이 장면이 나온 회차는?",
    description: "시즌 / 화수를 맞혀 보세요.",
  },
  {
    id: 5,
    title: "Q5. 이 로고의 작품명은?",
    description: "로고 색감과 폰트를 잘 살펴보세요.",
  },
  {
    id: 6,
    title: "Q6. 이 장르의 대표작은?",
    description: "이미지 힌트를 보고 장르를 맞혀 보세요.",
  },
  {
    id: 7,
    title: "Q7. 이 OST가 나온 작품은?",
    description: "이미지에는 OST 커버가 들어갑니다.",
  },
  {
    id: 8,
    title: "Q8. 이 작가가 만든 다른 작품은?",
    description: "연상되는 작품을 골라 보세요.",
  },
  {
    id: 9,
    title: "Q9. 이 굿즈의 원작은?",
    description: "피규어/굿즈 사진이 들어갈 예정입니다.",
  },
  {
    id: 10,
    title: "Q10. 진짜 덕후만 아는 설정은?",
    description: "작품 속 숨겨진 설정을 맞혀 보세요.",
  },
];

const CHOICES = [
  ["작품 A", "작품 B", "작품 C", "작품 D"],
  ["캐릭터 A", "캐릭터 B", "캐릭터 C", "캐릭터 D"],
  ["작품 E", "작품 F", "작품 G", "작품 H"],
  ["1기 1화", "1기 12화", "2기 1화", "OVA"],
  ["로고 A", "로고 B", "로고 C", "로고 D"],
  ["러브코미디", "이세계물", "스포츠물", "공포물"],
  ["OST A", "OST B", "OST C", "OST D"],
  ["작가 A 작품", "작가 B 작품", "작가 C 작품", "작가 D 작품"],
  ["원작 A", "원작 B", "원작 C", "원작 D"],
  ["떡밥 A", "떡밥 B", "떡밥 C", "떡밥 D"],
];

// 정답 인덱스 (0 = A, 1 = B, 2 = C, 3 = D)
const ANSWERS = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1];

export default function OtakuTestPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));
  const navigate = useNavigate();

  const currentQuestion = QUESTIONS[currentIndex];
  const currentChoices = CHOICES[currentIndex];

  const handleSelect = (choiceIndex) => {
    const next = [...selectedAnswers];
    next[currentIndex] = choiceIndex;
    setSelectedAnswers(next);
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((idx) => idx + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((idx) => idx - 1);
    }
  };

  const handleFinish = () => {
    let score = 0;
    selectedAnswers.forEach((sel, i) => {
      if (sel === ANSWERS[i]) score += 1;
    });

    const total = QUESTIONS.length;
    const percent = Math.round((score / total) * 100);

    let rank = "뉴비 덕후";
    if (percent >= 80) rank = "SSR 레전드 덕후";
    else if (percent >= 60) rank = "SR 상급 덕후";
    else if (percent >= 40) rank = "R 중급 덕후";

    navigate("/otaku-result", {
      state: { score, total, percent, rank },
    });
  };

  const isLast = currentIndex === QUESTIONS.length - 1;
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem 1rem",
        background:
          "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d, #ff9a9e)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          background: "rgba(10, 8, 30, 0.85)",
          borderRadius: "24px",
          padding: "2rem",
          boxShadow: "0 25px 60px rgba(0,0,0,0.65)",
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(14px)",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#fbc2eb",
                textShadow: "0 0 10px rgba(252, 164, 255, 0.8)",
              }}
            >
              Otaku Power Test
            </h2>
            <p style={{ marginTop: "0.4rem", opacity: 0.8 }}>
              {QUESTIONS.length}문제 중{" "}
              <strong>{currentIndex + 1}</strong>번째 문제
            </p>
          </div>
          <div
            style={{
              fontSize: "0.9rem",
              padding: "0.4rem 0.9rem",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            덕력 지수 업그레이드 중...
          </div>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
            gap: "1.75rem",
          }}
        >
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              background:
                "radial-gradient(circle at top, rgba(255,255,255,0.25), rgba(0,0,0,0.8))",
              position: "relative",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 18px 45px rgba(0,0,0,0.75)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* 이미지 넣는 자리 */}
            {/* 예: <img src={`/images/q${currentQuestion.id}.png`} alt={`Q${currentQuestion.id}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "70%",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0.75rem",
                  borderRadius: "18px",
                  border: "2px dashed rgba(255,255,255,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.95rem",
                  textAlign: "center",
                  padding: "0 1rem",
                }}
              >
                여기에 문제 {currentQuestion.id}번 이미지 넣기
                <br />
                (img src만 채우면 됩니다)
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "24px",
                border: "2px solid rgba(255,255,255,0.05)",
                mixBlendMode: "screen",
                pointerEvents: "none",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "0.5rem",
                  color: "#f6d365",
                  textShadow: "0 0 8px rgba(246, 211, 101, 0.8)",
                }}
              >
                {currentQuestion.title}
              </h3>
              <p style={{ opacity: 0.85, marginBottom: "1.25rem" }}>
                {currentQuestion.description}
              </p>

              <div
                style={{
                  display: "grid",
                  gap: "0.6rem",
                  marginBottom: "1.5rem",
                }}
              >
                {currentChoices.map((choice, idx) => {
                  const isSelected = selectedAnswers[currentIndex] === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelect(idx)}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "999px",
                        border: isSelected
                          ? "2px solid #f6d365"
                          : "1px solid rgba(255,255,255,0.25)",
                        background: isSelected
                          ? "linear-gradient(135deg, rgba(246,211,101,0.35), rgba(255,255,255,0.05))"
                          : "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
                        color: "white",
                        textAlign: "left",
                        cursor: "pointer",
                        fontSize: "0.95rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                      }}
                    >
                      <span
                        style={{
                          width: "26px",
                          height: "26px",
                          borderRadius: "999px",
                          background: isSelected
                            ? "linear-gradient(135deg, #f6d365, #fda085)"
                            : "linear-gradient(135deg, #ff9a9e, #fecfef, #f6d365)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2b244d",
                          fontSize: "0.8rem",
                          fontWeight: 800,
                        }}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{choice}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={{
                  flex: "0 0 auto",
                  padding: "0.7rem 1.2rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "transparent",
                  color: "white",
                  opacity: currentIndex === 0 ? 0.4 : 0.9,
                  cursor: currentIndex === 0 ? "default" : "pointer",
                }}
              >
                이전
              </button>

              <div
                style={{
                  flex: 1,
                  height: "4px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.1)",
                  overflow: "hidden",
                  margin: "0 0.5rem",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    borderRadius: "999px",
                    background:
                      "linear-gradient(90deg, #ff9a9e, #fbc2eb, #a18cd1)",
                    transition: "width 0.25s ease",
                  }}
                />
              </div>

              {isLast ? (
                <button
                  type="button"
                  onClick={handleFinish}
                  style={{
                    flex: "0 0 auto",
                    padding: "0.7rem 1.6rem",
                    borderRadius: "999px",
                    border: "none",
                    background:
                      "linear-gradient(135deg, #f6d365, #fda085, #ff9a9e)",
                    color: "#2b244d",
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                  }}
                >
                  결과 보기
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    flex: "0 0 auto",
                    padding: "0.7rem 1.6rem",
                    borderRadius: "999px",
                    border: "none",
                    background:
                      "linear-gradient(135deg, #a18cd1, #fbc2eb, #ff9a9e)",
                    color: "#1b1333",
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                  }}
                >
                  다음
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
