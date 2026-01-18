import { FaFacebookF, FaYoutube, FaPhoneAlt } from "react-icons/fa";

const Urgency = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 bg-gray-100 rounded-2xl shadow-lg">
        <div className="relative overflow-hidden rounded-3xl px-6 py-14 text-center">

          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-20 "></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              Call now {" "}
              <span className="text-secondary">for any needs!</span>
            </h2>

            <p className="text-gray-800 leading-relaxed">
              For any queries about ongoing courses or batches, call us.
              <br />
              Our support team is available daily during the following hours:
            </p>

            <p className="text-primary font-semibold">
              9 AM to 9 PM
            </p>

            {/* Call Button */}
            <div className="flex justify-center">
              <a
                href="tel:09677999666"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition px-6 py-3 rounded-xl font-semibold"
              >
                <FaPhoneAlt />
                09877 999 321
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <a
                href="#"
                className="flex items-center gap-2  bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition"
              >
                <FaFacebookF />
                Facebook Page
              </a>

              <a
                href="#"
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-pink-200 transition"
              >
                <FaYoutube />
                YouTube Channel
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Urgency;
