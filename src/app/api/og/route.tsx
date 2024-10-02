import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          width="1200"
          height="630"
          src={`https://futurodigital.wondercraft.co/_next/image?url=%2Fog-bg.jpg&w=3840&q=75`}
        />
        {title ? (
          <h1
            style={{
              position: "absolute",
              top: 320,
              left: 74,
              width: 680,
              color: "white",
              fontSize: "48px",
              lineHeight: "48px",
            }}
          >
            {title}
          </h1>
        ) : null}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
