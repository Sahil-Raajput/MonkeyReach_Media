// src/schemas/entities/faq.ts


import { IDS } from "../../data/ids";







interface FAQItem {


    question:

        string;



    answer:

        string;



}







interface FAQProps {


    url:

        string;



    questions:

        FAQItem[];



}








export function createFAQSchema(

    data: FAQProps

) {



    return {



        "@type":

            "FAQPage",






        "@id":

            IDS.faq(data.url),






        mainEntity:


            data.questions.map(

                (item) => ({



                    "@type":

                        "Question",





                    name:

                        item.question,





                    acceptedAnswer: {



                        "@type":

                            "Answer",





                        text:

                            item.answer



                    }



                })

            )



    };



}