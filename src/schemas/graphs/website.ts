import { WEBSITE_SCHEMA } from "../entities/website";


export function createWebsiteGraph() {

    return {

        "@context":
            "https://schema.org",


        "@graph": [

            WEBSITE_SCHEMA

        ]

    };

}