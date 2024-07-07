import "../App.css";
import man from "../assets/man.svg";
const Banner = ({ Banner, heading, supheading, button1, button2 }) => {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        <div>
          <img src={man} alt="" className="lg:h-[380px]" />
        </div>
        <div className="md:w-3/5">
          <h2 className="md:text-zxl text-4xl font-bold mb-6 text-white leading-relaxed">
            {heading}
          </h2>
          <p className="text-[#e4e0e0] text-2xl mb-8">{supheading}</p>
          <div className="space-x-5 space-y-4">
            <button className="bT">{button1}</button>
            <button className="bT">{button2}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
