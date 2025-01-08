import React from "react";
import VoicesImg from "../../assets/voicesImg.png";
import ProfilePhoto from "../../assets/profilePhoto.png";
const Voices = () => {
  return (
    <div className="bg-[url('/gridbg.png')] bg-cover bg-black bg-center w-full h-fit flex flex-col items-center justify-center text-white py-16">
      <div className="w-[90%]">
        <h2 className="lg:text-[32px] text-[20px] text-center">
          Voices of Transformation
        </h2>
        <div className="mt-16 overflow-x-auto">
          <div className="flex gap-8 w-max">
            <div className="bg-[url('/bgVoices.png')] bg-cover bg-[#D9D9D91A] bg-center lg:w-[397px] w-[321px] rounded-[17px] h-fit flex flex-col items-center justify-center text-white py-8 shadow-lg p-6">
              <figure className="relative">
                <img src={VoicesImg} alt="Testimonials" className="h-[171px]" />
                <img
                  src={ProfilePhoto}
                  alt="profile image"
                  className="absolute top-[98px] right-2"
                />
                <figcaption className="flex flex-col gap-4">
                  <div className="mt-2">
                    <h4 className="lg:text-[24px] text-[14px]">Emeka Ohakim</h4>
                    <p className="lg:text-[14px] text-[8px] text-[#D1D1D6]">
                      Aba MSME Owner
                    </p>
                  </div>
                  <p className="lg:text-[16px] text-[10px] text-[#D1D1D6]">
                    Digital Aba helped us reach more customers through
                    e-commerce. Our sales have grown by 50%!
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="bg-[url('/bgVoices.png')] bg-cover bg-[#D9D9D91A] bg-center lg:w-[397px] w-[321px] rounded-[17px] h-fit flex flex-col items-center justify-center text-white py-8 shadow-lg p-6">
              <figure className="relative">
                <img src={VoicesImg} alt="Testimonials" className="h-[171px]" />
                <img
                  src={ProfilePhoto}
                  alt="profile image"
                  className="absolute top-[98px] right-2"
                />
                <figcaption className="flex flex-col gap-4">
                  <div className="mt-2">
                    <h4 className="lg:text-[24px] text-[14px]">Emeka Ohakim</h4>
                    <p className="lg:text-[14px] text-[8px] text-[#D1D1D6]">
                      Aba MSME Owner
                    </p>
                  </div>
                  <p className="lg:text-[16px] text-[10px] text-[#D1D1D6]">
                    Digital Aba helped us reach more customers through
                    e-commerce. Our sales have grown by 50%!
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="bg-[url('/bgVoices.png')] bg-cover bg-[#D9D9D91A] bg-center lg:w-[397px] w-[321px] rounded-[17px] h-fit flex flex-col items-center justify-center text-white py-8 shadow-lg p-6">
              <figure className="relative">
                <img src={VoicesImg} alt="Testimonials" className="h-[171px]" />
                <img
                  src={ProfilePhoto}
                  alt="profile image"
                  className="absolute top-[98px] right-2"
                />
                <figcaption className="flex flex-col gap-4">
                  <div className="mt-2">
                    <h4 className="lg:text-[24px] text-[14px]">Emeka Ohakim</h4>
                    <p className="lg:text-[14px] text-[8px] text-[#D1D1D6]">
                      Aba MSME Owner
                    </p>
                  </div>
                  <p className="lg:text-[16px] text-[10px] text-[#D1D1D6]">
                    Digital Aba helped us reach more customers through
                    e-commerce. Our sales have grown by 50%!
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="bg-[url('/bgVoices.png')] bg-cover bg-[#D9D9D91A] bg-center lg:w-[397px] w-[321px] rounded-[17px] h-fit flex flex-col items-center justify-center text-white py-8 shadow-lg p-6">
              <figure className="relative">
                <img src={VoicesImg} alt="Testimonials" className="h-[171px]" />
                <img
                  src={ProfilePhoto}
                  alt="profile image"
                  className="absolute top-[98px] right-2"
                />
                <figcaption className="flex flex-col gap-4">
                  <div className="mt-2">
                    <h4 className="lg:text-[24px] text-[14px]">Emeka Ohakim</h4>
                    <p className="lg:text-[14px] text-[8px] text-[#D1D1D6]">
                      Aba MSME Owner
                    </p>
                  </div>
                  <p className="lg:text-[16px] text-[10px] text-[#D1D1D6]">
                    Digital Aba helped us reach more customers through
                    e-commerce. Our sales have grown by 50%!
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="bg-[url('/bgVoices.png')] bg-cover bg-[#D9D9D91A] bg-center lg:w-[397px] w-[321px] rounded-[17px] h-fit flex flex-col items-center justify-center text-white py-8 shadow-lg p-6">
              <figure className="relative">
                <img src={VoicesImg} alt="Testimonials" className="h-[171px]" />
                <img
                  src={ProfilePhoto}
                  alt="profile image"
                  className="absolute top-[98px] right-2"
                />
                <figcaption className="flex flex-col gap-4">
                  <div className="mt-2">
                    <h4 className="lg:text-[24px] text-[14px]">Emeka Ohakim</h4>
                    <p className="lg:text-[14px] text-[8px] text-[#D1D1D6]">
                      Aba MSME Owner
                    </p>
                  </div>
                  <p className="lg:text-[16px] text-[10px] text-[#D1D1D6]">
                    Digital Aba helped us reach more customers through
                    e-commerce. Our sales have grown by 50%!
                  </p>
                </figcaption>
              </figure>
            </div>

            {/* Repeat your other testimonial divs here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voices;
