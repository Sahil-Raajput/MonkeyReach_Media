// src/schemas/graphs/about.ts


import { ORGANIZATION_SCHEMA } from "../entities/organization";

import { PERSON_SCHEMA } from "../entities/person";

import { WEBSITE_SCHEMA } from "../entities/website";

import { createAboutPageSchema } from "../entities/aboutPage";

import { createBreadcrumbSchema } from "../entities/breadcrumb";

import { URLS } from "../../data/urls";







interface AboutSchemaProps {


    title:

        string;



    description:

        string;



}








export function createAboutSchema(

    data: AboutSchemaProps

) {



    const aboutPage = createAboutPageSchema({



        url:

            URLS.pages.about,



        title:

            data.title,



        description:

            data.description



    });







    const breadcrumb = createBreadcrumbSchema({



        items: [



            {


                name:

                    "Home",



                url:

                    URLS.pages.home



            },



            {


                name:

                    "About Us",



                url:

                    URLS.pages.about



            }



        ]



    });







    return {



        "@context":

            "https://schema.org",






        "@graph": [



            ORGANIZATION_SCHEMA,



            PERSON_SCHEMA,



            WEBSITE_SCHEMA,



            aboutPage,



            breadcrumb



        ]



    };



}