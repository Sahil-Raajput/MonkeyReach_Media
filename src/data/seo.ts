import { SITE } from "./site";


export interface SEOData {


    // Search Engine

    title: string;

    description: string;

    canonical: string;

    robots?: string;



    // Open Graph

    ogTitle?: string;

    ogDescription?: string;

    ogImage?: string;

    ogType?: "website" | "article";

    ogLocale?: string;



    // Twitter

    twitterCard?:
        | "summary"
        | "summary_large_image";

    twitterTitle?: string;

    twitterDescription?: string;

    twitterImage?: string;



    // General

    author?: string;

    siteName?: string;

    language?: string;

    themeColor?: string;



    // Schema

    schema:
        | "home"
        | "about"
        | "contact"
        | "collection"
        | "service"
        | "webpage";

}





export const seo: Record<string, Partial<SEOData>> = {



"/": {


    title:
    `${SITE.name} | SEO & Digital Marketing Agency`,


    description:
    "MonkeyReach Media helps businesses grow through SEO, Google Ads, Meta Ads, Social Media Marketing, Local SEO, Website Development, and performance-driven digital marketing strategies.",


    ogType:
    "website",


    schema:
    "home"

},







"/about-us/": {


    title:
    `About ${SITE.name} | Digital Marketing Agency`,


    description:
    "Learn about MonkeyReach Media and how we help businesses grow through SEO, paid advertising, website development and digital marketing.",


    ogType:
    "website",


    schema:
    "about"

},







"/contact/": {


    title:
    `Contact ${SITE.name} | Digital Marketing Agency`,


    description:
    "Contact MonkeyReach Media for SEO, Google Ads, Meta Ads, Local SEO and digital marketing services.",


    ogType:
    "website",


    schema:
    "contact"

},







"/services/": {


    title:
    `Digital Marketing Services | ${SITE.name}`,


    description:
    "Explore MonkeyReach Media SEO, Google Ads, Meta Ads, Local SEO, Website Development and digital marketing services.",


    ogType:
    "website",


    schema:
    "collection"

},







"/locations/": {


    title:
    `Locations We Serve | ${SITE.name}`,


    description:
    "Explore locations where MonkeyReach Media provides SEO and digital marketing services.",


    ogType:
    "website",


    schema:
    "collection"

},







"/industry/": {


    title:
    `Industries We Serve | ${SITE.name}`,


    description:
    "Discover industries that use MonkeyReach Media SEO, advertising and digital marketing services.",


    ogType:
    "website",


    schema:
    "collection"

},







"/privacy-policy/": {


    title:
    `Privacy Policy | ${SITE.name}`,


    description:
    "Read MonkeyReach Media privacy policy.",


    schema:
    "webpage"

},







"/cookie-policy/": {


    title:
    `Cookie Policy | ${SITE.name}`,


    description:
    "Read MonkeyReach Media cookie policy.",


    schema:
    "webpage"

},







"/terms-conditions/": {


    title:
    `Terms & Conditions | ${SITE.name}`,


    description:
    "Read MonkeyReach Media terms and conditions.",


    schema:
    "webpage"

},







"/editorial-policy/": {


    title:
    `Editorial Policy | ${SITE.name}`,


    description:
    "Learn about MonkeyReach Media editorial standards and publishing guidelines.",


    schema:
    "webpage"

},







"/disclaimer/": {


    title:
    `Disclaimer | ${SITE.name}`,


    description:
    "Read MonkeyReach Media disclaimer.",


    schema:
    "webpage"

},







"/refund-and-cancellation-policy/": {


    title:
    `Refund & Cancellation Policy | ${SITE.name}`,


    description:
    "Read MonkeyReach Media refund and cancellation policy.",


    schema:
    "webpage"

},







"/404/": {


    title:
    `Page Not Found | ${SITE.name}`,


    description:
    "The page you are looking for does not exist.",


    robots:
    "noindex, follow",


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

`${SITE.name} | Digital Marketing Agency`,







description:

page?.description ??

`${SITE.name} helps businesses grow through SEO, advertising and digital marketing.`,







canonical:

page?.canonical ??

`${SITE.url}${cleanPath === "/" ? "" : cleanPath}`,







robots:

page?.robots ??

"index, follow, max-image-preview:large",







themeColor:

page?.themeColor ??

"#050505",







ogTitle:

page?.ogTitle ??

page?.title ??

SITE.name,







ogDescription:

page?.ogDescription ??

page?.description ??

"",







ogImage:

page?.ogImage ??

SITE.logo,







ogType:

page?.ogType ??

"website",







ogLocale:

page?.ogLocale ??

SITE.locale,







twitterCard:

page?.twitterCard ??

"summary_large_image",







twitterTitle:

page?.twitterTitle ??

page?.title ??

SITE.name,







twitterDescription:

page?.twitterDescription ??

page?.description ??

"",







twitterImage:

page?.twitterImage ??

SITE.logo,







author:

page?.author ??

SITE.name,







siteName:

page?.siteName ??

SITE.name,







language:

page?.language ??

SITE.language,







schema:

page?.schema ??

"webpage"



};



}