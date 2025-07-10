import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: your.email@example.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: City, Country</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-200">About</a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-200">Projects</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                GitHub
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}