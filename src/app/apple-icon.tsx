import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0063CE 0%, #004FA5 100%)",
          borderRadius: "36px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Shield shape — using an SVG inside the ImageResponse */}
        <svg
          viewBox="0 0 180 180"
          width="180"
          height="180"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Shield fill */}
          <path
            d="M90 24 L150 50 L150 100 Q150 140 90 166 Q30 140 30 100 L30 50 Z"
            fill="white"
            opacity="0.1"
          />
          {/* Shield stroke */}
          <path
            d="M90 24 L150 50 L150 100 Q150 140 90 166 Q30 140 30 100 L30 50 Z"
            fill="none"
            stroke="#FF8A00"
            strokeWidth="3.5"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Pediment */}
          <polygon
            points="56,73 90,52 124,73"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
            opacity="0.85"
          />

          {/* Left column */}
          <rect x="62" y="75" width="12" height="44" rx="2" fill="white" opacity="0.9" />
          <rect x="59" y="72" width="18" height="5" rx="1.5" fill="white" opacity="0.9" />

          {/* Center column */}
          <rect x="84" y="63" width="12" height="56" rx="2" fill="white" opacity="0.95" />
          <rect x="81" y="60" width="18" height="5" rx="1.5" fill="white" opacity="0.95" />

          {/* Right column */}
          <rect x="106" y="75" width="12" height="44" rx="2" fill="white" opacity="0.9" />
          <rect x="103" y="72" width="18" height="5" rx="1.5" fill="white" opacity="0.9" />

          {/* Base */}
          <rect x="57" y="119" width="66" height="3.5" rx="1" fill="white" opacity="0.7" />

          {/* Orange diamond */}
          <polygon points="90,47 94,52 90,57 86,52" fill="#FF8A00" opacity="0.9" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
