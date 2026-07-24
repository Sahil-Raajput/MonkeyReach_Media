// src/data/metadata/defaults.ts


import { SITE } from "../site";
import { ASSETS } from "../assets";



export const META_DEFAULTS = {



    /* ==========================================================
       SEARCH ENGINE DEFAULTS
    ========================================================== */


    robots:
        "index, follow, max-image-preview:large",





    /* ==========================================================
       OPEN GRAPH DEFAULTS
       Facebook / LinkedIn / WhatsApp sharing
    ========================================================== */


    openGraph: {


        siteName:
            SITE.name,


        locale:
            SITE.locale,


        type:
            "website",


        image:
            ASSETS.ogImage


    },





    /* ==========================================================
       TWITTER / X DEFAULTS
    ========================================================== */


    twitter: {


        card:
            "summary_large_image",


        site:
            "@Monkey_Reach",


        creator:
            "@Sahil_Raaajput",


        image:
            ASSETS.ogImage


    },





    /* ==========================================================
       GENERAL WEBSITE DEFAULTS
    ========================================================== */


    author:
        SITE.name,


    language:
        SITE.language,


    charset:
        SITE.charset,


    themeColor:
        SITE.themeColor,





    /* ==========================================================
       SITE IDENTITY
    ========================================================== */


    siteName:
        SITE.name,



    locale:
        SITE.locale



} as const;