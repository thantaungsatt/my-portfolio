import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { SkillCard } from '../components/SkillCard';
import { projects } from '../data/projectsData';
import { Server, Layout, Database, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  const featuredProjects = projects
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)

  const skillsData = [
    {
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'RESTful APIs'],
      icon: Server,
      color: 'bg-blue-500'
    },
    {
      title: 'Frontend',
      skills: ['HTML/CSS', 'JavaScript', 'Thymeleaf', 'React', 'TypeScript', 'Bootstrap', 'Tailwind CSS'],
      icon: Layout,
      color: 'bg-purple-500'
    },
    {
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL'],
      icon: Database,
      color: 'bg-green-500'
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Maven', 'Postman'],
      icon: Wrench,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Check out some of my recent work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
