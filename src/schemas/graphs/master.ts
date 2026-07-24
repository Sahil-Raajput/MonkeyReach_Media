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
    LogoSchema,
    FounderImageSchema
} from "../entities/image";


import {
    createWebPageSchema
} from "../entities/webpage";





interface MasterGraphProps {

    url: string;

    title: string;

    description: string;

    type?:
        | "WebPage"
        | "CollectionPage"
        | "AboutPage"
        | "ContactPage";

}





export function createMasterGraph(

    data: MasterGraphProps

){


    return {


        "@context":

            "https://schema.org",



        "@graph": [



            /*
             Organization Entity
            */

            ORGANIZATION_SCHEMA,



            /*
             Person Entity
            */

            PERSON_SCHEMA,



            /*
             Website Entity
            */

            WEBSITE_SCHEMA,



            /*
             Image Entities
            */

            LogoSchema(),

            FounderImageSchema(),



            /*
             Current Page
            */

            createWebPageSchema(data)



        ]

    };


}