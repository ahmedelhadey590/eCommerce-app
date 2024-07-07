import about from "../assets/studying.svg";
import about2 from "../assets/about.svg";
import "../App.css";
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 space-y-10">
        <div className="md:w-1/2">
          <img src={about} alt="" />
        </div>

        <div className="md:w-2/5">
          <h2 className="md:text-5x1 text-3xl font-bold text-primary mb-5 leading-normal">
            You can Start our courses
            <span className="text-secondary"> from here.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            Master programming with our comprehensive, engaging, and expert-led
            courses, designed to be both affordable and innovative.
          </p>
          <button className="bT">Start</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={about2} alt="" />
        </div>

        <div className="md:w-2/5">
          <h2 className="md:text-5x1 text-3xl font-bold text-primary mb-5 leading-normal">
            You can Practice on any course
            <span className="text-secondary"> at any time.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            Master programming with our comprehensive, engaging, and expert-led
            courses, designed to be both affordable and innovative.
          </p>
          <button className="bT">Start</button>
        </div>
      </div>
    </div>
  );
};

export default About;
