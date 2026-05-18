import { useLanguage } from './useLanguage';

function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav style={{ background: '#333', color: '#fff', padding: '10px' }}>
      <span>My Application</span>
      <button onClick={toggleLanguage} style={{ marginLeft: '20px' }}>
        Switch to {language === 'en' ? 'Hungarian' : 'English'}
      </button>
    </nav>
  );
}

export default Navbar;