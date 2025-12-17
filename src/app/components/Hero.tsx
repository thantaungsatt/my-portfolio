import { Link } from 'react-router-dom';
import { ArrowRight, Code, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-2 text-cyan-600">
              {/* <Terminal className="h-6 w-6" /> */}
              <span className="font-semibold">Welcome to my portfolio</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-cyan-400">Thant Aung Satt</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-700">
                Junior Backend Developer | Java & React
              </p>
            </div>

            <p className="text-xl text-gray-600 max-w-2xl">
              Passionate about building robust, scalable backend systems and
              creating seamless user experiences. Currently seeking opportunities
              to grow and contribute to innovative projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors group"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Illustration/Code Block */}
          <div className="relative animate-float">
            <div className="bg-gray-900 rounded-lg shadow-2xl p-6 text-green-400 font-mono text-sm">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="overflow-x-auto">
                <code>{`public class Developer {
  private String name;
  private String[] skills;
  
  public Developer() {
    this.name = "Thant Aung Satt";
    this.skills = new String[]{
      "Java", "Spring Boot", "React", 
      "MySQL", "RESTful APIs"
    };
  }
  
  public void code() {
    System.out.println(
      "Building amazing things!"
    );
  }
}`}</code>
              </pre>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500 rounded-lg opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500 rounded-lg opacity-20 animate-pulse delay-150" />
          </div>
        </div>
      </div>
    </section>
  );
}
