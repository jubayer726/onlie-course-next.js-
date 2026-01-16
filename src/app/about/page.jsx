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
      <section className="py-16 px-6 md:px-20 w-7xl mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent mb-6">
              About Care Connect
            </h2>

            <p className="text-gray-700 text-lg leading-7 mb-4">
              We provide reliable and trusted care services for children,
              elderly, and other family members. The application allows users to
              find and hire caretakers for different purposes such as
              babysitting, elderly care, or special care at home. Users can
              easily book services through the platform. The main goal of the
              project is to make caregiving easy, secure, and accessible for
              everyone.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <Image
              src="https://i.postimg.cc/5tSRf1g7/vision.webp"
              alt="about illustration"
              className="w-full max-w-md rounded"
              width={400}
              height={400}
            />
          </div>
        </div>

        <section className="py-16 border">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Heading */}
            <h2 className="text-7xl font-bold bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent mb-4">
              Meet the Team
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
                  className="rounded-xl shadow-md p-8 hover:shadow-xl transition"
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
