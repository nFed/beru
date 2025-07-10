import Container from '../ui/Container';
import Logo from '../ui/Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-40">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}