// src/data/images.ts

import { SITE } from "./site";

export const IMAGES = {

    /* ==========================================================
       PEOPLE
       Used across the website and Schema.org
    ========================================================== */

    people: {

        founder: {

            src:
                `${SITE.url}/logos/sahil-raajput-profile-photo.webp`,

            alt:
                "Sahil Raajput, Founder of MonkeyReach"

        }

    },





    /* ==========================================================
       HOMEPAGE
    ========================================================== */

    homepage: {

        certifications: {

            msme: {

                src:
                    `${SITE.url}/logos/MonkeyReach-Media-MSME-Registered.avif`,

                alt:
                    "MonkeyReach MSME Registered"

            },



            googleAds: {

                src:
                    `${SITE.url}/logos/MonkeyReach-Founder-Google-Ads-course-Certification.avif`,

                alt:
                    "Google Ads Certification"

            },



            metaAds: {

                src:
                    `${SITE.url}/logos/monkeyreach-founder-sahil-raajput-iide-certification-meta-ads.avif`,

                alt:
                    "Meta Ads Certification"

            }

        }

    },







    /* ==========================================================
       MARKETING PLATFORM LOGOS
    ========================================================== */

    platforms: {

        googleAds: {

            src:
                `${SITE.url}/logos/google-ads.png`,

            alt:
                "Google Ads"

        },



        analytics: {

            src:
                `${SITE.url}/logos/Google-Analytics-Logo.png`,

            alt:
                "Google Analytics"

        },



        tagManager: {

            src:
                `${SITE.url}/logos/google-tag-manager.png`,

            alt:
                "Google Tag Manager"

        },



        trends: {

            src:
                `${SITE.url}/logos/google-trends-logo.png`,

            alt:
                "Google Trends"

        },



        googleBusiness: {

            src:
                `${SITE.url}/logos/google-my-business-logo.png`,

            alt:
                "Google Business Profile"

        },



        metaAds: {

            src:
                `${SITE.url}/logos/meta-logo.png`,

            alt:
                "Meta Ads"

        }

    }

} as const;