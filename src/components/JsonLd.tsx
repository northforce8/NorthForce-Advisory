import { SITE_CONFIG } from "@/lib/constants";

interface JsonLdProps {
  locale: string;
}

export function JsonLd({ locale }: JsonLdProps) {
  const orgName = SITE_CONFIG.name;
  const url = SITE_CONFIG.url;

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}/#organization`,
    name: orgName,
    url,
    logo: `${url}/logo.svg`,
    image: `${url}/hero.jpg`,
    description: locale === "en"
      ? "Strategic business development for Nordic companies and leadership teams."
      : locale === "no"
      ? "Strategisk forretningsutvikling for nordiske selskaper og ledergrupper."
      : "Strategisk affärsutveckling för nordiska företag och ledningsgrupper.",
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      postalCode: SITE_CONFIG.postalCode,
      addressLocality: SITE_CONFIG.city,
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "59.3414",
      longitude: "18.0830",
    },
    priceRange: "$$$",
    foundingDate: "2024",
    areaServed: [
      { "@type": "Country", name: "Sweden" },
      { "@type": "Country", name: "Norway" },
      { "@type": "Country", name: "Denmark" },
      { "@type": "Country", name: "Finland" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "en" ? "Services" : locale === "no" ? "Tjenester" : "Tjänster",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "en" ? "Strategic Business Development" : locale === "no" ? "Strategisk forretningsutvikling" : "Strategisk Affärsutveckling",
            url: `${url}/tjanster`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Transformation",
            url: `${url}/tjanster`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "en" ? "Coaching & Leadership" : locale === "no" ? "Coaching & Lederskap" : "Coaching & Ledarskap",
            url: `${url}/coaching`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "en" ? "Strategy to Results" : locale === "no" ? "Strategi til Resultater" : "Strategi till Resultat",
            url: `${url}/strategi-till-resultat`,
          },
        },
      ],
    },
    sameAs: [
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.twitter,
      SITE_CONFIG.socials.youtube,
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.facebook,
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: orgName,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: locale === "en" ? "en" : locale === "no" ? "nb" : "sv",
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/blogg?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#localbusiness`,
    name: orgName,
    url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      postalCode: SITE_CONFIG.postalCode,
      addressLocality: SITE_CONFIG.city,
      addressCountry: "SE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
