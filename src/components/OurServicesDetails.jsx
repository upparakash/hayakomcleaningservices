import React from "react";
import { useParams, Link } from "react-router-dom";
import "./OurServicesDetails.css";
import HomeCleaningImg from './images/image1.jpg'

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

  "deep-cleaning-services": {
    title: "Deep Cleaning Services",

    intro:
      "Al-Ameka Deep Cleaning Services provide intensive and detailed cleaning solutions designed to eliminate dirt, germs, and hidden contaminants from every corner of your property.",

    points: [
      "Complete deep cleaning for homes, apartments, and villas.",
      "Removal of stubborn dirt, grease, and bacteria.",
      "Advanced equipment and professional-grade cleaning agents.",
      "Ideal for seasonal cleaning and post-renovation cleanup.",
    ],

    sectionTitle: "24-Hour Deep Cleaning Company",
    sectionIntro:
      "We provide round-the-clock deep cleaning services in Kuwait, ensuring fast response and flexible scheduling for urgent cleaning needs.",
    sectionPoints: [
      "Emergency deep cleaning services available.",
      "Experienced and trained cleaning professionals.",
      "Quick service execution with guaranteed quality.",
    ],

    extraSectionTitle: "Professional Deep Cleaning Services in Salmiya",
    extraSectionIntro:
      "Our deep cleaning services in Salmiya focus on detailed sanitation and hygiene to maintain a healthy living and working environment.",
    extraSectionPoints: [
      "Deep cleaning of kitchens, bathrooms, and living areas.",
      "Sanitization of frequently touched surfaces.",
      "Safe cleaning products suitable for families and pets.",
    ],

    videoUrl: "",

    finalSectionContent: [
      "Al-Ameka Company is a trusted name in deep cleaning services in Kuwait, offering thorough cleaning solutions using modern tools and expert staff.",
      "Our deep cleaning process is designed to reach areas that are often neglected during routine cleaning, ensuring long-lasting cleanliness.",
    ],

    image: HomeCleaningImg,

    professionalSectionTitle: "Professional Deep Cleaning Company",
    professionalSectionIntro:
      "Our professional deep cleaning team follows strict quality standards to ensure superior results for every project.",
    professionalSectionPoints: [
      "Highly trained deep cleaning specialists.",
      "Guaranteed service satisfaction.",
      "Use of eco-friendly and effective materials.",
    ],

    apartmentSectionTitle: "Apartment Deep Cleaning Services",
    apartmentSectionIntro:
      "We provide specialized deep cleaning services for apartments of all sizes with minimal disruption to residents.",
    apartmentSectionPoints: [
      "Suitable for studios, 1BHK, and large apartments.",
      "No need to vacate the premises during service.",
      "Affordable deep cleaning packages.",
    ],

    contactNumbers: ["+965 55396880", "+965 50449213","+965 60446934"],

    closingContent:
      "Choose Al-Ameka Deep Cleaning Services for a healthier, cleaner space. Contact us today to schedule a professional deep cleaning service in Kuwait.",
  },

  "office-commercial-cleaning": {


    title: "Office & Commercial Cleaning",

    intro:
      "Al-Ameka Cleaning Company provides professional office and commercial cleaning services designed to maintain a clean, productive, and professional working environment.",

    points: [
      "Daily, weekly, and monthly office cleaning services.",
      "Cleaning solutions for offices, shops, malls, and commercial buildings.",
      "Disinfection of workstations, meeting rooms, and common areas.",
      "Use of eco-friendly and industry-approved cleaning materials.",
      "Flexible service schedules to avoid work disruption.",
    ],

    sectionTitle: "Professional Commercial Cleaning Company",
    sectionIntro:
      "Our commercial cleaning services are tailored to meet the unique needs of businesses across Kuwait.",
    sectionPoints: [
      "Experienced staff trained in commercial cleaning standards.",
      "Cleaning of offices, showrooms, warehouses, and retail spaces.",
      "Specialized cleaning equipment for large areas.",
      "Strict quality checks and supervision.",
    ],

    extraSectionTitle: "Office Cleaning Services in Kuwait",
    extraSectionIntro:
      "Al-Ameka offers reliable office cleaning services that help businesses maintain hygiene, productivity, and a professional appearance.",
    extraSectionPoints: [
      "Cleaning desks, chairs, floors, and office equipment.",
      "Washroom and pantry cleaning with sanitization.",
      "Waste management and trash disposal.",
      "Customized packages for small and large offices.",
    ],

    finalSectionContent: [
      "Al-Ameka Cleaning Company is trusted by businesses across Kuwait for delivering consistent and high-quality commercial cleaning services.",
      "We understand that a clean workplace reflects your brand image, which is why we focus on detail, reliability, and hygiene standards.",
    ],

    professionalSectionTitle: "Why Choose Al-Ameka for Commercial Cleaning",
    professionalSectionIntro:
      "Our commercial cleaning team is committed to delivering excellence in every service.",
    professionalSectionPoints: [
      "Trained and uniformed cleaning staff.",
      "Reliable service with performance guarantees.",
      "Competitive pricing with customized contracts.",
      "24/7 customer support for businesses.",
    ],

    contactNumbers: ["+965 55396880", "+965 50449213","+965 60446934"],

    closingContent:
      "Maintain a clean and professional workplace with Al-Ameka Office & Commercial Cleaning Services. Contact us today to receive a customized cleaning plan for your business.",
  },

  "sofa-carpet-curtain-cleaning": {
    /* H1 */
    title: "Sofa, Carpet & Curtain Cleaning",

    /* Intro */
    intro:
      "Al-Ameka Cleaning Company provides professional sofa, carpet, and curtain cleaning services in Kuwait using advanced techniques to remove dirt, stains, odors, and allergens while preserving fabric quality.",

    points: [
      "Deep cleaning for sofas, carpets, rugs, and curtains.",
      "Removal of dust, stains, bacteria, and allergens.",
      "Steam cleaning using modern equipment.",
      "Safe cleaning materials suitable for children and pets.",
      "Restores freshness and extends fabric life.",
    ],

    /* h1 */
    sectionTitle: "24-Hour Sofa & Carpet Cleaning Company",
    sectionIntro:
      "Al-Ameka Cleaning® offers 24-hour sofa, carpet, and curtain cleaning services to meet urgent and scheduled cleaning needs with fast and reliable service.",
    sectionPoints: [
      "Emergency and same-day cleaning services available.",
      "Flexible booking based on customer convenience.",
      "Experienced staff trained in fabric care.",
      "Guaranteed service quality and customer satisfaction.",
    ],

    /* h1 */
    extraSectionTitle: "Professional Upholstery Cleaning in Salmiya",
    extraSectionIntro:
      "Our upholstery cleaning services in Salmiya are designed to deliver deep hygiene and long-lasting cleanliness for homes and commercial spaces.",
    extraSectionPoints: [
      "Steam cleaning for sofas and upholstered furniture.",
      "Deep carpet and rug cleaning with stain removal.",
      "Curtain cleaning without fabric damage or shrinkage.",
      "Odor removal and fabric sanitization.",
    ],

    /* Optional Video */
    videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

    /* Long-form Content */
    finalSectionContent: [
      "Al-Ameka Cleaning Company is one of the trusted names in Kuwait for upholstery and fabric cleaning services. We use advanced steam technology to remove deep-seated dirt and bacteria effectively.",
      "Our team understands the importance of fabric care, which is why we select cleaning methods suitable for each material to avoid damage while delivering excellent results.",
      "We aim to provide clean, fresh, and hygienic living spaces for our customers through reliable services and competitive pricing.",
    ],

    /* Image */
    image: HomeCleaningImg,

    /* h1 */
    professionalSectionTitle: "Professional Sofa & Carpet Cleaning Company",
    professionalSectionIntro:
      "Al-Ameka Cleaning® employs trained professionals who specialize in cleaning delicate fabrics, carpets, and curtains using industry-approved methods.",
    professionalSectionPoints: [
      "High customer satisfaction and repeat clients.",
      "Advanced steam and dry-cleaning techniques.",
      "Safe and eco-friendly cleaning materials.",
      "Quality assurance after service completion.",
    ],

    /* h1 */
    apartmentSectionTitle: "Apartment Sofa & Curtain Cleaning Services",
    apartmentSectionIntro:
      "Our apartment cleaning services ensure sofas, carpets, and curtains are cleaned thoroughly without disturbing your daily routine.",
    apartmentSectionPoints: [
      "Ideal for apartments and villas of all sizes.",
      "No need to remove furniture or curtains.",
      "Quick drying and minimal disruption.",
      "Affordable packages for households.",
    ],

    /* Contact */
    contactNumbers: ["+965 55396880", "+965 50449213","+965 60446934"],

    /* Closing CTA */
    closingContent:
      "Choose Al-Ameka Cleaning Company for professional sofa, carpet, and curtain cleaning services in Kuwait. Contact us today to enjoy a cleaner, healthier, and fresher home environment.",
  },

  "kitchen-bathroom-cleaning": {
    title: "Kitchen & Bathroom Cleaning",

    intro:
      "Al-Ameka Cleaning Company provides professional kitchen and bathroom cleaning services in Kuwait, ensuring complete hygiene, deep sanitation, and long-lasting cleanliness.",

    points: [
      "Deep kitchen cleaning with grease and stain removal.",
      "Bathroom sanitation using safe disinfectants.",
      "Removal of odors, bacteria, and mold.",
      "Cleaning of tiles, sinks, toilets, and cabinets.",
      "Use of eco-friendly and human-safe cleaning agents.",
    ],

    sectionTitle: "Professional Kitchen Cleaning Services",
    sectionIntro:
      "Our kitchen cleaning services are designed to eliminate grease buildup, food stains, and harmful bacteria from all kitchen surfaces.",
    sectionPoints: [
      "Cleaning kitchen cabinets, shelves, and countertops.",
      "Degreasing exhaust fans and cooking areas.",
      "Sanitizing sinks and drainage areas.",
      "Removing stubborn oil and food stains.",
    ],

    extraSectionTitle: "Bathroom Deep Cleaning Services",
    extraSectionIntro:
      "We provide deep bathroom cleaning services to maintain hygiene and prevent the spread of germs and unpleasant odors.",
    extraSectionPoints: [
      "Cleaning and disinfecting toilets and wash basins.",
      "Removing stains from tiles and grout.",
      "Sterilizing showers, bathtubs, and mirrors.",
      "Deodorizing bathrooms after cleaning.",
    ],

    videoUrl: "https://www.youtube.com/embed/WRF1KljmgrM",

    finalSectionContent: [
      "Al-Ameka Cleaning Company follows strict hygiene standards while cleaning kitchens and bathrooms to ensure customer safety and satisfaction.",
      "Our trained staff uses professional tools and approved disinfectants to deliver visible results from the first visit.",
      "We provide flexible scheduling options suitable for homes, apartments, and villas.",
    ],

    image: HomeCleaningImg,

    professionalSectionTitle: "Professional Kitchen & Bathroom Cleaning Company",
    professionalSectionIntro:
      "Our experienced cleaning team specializes in kitchen and bathroom sanitation, delivering reliable and high-quality services.",
    professionalSectionPoints: [
      "Trained and experienced cleaning professionals.",
      "Guaranteed hygiene and sanitation standards.",
      "Use of advanced cleaning equipment.",
      "Attention to detail in hard-to-reach areas.",
    ],

    contactNumbers: ["+965 55396880", "+965 50449213","+965 60446934"],

    closingContent:
      "Choose Al-Ameka for professional kitchen and bathroom cleaning services in Kuwait and enjoy a clean, healthy, and germ-free home. Contact us today to book your service.",
  },

  "floor-tile-cleaning": {
    title: "Floor & Tile Cleaning",
    intro:
      "Our floor and tile cleaning services are designed to restore shine, remove stubborn dirt, and extend the life of your surfaces.",

    points: [
      "Deep cleaning for ceramic, marble, granite, and parquet floors.",
      "Removal of stains, grease, and embedded dirt.",
      "Safe cleaning agents suitable for all floor types.",
      "Professional equipment for long-lasting cleanliness.",
    ],

    sectionTitle: "Professional Floor & Tile Cleaning",
    sectionIntro:
      "Al-Ameka Cleaning® provides expert floor and tile cleaning services using advanced tools and eco-friendly solutions.",
    sectionPoints: [
      "Specialized machines for deep scrubbing.",
      "Trained technicians with surface-specific expertise.",
      "Residential and commercial floor cleaning services.",
    ],

    finalSectionContent: [
      "Our floor and tile cleaning service ensures a hygienic and polished appearance for your home or workplace. We focus on removing deep-seated dirt while protecting the surface material.",
    ],

    image: HomeCleaningImg,

    contactNumbers: ["+965 55396880", "+965 50449213","+965 60446934"],

    closingContent:
      "Contact Al-Ameka Cleaning today for professional floor and tile cleaning services in Kuwait and enjoy spotless, shining floors.",
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
