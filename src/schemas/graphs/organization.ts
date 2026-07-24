import { ORGANIZATION_SCHEMA } from "../entities/organization";


export function createOrganizationGraph() {

    return {

        "@context":
            "https://schema.org",

        "@graph": [

            ORGANIZATION_SCHEMA

        ]

    };

}