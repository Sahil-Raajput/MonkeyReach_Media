// src/schemas/entities/image.ts


import { IDS } from "../../data/ids";
import { ASSETS } from "../../data/assets";





export function LogoSchema(){


    return {


        "@type": "ImageObject",


        "@id": IDS.logo,


        "url":
            ASSETS.logo


    };


}







export function FounderImageSchema(){


    return {


        "@type": "ImageObject",


        "@id": IDS.founderImage,


        "url":
            ASSETS.founderImage


    };


}