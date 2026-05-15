import { ImageResponse } from "next/og";

import { defaultDescription, siteName } from "@/lib/site-seo";

export const alt = `${siteName} - Dịch vụ pháp lý toàn diện`;
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#ffffff",
                    color: "#111827",
                    padding: "72px",
                    borderTop: "22px solid #8b1d1d",
                    fontFamily: "Arial, sans-serif",
                }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        color: "#8b1d1d",
                        fontSize: 30,
                        fontWeight: 700,
                    }}>
                    <div
                        style={{
                            width: 58,
                            height: 58,
                            borderRadius: "50%",
                            background: "#8b1d1d",
                        }}
                    />
                    {siteName}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1
                        style={{
                            margin: 0,
                            maxWidth: 950,
                            fontSize: 78,
                            lineHeight: 1.05,
                            letterSpacing: 0,
                        }}>
                        Tư vấn pháp lý toàn diện tại Việt Nam
                    </h1>
                    <p
                        style={{
                            margin: "28px 0 0",
                            maxWidth: 940,
                            color: "#4b5563",
                            fontSize: 30,
                            lineHeight: 1.35,
                        }}>
                        {defaultDescription}
                    </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "18px",
                        color: "#8b1d1d",
                        fontSize: 26,
                        fontWeight: 700,
                    }}>
                    Luật sư • Thừa phát lại • Trọng tài thương mại • Thẩm định giá • Đấu giá
                </div>
            </div>
        ),
        size,
    );
}
