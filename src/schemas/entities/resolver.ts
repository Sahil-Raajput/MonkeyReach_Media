// src/data/schema/resolver.ts


import { createHomepageSchema } from "../graphs/homepage";

import { createAboutSchema } from "../graphs/about";

import { createContactSchema } from "../graphs/contact";

import { createServiceSchema } from "../graphs/service";



import { URLS } from "../../data/urls";







interface SchemaResolverProps {


    title:

        string;



    description:

        string;



}








export function getSchema(

    pathname: string,

    data: SchemaResolverProps

) {



    const path = pathname.endsWith("/")

        ? pathname

        : pathname + "/";








    /*
    Homepage
    */


    if (

        path === "/"

        ||

        path === URLS.pages.home.replace(

            "https://monkeyreach.com",

            ""

        )

    ) {



        return createHomepageSchema({



            title:

                data.title,



            description:

                data.description



        });



    }









    /*
    About Page
    */


    if (

        path ===

        URLS.pages.about.replace(

            "https://monkeyreach.com",

            ""

        )

    ) {



        return createAboutSchema({



            title:

                data.title,



            description:

                data.description



        });



    }









    /*
    Contact Page
    */


    if (

        path ===

        URLS.pages.contact.replace(

            "https://monkeyreach.com",

            ""

        )

    ) {



        return createContactSchema({



            title:

                data.title,



            description:

                data.description



        });



    }









    /*
    Service Pages
    */


    if (

        path.startsWith(

            "/services/"

        )

    ) {



        return createServiceSchema({



            name:

                data.title,



            description:

                data.description,



            url:

                URLS.base + path



        });



    }









    /*
    Default fallback

    Every unknown page still gets
    Organization + Person + Website
    */


    return {

        "@context":

            "https://schema.org",



        "@graph": []

    };



}