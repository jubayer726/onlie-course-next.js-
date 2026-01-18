"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import "swiper/css";

const locations = [
  { location: "Dhaka", phn1: "0123456789", phn2: "9876543210" },
  { location: "Rajshahi", phn1: "0123456789", phn2: "9876543210" },
  { location: "Chittagong", phn1: "0123456789", phn2: "9876543210" },
  { location: "Barisal", phn1: "0123456789", phn2: "9876543210" },
  { location: "Natore", phn1: "0123456789", phn2: "9876543210" },
  { location: "Mymensingh", phn1: "0123456789", phn2: "9876543210" },
  { location: "Khulna", phn1: "0123456789", phn2: "9876543210" },
  { location: "Cumilla", phn1: "0123456789", phn2: "9876543210" },
  { location: "Rangpur", phn1: "0123456789", phn2: "9876543210" },
];

const Branches = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b5c]">
            Find Your Subject Specialist
          </h2>
          <p className="text-[#6b7da5] mt-3 text-lg">
            Find Our Specialist to reach your dream goal
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={locations.length > 3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {locations.map((dis, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-md bg-gray-100 rounded-2xl shadow-lg p-5 m-4 gap-4">
                {/* Left: Location & Phone */}
                <div className="space-y-2 flex items-center justify-between ">
                  <div>
                    <h3 className="text-lg font-bold text-secondary">
                    {dis.location}
                  </h3>
                  </div>

                  <div className="flex justify-end text-red-500 text-2xl">
                    <FaMapMarkerAlt />
                  </div>

                  
                </div>

                {/* Right: Phone + Location Icon */}
                <div className="flex items-center gap-4 justify-between pt-5">
                  <div className=" text-gray-700 flex">📞
                    <h2 className="font-medium">{dis.phn2}</h2>
                  </div>

                  <div className="text-gray-700 flex">📞
                    <h2 className="font-medium"> {dis.phn1}</h2>
                  </div>                 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Branches;
