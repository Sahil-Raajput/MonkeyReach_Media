// src/schemas/graphs/contact.ts


import { ORGANIZATION_SCHEMA } from "../entities/organization";

import { PERSON_SCHEMA } from "../entities/person";

import { WEBSITE_SCHEMA } from "../entities/website";

import { createContactPageSchema } from "../entities/contactPage";

import { createBreadcrumbSchema } from "../entities/breadcrumb";

import { URLS } from "../../data/urls";







interface ContactSchemaProps {


    title:

        string;



    description:

        string;



}








export function createContactSchema(

    data: ContactSchemaProps

) {



    const contactPage = createContactPageSchema({



        url:

            URLS.pages.contact,



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

                    "Contact",



                url:

                    URLS.pages.contact



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



            contactPage,



            breadcrumb



        ]



    };



}