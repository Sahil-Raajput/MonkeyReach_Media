import { createWebPageSchema } from "../entities/webpage";


interface WebPageGraphProps {

    url: string;

    title: string;

    description: string;

    type?:
        | "WebPage"
        | "CollectionPage"
        | "AboutPage"
        | "ContactPage";


    datePublished?: string;


    dateModified?: string;

}



export function createWebPageGraph(

    data: WebPageGraphProps

) {


    return {


        "@context":

            "https://schema.org",



        "@graph": [


            createWebPageSchema(data)


        ]


    };


}