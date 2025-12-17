import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  color: string;
}

export function SkillCard({ title, skills, icon: Icon, color }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center text-gray-700">
            <span className={`w-2 h-2 ${color} rounded-full mr-3`} />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
