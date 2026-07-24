// src/schemas/graphs/service.ts


import { ORGANIZATION_SCHEMA } from "../entities/organization";

import { PERSON_SCHEMA } from "../entities/person";

import { WEBSITE_SCHEMA } from "../entities/website";

import { createWebPageSchema } from "../entities/webpage";

import { createBreadcrumbSchema } from "../entities/breadcrumb";

import { createFAQSchema } from "../entities/faq";

import { IDS } from "../../data/ids";









interface ServiceSchemaProps {



    name:

        string;



    description:

        string;



    url:

        string;



    breadcrumb?: {



        name:

            string;



        url:

            string;



    }[];



    faq?: {



        question:

            string;



        answer:

            string;



    }[];



}









export function createServiceSchema(

    data: ServiceSchemaProps

) {



    const servicePage = createWebPageSchema({



        type:

            "WebPage",



        url:

            data.url,



        title:

            data.name,



        description:

            data.description



    });









    const serviceEntity = {



        "@type":

            "Service",





        "@id":

            IDS.service(data.url),





        name:

            data.name,





        description:

            data.description,





        provider: {



            "@id":

                IDS.organization



        }



    };









    const breadcrumb = data.breadcrumb

        ?



        createBreadcrumbSchema({



            items:

                data.breadcrumb



        })



        :



        null;









    const faq = data.faq

        ?



        createFAQSchema({



            url:

                data.url,



            questions:

                data.faq



        })



        :



        null;









    return {



        "@context":

            "https://schema.org",






        "@graph": [



            ORGANIZATION_SCHEMA,



            PERSON_SCHEMA,



            WEBSITE_SCHEMA,



            serviceEntity,



            servicePage,



            ...(breadcrumb ? [breadcrumb] : []),



            ...(faq ? [faq] : [])



        ]



    };



}