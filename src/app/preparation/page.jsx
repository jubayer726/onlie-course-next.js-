import Image from "next/image";

export default function PreparationSection() {
  return (
    <section className="bg-[#f9eef9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Illustration */}
          <div className="flex justify-center">
            <Image
              src={"https://udvash-unmesh.com/media/Images/UDVASH/Common/prostuti.png"}
              alt="Online preparation illustration"
              width={520}
              height={420}
              className="w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <h4 className="text-orange-500 font-bold text-xl mb-3">
              Whatever the situation
            </h4>

            <h2 className="text-4xl font-bold text-purple-700 mb-6 leading-snug">
              Preparations will not stop.
            </h2>

            <p className="text-gray-700 leading-relaxed space-y-4">
              Under the round-the-clock supervision of its own software team,
              Udvash-Unmesh has the best online learning platform in the country
              (<span className="text-purple-600 font-medium">
                online.udvash-unmesh.com
              </span>).
              If the educational institution is closed due to any government
              regulations, all activities will continue online.
              <br /><br />
              As a result, there will be no disruption in the continuous
              preparation of the students. The enviable success of
              Udvash-Unmesh students in various admission tests is the best
              proof of this.
              <br /><br />
              It is worth noting that in addition to MCQ tests, Udvash Unmesh
              is the only one in Bangladesh that conducts online written tests
              similar to offline written tests to ensure balanced preparation
              of students online.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
