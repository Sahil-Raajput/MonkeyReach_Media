// src/schemas/graphs/global.ts


import { ORGANIZATION_SCHEMA } from "../entities/organization";

import { PERSON_SCHEMA } from "../entities/person";

import { WEBSITE_SCHEMA } from "../entities/website";







export const GLOBAL_SCHEMA = {



    "@context":

        "https://schema.org",






    "@graph": [


        ORGANIZATION_SCHEMA,


        PERSON_SCHEMA,


        WEBSITE_SCHEMA



    ]



} as const;