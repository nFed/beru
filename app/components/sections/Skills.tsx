'use client';

import Container from '../ui/Container';
import Card from '../ui/Card';
import Image from 'next/image';
import { skillCategories, techIcons } from '../../data/portfolio';

// Skill proficiency data (in percentage)
const skillProficiency: Record<string, number> = {
  'Frontend Development': 95,
  'Backend Development': 85,
  'Tools & Technologies': 90,
  'Soft Skills': 88
};

export default function Skills() {
  
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-float animate-stagger-2"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-500 rounded-full blur-3xl animate-float animate-stagger-3"></div>
      </div>
      
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & <span className="text-gradient-accent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Expertise across the full stack with modern technologies
            </p>
          </div>
          
          {/* Skill Categories with Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="animate-fade-in-up animate-stagger-1" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="p-6 h-full hover-lift hover-glow group glass relative overflow-hidden">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 relative hover-grow">
                      <Image
                        src={category.iconUrl}
                        alt={category.title}
                        fill
                        className="object-contain animate-scale-in"
                        style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-gradient-primary transition-all duration-300">
                      {category.title}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-skill-bar"
                          style={{ 
                            '--skill-width': `${skillProficiency[category.title] || 80}%`,
                            animationDelay: `${index * 0.2 + 0.5}s`
                          } as React.CSSProperties}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {skillProficiency[category.title] || 80}% Proficiency
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-center gap-2 mb-2">
                          {techIcons[skill] && (
                            <div className="w-4 h-4 relative animate-scale-in" style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}>
                              <Image
                                src={techIcons[skill]}
                                alt={skill}
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                          <span className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm hover-grow transition-all duration-300">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Featured Technologies Grid */}
          <div className="animate-fade-in-up animate-stagger-3">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {Object.entries(techIcons).map(([tech, iconUrl], index) => (
                <div 
                  key={tech} 
                  className="group flex flex-col items-center p-4 rounded-lg hover-lift hover-glow glass transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.05 + 0.8}s` }}
                >
                  <div className="w-12 h-12 relative mb-2 hover-grow">
                    <Image
                      src={iconUrl}
                      alt={tech}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gradient-primary transition-all duration-300 text-center">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills Summary */}
          <div className="mt-16 text-center animate-fade-in-up animate-stagger-4">
            <div className="glass p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm passionate about staying current with the latest technologies and best practices. 
                My goal is to create efficient, scalable, and maintainable solutions that deliver exceptional user experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce-in animate-stagger-1">
                  3+ Years Experience
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce-in animate-stagger-2">
                  50+ Projects
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce-in animate-stagger-3">
                  Full Stack Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}