import Container from '../ui/Container';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional developer working"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-600 rounded-lg opacity-20 -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Passionate Developer & Designer
              </h3>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm a full-stack developer with a passion for creating exceptional digital experiences. 
                With over X years of experience in web development, I specialize in modern JavaScript 
                frameworks and have a keen eye for design.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I believe in writing clean, maintainable code and creating user interfaces that are 
                not only functional but also delightful to use. When I'm not coding, you can find me 
                exploring new technologies, contributing to open source projects, or enjoying outdoor activities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}