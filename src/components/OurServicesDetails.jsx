import React from "react";
import { useParams, Link } from "react-router-dom";
import "./OurServicesDetails.css";
import HomeCleaningImg from './images/image1.jpg'
import OfficeCleaningService from './images/offficecleaningservice.PNG';
import FloorCleaningService  from './images/floorcleaningservice.PNG';
import FadeCleaningService  from './images/fadecleaningservice.PNG';
import CurtainCleaningService  from './images/curtaincleaningservice.PNG';
import BathroomCleaningService  from './images/bathroomcleaningservice.PNG';


/* Service content map (can be API-driven later) */
const serviceData = {
"home-cleaning-services": {
  title: "Home Cleaning Services in Kuwait",

  intro:
    "Hayakom Cleaning Services is a professional home cleaning company in Kuwait, providing high-quality and reliable cleaning solutions for residential and commercial spaces. We focus on delivering clean, hygienic, and comfortable environments using modern cleaning techniques and trained manpower. Our services are designed to make home cleaning simple and stress-free. Whether you need regular housekeeping or deep cleaning, our team ensures every corner of your space is cleaned with care and precision.",

  sectionTitle: "Professional Home Cleaning Solutions",

  sectionIntro:
    "At Hayakom Cleaning Services, we offer a complete range of home cleaning services to meet different customer needs:",

  points: [
    "Deep cleaning for apartments, houses, villas, and offices",
    "Carpet, rug, and sofa cleaning using advanced steam equipment",
    "Detailed cleaning for living rooms, bedrooms, kitchens, and bathrooms",
    "Floor, tile, and surface cleaning with professional tools",
    "Safe home sanitization and disinfection for families and pets",
  ],

  extraNote:
    "We use effective, eco-friendly cleaning products that deliver excellent results while maintaining safety and hygiene.",

  extraSectionTitle: "24-Hour Cleaning Services",

  extraSectionIntro:
    "Hayakom Cleaning Services provides 24-hour home cleaning services in Kuwait, ensuring fast response and flexible service times. We respect our clients’ schedules and deliver timely, efficient cleaning without compromising quality.",

  extraSectionPoints: [
    "Modern cleaning machines and advanced equipment",
    "Skilled and well-trained cleaning staff",
    "Services for homes, offices, shops, hotels, and commercial spaces",
    "Capability to handle complex and large-scale cleaning tasks",
  ],

  offerNote:
    "We also offer affordable packages and special discounts for regular and long-term customers.",

  professionalSectionTitle: "Why Choose Hayakom Cleaning Services?",

  professionalSectionPoints: [
    "Experienced and professional cleaning teams",
    "Advanced deep-cleaning and steam-cleaning technology",
    "Safe, high-quality cleaning materials",
    "Reliable service with attention to detail",
    "Transparent pricing and customer-focused approach",
  ],

  finalSectionTitle: "Trusted Home Cleaning Company in Kuwait",

  finalSectionContent: [
    "As a dependable home cleaning service provider in Kuwait, Hayakom Cleaning Services is committed to delivering superior results and complete customer satisfaction.",
    "Our mission is to provide consistent quality and long-lasting cleanliness for every client.",
    "We aim to build long-term relationships by offering honest service, professional standards, and dependable support.",
  ],

  videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

  contactNumbers: ["+965 55396880", "+965 50449213", "+965 60446934"],

  image: HomeCleaningImg,
},
"carpet-cleaning-services": {
  title: "Carpet Cleaning Services in Kuwait",

  intro: `Hayakom Cleaning Services provides professional carpet cleaning services in Kuwait, helping restore the cleanliness, freshness, and appearance of all types of carpets.

Carpets trap dust, allergens, stains, and bacteria deep within the fibers, which regular vacuuming cannot remove. Our specialized carpet cleaning solutions ensure deep hygiene and long-lasting results.

We use advanced cleaning techniques and professional equipment to deliver safe and effective carpet cleaning for residential and commercial spaces.`,

  sectionTitle: "Professional Carpet Cleaning Solutions",

  sectionIntro: `At Hayakom Cleaning Services, we offer customized carpet cleaning services based on carpet type and condition:`,

  points: [
    "Deep cleaning for all carpet types",
    "Removal of dirt, stains, and embedded dust",
    "Steam cleaning to eliminate germs and allergens",
    "Odor removal and freshness treatment",
    "Gentle cleaning methods to protect fibers and colors",
  ],

  extraNote:
    "Our cleaning process improves carpet appearance while extending its lifespan.",

  extraSectionTitle: "Advanced Equipment & Safe Cleaning Products",

  extraSectionIntro: `We use modern steam cleaning machines and high-performance tools that penetrate deep into carpet fibers to remove hidden contaminants.

All cleaning products are eco-friendly, non-toxic, and safe for children, pets, and indoor environments.`,

  extraSectionPoints: [
    "Homes, apartments, and villas",
    "Offices and corporate buildings",
    "Restaurants, lounges, and waiting areas",
    "Shops, mosques, and public areas",
  ],

  offerNote:
    "No matter the size or usage, we ensure hygienic and refreshed carpets.",

  professionalSectionTitle: "Why Choose Hayakom Carpet Cleaning Services?",

  professionalSectionPoints: [
    "Experienced and trained carpet cleaning professionals",
    "Advanced steam-cleaning and deep-cleaning technology",
    "Safe, high-quality cleaning materials",
    "Attention to detail and fabric care",
    "Affordable pricing with flexible service options",
  ],

  finalSectionTitle: "Book Carpet Cleaning Services Today",

  finalSectionContent: [
    "Restore the beauty and hygiene of your carpets with professional carpet cleaning from Hayakom Cleaning Services. Contact us today to schedule your service and enjoy cleaner, fresher, and healthier carpets.",
    "Our mission is to provide consistent quality and long-lasting cleanliness for every client.",
    "We aim to build long-term relationships by offering honest service, professional standards, and dependable support.",
  ],

  videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

  contactNumbers: ["+965 55396880", "+965 50449213", "+965 60446934"],

  image: HomeCleaningImg,
},


  "maid-services": {
    /* H1 */
    title: "Maid Services",

    /* Intro Section */
    intro:
      "Al-Ameka Maid Services in Kuwait provides reliable, professional, and well-trained domestic helpers to support your household needs. Our maids are carefully selected to ensure trust, efficiency, and high standards of service.",

    points: [
      "Daily, weekly, and monthly maid services based on your schedule.",
      "Trained and verified maids with experience in household tasks.",
      "Support for apartments, villas, and family homes of all sizes.",
      "Flexible working hours to suit your convenience.",
      "High standards of hygiene, discipline, and professionalism.",
    ],

    /* h1 */
    sectionTitle: "24-Hour Maid Service Company",
    sectionIntro:
      "Al-Ameka Cleaning® offers 24-hour maid service support, ensuring household assistance is available whenever you need it, including emergencies and special occasions.",
    sectionPoints: [
      "On-demand maid services available day and night.",
      "Quick response time with immediate staff allocation.",
      "Reliable replacements in case of absence.",
      "Strict adherence to client instructions and privacy.",
    ],

    /* h1 */
    extraSectionTitle: "Professional Maid Services in Salmiya",
    extraSectionIntro:
      "If you are looking for professional maid services in Salmiya, Al-Ameka provides trained domestic helpers who handle daily household responsibilities with care and precision.",
    extraSectionPoints: [
      "Cleaning, washing, ironing, and basic household organization.",
      "Support for families, working professionals, and elderly care.",
      "Maid services for short-term and long-term requirements.",
      "Well-supervised staff with performance monitoring.",
    ],

    /* Optional Video Section */
    videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

    /* Long-form Company Content */
    finalSectionContent: [
      "Al-Ameka Maid Services is among the trusted service providers in Kuwait, offering domestic helpers who are trained to meet the highest household standards. Our recruitment process ensures reliability, experience, and professionalism.",
      "We understand the importance of trust when allowing someone into your home. Therefore, all our maids undergo background verification and training to deliver consistent and quality service.",
      "Our customer support team is available 24 hours a day to assist with scheduling, replacements, and service adjustments based on your changing needs.",
    ],

    /* Image */
    image: HomeCleaningImg,

    /* h1 */
    professionalSectionTitle: "Professional Maid Service Company",
    professionalSectionIntro:
      "Al-Ameka Cleaning® employs experienced and disciplined maids who are committed to maintaining cleanliness, order, and comfort in your home.",
    professionalSectionPoints: [
      "Customer satisfaction is our top priority.",
      "Maids trained in housekeeping, hygiene, and etiquette.",
      "Guaranteed service quality with supervision support.",
      "Respect for family privacy and cultural values.",
      "Use of safe and approved cleaning materials when required.",
    ],

    /* h1 */
    apartmentSectionTitle: "Apartment Maid Services",
    apartmentSectionIntro:
      "Our apartment maid services are designed to help residents maintain a clean and organized living space without disrupting their daily routine.",
    apartmentSectionPoints: [
      "Ideal for studio, 1BHK, and family apartments.",
      "No need to move furniture or vacate the house.",
      "Flexible scheduling based on apartment rules.",
      "Affordable packages suitable for all budgets.",
    ],

    /* Contact Section */
    contactNumbers: ["+965 55396880", "+965 50449213","+965 60446934"],

    /* Closing CTA */
    closingContent:
      "With Al-Ameka Maid Services, you can enjoy a comfortable, clean, and well-managed home without stress. Contact us today to book professional maid services in Kuwait and experience the difference of trusted domestic support.",
  },
  "curtain-cleaning-services": {
  title: "Curtain Cleaning Services in Kuwait",

  intro: `Hayakom Cleaning Services provides professional curtain cleaning services in Kuwait, designed to remove dust, stains, odors, and allergens while protecting fabric quality.

Curtains collect airborne dust and pollutants over time, affecting indoor air quality and appearance. Our specialized cleaning solutions ensure fresh, clean, and well-maintained curtains.

We use safe cleaning methods and modern equipment to deliver effective results without damaging fabrics.`,

  sectionTitle: "Professional Curtain Cleaning Solutions",

  sectionIntro: `At Hayakom Cleaning Services, we offer tailored curtain cleaning services for different fabric types:`,

  points: [
    "Deep cleaning for fabric, cotton, silk, and synthetic curtains",
    "Removal of dust, stains, and unpleasant odors",
    "Steam cleaning to eliminate germs and allergens",
    "Gentle cleaning methods to preserve fabric texture and color",
    "On-site curtain cleaning without removal (where suitable)",
  ],

  extraNote:
    "Our team selects the most appropriate cleaning technique based on curtain material and condition.",

  extraSectionTitle: "Advanced Equipment & Safe Cleaning Products",

  extraSectionIntro: `We use modern steam cleaning machines and professional tools that penetrate deep into curtain fibers.

All cleaning products used are eco-friendly, non-toxic, and safe for children and pets. Our cleaning process ensures quick drying and minimal disruption to your daily routine.`,

  extraSectionPoints: [
    "Homes, apartments, and villas",
    "Offices and corporate buildings",
    "Restaurants, lounges, and waiting areas",
    "Shops, mosques, and public areas",
  ],

  offerNote:
    "No matter the size or usage, we ensure hygienic and refreshed curtains.",

  professionalSectionTitle: "Why Choose Hayakom Curtain Cleaning Services?",

  professionalSectionPoints: [
    "Experienced and trained curtain cleaning professionals",
    "Advanced steam-cleaning and deep-cleaning technology",
    "Safe, high-quality cleaning materials",
    "Attention to detail and fabric care",
    "Affordable pricing with flexible service options",
  ],

  finalSectionTitle: "Book Curtain Cleaning Services Today",

  finalSectionContent: [
    "Refresh your space with professional curtain cleaning from Hayakom Cleaning Services. Contact us today to schedule your service and enjoy clean, fresh, and hygienic curtains.",
    "Our mission is to provide consistent quality and long-lasting cleanliness for every client.",
    "We aim to build long-term relationships by offering honest service, professional standards, and dependable support.",
  ],

  videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

  contactNumbers: ["+965 55396880", "+965 50449213", "+965 60446934"],

  image: CurtainCleaningService,
},

  "Facade-cleaning-services": {
   title: "Facade Cleaning Services in Kuwait",

  intro: `Hayakom Cleaning Services provides professional facade cleaning services in Kuwait, helping buildings maintain a clean, attractive, and well-maintained exterior.

Over time, building facades collect dust, pollution, stains, and environmental deposits that affect appearance and surface quality. Our facade cleaning solutions restore cleanliness while protecting the structure.

We use safe, modern cleaning methods and trained professionals to clean building exteriors efficiently and responsibly.`,

  sectionTitle: "Professional Facade Cleaning Solutions",

  sectionIntro: `At Hayakom Cleaning Services, we offer complete facade cleaning services for different building types and surfaces:`,

  points: [
    "Cleaning of glass, aluminum, stone, marble, and concrete facades",
    "Removal of dust, pollution marks, algae, and surface stains",
    "Exterior wall and cladding cleaning",
    "Window and glass panel cleaning",
    "Safe high-rise and low-rise building cleaning",
  ],

  extraNote:
    "Our cleaning methods are selected based on the surface material to prevent damage and ensure long-lasting results.",

  extraSectionTitle: "Advanced Equipment & Safe Cleaning Methods",

  extraSectionIntro: `We use modern equipment such as water-fed poles, pressure cleaning systems, and specialized tools for facade cleaning.

All cleaning agents used are eco-friendly and safe for the building surface and surrounding environment.`,

  extraSectionPoints: [
    "Residential buildings and villas",
    "Commercial buildings and office towers",
    "Shopping centers and showrooms",
    "Hotels and hospitality buildings",
    "Industrial and public facilities",
  ],

  offerNote:
    "We customize our services according to building size, height, and surface type.",

  professionalSectionTitle: "Why Choose Hayakom Facade Cleaning Services?",

  professionalSectionPoints: [
    "Experienced and trained facade cleaning professionals",
    "Safe and advanced cleaning equipment",
    "Surface-specific cleaning techniques",
    "High safety and quality standards",
    "Affordable pricing with flexible service plans",
  ],

  finalSectionTitle: "Book Facade Cleaning Services Today",

  finalSectionContent: [
    "Enhance the appearance and value of your building with professional facade cleaning from Hayakom Cleaning Services. Contact us today to schedule your service and enjoy a clean, refreshed building exterior.",
    "Our mission is to provide consistent quality and long-lasting cleanliness for every client.",
    "We aim to build long-term relationships by offering honest service, professional standards, and dependable support.",
  ],

  videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

  contactNumbers: ["+965 55396880", "+965 50449213", "+965 60446934"],

  image: FadeCleaningService,
},

"office-commercial-cleaning": {
  title: "Office & Commercial Cleaning Services in Kuwait",

  intro: `Hayakom Cleaning Services provides reliable and professional office and commercial cleaning services in Kuwait, helping businesses maintain clean, organized, and healthy work environments.

A clean workplace improves productivity, creates a positive impression, and ensures better hygiene for employees and visitors.

We deliver customized cleaning solutions using modern equipment, safe cleaning products, and trained staff to meet the daily and periodic cleaning needs of all types of commercial spaces.`,

  sectionTitle: "Professional Office & Commercial Cleaning Solutions",

  sectionIntro: `At Hayakom Cleaning Services, we offer a comprehensive range of cleaning services designed for offices and commercial establishments:`,

  points: [
    "Daily, weekly, and monthly office cleaning services",
    "Cleaning of workstations, desks, and office furniture",
    "Floor, tile, and carpet cleaning",
    "Washroom and pantry cleaning and disinfection",
    "Glass, window, and partition cleaning",
  ],

  extraNote:
    "Our services are planned to minimize disruption to business operations while maintaining high cleanliness standards.",

  extraSectionTitle: "Flexible Scheduling & 24-Hour Service",

  extraSectionIntro: `Hayakom Cleaning Services offers flexible scheduling, including after-hours and 24-hour cleaning services, to suit business requirements.

We respect your working hours and ensure cleaning tasks are completed efficiently and on time.`,

  extraSectionPoints: [
    "Corporate offices and business centers",
    "Shops, showrooms, and retail outlets",
    "Restaurants, cafes, and food courts",
    "Hotels and hospitality spaces",
    "Schools, clinics, and commercial buildings",
  ],

  offerNote:
    "We tailor our services based on the size, type, and specific needs of your business.",

  professionalSectionTitle: "Why Choose Hayakom Office & Commercial Cleaning?",

  professionalSectionPoints: [
    "Experienced and professional cleaning teams",
    "Advanced cleaning equipment and techniques",
    "Safe and high-quality cleaning materials",
    "Flexible service plans and affordable pricing",
    "Reliable service with attention to detail",
  ],

  finalSectionTitle: "Book Office & Commercial Cleaning Services Today",

  finalSectionContent: [
    "Maintain a clean and productive workplace with Hayakom Cleaning Services. Contact us today to schedule your office or commercial cleaning service and experience professional, dependable, and high-quality cleaning solutions.",
    "Our mission is to provide consistent quality and long-lasting cleanliness for every client.",
    "We aim to build long-term relationships by offering honest service, professional standards, and dependable support.",
  ],

  videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

  contactNumbers: ["+965 55396880", "+965 50449213", "+965 60446934"],

  image: OfficeCleaningService,
},



"sofa-carpet-curtain-cleaning": {
  title: "Sofa Cleaning Services in Kuwait",

  intro: `Hayakom Cleaning Services offers professional sofa cleaning services in Kuwait, designed to restore the freshness, comfort, and appearance of your upholstered furniture.

Sofas collect dust, stains, allergens, and bacteria over time, which regular cleaning cannot fully remove. Our specialized sofa cleaning solutions ensure deep cleanliness and long-lasting results.

We use advanced cleaning techniques and safe products to protect fabric quality while delivering effective cleaning.`,

  sectionTitle: "Professional Sofa Cleaning Solutions",

  sectionIntro: `At Hayakom Cleaning Services, we provide customized sofa cleaning services for different upholstery types:`,

  points: [
    "Deep cleaning for fabric, leather, and suede sofas",
    "Removal of stains, dirt, and unpleasant odors",
    "Steam cleaning to eliminate germs and allergens",
    "Gentle cleaning methods to protect color and texture",
    "Quick-drying techniques for convenience",
  ],

  extraNote:
    "Our team carefully selects the best cleaning method based on the sofa material and condition.",

  extraSectionTitle: "Suitable for Residential & Commercial Spaces",

  extraSectionIntro: `Our sofa cleaning services are ideal for:`,

  extraSectionPoints: [
    "Homes, apartments, and villas",
    "Offices and corporate spaces",
    "Hotels and hospitality areas",
    "Restaurants, lounges, and waiting areas",
    "Schools, clinics, and commercial buildings",
  ],

  offerNote:
    "No matter the setting, we ensure hygienic and refreshed furniture.",

  professionalSectionTitle: "Why Choose Hayakom Sofa Cleaning Services?",

  professionalSectionPoints: [
    "Experienced and trained cleaning professionals",
    "Advanced steam and upholstery cleaning technology",
    "Safe, high-quality cleaning materials",
    "Attention to detail and fabric care",
    "Affordable pricing with flexible service options",
  ],

  finalSectionTitle: "Book Sofa Cleaning Services Today",

  finalSectionContent: [
    "Refresh your furniture with professional sofa cleaning from Hayakom Cleaning Services. Contact us today to schedule your service and enjoy clean, fresh, and hygienic sofas.",
    "Our mission is to provide consistent quality and long-lasting cleanliness for every client.",
    "We aim to build long-term relationships by offering honest service, professional standards, and dependable support.",
  ],

  videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

  contactNumbers: ["+965 55396880", "+965 50449213", "+965 60446934"],

  image: HomeCleaningImg,
},


  "kitchen-bathroom-cleaning": {
  title: "Kitchen & Bathroom Cleaning Services in Kuwait",

  intro: `Hayakom Cleaning Services provides professional kitchen and bathroom cleaning services in Kuwait, focusing on deep hygiene, safety, and freshness.

Kitchens and bathrooms are the most frequently used areas in any home and require specialized cleaning to remove grease, stains, germs, and odors.

Our expert team uses modern equipment and safe cleaning products to ensure these areas are thoroughly cleaned, sanitized, and refreshed.`,

  sectionTitle: "Professional Kitchen Cleaning Services",

  sectionIntro: `At Hayakom Cleaning Services, we deliver detailed kitchen cleaning to maintain hygiene and cleanliness:`,

  points: [
    "Deep cleaning of countertops, cabinets, and drawers",
    "Degreasing of stoves, ovens, chimneys, and exhaust fans",
    "Sink, tap, and backsplash cleaning",
    "Floor and wall tile cleaning",
    "Disinfection of food preparation areas",
  ],

  extraNote:
    "We remove tough grease and stains while protecting kitchen surfaces and ensuring a safe cooking environment.",

  extraSectionTitle: "Professional Bathroom & Toilet Cleaning Services",

  extraSectionIntro: `Our bathroom cleaning services are designed to eliminate germs and restore freshness:`,

  extraSectionPoints: [
    "Deep cleaning and sanitization of toilets, sinks, and showers",
    "Removal of limescale, soap residue, and mold",
    "Cleaning of mirrors, fittings, and accessories",
    "Floor and wall tile cleaning and disinfection",
    "Odor removal and hygiene treatment",
  ],

  offerNote:
    "We ensure bathrooms are hygienic, fresh, and safe for daily use.",

  professionalSectionTitle: "Why Choose Hayakom Kitchen & Bathroom Cleaning?",

  professionalSectionPoints: [
    "Experienced and trained cleaning professionals",
    "Specialized cleaning methods for kitchens and bathrooms",
    "Safe, high-quality cleaning materials",
    "Attention to detail and hygiene standards",
    "Affordable pricing with flexible service options",
  ],

  finalSectionTitle: "Book Kitchen & Bathroom Cleaning Services Today",

  finalSectionContent: [
    "Ensure deep hygiene and freshness with professional kitchen and bathroom cleaning from Hayakom Cleaning Services. Contact us today to schedule your service and enjoy a cleaner, healthier space.",
    "Our mission is to provide consistent quality and long-lasting cleanliness for every client.",
    "We aim to build long-term relationships by offering honest service, professional standards, and dependable support.",
  ],

  videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

  contactNumbers: ["+965 55396880", "+965 50449213", "+965 60446934"],

  image: BathroomCleaningService,
},


  "floor-tile-cleaning": {
  title: "Floor and Tile Cleaning Services in Kuwait",

  intro: `Hayakom Cleaning Services provides professional floor and tile cleaning solutions in Kuwait, designed to restore the cleanliness, shine, and hygiene of all types of flooring.

Over time, floors and tiles collect dirt, stains, and bacteria that regular cleaning cannot remove. Our specialized cleaning service ensures deep cleanliness and long-lasting results.

We use advanced cleaning techniques, modern equipment, and trained professionals to deliver safe and effective floor and tile cleaning for residential and commercial spaces.`,

  sectionTitle: "Professional Floor & Tile Cleaning Solutions",

  sectionIntro: `At Hayakom Cleaning Services, we offer complete floor and tile cleaning services tailored to different surfaces and environments:`,

  points: [
    "Deep cleaning for ceramic, porcelain, marble, granite, and stone tiles",
    "Removal of tough stains, grease, and embedded dirt",
    "Cleaning and restoration of grout lines",
    "Polishing and shine enhancement for floors",
    "Safe cleaning for wooden and laminated flooring (surface treatment)",
  ],

  extraNote:
    "Our methods help protect the surface while improving appearance and hygiene.",

  extraSectionTitle: "Advanced Equipment & Safe Cleaning Products",

  extraSectionIntro: `We use professional-grade machines, high-pressure cleaning tools, and eco-friendly cleaning solutions that effectively remove dirt without damaging tiles or floors.

All products used are safe for homes, offices, pets, and children. Steam cleaning is applied where suitable to eliminate germs and bacteria, ensuring a healthier indoor environment.`,

  extraSectionPoints: [
    "Apartments and villas",
    "Homes and residential buildings",
    "Offices and corporate spaces",
    "Shops, showrooms, cafes, and restaurants",
    "Hotels and commercial properties",
  ],

  offerNote:
    "We also offer affordable packages and special discounts for regular and long-term customers.",

  professionalSectionTitle: "Why Choose Hayakom Floor & Tile Cleaning?",

  professionalSectionPoints: [
    "Experienced and trained cleaning professionals",
    "Advanced deep-cleaning and steam-cleaning technology",
    "Safe, high-quality cleaning materials",
    "Reliable service with attention to detail",
    "Transparent pricing and customer-focused approach",
  ],

  finalSectionTitle: "Book Your Floor & Tile Cleaning Service Today",

  finalSectionContent: [
    "Refresh and protect your floors with professional cleaning from Hayakom Cleaning Services. Contact us today to schedule your floor and tile cleaning service and enjoy spotless, polished, and hygienic surfaces.",
    "Our mission is to provide consistent quality and long-lasting cleanliness for every client.",
    "We aim to build long-term relationships by offering honest service, professional standards, and dependable support.",
  ],

  videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

  contactNumbers: ["+965 55396880", "+965 50449213", "+965 60446934"],

  image: FloorCleaningService,
},


  "move-in-move-out-cleaning": {
    title: "Move-In / Move-Out Cleaning",

    intro:
      "Al-Ameka Cleaning Company provides professional move-in and move-out cleaning services in Kuwait to ensure properties are spotless, sanitized, and ready for occupancy.",

    points: [
      "Ideal for tenants, landlords, and property managers.",
      "Deep cleaning before moving in or after moving out.",
      "Ensures property meets handover and inspection standards.",
      "Removes dust, stains, and odors from empty spaces.",
    ],

    sectionTitle: "Professional Move-In / Move-Out Cleaning Services",
    sectionIntro:
      "Our trained cleaning team follows a detailed checklist to make sure every corner of the property is cleaned thoroughly and professionally.",
    sectionPoints: [
      "Complete cleaning of empty apartments and villas.",
      "Wall, floor, and ceiling dust removal.",
      "Kitchen and bathroom deep sanitization.",
      "Window, door, and balcony cleaning.",
    ],

    extraSectionTitle: "Reliable Cleaning for Property Handover",
    extraSectionIntro:
      "Al-Ameka ensures your property is ready for inspection, rental, or immediate occupancy without stress.",
    extraSectionPoints: [
      "Cleaning services for apartments, villas, and offices.",
      "Flexible scheduling based on move dates.",
      "Fast service with guaranteed quality.",
      "Affordable pricing with no hidden charges.",
    ],

    videoUrl: "",

    finalSectionContent: [
      "Moving can be stressful, and cleaning should not be an additional burden. Al-Ameka Cleaning Company takes care of the entire cleaning process so you can focus on your move.",
      "Our team uses professional-grade equipment and safe cleaning materials to ensure excellent results in every service.",
    ],

    image: HomeCleaningImg,

    professionalSectionTitle: "Professional Cleaning Team",
    professionalSectionIntro:
      "Our experienced cleaning professionals ensure your property is cleaned to the highest standards before handover.",
    professionalSectionPoints: [
      "Trained and supervised cleaning staff.",
      "Attention to detail in every room.",
      "Guaranteed satisfaction after service completion.",
    ],

    apartmentSectionTitle: "Apartment & Villa Cleaning",
    apartmentSectionIntro:
      "We provide move-in and move-out cleaning for all property types.",
    apartmentSectionPoints: [
      "Studio and apartment cleaning.",
      "Villa and duplex cleaning.",
      "Commercial space cleaning.",
    ],

    contactNumbers: ["+965 55396880", "+965 50449213","+965 60446934"],

    closingContent:
      "Choose Al-Ameka Move-In / Move-Out Cleaning Services to ensure a smooth transition into or out of your property. Contact us today for professional and reliable cleaning solutions in Kuwait.",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const serviceSlugs = Object.keys(serviceData);
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="service-detail">
        <h1>Service Not Found</h1>
        <Link to="/">← Back to Services</Link>
      </div>
    );
  }

  const currentIndex = serviceSlugs.indexOf(slug);

  const prevSlug =
    currentIndex > 0 ? serviceSlugs[currentIndex - 1] : null;

  const nextSlug =
    currentIndex < serviceSlugs.length - 1
      ? serviceSlugs[currentIndex + 1]
      : null;


  return (
    <div className="service-detail">
      <div className="service-detail-container">
        {/* H1 */}
        <h1>{service.title}</h1>

        {/* Intro */}
        {service.intro && (
          <p className="service-intro">{service.intro}</p>
        )}
       {/* Section Title */}
        {service.sectionTitle && (
          <h1 className="service-heading">
            {service.sectionTitle}
          </h1>
        )}
        {/* Intro Points */}
        {service.points?.length > 0 && (
          <ul className="service-list">
            {service.points.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        

        {/* Section Intro */}
        {service.sectionIntro && (
          <p className="service-intro">{service.sectionIntro}</p>
        )}

        {/* Section Points */}
        {service.sectionPoints?.length > 0 && (
          <ul className="service-list">
            {service.sectionPoints.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {/* Extra Section */}
        {service.extraSectionTitle && (
          <>
            <h1 className="service-heading">
              {service.extraSectionTitle}
            </h1>

            {service.extraSectionIntro && (
              <p className="service-intro">
                {service.extraSectionIntro}
              </p>
            )}

            {service.extraSectionPoints?.length > 0 && (
              <ul className="service-list">
                {service.extraSectionPoints.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}

        {/* Video */}
        {service.videoUrl && (
          <div className="service-video">
            <iframe
              src={service.videoUrl}
              title={service.title}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}

        {/* Long Content */}
        {service.finalSectionContent?.map((para, index) => (
          <p key={index} className="service-paragraph">
            {para}
          </p>
        ))}

        {/* Image */}
        {service.image && (
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
        )}

        {/* Footer Content */}
        {service.footerSectionContent?.map((para, index) => (
          <p key={index} className="service-paragraph">
            {para}
          </p>
        ))}

        {/* Professional Section */}
        {service.professionalSectionTitle && (
          <>
            <h1 className="service-heading">
              {service.professionalSectionTitle}
            </h1>

            {service.professionalSectionIntro && (
              <p className="service-paragraph">
                {service.professionalSectionIntro}
              </p>
            )}

            {service.professionalSectionPoints?.length > 0 && (
              <ul className="service-list">
                {service.professionalSectionPoints.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}

        {/* Apartment Section */}
        {service.apartmentSectionTitle && (
          <>
            <h1 className="service-heading">
              {service.apartmentSectionTitle}
            </h1>

            {service.apartmentSectionIntro && (
              <p className="service-paragraph">
                {service.apartmentSectionIntro}
              </p>
            )}

            {service.apartmentSectionPoints?.length > 0 && (
              <ul className="service-list">
                {service.apartmentSectionPoints.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}

        {/* Contact */}
        {service.contactNumbers?.length > 0 && (
          <div className="service-contact">
            <h1 className="service-heading">Contact Us</h1>

            <div className="contact-numbers">
              {service.contactNumbers.map((num, index) => (
                <a
                  key={index}
                  href={`tel:${num}`}
                  className="contact-number"
                >
                  📞 {num}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Closing */}
        {service.closingContent && (
          <p className="service-paragraph closing-text">
            {service.closingContent}
          </p>
        )}
        


      </div>
    </div>

  );
};


export default ServiceDetail;
