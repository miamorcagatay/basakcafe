import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Başak Aile Çay Bahçesi — Merkezefendi, Denizli";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #dcfce7 0%, #ffffff 50%, #d1fae5 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 12,
            background: "linear-gradient(90deg, #15803d, #047857)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: 96,
            height: 96,
            background: "#15803d",
            borderRadius: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            fontSize: 52,
          }}
        >
          🌿
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#14532d",
            letterSpacing: "-1px",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Başak Aile Çay Bahçesi
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#166534",
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          Merkezefendi, Denizli
        </div>

        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 8,
          }}
        >
          {["Her gün açık", "Çocuk parkı", "Aile ortamı"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#15803d",
                color: "white",
                borderRadius: 40,
                padding: "10px 28px",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
