// src/data/ids.ts


import { URLS } from "./urls";



export const IDS = {



    /* ==========================================================
       GLOBAL ENTITY IDS
       Permanent website entities
    ========================================================== */


    organization:

        `${URLS.base}/#organization`,



    website:

        `${URLS.base}/#website`,



    logo:

        `${URLS.base}/#logo`,



    founder:

        `${URLS.base}/#person`,



    founderImage:

        `${URLS.base}/#founder-image`,





    /* ==========================================================
       PAGE ENTITY IDS
    ========================================================== */


    webpage:

        (url: string) =>

            `${url}#webpage`,





    breadcrumb:

        (url: string) =>

            `${url}#breadcrumb`,





    /* ==========================================================
       SERVICE ENTITIES
    ========================================================== */


    service:

        (url: string) =>

            `${url}#service`,





    faq:

        (url: string) =>

            `${url}#faq`,





    /* ==========================================================
       CONTENT ENTITIES
    ========================================================== */


    article:

        (url: string) =>

            `${url}#article`,





    author:

        (url: string) =>

            `${url}#author`,





    image:

        (url: string) =>

            `${url}#image`





} as const;