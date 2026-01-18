import Container from "@/components/Container";
import Image from "next/image";
import programs from '@/data/programs.json';
import Link from "next/link";

const CourseDetails = async ({ params }) => {
  const resolvedParams = await params;
  const program = programs.find(p => p.id === resolvedParams.id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Program not found.</p>
      </div>
    );
  }

  return (
    <section className="bg-[#f9f7fb] min-h-screen py-12">
      <Container>
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-title items-center">
          
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={program.image}
              alt={program.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          {/* Info */}
          <div className="space-y-4">
            <span className="inline-block px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
              {program.category}
            </span>

            <h1 className="text-3xl font-bold text-gray-900">
              {program.title}
            </h1>

            <p className="text-gray-600">
              {program.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <InfoBadge label="Level" value={program.level} />
              <InfoBadge label="Mode" value={program.details.mode} />
              <InfoBadge label="Duration" value={program.details.duration} />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Link href="/enroll" className="px-6 py-2 rounded-full bg-[#c01f5b] text-white hover:bg-[#a31b4e] transition">
                Enroll Now
              </Link>
              <button className="px-6 py-2 rounded-full border font-medium hover:bg-gray-100 transition">
                Download Routine
              </button>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl text-title font-semibold mb-4">
              Program Details
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>📆 Duration: {program.details.duration}</li>
              <li>📚 Classes per week: {program.details.classesPerWeek}</li>
              <li>📝 Mock tests: {program.details.mockTests}</li>
              <li>🎯 Target students: {program.details.targetStudents}</li>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl text-title font-semibold mb-4">
              Subjects Covered
            </h2>

            <ul className="space-y-2">
              {program.details.subjects.map(subject => (
                <li
                  key={subject}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </Container>
    </section>

  );
}

/* Reusable Badge */
function InfoBadge({ label, value }) {
  return (
    <div className="px-4 py-2 rounded-lg bg-gray-100 text-sm">
      <span className="font-medium">{label}:</span>{" "}
      <span className="text-gray-700">{value}</span>
    </div>
  );
}
export default CourseDetails;
