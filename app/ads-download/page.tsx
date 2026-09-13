import { headers } from "next/headers";
import { redirect } from "next/navigation";

const APP_STORE_URL = "https://apps.apple.com/us/app/shikaku-patches-puzzle-recto/id6801644267";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.furkanislek.recto";

export default async function AdsDownloadPage() {
    const userAgent = (await headers()).get("user-agent") ?? "";

    if (/android/i.test(userAgent)) {
        redirect(PLAY_STORE_URL);
    }

    redirect(APP_STORE_URL);
}