// src/schemas/graphs/homepage.ts


import { ORGANIZATION_SCHEMA } from "../entities/organization";

import { PERSON_SCHEMA } from "../entities/person";

import { WEBSITE_SCHEMA } from "../entities/website";

import { createWebPageSchema } from "../entities/webpage";

import { URLS } from "../../data/urls";

import { SITE } from "../../data/site";







interface HomepageSchemaProps {


    title:

        string;



    description:

        string;



}








export function createHomepageSchema(

    data: HomepageSchemaProps

) {



    const homepage = createWebPageSchema({



        type:

            "WebPage",



        url:

            URLS.pages.home,



        title:

            data.title,



        description:

            data.description



    });







    return {



        "@context":

            "https://schema.org",






        "@graph": [



            ORGANIZATION_SCHEMA,



            PERSON_SCHEMA,



            WEBSITE_SCHEMA,



            homepage



        ]



    };



}