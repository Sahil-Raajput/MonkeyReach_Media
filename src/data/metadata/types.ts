// src/data/metadata/types.ts


export interface Metadata {



    /* ==========================================================
       BASIC SEARCH ENGINE METADATA
    ========================================================== */


    title:
    string;


    description:
    string;


    canonical:
    string;


    robots?:
    string;


    keywords?:
    string[];





    /* ==========================================================
       OPEN GRAPH
       Facebook / LinkedIn / WhatsApp sharing
    ========================================================== */


    openGraph?: {


        title?:
        string;


        description?:
        string;


        image?:
        string;


        type?:
        | "website"
        | "article";


        url?:
        string;


        locale?:
        string;


    };





    /* ==========================================================
       TWITTER / X CARD
    ========================================================== */


    twitter?: {


        card?:
        | "summary"
        | "summary_large_image";


        title?:
        string;


        description?:
        string;


        image?:
        string;


    };





    /* ==========================================================
       CONTENT INFORMATION
       Useful for articles/pages
    ========================================================== */


    author?:
    string;


    publishedTime?:
    string;


    modifiedTime?:
    string;



}