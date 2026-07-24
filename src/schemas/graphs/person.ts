import { PERSON_SCHEMA } from "../entities/person";


export function createPersonGraph() {

    return {

        "@context":
            "https://schema.org",

        "@graph": [

            PERSON_SCHEMA

        ]

    };

}