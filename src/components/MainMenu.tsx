
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Cpu, Wrench, RotateCcw, BookOpen } from 'lucide-react';

interface MainMenuProps {
  onMenuSelect: (slide: string, material?: string) => void;
}

const MainMenu = ({ onMenuSelect }: MainMenuProps) => {
  const menuItems = [
    {
      id: 'refrigeran',
      title: 'Mesin Pendingin & Refrigeran',
      description: 'Pelajari prinsip dasar mesin pendingin dan jenis-jenis refrigeran',
      icon: Settings,
      color: 'bg-blue-500'
    },
    {
      id: 'komponen',
      title: 'Komponen Refrigeran',
      description: 'Mengenal komponen-komponen utama dalam sistem refrigerasi',
      icon: Cpu,
      color: 'bg-green-500'
    },
    {
      id: 'perawatan',
      title: 'Perawatan Sistem',
      description: 'Tips dan cara perawatan sistem refrigerasi yang tepat',
      icon: Wrench,
      color: 'bg-orange-500'
    },
    {
      id: 'siklus',
      title: 'Siklus Refrigerasi',
      description: 'Memahami siklus refrigerasi dan cara kerjanya',
      icon: RotateCcw,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Menu Pembelajaran</h2>
          <p className="text-gray-600 text-lg">Pilih materi yang ingin Anda pelajari</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={item.id}
                className="hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer border-0 shadow-lg"
                onClick={() => onMenuSelect('material', item.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`${item.color} p-4 rounded-xl`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button
            onClick={() => onMenuSelect('quiz')}
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Mulai Kuis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
