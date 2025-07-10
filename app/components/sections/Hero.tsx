import Container from '../ui/Container';
import Button from '../ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Technology background"
          fill
          className="object-cover opacity-10 dark:opacity-5"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-indigo-100/90 dark:from-gray-900/90 dark:to-gray-800/90"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">
              John Developer
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences 
            that solve real-world problems with clean code and thoughtful design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="#projects">
              View My Work
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              Get In Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}