import { GraduationCap, Target, Users, Lightbulb, Clock, MessageSquare } from 'lucide-react';

export function About() {
  const softSkills = [
    { name: 'Teamwork', icon: Users },
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Time Management', icon: Clock },
    { name: 'Communication', icon: MessageSquare }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate junior developer eager to contribute to innovative
              projects and grow in the tech industry
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hello!
            </h2>
            <p className="text-gray-700 mb-4">
              I'm a junior backend developer with a strong foundation in Java and
              Spring Boot, combined with frontend skills in React. I'm passionate
              about creating efficient, scalable, and maintainable applications
              that solve real-world problems.
            </p>
            <p className="text-gray-700 mb-4">
              My journey into software development started during my university
              studies, where I discovered my love for problem-solving through
              code. Since then, I've been constantly learning and improving my
              skills through personal projects, online courses, and hands-on
              practice.
            </p>
            <p className="text-gray-700">
              I'm currently work in an IT company where I
              can contribute to meaningful projects while continuing to develop my
              technical and professional skills.
            </p>
          </div>
        </div>
      </section>

      {/* Career Goal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Career Goal
                </h2>
                <p className="text-gray-700">
                  My goal is to secure a position as a backend or full-stack
                  developer in a dynamic IT company, preferably in Global, where I
                  can leverage my technical skills and grow as a professional
                  software engineer. I'm particularly interested in companies that
                  value innovation, continuous learning, and collaborative
                  teamwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Education & Learning
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <div className="flex items-start space-x-4">
                <GraduationCap className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Bachelor's in Botany
                  </h3>
                  <p className="text-gray-600 mb-2">
                    University of Taungoo • 2018 - 2024
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-4">
              <div className="flex items-start space-x-4">
                <GraduationCap className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Diploma in Computing
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Youth Resource College • 2024 - 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-4">
              <div className="flex items-start space-x-4">
                <GraduationCap className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Diploma in Business IT
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Youth Resource College • 2025 - 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-4">
              <div className="flex items-start space-x-4">
                <GraduationCap className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Self-Learning & Certifications (Java Developer Class)
                  </h3>
                  <p className="text-gray-600 mb-2">May - October (2025)</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Spring Framework & Spring Boot courses</li>
                    <li>React and modern JavaScript frameworks</li>
                    <li>Database design and optimization</li>
                    <li>RESTful API design and microservices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Soft Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 text-center">
              I'm a fast learner who enjoys working in collaborative environments.
              I believe in clear communication, taking initiative, and
              continuously improving both my technical and interpersonal skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
