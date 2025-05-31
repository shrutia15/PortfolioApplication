// components/Certification.jsx
export default function Certification() {
  const certifications = [
    {
      name: "Google Cloud Computing - Qwiklabs",
      mode: "Online",
      year: 2021,
    },
    {
      name: "C & C++ Programming (IACSD)",
      mode: "Online",
      year: 2022,
    },
    {
      name: "Responsive Web Design - freeCodeCamp",
      mode: "Online",
      year: 2022,
    },
  ];

  return (
    <section
      id="certificate"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Certificates
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-indigo-500 transition-all duration-200 p-5"
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-teal-300">
                {cert.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {cert.mode} ({cert.year})
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
