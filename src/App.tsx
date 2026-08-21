import React, { useState } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { CreateMnemonicSection } from './components/CreateMnemonicSection';
import { LearnSection } from './components/LearnSection';
import { ReverseCheckSection } from './components/ReverseCheckSection';
import { ModernConnectionSection } from './components/ModernConnectionSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <HomeSection onNavigate={setCurrentTab} />;
      case 'mnemonic':
        return <CreateMnemonicSection />;
      case 'learn':
        return <LearnSection />;
      case 'reverse':
        return <ReverseCheckSection />;
      case 'modern':
        return <ModernConnectionSection />;
      default:
        return <HomeSection onNavigate={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar currentTab={currentTab} onSelectTab={setCurrentTab} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {renderContent()}
      </main>

      <Footer onNavigate={setCurrentTab} />
    </div>
  );
};

export default App;
