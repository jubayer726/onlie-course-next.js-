import Image from "next/image";
import React from "react";

const About = () => {
  const teamMembers = [
    {
      name: "Md Jubayer Hossain",
      role: "Founder & Lead Developer",
      image: "https://i.postimg.cc/FzTr6D42/JUBAYER_Photo.jpg",
    },
    {
      name: "Jabir Adnan",
      role: "Research Specialist",
      image: "https://i.postimg.cc/k43ZxZfv/Jubayer2.jpg",
    },
    {
      name: "Mesbah Uddin Raihan",
      role: "UI/UX Designer",
      image: "https://i.postimg.cc/qv7dR95L/teacher.png",
    },
  ];
  return (
    <div className="bg-linear-to-r from-green-50 to-blue-50">
      <section className="py-16 px-6 md:px-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
              About <span className="text-secondary">Online Coaching</span>
            </h2>

            <p className="text-gray-700 text-lg leading-7 mb-4">
              Human civilization has been developing for many, many years. For these thousands of years, people have been mixing with people, people have been knowing and understanding people, people have been researching people - yet they are mysterious people! In a word, people have incredible powers. What was impossible in the history of the world until now - now many of them are possible. People have made these impossible things possible. Once upon a time, someone who was born on an isolated island in the Pacific or Atlantic Ocean, for him the vast expanse of water was the edge of the world! People can now go from one end of the world to the other within a day.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <Image
              src="https://i.postimg.cc/5tSRf1g7/vision.webp"
              alt="about illustration"
              className="w-full max-w-md rounded"
              width={200}
              height={200}
            />
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-primary mb-4">
              Meet <span className="text-secondary">Our Team</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Our team is built with dedicated developers, researchers, and
              education-enthusiasts working together to make scholarship access
              easier.
            </p>

            {/* Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="rounded-xl shadow-md bg-white hover:scale-105 p-8 hover:shadow-xl transition"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                    width={112}
                    height={112}
                  />

                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="text-gray-600 mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
