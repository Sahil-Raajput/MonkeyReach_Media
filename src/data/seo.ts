const SITE_URL = "https://monkeyreach.com";

const DEFAULT_IMAGE =
    `${SITE_URL}/logos/MonkeyReach-Logo.avif`;



export interface SEOData {


    // Search Engine

    title: string;

    description: string;

    canonical?: string;

    robots?: string;



    // Open Graph

    ogTitle?: string;

    ogDescription?: string;

    ogImage?: string;

    ogType?: "website" | "article";

    ogLocale?: string;



    // Twitter

    twitterCard?:
        "summary" |
        "summary_large_image";

    twitterTitle?: string;

    twitterDescription?: string;

    twitterImage?: string;



    // General

    author?: string;

    siteName?: string;

    language?: string;

    themeColor?: string;



    // Schema Controller

    schema:
        | "home"
        | "about"
        | "contact"
        | "collection"
        | "webpage";

}





export const seo: Record<string, SEOData> = {



"/": {


    title:
    "MonkeyReach | SEO & Digital Marketing Agency",


    description:
    "MonkeyReach helps businesses grow through SEO, Google Ads, Meta Ads, Social Media Marketing, Local SEO, Website Development, and performance-driven digital marketing strategies.",


    ogType:
    "website",


    schema:
    "home"

},





"/about-us/": {


    title:
    "About MonkeyReach | Digital Marketing Agency",


    description:
    "Learn about MonkeyReach and how we help businesses grow through SEO, paid advertising, website development and digital marketing.",


    ogType:
    "website",


    schema:
    "about"

},





"/contact/": {


    title:
    "Contact MonkeyReach | Digital Marketing Agency",


    description:
    "Contact MonkeyReach for SEO, Google Ads, Meta Ads, Local SEO and digital marketing services.",


    ogType:
    "website",


    schema:
    "contact"

},





"/services/": {


    title:
    "Online Marketing Services | MonkeyReach",


    description:
    "Explore MonkeyReach SEO, Google Ads, Meta Ads, Local SEO, Website Development and online marketing services.",


    ogType:
    "website",


    schema:
    "collection"

},





"/locations/": {


    title:
    "Locations We Serve | MonkeyReach",


    description:
    "Explore locations where MonkeyReach provides SEO and digital marketing services.",


    ogType:
    "website",


    schema:
    "collection"

},





"/industry/": {


    title:
    "Industries We Serve | MonkeyReach",


    description:
    "Discover industries that use MonkeyReach SEO, advertising and digital marketing services.",


    ogType:
    "website",


    schema:
    "collection"

},





"/privacy-policy/": {


    title:
    "Privacy Policy | MonkeyReach",


    description:
    "Read MonkeyReach privacy policy.",


    ogType:
    "website",


    schema:
    "webpage"

},





"/cookie-policy/": {


    title:
    "Cookie Policy | MonkeyReach",


    description:
    "Read MonkeyReach cookie policy.",


    ogType:
    "website",


    schema:
    "webpage"

},





"/terms-and-conditions/": {


    title:
    "Terms & Conditions | MonkeyReach",


    description:
    "Read MonkeyReach terms and conditions.",


    ogType:
    "website",


    schema:
    "webpage"

},





"/editorial-policy/": {


    title:
    "Editorial Policy | MonkeyReach",


    description:
    "Learn about MonkeyReach editorial standards and publishing guidelines.",


    ogType:
    "website",


    schema:
    "webpage"

},





"/disclaimer/": {


    title:
    "Disclaimer | MonkeyReach",


    description:
    "Read MonkeyReach disclaimer.",


    ogType:
    "website",


    schema:
    "webpage"

},





"/refund-and-cancellation-policy/": {


    title:
    "Refund & Cancellation Policy | MonkeyReach",


    description:
    "Read MonkeyReach refund and cancellation policy.",


    ogType:
    "website",


    schema:
    "webpage"

}



};







export function getSEO(pathname:string):SEOData {



const cleanPath =

pathname === "/"

?

"/"

:

pathname.endsWith("/")

?

pathname

:

pathname + "/";




const page = seo[cleanPath];





return {



title:
page?.title ??
"MonkeyReach | Digital Marketing Agency",




description:
page?.description ??
"MonkeyReach helps businesses grow through digital marketing.",




canonical:
page?.canonical ??
`${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`,




robots:
page?.robots ??
"index, follow, max-image-preview:large",





// Theme

themeColor:
page?.themeColor ??
"#050505",





// Open Graph

ogTitle:
page?.ogTitle ??
page?.title ??
"MonkeyReach",




ogDescription:
page?.ogDescription ??
page?.description ??
"",




ogImage:
page?.ogImage ??
DEFAULT_IMAGE,




ogType:
page?.ogType ??
"website",




ogLocale:
page?.ogLocale ??
"en_US",





// Twitter

twitterCard:
page?.twitterCard ??
"summary_large_image",




twitterTitle:
page?.twitterTitle ??
page?.title ??
"MonkeyReach",




twitterDescription:
page?.twitterDescription ??
page?.description ??
"",




twitterImage:
page?.twitterImage ??
DEFAULT_IMAGE,






// General

author:
page?.author ??
"MonkeyReach",




siteName:
page?.siteName ??
"MonkeyReach",




language:
page?.language ??
"en",





// Schema

schema:
page?.schema ??
"webpage"



};



}