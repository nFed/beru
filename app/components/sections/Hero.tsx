import Container from '../ui/Container';
import Button from '../ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/10">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        {/* Large geometric shapes */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float animate-stagger-2"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-down">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-shift">
                John Developer
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up animate-stagger-1">
            <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Full Stack Developer & UI/UX Designer
            </h2>
          </div>
          
          <div className="animate-fade-in-up animate-stagger-2">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              I create beautiful, functional, and user-centered digital experiences 
              that solve real-world problems with clean code and thoughtful design.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-stagger-3 mb-16">
            <Button size="lg" href="#projects" className="hover-lift px-8 py-4 text-lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg" href="#contact" className="hover-lift px-8 py-4 text-lg">
              Get In Touch
            </Button>
          </div>
          
          {/* Stats or highlights */}
          <div className="animate-fade-in-up animate-stagger-4 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-400">Passion for Code</div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}