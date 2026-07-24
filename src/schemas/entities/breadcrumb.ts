// src/schemas/entities/breadcrumbs.ts


import { IDS } from "../../data/ids";





interface BreadcrumbItem {


    name:

        string;



    url:

        string;



}






interface BreadcrumbProps {


    items:

        BreadcrumbItem[];



}








export function createBreadcrumbSchema(

    data: BreadcrumbProps

) {



    return {



        "@type":

            "BreadcrumbList",





        "@id":

            IDS.breadcrumb(

                data.items[data.items.length - 1].url

            ),





        itemListElement:


            data.items.map(

                (item, index) => ({



                    "@type":

                        "ListItem",





                    position:

                        index + 1,





                    name:

                        item.name,





                    item: {

                        "@id":

                            item.url

                    }



                })

            )



    };



}