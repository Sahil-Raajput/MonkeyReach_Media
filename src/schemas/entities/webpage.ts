// src/schemas/entities/webpage.ts


import { IDS } from "../../data/ids";

import { SITE } from "../../data/site";





interface WebPageProps {


    url: string;


    title: string;


    description: string;


    type?:

        | "WebPage"
        | "CollectionPage"
        | "AboutPage"
        | "ContactPage";



    datePublished?:

        string;



    dateModified?:

        string;



}







export function createWebPageSchema(

    data: WebPageProps

) {



    return {



        "@type":

            data.type ?? "WebPage",





        "@id":

            IDS.webpage(data.url),





        url:

            data.url,





        name:

            data.title,





        description:

            data.description,





        inLanguage:

            SITE.language,





        isPartOf: {


            "@id":

                IDS.website



        },





        about: {


            "@id":

                IDS.organization



        },





        ...(data.datePublished && {


            datePublished:

                data.datePublished



        }),





        ...(data.dateModified && {


            dateModified:

                data.dateModified



        })



    };



}