import Container from '../ui/Container';
import AnimatedSection from '../ui/AnimatedSection';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-float animate-stagger-2"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500 rounded-full blur-3xl animate-float animate-stagger-3"></div>
      </div>
      
      <Container>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-gradient-accent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get to know the person behind the code
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection animation="fade-in-left" className="relative">
              <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl hover-lift group">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional developer working"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-20 -z-10 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 -z-10 animate-float animate-stagger-2"></div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg animate-bounce-in">
                Available for hire
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" className="space-y-8 lg:pt-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-gradient-primary">
                  Passionate Developer & Designer
                </h3>
                
                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm a full-stack developer with a passion for creating exceptional digital experiences. 
                    With over <span className="font-semibold text-gradient-secondary">3+ years</span> of experience in web development, 
                    I specialize in modern JavaScript frameworks and have a keen eye for design.
                  </p>
                  
                  <p>
                    I believe in writing clean, maintainable code and creating user interfaces that are 
                    not only functional but also delightful to use. When I'm not coding, you can find me 
                    exploring new technologies, contributing to open source projects, or enjoying outdoor activities.
                  </p>
                  
                  <p>
                    My approach combines technical expertise with creative problem-solving, ensuring that 
                    every project I work on delivers both <span className="font-semibold text-gradient-accent">exceptional performance</span> and 
                    <span className="font-semibold text-gradient-accent"> outstanding user experience</span>.
                  </p>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <AnimatedSection animation="scale-in" delay={0.2} className="text-center p-6 glass rounded-xl hover-lift group">
                  <div className="text-3xl font-bold text-gradient-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={0.4} className="text-center p-6 glass rounded-xl hover-lift group">
                  <div className="text-3xl font-bold text-gradient-secondary mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
                </AnimatedSection>
              </div>
              
              {/* Skills highlights */}
              <AnimatedSection animation="fade-in-up" delay={0.6} className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX Design', 'Full Stack'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium hover-grow transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </AnimatedSection>
              
              {/* CTA Button */}
              <AnimatedSection animation="fade-in-up" delay={0.8} className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover-lift hover-glow transition-all duration-300">
                  Download Resume
                </button>
                <button className="border-2 border-blue-500 text-blue-500 dark:text-blue-400 px-8 py-3 rounded-full font-medium hover-lift hover:bg-blue-500 hover:text-white transition-all duration-300">
                  Let's Connect
                </button>
              </AnimatedSection>
            </AnimatedSection>
          </div>
          
          {/* Mission Statement */}
          <AnimatedSection animation="fade-in-up" delay={1.0} className="mt-16 text-center">
            <div className="max-w-4xl mx-auto glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Mission
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To bridge the gap between innovative technology and human-centered design, creating digital solutions 
                that not only solve problems but also inspire and delight users. I'm committed to continuous learning 
                and staying at the forefront of web development trends to deliver the best possible outcomes for every project.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}