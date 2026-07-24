// src/schemas/entities/website.ts


import { SITE } from "../../data/site.ts";

import { URLS } from "../../data/urls.ts";

import { IDS } from "../../data/ids.ts";

import { ASSETS } from "../../data/assets.ts";





export const WEBSITE_SCHEMA = {



    "@type":

        "WebSite",



    "@id":

        IDS.website,





    name:

        SITE.name,





    alternateName:

        SITE.alternateName,





    url:

        URLS.base,





    description:

        SITE.description,





    inLanguage:

        SITE.language,





    publisher: {


        "@id":

            IDS.organization



    },





    image: {


        "@id":

            IDS.logo,



    }



} as const;