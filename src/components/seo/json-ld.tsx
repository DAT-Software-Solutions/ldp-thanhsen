import { jsonLdScriptProps } from "@/lib/site-seo";

type JsonLdProps = {
    data: unknown;
};

export const JsonLd = ({ data }: JsonLdProps) => (
    <script
        type='application/ld+json'
        dangerouslySetInnerHTML={jsonLdScriptProps(data)}
    />
);
