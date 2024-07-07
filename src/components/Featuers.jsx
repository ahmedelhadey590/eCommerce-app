import fet from "../assets/fet.jpg";
const Featuers = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gab-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            We are the best
          </h3>
          <p className="text-base text-tartiary">
            Discover top-quality courses tailored to your needs, crafted by
            industry experts to ensure you gain the skills and knowledge you
            need to succeed.
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start gap-4 md:gap-8">
            <div
              className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
            >
              <div>
                <img src={fet} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Experience comprehensive engaging
                </h5>
              </div>
            </div>
            <div
              className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8
                  flex justify-center items-center 
                 hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16"
            >
              <div>
                <img src={fet} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  professional instructors
                </h5>
              </div>
            </div>
            <div
              className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8
                  flex justify-center items-center 
                 hover:-translate-y-4 transition-all duration-300 cursor-pointer"
            >
              <div>
                <img src={fet} alt="" />
                <h5
                  className="text-2xl font-semibold text-primary px-5 text-center mt-5
                        "
                >
                  Strong certificate
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuers;
