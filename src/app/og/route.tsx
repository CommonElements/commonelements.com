import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "Common Elements Insurance";
  const subtitle =
    searchParams.get("subtitle") ||
    "Specialty Insurance for Community Associations";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0063CE",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at top right, rgba(51,135,216,0.3) 0%, transparent 60%)",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            display: "flex",
            width: "120px",
            height: "4px",
            backgroundColor: "#FF8A00",
            marginBottom: "40px",
          }}
        />

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 40 : 52,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 24,
                color: "#FFA133",
                marginTop: "20px",
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Bottom bar with logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Shield logomark */}
            <svg
              viewBox="0 0 40 40"
              width="40"
              height="40"
              style={{ flexShrink: 0 }}
            >
              <rect width="40" height="40" rx="8" fill="#004FA5" />
              <path
                d="M20 6 L33 11.5 L33 22 Q33 31 20 36.5 Q7 31 7 22 L7 11.5 Z"
                fill="white"
                opacity="0.12"
              />
              <path
                d="M20 6 L33 11.5 L33 22 Q33 31 20 36.5 Q7 31 7 22 L7 11.5 Z"
                fill="none"
                stroke="#FF8A00"
                strokeWidth="1.2"
                strokeLinejoin="round"
                opacity="0.9"
              />
              <polygon
                points="12.5,16 20,12 27.5,16"
                fill="none"
                stroke="white"
                strokeWidth="0.9"
                strokeLinejoin="round"
                opacity="0.85"
              />
              <rect x="14" y="17" width="2.5" height="9" rx="0.5" fill="white" opacity="0.9" />
              <rect x="18.75" y="14.5" width="2.5" height="11.5" rx="0.5" fill="white" opacity="0.95" />
              <rect x="23.5" y="17" width="2.5" height="9" rx="0.5" fill="white" opacity="0.9" />
              <rect x="13" y="26" width="14" height="0.8" rx="0.3" fill="white" opacity="0.7" />
              <polygon points="20,10.5 21,12 20,13.5 19,12" fill="#FF8A00" opacity="0.9" />
            </svg>
            <div style={{ fontSize: 20, color: "#FAFAF8", fontWeight: 600 }}>
              Common Elements
            </div>
          </div>
          <div style={{ fontSize: 16, color: "#FAFAF8", opacity: 0.6 }}>
            commonelements.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
