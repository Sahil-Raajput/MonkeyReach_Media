import type { SEOData } from "./seo";


const SITE_URL = "https://monkeyreach.com";


const LOGO =
`${SITE_URL}/logos/MonkeyReach-Logo.avif`;





export function getSchema(
    type: SEOData["schema"],
    seo: SEOData
) {



switch(type) {



case "home":


return {


"@context":"https://schema.org",


"@graph":[


{


"@type":"Organization",


"@id":
`${SITE_URL}/#organization`,


"name":
"MonkeyReach Media",


"alternateName":
"MonkeyReach",


"url":
SITE_URL,


"logo":{

"@type":"ImageObject",

"url":LOGO

},


"description":
"MonkeyReach is a digital marketing agency helping businesses grow through SEO, Google Ads, Meta Advertising, Social Media Marketing and performance-driven digital strategies.",


"founder":{

"@type":"Person",

"name":"Sahil Raajput"

},


"email":
"contact@monkeyreach.com",


"telephone":
"+91-9053556090",


"sameAs":[

"https://www.instagram.com/monkey_reach/",

"https://www.linkedin.com/company/monkey-reach/",

"https://www.threads.com/@monkey_reach"

]


},




{


"@type":"ProfessionalService",


"@id":
`${SITE_URL}/#service`,


"name":
"MonkeyReach",


"url":
SITE_URL,


"image":
LOGO,


"description":
"SEO and Digital Marketing Agency serving businesses worldwide.",


"areaServed":
"Worldwide",


"priceRange":
"$$",


"telephone":
"+91-9053556090",


"email":
"contact@monkeyreach.com",



"address":{


"@type":"PostalAddress",


"streetAddress":
"Kishan Garh Road",


"addressLocality":
"Kurukshetra",


"addressRegion":
"Haryana",


"postalCode":
"136135",


"addressCountry":
"IN"


}


},




{


"@type":"WebSite",


"@id":
`${SITE_URL}/#website`,


"url":
SITE_URL,


"name":
"MonkeyReach",


"inLanguage":
seo.language,


"publisher":{


"@id":
`${SITE_URL}/#organization`

}


}



]


};









case "about":


return {


"@context":"https://schema.org",


"@type":"AboutPage",


"@id":
`${seo.canonical}#webpage`,


"url":
seo.canonical,


"name":
seo.title,


"description":
seo.description,


"isPartOf":{


"@id":
`${SITE_URL}/#website`

},


"about":{


"@id":
`${SITE_URL}/#organization`

},


"publisher":{


"@id":
`${SITE_URL}/#organization`

}


};









case "contact":


return {


"@context":"https://schema.org",


"@type":"ContactPage",


"@id":
`${seo.canonical}#webpage`,


"url":
seo.canonical,


"name":
seo.title,


"description":
seo.description,


"isPartOf":{


"@id":
`${SITE_URL}/#website`

},


"about":{


"@id":
`${SITE_URL}/#organization`

},


"publisher":{


"@id":
`${SITE_URL}/#organization`

}


};









case "collection":


return {


"@context":"https://schema.org",


"@type":"CollectionPage",


"@id":
`${seo.canonical}#webpage`,


"url":
seo.canonical,


"name":
seo.title,


"description":
seo.description,


"isPartOf":{


"@id":
`${SITE_URL}/#website`

},


"publisher":{


"@id":
`${SITE_URL}/#organization`

},


"about":{


"@type":"Thing",


"name":
seo.title.replace("| MonkeyReach","").trim()


}


};









case "webpage":


default:


return {


"@context":"https://schema.org",


"@type":"WebPage",


"@id":
`${seo.canonical}#webpage`,


"url":
seo.canonical,


"name":
seo.title,


"description":
seo.description,


"isPartOf":{


"@id":
`${SITE_URL}/#website`

},


"publisher":{


"@id":
`${SITE_URL}/#organization`

}


};



}



}