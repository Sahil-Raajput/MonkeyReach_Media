import type { SEOData } from "./seo";

import { SITE } from "./site";

import { URLS } from "./urls";





const ORGANIZATION_ID =
URLS.schema.organization;


const WEBSITE_ID =
URLS.schema.website;


const LOGO_ID =
URLS.schema.logo;


const SERVICE_ID =
URLS.schema.service;


const FOUNDER_ID =
URLS.schema.founder;





const address = {


    "@type":
    "PostalAddress",


    "streetAddress":
    SITE.address.street,


    "addressLocality":
    SITE.address.city,


    "addressRegion":
    SITE.address.state,


    "postalCode":
    SITE.address.postalCode,


    "addressCountry":
    SITE.address.country


};









export function getSchema(

    type: SEOData["schema"],

    seo: SEOData

) {



const canonical =
seo?.canonical ?? SITE.url;



const language =
seo?.language ?? SITE.language;







switch(type) {






case "home":



return {


"@context":
"https://schema.org",



"@graph":[




{


"@type":
"Organization",



"@id":
ORGANIZATION_ID,



"name":
SITE.name,



"alternateName":
SITE.alternateName,



"url":
SITE.url,



"logo":{


"@type":
"ImageObject",



"@id":
LOGO_ID,



"url":
SITE.logo


},




"description":
"MonkeyReach Media is a digital marketing agency helping businesses grow through SEO, Google Ads, Meta Ads, Social Media Marketing and performance-driven digital strategies.",




"founder":{


"@type":
"Person",


"@id":
FOUNDER_ID,


"name":
SITE.founder


},




"email":
SITE.email,



"telephone":
SITE.phone,




"contactPoint":{


"@type":
"ContactPoint",


"telephone":
SITE.phone,


"email":
SITE.email,


"contactType":
"customer support",


"availableLanguage":[

"English",

"Hindi"

]


},




"address":
address,




"sameAs":[

URLS.social.instagram,

URLS.social.linkedin,

URLS.social.threads

]



},







{


"@type":
"ProfessionalService",



"@id":
SERVICE_ID,



"name":
SITE.name,



"alternateName":
SITE.alternateName,



"url":
SITE.url,



"image":{

"@id":
LOGO_ID

},




"description":
"SEO and Digital Marketing Agency helping businesses increase visibility, generate leads and grow online.",




"areaServed":{


"@type":
"Place",


"name":
"Worldwide"


},




"priceRange":
"$$",




"telephone":
SITE.phone,



"email":
SITE.email,



"address":
address,



"provider":{

"@id":
ORGANIZATION_ID

}



},







{


"@type":
"WebSite",



"@id":
WEBSITE_ID,



"url":
SITE.url,



"name":
SITE.name,



"alternateName":
SITE.alternateName,



"inLanguage":
language,



"publisher":{


"@id":
ORGANIZATION_ID

}



}




]


};













case "about":



return {


"@context":
"https://schema.org",



"@type":
"AboutPage",



"@id":
`${canonical}#webpage`,



"url":
canonical,



"name":
seo.title,



"description":
seo.description,



"inLanguage":
language,



"isPartOf":{

"@id":
WEBSITE_ID

},




"about":{

"@id":
ORGANIZATION_ID

},




"publisher":{

"@id":
ORGANIZATION_ID

}



};













case "contact":



return {


"@context":
"https://schema.org",



"@type":
"ContactPage",



"@id":
`${canonical}#webpage`,



"url":
canonical,



"name":
seo.title,



"description":
seo.description,



"inLanguage":
language,



"isPartOf":{

"@id":
WEBSITE_ID

},




"about":{

"@id":
ORGANIZATION_ID

},




"publisher":{

"@id":
ORGANIZATION_ID

}



};













case "collection":



return {


"@context":
"https://schema.org",



"@type":
"CollectionPage",



"@id":
`${canonical}#webpage`,



"url":
canonical,



"name":
seo.title,



"description":
seo.description,



"inLanguage":
language,



"isPartOf":{

"@id":
WEBSITE_ID

},




"publisher":{

"@id":
ORGANIZATION_ID

}



};













case "service":



return {


"@context":
"https://schema.org",



"@type":
"Service",



"@id":
`${canonical}#service`,



"url":
canonical,



"name":
seo.title,



"description":
seo.description,



"provider":{

"@id":
ORGANIZATION_ID

},



"areaServed":{


"@type":
"Place",


"name":
"Worldwide"


}



};













case "webpage":



default:



return {


"@context":
"https://schema.org",



"@type":
"WebPage",



"@id":
`${canonical}#webpage`,



"url":
canonical,



"name":
seo.title,



"description":
seo.description,



"inLanguage":
language,



"isPartOf":{

"@id":
WEBSITE_ID

},




"publisher":{

"@id":
ORGANIZATION_ID

}



};



}



}