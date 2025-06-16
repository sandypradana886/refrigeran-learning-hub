
import React from 'react';
import { Button } from "@/components/ui/button";
import { Snowflake, ThermometerSun } from 'lucide-react';

interface WelcomeSlideProps {
  onNext: () => void;
}

const WelcomeSlide = ({ onNext }: WelcomeSlideProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 flex justify-center items-center gap-4">
          <Snowflake className="w-16 h-16 text-blue-500 animate-pulse" />
          <ThermometerSun className="w-16 h-16 text-orange-500 animate-pulse" />
        </div>
        
        <h1 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">
          E-Refrigerant Learning
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Aplikasi pembelajaran interaktif tentang sistem refrigerasi dan pendinginan
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg">
          <p className="text-gray-700 mb-4">
            Pelajari tentang:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Mesin Pendingin & Refrigeran
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Komponen Sistem Refrigerasi
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Perawatan Sistem
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Siklus Refrigerasi
            </div>
          </div>
        </div>
        
        <Button 
          onClick={onNext}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Mulai Belajar →
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSlide;
