import React from "react";
import { useParams, Link } from "react-router-dom";
import "./OurServicesDetails.css";
import HomeCleaningImg from './images/image1.jpg'

/* Service content map (can be API-driven later) */
const serviceData = {
  "home-cleaning-services": {
    title: "Home Cleaning Services",
    intro:
      'Al-Salmiya Cleaning Company "Al-Ameka Cleaning" is a distinguished company in providing all home cleaning services, including the following:',
    points: [
      "We offer excellent cleaning services through Man Power Company using the latest cleaning methods.",
      "We provide deep cleaning services for apartments, houses, villas, offices, and other interiors.",
      "Carpet and sofa cleaning using highly effective steam technology.",
      "Comprehensive cleaning for living rooms, salons, kitchens, bathrooms, and more.",
      "Complete home sterilization and disinfection safe for humans and pets.",
      "At Al-Ameka®, we use powerful cleaning agents to achieve the best results.",
    ],
    sectionTitle: "24-Hour House Cleaning Company",
    sectionIntro:
      'Al-Salmiya Cleaning Company "Al-Ameka Cleaning" provides 24-hour home cleaning services, delivering strong and fast service while respecting the client’s time.',
    sectionPoints: [
      "We use the most modern equipment and devices for all cleaning tasks.",
      "Professionally trained staff capable of handling all cleaning requirements.",
      "Our services cover homes, offices, businesses, hotels, and other establishments.",
      "We also carry out the most difficult tasks with experts who are credible, skilled, and trustworthy.",
      "Al-Ameka Company offers special deals and discounts to its customers.",
    ],
    extraSectionTitle: "Salmiya House Cleaning Company",

    extraSectionIntro:
      "A house cleaning company in Salmiya will make the cleaning process extremely easy; you can rely on us to obtain the following services:",

    extraSectionPoints: [
      "We provide deep cleaning services for homes using the latest advanced methods.",
      "Cleaning services include businesses, homes, cafes, shops, mosques, and more.",
      "We clean water tanks from dirt, dust, and other contaminants.",
      "Steam cleaning is used as one of the latest and most advanced cleaning methods.",
      "Carpets, rugs, and sofas are cleaned using advanced steam technology.",
      "Al-Ameka Company disinfects homes after completing all cleaning tasks.",
      "All cleaning agents used are high quality and completely safe.",
    ],
    videoUrl: "https://www.youtube.com/embed/hU_3qp2t-KE",
    finalSectionContent: [
      "Al-Ameka Company is one of the leading companies in the field of home cleaning in Kuwait. We employ professional workers with a high level of efficiency and experience, and we use the latest equipment to perform all household cleaning tasks. In addition, we provide excellent customer service that responds to all inquiries 24 hours a day.",

      "Our company is committed to delivering services on the agreed dates, which helps us gain the trust of our customers through high-quality services and competitive prices. A specialized team assists customers by guiding them toward special offers that provide real value, especially in light of rising costs.",

      "We also ensure full transparency by clearly explaining the cleaning plan after inspecting the location and understanding all required tasks. This clarity builds confidence and trust with our valued clients. If you are looking for the best cleaning company in Kuwait, you can contact us at any time through our available phone numbers.",
    ],
    image: HomeCleaningImg,
    footerSectionContent: [
      "Customers are keen to choose the most suitable prices for home cleaning companies, so Al-Ameka Company offers the difficult equation that combines the quality of services provided and the price, and you will notice the difference yourself when you contract with our company to get distinguished services, so do not worry about prices with the best cleaning company in Salmiya, because you will find exclusive offers and discounts that you will not find in competing companies.",
      "Our company's prices also vary slightly according to the size of the property, whether it's houses, villas, or small apartments; you'll find prices and offers suitable for all budgets.",
      "If you are looking for a distinguished service and a reasonable price, contact our company through our numbers, and we will get in touch with you and offer you the best deals that any customer is looking for, and we will also help you choose the strongest offers that suit your budget.",
    ],
    footerSectionTitle1: "Professional cleaning company",
    /* ✅ NEW SECTION: Professional Cleaning Company Details */
    professionalSectionTitle: "Professional cleaning company",
    professionalSectionIntro:
      'Al-Salmiya Cleaning Company “Al-Ameka Cleaning®” includes a selection of the best workers in house cleaning, including:',
    professionalSectionPoints: [
      "Customer satisfaction is our top priority, regardless of task difficulty.",
      "A comprehensive team capable of reaching the most difficult cleaning areas using modern tools.",
      "Use of the strongest and safest cleaning materials to achieve outstanding results.",
      "A service guarantee after task completion to ensure customer confidence.",
      "Effective bathroom cleaning, sterilization, and deodorization.",
      "Deep kitchen cleaning with complete grease and stain removal.",
      "Cleaning of all floor types including ceramic, marble, parquet, walls, and more.",
    ],

    /* ✅ NEW SECTION: Apartment Cleaning Company */
    apartmentSectionTitle: "Apartment cleaning company",
    apartmentSectionIntro:
      "A distinguished apartment cleaning company in Salmiya provides exceptional services, including:",
    apartmentSectionPoints: [
      "Excellent customer service to respond to all inquiries.",
      "Services available throughout the week with no holidays.",
      "Tasks completed without requiring customers to leave their homes or move furniture.",
      "Special prices and discounts for companies and institutions.",
    ],

    contactNumbers: ["+965 55396880", "+965 50449213","+965 60446934"],

    closingContent:
      "Through the best cleaning company in Kuwait, you will enjoy a healthy home free from dirt and dust. Al-Ameka Cleaning Company provides integrated cleaning services for homes, villas, apartments, and more. Contact our team today and make cleaning one of the easiest tasks you ever think about.",

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

    /* H2 */
    sectionTitle: "24-Hour Maid Service Company",
    sectionIntro:
      "Al-Ameka Cleaning® offers 24-hour maid service support, ensuring household assistance is available whenever you need it, including emergencies and special occasions.",
    sectionPoints: [
      "On-demand maid services available day and night.",
      "Quick response time with immediate staff allocation.",
      "Reliable replacements in case of absence.",
      "Strict adherence to client instructions and privacy.",
    ],

    /* H2 */
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
    videoUrl: "https://www.youtube.com/embed/hU_3qp2t-KE",

    /* Long-form Company Content */
    finalSectionContent: [
      "Al-Ameka Maid Services is among the trusted service providers in Kuwait, offering domestic helpers who are trained to meet the highest household standards. Our recruitment process ensures reliability, experience, and professionalism.",
      "We understand the importance of trust when allowing someone into your home. Therefore, all our maids undergo background verification and training to deliver consistent and quality service.",
      "Our customer support team is available 24 hours a day to assist with scheduling, replacements, and service adjustments based on your changing needs.",
    ],

    /* Image */
    image: HomeCleaningImg,

    /* H2 */
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

    /* H2 */
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

    /* H2 */
    sectionTitle: "24-Hour Sofa & Carpet Cleaning Company",
    sectionIntro:
      "Al-Ameka Cleaning® offers 24-hour sofa, carpet, and curtain cleaning services to meet urgent and scheduled cleaning needs with fast and reliable service.",
    sectionPoints: [
      "Emergency and same-day cleaning services available.",
      "Flexible booking based on customer convenience.",
      "Experienced staff trained in fabric care.",
      "Guaranteed service quality and customer satisfaction.",
    ],

    /* H2 */
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
    videoUrl: "https://www.youtube.com/embed/hU_3qp2t-KE",

    /* Long-form Content */
    finalSectionContent: [
      "Al-Ameka Cleaning Company is one of the trusted names in Kuwait for upholstery and fabric cleaning services. We use advanced steam technology to remove deep-seated dirt and bacteria effectively.",
      "Our team understands the importance of fabric care, which is why we select cleaning methods suitable for each material to avoid damage while delivering excellent results.",
      "We aim to provide clean, fresh, and hygienic living spaces for our customers through reliable services and competitive pricing.",
    ],

    /* Image */
    image: HomeCleaningImg,

    /* H2 */
    professionalSectionTitle: "Professional Sofa & Carpet Cleaning Company",
    professionalSectionIntro:
      "Al-Ameka Cleaning® employs trained professionals who specialize in cleaning delicate fabrics, carpets, and curtains using industry-approved methods.",
    professionalSectionPoints: [
      "High customer satisfaction and repeat clients.",
      "Advanced steam and dry-cleaning techniques.",
      "Safe and eco-friendly cleaning materials.",
      "Quality assurance after service completion.",
    ],

    /* H2 */
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

    videoUrl: "https://www.youtube.com/embed/hU_3qp2t-KE",

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

        {/* Intro Points */}
        {service.points?.length > 0 && (
          <ul className="service-list">
            {service.points.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {/* Section Title */}
        {service.sectionTitle && (
          <h2 className="service-heading">
            {service.sectionTitle}
          </h2>
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
            <h2 className="service-heading">
              {service.extraSectionTitle}
            </h2>

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
            <h2 className="service-heading">
              {service.professionalSectionTitle}
            </h2>

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
            <h2 className="service-heading">
              {service.apartmentSectionTitle}
            </h2>

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
            <h2 className="service-heading">Contact Us</h2>

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
