import { LanguageProvider } from './LanguageContext';
import { useLanguage } from './useLanguage';
import Navbar from './Navbar';

function WelcomeScreen() {
  const { language } = useLanguage();
  return (
    <div style={{ padding: '20px' }}>
      <h1>{language === 'en' ? 'Welcome to the App!' : 'Üdvözlünk az alkalmazásban!'}</h1>
    </div>
  );
}

// App wrapped in the Provider
export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <WelcomeScreen />
    </LanguageProvider>
  );
}