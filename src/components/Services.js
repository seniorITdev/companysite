import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text=" Crafting custom, responsive websites and advanced web applications, focused on user experience and scalability for business growth." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text=" Building tailor-made online stores with seamless, secure shopping experiences, optimized for conversion and customer satisfaction." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="card3.png" text=" Offering robust security measures, including threat assessments and incident response, to safeguard your digital presence and data integrity." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
