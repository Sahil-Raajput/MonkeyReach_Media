// src/data/person.ts


import { SITE } from "./site";

import { SOCIALS } from "./socials";

import { IMAGES } from "./images";



export const PERSON = {



    /* ==========================================================
       IDENTITY
    ========================================================== */


    name:

        "Sahil Raajput",



    alternateName:

        "Sahil",



    jobTitle:

        "Founder",



    description:

        "Sahil Raajput is the founder of MonkeyReach, a digital marketing agency helping businesses grow through SEO, Google Ads, social media marketing, and performance-driven digital strategies.",





    /* ==========================================================
       PROFILE
    ========================================================== */


    url:

        `${SITE.url}/about-us/`,



    image:

        IMAGES.people.founder.src,





    /* ==========================================================
       EXPERTISE
    ========================================================== */


    knowsAbout: [


        "Search Engine Optimization",


        "Technical SEO",


        "Local SEO",


        "Google Ads",


        "Google Analytics",


        "Google Tag Manager",


        "Meta Ads",


        "Social Media Marketing",


        "Content Marketing",


        "Performance Marketing",


        "Conversion Rate Optimization",


        "Lead Generation",


        "Digital Marketing"


    ],





    /* ==========================================================
       AFFILIATION
    ========================================================== */


    worksFor: {


        name:

            SITE.name,


        url:

            SITE.url


    },





    /* ==========================================================
       SOCIAL PROFILES
    ========================================================== */


    sameAs:

        SOCIALS.founder





} as const;