function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            Welcome to Matyas Stancik LLC, a beacon of digital innovation in Estonia since 2021. Founded under the visionary leadership of CEO Jerome Holmes, we've quickly established ourselves as experts in web development, e-commerce, and cybersecurity. 
            </p>
            <p className="main-p">
              Empowering businesses with cutting-edge web development, e-commerce, and cybersecurity solutions. We're committed to driving growth, enhancing digital experiences, and securing operations.
            </p>
            <p className="main-p">
            Our journey began with a commitment to excellence and a passion for technology, driving us to create impactful digital solutions. At the heart of Estonia's tech-driven landscape, Jerome and our dedicated team continue to pioneer new paths in the digital world. Join us in shaping the future of technology!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
