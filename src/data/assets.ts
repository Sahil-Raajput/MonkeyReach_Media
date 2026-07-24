// src/data/assets.ts


import { SITE } from "./site";



export const ASSETS = {



    /* ==========================================================
       BRAND ASSETS
    ========================================================== */


    logo:

        `${SITE.url}/logos/MonkeyReach-Logo.avif`,



    favicon:

        `${SITE.url}/logos/monkeyreach-site-icon.webp`,





    /* ==========================================================
       SOCIAL SHARING ASSETS
       Open Graph / Twitter / LinkedIn
    ========================================================== */


    ogImage:

        `${SITE.url}/open-graph-image.jpeg`,

  /* ==========================================================
       ENTITY ASSETS
       Used in Schema / Knowledge Graph
    ========================================================== */


    founderImage:

        `${SITE.url}/logos/sahil-raajput-profile-photo.webp`

} as const;