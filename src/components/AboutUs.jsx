import AboutImg from "./images/image1.jpg";
import AboutImgArabic from "./images/owmenimage.jpeg"; 
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-wrapper" id="about">
      
      {/* English Section */}
      <section className="about-section">
        <div className="about-content">
          <h3 className="about-subtitle">We're Cleaning for You</h3>
          <h2 className="about-title">
            About Hayakom Cleaning Service Kuwait – Home, Maid, and Deep Cleaning Experts
          </h2>

          <p className="about-text">
            <strong>Hayakom Cleaning Service Kuwait</strong> is a trusted company providing 
            professional <strong>home cleaning services</strong>, <strong>maid service</strong>, 
            and <strong>car cleaning</strong> across Kuwait. We also specialize in 
            <strong>tile and floor cleaning</strong>, <strong>sofa cleaning</strong>, and 
            <strong>deep cleaning services</strong> for both homes and offices.
          </p>

          <p className="about-text">
            With a skilled and experienced team, we ensure spotless and hygienic environments 
            that enhance comfort and productivity. From <strong>move-in/move-out cleaning</strong> 
            to routine housekeeping, we deliver customized and affordable cleaning solutions 
            tailored to every client’s needs.
          </p>

          <p className="about-text">
            Our commitment to excellence, transparency, and customer satisfaction makes us one of 
            the most reliable <strong>cleaning service companies in Kuwait</strong>. 
            Using eco-friendly products and modern equipment, Hayakom Cleaning Service ensures 
            your space stays fresh, healthy, and beautifully clean — every time.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

        <div className="about-image">
          <img
            src={AboutImg}
            alt="Home, Maid, and Deep Cleaning Service in Kuwait by Hayakom Cleaning"
          />
        </div>
      </section>

      {/* Arabic Section */}
      <section className="about-section rtl">
        <div className="about-image">
          <img
            src={AboutImgArabic}
            alt="شركة هياكم لخدمات التنظيف في الكويت - تنظيف المنازل والسيارات والسجاد"
          />
        </div>

        <div className="about-content">
          <h2 className="about-title">ماذا عنا</h2>
          <h3 className="about-subtitle">نحن ننظف من أجلك منذ عام 2016</h3>

          <p className="about-text">
            <strong>شركة هياكم لخدمات التنظيف</strong> في الكويت تقدم خدمات تنظيف احترافية 
            تشمل <strong>تنظيف المنازل</strong>، <strong>خدمة الخادمات</strong>، 
            <strong>تنظيف السيارات</strong>، و<strong>تنظيف الأرضيات والسجاد</strong> 
            بأسعار مناسبة وجودة عالية.
          </p>

          <p className="about-text">
            نضمن من خلال فريقنا المحترف تقديم <strong>خدمات تنظيف عميق</strong> و
            <strong>تنظيف ما قبل وبعد الانتقال</strong> لعملائنا في المنازل والمكاتب. 
            نستخدم مواد تنظيف صديقة للبيئة وأدوات حديثة لضمان أفضل النتائج.
          </p>

          <p className="about-text">
            التزامنا بالشفافية والتميز جعلنا من أبرز <strong>شركات التنظيف في الكويت</strong>. 
            نحن نعمل على جعل كل تجربة تنظيف مع هياكم مريحة وآمنة وصحية في كل مرة.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;