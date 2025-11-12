
import AboutImg from "./images/image1.jpg";
import AboutImgArabic from "./images/owmenimage.jpeg"; // You can replace if needed
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-wrapper" id="about">
      
      {/* English Section */}
      <section className="about-section">
        <div className="about-content">
          <h3 className="about-subtitle">We're Cleaning for You</h3>
          <h2 className="about-title">About Hayakom Cleaning Services Contracting</h2>
          <p className="about-text">
            Hayakom Cleaning Services Contracting has been dedicated to providing top-quality, reliable, and
            affordable cleaning solutions for homes and businesses. With a team of skilled and
            experienced professionals, we strive to create spotless environments that enhance
            the comfort and productivity of our clients.
          </p>
          <p className="about-text">
            Our commitment to excellence is reflected in every service we offer — from routine
            cleanings to specialized treatments — all tailored to meet the unique needs of every space.
          </p>
          <p className="about-text">
            At Hayakom Cleaning Services Contracting, we value trust, transparency, and customer satisfaction,
            ensuring every experience with us is seamless and refreshing. With customized, eco-friendly
            cleaning solutions, we deliver high-quality, reliable results with great attention to
            detail, making your space healthier and spotless every time.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

        <div className="about-image">
          <img src={AboutImg} alt="About Karm Cleaning Services Contracting" />
        </div>
      </section>

      {/* Arabic Section */}
      <section className="about-section rtl">
        <div className="about-image">
          <img src={AboutImgArabic} alt="About Us Arabic" />
        </div>

        <div className="about-content">
          <h2 className="about-title">ماذا عنا</h2>
          <h3 className="about-subtitle">نحن ننظف من أجلك منذ عام 2016</h3>

          <p className="about-text">
            تأسست شركة هالة لخدمات التنظيف في عام 2016، وهي ملتزمة بتوفير حلول تنظيف عالية الجودة
            وموثوقة وبأسعار معقولة للمنازل والشركات. مع فريق من المحترفين المهرة وذوي الخبرة،
            نسعى جاهدين لإنشاء بيئات نظيفة تعزز راحة وإنتاجية عملائنا.
          </p>
          <p className="about-text">
            ينعكس التزامنا بالتميز في كل خدمة نقدمها، من التنظيف الروتيني إلى العلاجات المتخصصة،
            وكلها مصممة لتلبية الاحتياجات الفريدة لكل مساحة. في شركة هالة لخدمات التنظيف، نقدر
            الثقة والشفافية ورضا العملاء، ونهدف إلى جعل كل تجربة معنا سلسة ومنعشة.
          </p>
          <p className="about-text">
            تقدم شركة هالة لخدمات التنظيف حلول تنظيف مخصصة وصديقة للبيئة للمنازل والشركات. يضمن
            فريقنا نتائج موثوقة وعالية الجودة مع اهتمام بالتفاصيل، مما يجعل مساحتك أكثر صحة ونظافة
            في كل مرة.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
