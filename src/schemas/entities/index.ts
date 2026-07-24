// src/schemas/graph/index.ts


import {
    LogoSchema,
    FounderImageSchema
} from "../entities/image";


import {
    ORGANIZATION_SCHEMA
} from "../entities/organization";


import {
    PERSON_SCHEMA
} from "../entities/person";


import {
    WEBSITE_SCHEMA
} from "../entities/website";


import {
    createWebPageSchema
} from "../entities/webpage";







interface SchemaGraphProps {


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








export function createSchemaGraph(

    data: SchemaGraphProps

){


    return {


        "@context":

            "https://schema.org",




        "@graph": [



            /*
             Current Page Entity
            */

            createWebPageSchema(data),





            /*
             Website Entity
            */

            WEBSITE_SCHEMA,





            /*
             Global Entity
            */

            ORGANIZATION_SCHEMA,





            /*
             Person Entity
            */

            PERSON_SCHEMA,





            /*
             Brand Assets
            */

            LogoSchema(),


            FounderImageSchema()



        ]


    };


}