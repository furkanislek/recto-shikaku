import { headers } from "next/headers";
import { redirect } from "next/navigation";

const APP_STORE_URL = "https://apps.apple.com/us/app/shikaku-patches-puzzle-recto/id6801644267";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.furkanislek.recto";

const APPLE_PROVIDER_TOKEN = "129312415";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

type Params = Record<string, string | string[] | undefined>;

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export default async function AdsDownloadPage({
    searchParams,
}: {
    searchParams: Promise<Params>;
}) {
    const params = await searchParams;
    const userAgent = (await headers()).get("user-agent") ?? "";

    if (/android/i.test(userAgent)) {
        const utm = new URLSearchParams();
        for (const key of UTM_KEYS) {
            const value = first(params[key]);
            if (value) utm.set(key, value.slice(0, 80));
        }

        const url = new URL(PLAY_STORE_URL);
        const referrer = utm.toString();
        if (referrer) url.searchParams.set("referrer", referrer);
        redirect(url.toString());
    }

    const url = new URL(APP_STORE_URL);
    const campaign = first(params.utm_campaign);
    if (campaign) {
        url.searchParams.set("pt", APPLE_PROVIDER_TOKEN);
        url.searchParams.set("ct", campaign.slice(0, 40));
        url.searchParams.set("mt", "8");
    }
    redirect(url.toString());
}