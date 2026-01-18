import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ program }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border">
      
      {/* Image Section */}
      <div className="relative">
        <Image
          src={program.image}
          alt={program.title}
          className="w-full h-56 object-cover"
            width={200} 
            height={124}
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h2 className="text-lg font-bold text-gray-900">
            {program.title}
        </h2>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>{program.category}</li>
          <li>{program.level}</li>
          <li>{program.details.duration}</li>
          <li>Pre-Admission MCQ Exam</li>
          <li>Course Final Exam</li>
          <li>All archive classes of the 2026 batch</li>
          <li>Round-the-clock Q &amp; A service in doubt solving</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <Link href={`/programs/${program.id}`}
           className="flex-1 text-center py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:scale-105 transition">
            Details / Routine
          </Link>

          <Link href= "/enroll"  className="flex-1 py-2 text-center rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium hover:scale-105 transition">
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CourseCard;