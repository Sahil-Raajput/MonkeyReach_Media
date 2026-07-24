// src/schemas/entities/organization.ts

import { SITE } from "../../data/site";
import { SOCIALS } from "../../data/socials";
import { IDS } from "../../data/ids";

export const ORGANIZATION_SCHEMA = {

    "@type":
        "Organization",

    "@id":
        IDS.organization,



    name:
        SITE.name,



    legalName:
        SITE.legalName,



    alternateName:
        SITE.alternateName,



    url:
        SITE.url,



    description:
        SITE.description,



    logo: {

        "@id":
            IDS.logo

    },



    founder: {

        "@id":
            IDS.founder

    },



    foundingDate:
        SITE.foundingDate,



    foundingLocation: {

        "@type":
            "Place",

        name:
            `${SITE.foundingLocation.city}, ${SITE.foundingLocation.state}, ${SITE.foundingLocation.country}`

    },



    contactPoint: {

        "@type":
            "ContactPoint",

        contactType:
            SITE.contactType,

        email:
            SITE.email,

        availableLanguage:
            SITE.language

    },



    sameAs:
        SOCIALS.company,



    knowsAbout:
        SITE.knowsAbout

} as const;