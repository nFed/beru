import Container from '../ui/Container';
import Card from '../ui/Card';
import Image from 'next/image';
import { skillCategories, techIcons } from '../../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                      src={category.iconUrl}
                      alt={category.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-center gap-2 mb-2">
                        {techIcons[skill] && (
                          <div className="w-4 h-4 relative">
                            <Image
                              src={techIcons[skill]}
                              alt={skill}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Additional featured technologies section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {Object.entries(techIcons).map(([tech, iconUrl]) => (
                <div key={tech} className="group flex flex-col items-center">
                  <div className="w-12 h-12 relative mb-2 transition-transform group-hover:scale-110">
                    <Image
                      src={iconUrl}
                      alt={tech}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}