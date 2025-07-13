import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Image from 'next/image';
import { projects } from '../../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-float animate-stagger-2"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500 rounded-full blur-3xl animate-float animate-stagger-3"></div>
      </div>
      
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my latest work and creative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden relative flex flex-col h-full">
                  
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 mt-auto">
                      <Button size="sm" href={project.liveUrl}>
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" href={project.githubUrl}>
                        View Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up animate-stagger-3">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <Button size="lg" href="#contact">
              Let's Connect
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}