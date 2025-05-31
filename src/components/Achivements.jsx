// components/Achievements.jsx
export default function Achievements() {
  const achievements = [
    {
      title:
        "3rd Prize – 2024 IEEE World Conference on Applied Intelligence and Computing (AIC 2024)",
    },
  ];

  return (
    <div
      id="achievements"
      className="w-full bg-gradient-to-b from-white to-gray-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Achievements
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-indigo-500 transition-all duration-200 p-5"
            >
              <p className="text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
