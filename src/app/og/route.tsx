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
            {/* Ascending bars logomark */}
            <svg
              viewBox="0 0 40 40"
              width="40"
              height="40"
              style={{ flexShrink: 0 }}
            >
              <rect width="40" height="40" rx="8" fill="#004FA5" />
              {/* Short bar */}
              <rect x="7" y="20" width="7" height="13" rx="1" fill="white" opacity="0.3" />
              {/* Medium bar */}
              <rect x="16" y="13" width="7" height="20" rx="1" fill="white" opacity="0.55" />
              {/* Tall bar */}
              <rect x="25" y="6" width="7" height="27" rx="1" fill="white" opacity="0.9" />
              {/* Orange foundation */}
              <rect x="7" y="33" width="25" height="2.5" rx="1" fill="#FF8A00" />
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
