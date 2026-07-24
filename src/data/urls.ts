import { SITE } from "./site";


export const URLS = {


    base:
    SITE.url,


    pages: {

        home:
        `${SITE.url}/`,

        services:
        `${SITE.url}/services/`,

        about:
        `${SITE.url}/about-us/`,

        contact:
        `${SITE.url}/contact/`,

        login:
        `${SITE.url}/login/`

    },


    services: {

        seo:
        `${SITE.url}/services/seo/`,

        googleAds:
        `${SITE.url}/services/google-ads/`,

        metaAds:
        `${SITE.url}/services/meta-ads/`,

        socialMedia:
        `${SITE.url}/services/social-media/`,

        digitalMarketing:
        `${SITE.url}/services/digital-marketing/`

    },


    legal: {

        refund:
        `${SITE.url}/refund-and-cancellation-policy/`,

        terms:
        `${SITE.url}/terms-conditions/`,

        cookie:
        `${SITE.url}/cookie-policy/`,

        privacy:
        `${SITE.url}/privacy-policy/`,

        editorial:
        `${SITE.url}/editorial-policy/`,

        disclaimer:
        `${SITE.url}/disclaimer/`

    },


    system: {

        sitemap:
        `${SITE.url}/sitemap-index.xml`,

        robots:
        `${SITE.url}/robots.txt`

    }


};