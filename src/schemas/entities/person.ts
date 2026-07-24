// src/schemas/entities/person.ts

import { PERSON } from "../../data/person";
import { IDS } from "../../data/ids";

export const PERSON_SCHEMA = {

    "@type":
        "Person",

    "@id":
        IDS.founder,



    name:
        PERSON.name,



    alternateName:
        PERSON.alternateName,



    jobTitle:
        PERSON.jobTitle,



    description:
        PERSON.description,



    url:
        PERSON.url,



    image: {

        "@id":
            IDS.founderImage

    },



    worksFor: {

        "@id":
            IDS.organization

    },



    knowsAbout:
        PERSON.knowsAbout,



    sameAs:
        PERSON.sameAs

} as const;