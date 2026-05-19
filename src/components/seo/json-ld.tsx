import { jsonLdScriptProps } from "@/lib/site-seo";

type JsonLdProps = {
    data: unknown;
};

const normalizeJsonLdData = (data: unknown) => {
    if (!Array.isArray(data)) return data;

    return {
        "@context": "https://schema.org",
        "@graph": data.map((item) => {
            if (!item || typeof item !== "object" || Array.isArray(item)) {
                return item;
            }

            const graphItem = { ...(item as Record<string, unknown>) };
            delete graphItem["@context"];
            return graphItem;
        }),
    };
};

export const JsonLd = ({ data }: JsonLdProps) => (
    <script
        type='application/ld+json'
        dangerouslySetInnerHTML={jsonLdScriptProps(normalizeJsonLdData(data))}
    />
);
