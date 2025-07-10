import Container from '../ui/Container';
import Card from '../ui/Card';
import { experiences } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-float animate-stagger-2"></div>
      </div>
      
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Work <span className="text-gradient-secondary">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My professional journey and growth
            </p>
          </div>
          
          {/* Timeline Container with proper structure */}
          <div className="relative">
            {/* Timeline Line - full height */}
            <div className="absolute left-6 md:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-40"></div>
            
            <div className="space-y-16 pt-4">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot - responsive positioning */}
                  <div className="absolute left-6 md:left-16 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg z-20 transform -translate-x-1/2 mt-6"></div>
                  
                  {/* Experience Card - responsive spacing */}
                  <div className="ml-14 md:ml-28 flex-1 w-full animate-fade-in-left animate-stagger-1" style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card className="p-8 hover-lift hover-glow glass group relative overflow-hidden">
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-gradient-primary transition-all duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-xl text-gradient-secondary font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <span className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                            {exp.period}
                          </span>
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                            Key Achievements:
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start text-gray-700 dark:text-gray-300 group/item">
                                <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></span>
                                <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up animate-stagger-3">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Let's discuss how my experience can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover-lift hover-glow transition-all duration-300">
                  View My Resume
                </button>
                <button className="border-2 border-blue-500 text-blue-500 dark:text-blue-400 px-8 py-3 rounded-full font-medium hover-lift hover:bg-blue-500 hover:text-white transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}