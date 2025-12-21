
import React from 'react';
import ShuutzStudio from './components/ShuutzStudio';

import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <ShuutzStudio />
      </div>
    </LanguageProvider>
  );
};

export default App;
