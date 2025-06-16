
import React, { useState } from 'react';
import WelcomeSlide from '../components/WelcomeSlide';
import MainMenu from '../components/MainMenu';
import QuizPage from '../components/QuizPage';
import MaterialPage from '../components/MaterialPage';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState('welcome');
  const [selectedMaterial, setSelectedMaterial] = useState('');

  const handleSlideChange = (slide: string, material?: string) => {
    setCurrentSlide(slide);
    if (material) setSelectedMaterial(material);
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 'welcome':
        return <WelcomeSlide onNext={() => handleSlideChange('menu')} />;
      case 'menu':
        return <MainMenu onMenuSelect={handleSlideChange} />;
      case 'quiz':
        return <QuizPage onBack={() => handleSlideChange('menu')} />;
      case 'material':
        return <MaterialPage material={selectedMaterial} onBack={() => handleSlideChange('menu')} />;
      default:
        return <WelcomeSlide onNext={() => handleSlideChange('menu')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {renderSlide()}
    </div>
  );
};

export default Index;
