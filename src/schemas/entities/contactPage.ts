// src/schemas/entities/contactPage.ts


import { createWebPageSchema } from "./webpage";

import { IDS } from "../../data/ids";

import { SITE } from "../../data/site";







interface ContactPageProps {


    url:

        string;



    title:

        string;



    description:

        string;



}








export function createContactPageSchema(

    data: ContactPageProps

) {



    return {



        ...createWebPageSchema({


            type:

                "ContactPage",



            url:

                data.url,



            title:

                data.title,



            description:

                data.description



        }),






        "@type":

            "ContactPage",






        mainEntity: {



            "@type":

                "Organization",



            "@id":

                IDS.organization,



            name:

                SITE.name



        },






        publisher: {



            "@id":

                IDS.organization



        }



    };



}