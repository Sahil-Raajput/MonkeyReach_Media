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
SITE.founder,


"url":
`${SITE.url}/about-us/`,


"jobTitle":
"Founder",


"worksFor":{


"@id":
ORGANIZATION_ID


}


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



"sameAs":
SITE.socialProfiles



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

"SEO and digital marketing agency helping businesses improve visibility, generate qualified leads and grow online.",



"provider":{


"@id":
ORGANIZATION_ID


},



"areaServed":{


"@type":
"AdministrativeArea",


"name":
"Worldwide"


},



"priceRange":
"$$"



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


},




"mainEntity":{


"@type":
"ItemList",


"name":
"MonkeyReach Digital Marketing Services",



"itemListElement":[


{


"@type":
"Service",


"name":
"SEO Services",


"url":
URLS.services.seo


},



{


"@type":
"Service",


"name":
"Google Ads Management",


"url":
URLS.services.googleAds


},



{


"@type":
"Service",


"name":
"Meta Ads Management",


"url":
URLS.services.metaAds


},



{


"@type":
"Service",


"name":
"Social Media Marketing",


"url":
URLS.services.socialMedia


},



{


"@type":
"Service",


"name":
"Digital Marketing Services",


"url":
URLS.services.digitalMarketing


}



]


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



"serviceType":
seo.title,



"provider":{


"@id":
ORGANIZATION_ID


},



"areaServed":{


"@type":
"AdministrativeArea",


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