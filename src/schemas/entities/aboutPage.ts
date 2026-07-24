// src/schemas/entities/aboutPage.ts


import { createWebPageSchema } from "./webpage";

import { IDS } from "../../data/ids";

import { PERSON } from "../../data/person";

import { SITE } from "../../data/site";







interface AboutPageProps {


    url:

        string;



    title:

        string;



    description:

        string;



}








export function createAboutPageSchema(

    data: AboutPageProps

) {



    return {



        ...createWebPageSchema({


            type:

                "AboutPage",



            url:

                data.url,



            title:

                data.title,



            description:

                data.description



        }),






        "@type":

            "AboutPage",






        mainEntity: {



            "@id":

                IDS.organization



        },






        about: {



            "@type":

                "Person",



            "@id":

                IDS.founder,



            name:

                PERSON.name



        },






        publisher: {



            "@type":

                "Organization",



            "@id":

                IDS.organization,



            name:

                SITE.name



        }



    };



}