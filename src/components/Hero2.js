import "./Hero2.css";
import data1 from "../assets/data1.png";
import data2 from "../assets/data2.png";
import data3 from "../assets/data3.png";
import data4 from "../assets/data4.png";
import data5 from "../assets/data5.png";
import data6 from "../assets/data6.png";
import data7 from "../assets/data7.png";
import data8 from "../assets/data8.png";

function Hero2() {
  const services = [
    {
      title: "Automotive SEO",
      description:
        "Drive YourSuccess with Automotive SEO using Online Walking and Outrace the Competition. Accelerate Your Business Growth Today.",
      icon: data1,
    },
    {
      title: "PPC Precision",
      description:
        "Maximize visibility and drive quality traffic with reach/width targeted Pay-Per-Click campaigns.",
      icon: data2,
    },
    {
      title: "Social Acceleration",
      description:
        "Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.",
      icon: data3,
    },
    {
      title: "Content Excellence",
      description:
        "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
      icon: data4,
    },
    {
      title: "Web Design",
      description:
        "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased convenience.",
      icon: data5,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
      icon: data6,
    },
    {
      title: "End-to-End Solutions",
      description:
        "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
      icon: data7,
    },
    {
      title: "Video Marketing",
      description:
        "Unleash the Power of Video Marketing, Engage, and Elevate Your Brand with Compelling Visual Stories.",
      icon: data8,
    },
  ];

  return (
    <div className="mainBox">
      <div className="servicearea">
        <h2 className="bigheading">Our Service Offerings</h2>
        <p className="smalltext">
          Strategies that Drive Property Market Excellence
        </p>

        <div className="grid-Box">
          {services.map((service, index) => (
            <div className="card-Data" key={index}>
              <div className="iconspot">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="servicepic"
                />
              </div>
              <h3 className="cardtitle">{service.title}</h3>
              <p className="card-Desc">{service.description}</p>
            </div>
          ))}
        </div>
        <center>
          <button className="btns">Get started</button>
        </center>
      </div>
    </div>
  );
}

export default Hero2;