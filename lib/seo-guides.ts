import type { Lang } from "./site";

export type SeoGuide = {
    lang: Lang;
    slug: string;
    alternateSlug: string;
    title: string;
    description: string;
    eyebrow: string;
    h1: string;
    intro: string;
    sections: { title: string; body: string }[];
    faq: { q: string; a: string }[];
    relatedLabel: string;
    related: { href: string; label: string }[];
    homeLabel: string;
    languageLabel: string;
    downloadLabel: string;
};

export const SEO_GUIDES: Record<string, SeoGuide> = {
    shikakuEn: {
        lang: "en",
        slug: "/shikaku-puzzle",
        alternateSlug: "/tr/shikaku-bulmaca",
        title: "Shikaku Puzzle: Learn the Japanese Rectangle Puzzle | Recto",
        description:
            "Learn what Shikaku is and how to solve this Japanese rectangle division puzzle. Play Recto free offline on iOS and Android.",
        eyebrow: "SHIKAKU PUZZLE GUIDE",
        h1: "What is a Shikaku puzzle?",
        intro:
            "Shikaku is a Japanese logic puzzle where you divide a grid into rectangles. Every rectangle must contain exactly one number, and its area must match that number.",
        sections: [
            {
                title: "How does Shikaku work?",
                body:
                    "Start with the numbered clues on the grid. A clue tells you the exact number of cells its rectangle must cover. Draw horizontal or vertical rectangles until every cell belongs to one patch and every clue has its own rectangle.",
            },
            {
                title: "Why is Shikaku a good logic puzzle?",
                body:
                    "Shikaku rewards deduction instead of guessing. You compare possible rectangle shapes, use the edges of the grid, and remove choices that collide with other clues. Small boards are approachable, while larger boards offer deep spatial reasoning.",
            },
            {
                title: "Play Shikaku offline with Recto",
                body:
                    "Recto turns the classic rectangle division puzzle into a calm mobile game with more than 1,100 handcrafted levels. Choose from five difficulty tracks, use a hint when needed, and keep solving without an internet connection.",
            },
        ],
        faq: [
            {
                q: "Is Shikaku the same as a rectangle puzzle?",
                a: "Yes. Shikaku is also known as a rectangle division puzzle because the goal is to divide the whole grid into numbered rectangles.",
            },
            {
                q: "Is Recto free to play?",
                a: "Yes. Recto is free to download and play on iOS and Android.",
            },
            {
                q: "Can I play Shikaku without Wi-Fi?",
                a: "Yes. Recto stores its puzzles on your device, so you can play offline.",
            },
        ],
        relatedLabel: "Continue exploring",
        related: [
            { href: "/how-to-play-shikaku", label: "How to play Shikaku" },
            { href: "/rectangle-puzzle", label: "Rectangle puzzle guide" },
        ],
        homeLabel: "Recto home",
        languageLabel: "Türkçe",
        downloadLabel: "Download Recto",
    },
    howToEn: {
        lang: "en",
        slug: "/how-to-play-shikaku",
        alternateSlug: "/tr/shikaku-nasil-oynanir",
        title: "How to Play Shikaku: 3 Simple Rules | Recto",
        description:
            "Learn how to play Shikaku in three simple rules: read the numbers, draw rectangles, and fill the grid. Try Recto free on iOS and Android.",
        eyebrow: "HOW TO PLAY SHIKAKU",
        h1: "How to play Shikaku",
        intro:
            "The rules of Shikaku are simple: divide the grid into rectangles so every rectangle contains one number and covers exactly that many cells.",
        sections: [
            {
                title: "1. Read the numbers",
                body:
                    "Each number is an area clue. A 6 means the rectangle containing it must cover six cells, such as 1×6, 2×3, 3×2, or 6×1, as long as the shape stays inside the grid.",
            },
            {
                title: "2. Draw one rectangle per clue",
                body:
                    "Every patch must contain exactly one number. Drag from one corner to the opposite corner to test a rectangle. If it contains another clue or the wrong number of cells, try a different shape.",
            },
            {
                title: "3. Fill the whole grid",
                body:
                    "A Shikaku is complete when no cell is left uncovered. Start with clues near an edge or a corner, then use the remaining empty space to narrow down the harder rectangles.",
            },
        ],
        faq: [
            {
                q: "What should I solve first in Shikaku?",
                a: "Start with a clue that has few possible shapes, especially a number near a corner or edge. Large clues and crowded areas often provide useful constraints too.",
            },
            {
                q: "Can a Shikaku rectangle be any size?",
                a: "It can have any rectangular shape that fits the grid, but its area must equal the clue and it must contain exactly one number.",
            },
            {
                q: "Does Recto include hints?",
                a: "Yes. Recto includes smart hints that reveal a logical next move without solving the whole puzzle for you.",
            },
        ],
        relatedLabel: "More Shikaku guides",
        related: [
            { href: "/shikaku-puzzle", label: "What is Shikaku?" },
            { href: "/offline-puzzle-game", label: "Offline puzzle game" },
        ],
        homeLabel: "Recto home",
        languageLabel: "Türkçe",
        downloadLabel: "Play Recto",
    },
    shikakuTr: {
        lang: "tr",
        slug: "/tr/shikaku-bulmaca",
        alternateSlug: "/shikaku-puzzle",
        title: "Shikaku Bulmaca Nedir? Japon Dikdörtgen Bulmacası | Recto",
        description:
            "Shikaku'nun ne olduğunu ve nasıl çözüldüğünü öğren. Dikdörtgen bulmacasını Recto ile iOS ve Android'de ücretsiz, internetsiz oyna.",
        eyebrow: "SHIKAKU BULMACA REHBERİ",
        h1: "Shikaku bulmaca nedir?",
        intro:
            "Shikaku, ızgarayı dikdörtgenlere böldüğün bir Japon mantık bulmacasıdır. Her dikdörtgende tek bir sayı bulunur ve dikdörtgenin alanı o sayıya eşit olmalıdır.",
        sections: [
            {
                title: "Shikaku nasıl çalışır?",
                body:
                    "Tahtadaki sayılara bakarak başlarsın. Her sayı, kendi dikdörtgeninin kaç hücre kaplayacağını söyler. Yatay veya dikey dikdörtgenler çizerek tüm hücreleri kaplar, her sayıyı kendi parçasında bırakırsın.",
            },
            {
                title: "Shikaku neden iyi bir mantık bulmacasıdır?",
                body:
                    "Shikaku tahminden çok çıkarıma dayanır. Olası dikdörtgenleri karşılaştırır, tahta kenarlarını kullanır ve başka sayılarla çakışan seçenekleri elersin. Küçük tahtalar kolay başlar, büyük tahtalar uzamsal düşünmeyi zorlar.",
            },
            {
                title: "Recto ile internetsiz Shikaku oyna",
                body:
                    "Recto, klasik dikdörtgen bulmacasını 1.100'den fazla el yapımı bölümle mobil oyuna dönüştürür. Beş zorluk seviyesinden birini seç, gerektiğinde ipucu al ve internet bağlantısı olmadan oyna.",
            },
        ],
        faq: [
            {
                q: "Shikaku ile dikdörtgen bulmaca aynı mı?",
                a: "Evet. Shikaku, tahtayı numaralı dikdörtgenlere bölme kuralı nedeniyle dikdörtgen bölme bulmacası olarak da bilinir.",
            },
            {
                q: "Recto ücretsiz mi?",
                a: "Evet. Recto iOS ve Android'de ücretsiz indirilebilir ve oynanabilir.",
            },
            {
                q: "Shikaku internetsiz oynanabilir mi?",
                a: "Evet. Recto bölümleri cihazında saklar, bu nedenle internet olmadan oynayabilirsin.",
            },
        ],
        relatedLabel: "Keşfetmeye devam et",
        related: [
            { href: "/tr/shikaku-nasil-oynanir", label: "Shikaku nasıl oynanır?" },
            { href: "/tr/dikdortgen-bulmaca", label: "Dikdörtgen bulmaca rehberi" },
        ],
        homeLabel: "Recto ana sayfa",
        languageLabel: "English",
        downloadLabel: "Recto'yu indir",
    },
    howToTr: {
        lang: "tr",
        slug: "/tr/shikaku-nasil-oynanir",
        alternateSlug: "/how-to-play-shikaku",
        title: "Shikaku Nasıl Oynanır? 3 Basit Kural | Recto",
        description:
            "Shikaku'yu üç basit kuralla öğren: sayıları oku, dikdörtgenleri çiz ve ızgarayı doldur. Recto'yu iOS ve Android'de ücretsiz oyna.",
        eyebrow: "SHIKAKU NASIL OYNANIR",
        h1: "Shikaku nasıl oynanır?",
        intro:
            "Shikaku'nun kuralı basit: ızgarayı, her biri tek bir sayı içeren ve tam olarak o sayı kadar hücre kaplayan dikdörtgenlere böl.",
        sections: [
            {
                title: "1. Sayıları oku",
                body:
                    "Her sayı bir alan ipucudur. 6 sayısı, onu içeren dikdörtgenin altı hücre kaplaması gerektiğini söyler. Dikdörtgen 1×6, 2×3 veya bunların döndürülmüş hali olabilir.",
            },
            {
                title: "2. Her sayı için bir dikdörtgen çiz",
                body:
                    "Her parçada tam olarak bir sayı bulunmalıdır. Dikdörtgeni denemek için bir köşeden karşı köşeye sürükle. Başka bir sayı içeriyorsa veya alanı yanlışsa farklı bir şekil dene.",
            },
            {
                title: "3. Tüm ızgarayı doldur",
                body:
                    "Hiçbir hücre boş kalmadığında Shikaku tamamlanır. Önce köşe veya kenara yakın, az seçeneği olan sayıları çöz; sonra kalan boşluklar zor dikdörtgenleri daraltır.",
            },
        ],
        faq: [
            {
                q: "Shikaku'da önce neyi çözmeliyim?",
                a: "Özellikle köşe veya kenara yakın, az sayıda şekil seçeneği olan bir sayıdan başla. Büyük sayılar ve kalabalık alanlar da güçlü ipuçları verebilir.",
            },
            {
                q: "Shikaku dikdörtgeni her boyutta olabilir mi?",
                a: "Izgaraya sığdığı, alanı sayıya eşit olduğu ve içinde yalnızca bir sayı bulunduğu sürece farklı dikdörtgen şekilleri kullanılabilir.",
            },
            {
                q: "Recto'da ipucu var mı?",
                a: "Evet. Recto, bulmacanın tamamını çözmeden mantıklı bir sonraki hamleyi gösteren akıllı ipuçları içerir.",
            },
        ],
        relatedLabel: "Diğer Shikaku rehberleri",
        related: [
            { href: "/tr/shikaku-bulmaca", label: "Shikaku nedir?" },
            { href: "/tr/internetsiz-bulmaca", label: "İnternetsiz bulmaca oyunu" },
        ],
        homeLabel: "Recto ana sayfa",
        languageLabel: "English",
        downloadLabel: "Recto'yu oyna",
    },
};