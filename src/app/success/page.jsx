export default function SuccessStats() {
  const stats = [
    {
      id: 1,
      title: "BUET",
      count: "1300+",
      color: "bg-pink-600",
      textColor: "text-pink-600",
      description:
        "A total of 1300+ students got a chance from Udbhas out of 1,309 seats, including 48 in the top 50 on the merit list in the 2024 BUET admission test.",
      icon: "⚙️",
    },
    {
      id: 2,
      title: "মেডিকেল",
      count: "4805+",
      color: "bg-red-500",
      textColor: "text-red-500",
      description:
        "A total of 4805+ students got a chance to get admission in government medical and dental colleges, including 20 in the top 20 in the national merit and 240 in the DMC in the 2024 medical admission exam.",
      icon: "🩺",
    },
    {
      id: 3,
      title: "ঢাবি ‘ক’",
      count: "1800+",
      color: "bg-green-500",
      textColor: "text-green-600",
      description:
        "A total of 1800+ students got a chance from Udbhas out of 1896 seats, including 10 in the top 10 on the merit list of the 2024 DU 'A' Unit admission test.",
      icon: "🎓",
    },
    {
      id: 4,
      title: "ঢাবি ‘খ’",
      count: "1250+",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      description:
        "A total of 1250+ students got a chance from Udbhas in the first year out of 2934 seats, including 7 in the top 10 on the merit list of the 2024 DU 'Kh' Unit admission test.",
      icon: "🎓",
    },
  ];

  return (
    <section className="bg-[#f1f3fa] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b5c]">
            Our Success Statistics
          </h2>
          <p className="text-[#6b7da5] mt-3 text-lg">
            Find your desired program from our wide range of programs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {stats.map(item => (
            <div key={item.id} className="space-y-4 bg-white p-3 rounded-2xl shadow">
              
              {/* Icon Circle */}
              <div
                className={`w-24 h-24 mx-auto rounded-full flex flex-col items-center justify-center text-white shadow-lg ${item.color}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-bold text-lg">{item.title}</span>
              </div>

              {/* Count */}
              <h3 className={`text-3xl font-bold ${item.textColor}`}>
                {item.count}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
