import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';

interface MaterialPageProps {
  material: string;
  onBack: () => void;
}

const MaterialPage = ({ material, onBack }: MaterialPageProps) => {
  const materialData = {
    refrigeran: {
      title: 'Mesin Pendingin & Refrigeran',
      content: [
        {
          subtitle: 'Pengertian Mesin Pendingin',
          text: 'Mesin pendingin adalah alat yang digunakan untuk menurunkan suhu ruangan atau benda dengan cara memindahkan panas dari tempat yang bersuhu rendah ke tempat yang bersuhu tinggi.'
        },
        {
          subtitle: 'Jenis-jenis Refrigeran',
          text: 'Refrigeran adalah zat pendingin yang digunakan dalam sistem refrigerasi. Jenis refrigeran meliputi: R-12, R-22, R-134a, R-410A, dan refrigeran alami seperti amonia dan CO2.'
        },
        {
          subtitle: 'Sifat-sifat Refrigeran',
          text: 'Refrigeran harus memiliki sifat: tidak beracun, tidak mudah terbakar, tidak korosif, mudah mencair dan menguap, serta ramah lingkungan.'
        }
      ]
    },
    komponen: {
      title: 'Komponen Refrigeran',
      content: [
        {
          subtitle: 'Kompresor',
          text: 'Kompresor berfungsi untuk mengompres refrigeran dari tekanan rendah menjadi tekanan tinggi dan memompa refrigeran ke seluruh sistem.',
          image: '/assets/kompresor.jpeg'
        },
        {
          subtitle: 'Kondensor',
          text: 'Kondensor berfungsi untuk melepaskan panas dari refrigeran bertekanan tinggi sehingga refrigeran berubah dari gas menjadi cair.',
          image: '/assets/kondesor.jpeg'
        },
        {
          subtitle: 'Evaporator',
          text: 'Evaporator berfungsi untuk menyerap panas dari ruangan sehingga refrigeran berubah dari cair menjadi gas.',
          image: '/assets/evoporator.jpeg'
        },
        {
          subtitle: 'Alat Ekspansi',
          text: 'Alat ekspansi (katup ekspansi atau pipa kapiler) berfungsi untuk menurunkan tekanan dan suhu refrigeran sebelum masuk ke evaporator.',
          image: '/assets/alat-ekspansi.jpeg'
        }
      ]
    },
    perawatan: {
      title: 'Perawatan Sistem Refrigeran',
      content: [
        {
          subtitle: 'Perawatan Berkala',
          text: 'Lakukan pembersihan kondensor dan evaporator secara rutin, periksa kebocoran refrigeran, dan pastikan semua komponen berfungsi dengan baik.'
        },
        {
          subtitle: 'Deteksi Kerusakan',
          text: 'Perhatikan tanda-tanda kerusakan seperti suara tidak normal, suhu tidak optimal, atau konsumsi listrik yang meningkat.'
        },
        {
          subtitle: 'Penggantian Filter',
          text: 'Ganti filter udara secara berkala untuk menjaga kualitas udara dan efisiensi sistem pendinginan.'
        }
      ]
    },
    siklus: {
      title: 'Siklus Refrigerasi',
      video: '/assets/carakerjakulkas.mp4',
      content: [
        {
          subtitle: 'Proses Kompresi',
          text: 'Refrigeran gas bertekanan rendah dikompres oleh kompresor menjadi gas bertekanan tinggi dan bersuhu tinggi.'
        },
        {
          subtitle: 'Proses Kondensasi',
          text: 'Gas bertekanan tinggi didinginkan di kondensor hingga berubah menjadi cairan bertekanan tinggi.'
        },
        {
          subtitle: 'Proses Ekspansi',
          text: 'Cairan bertekanan tinggi diturunkan tekanannya melalui alat ekspansi menjadi campuran cair-gas bertekanan rendah.'
        },
        {
          subtitle: 'Proses Evaporasi',
          text: 'Campuran cair-gas menyerap panas di evaporator dan berubah menjadi gas bertekanan rendah, kemudian kembali ke kompresor.'
        }
      ]
    }
  };

  const currentMaterial = materialData[material as keyof typeof materialData];

  if (!currentMaterial) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <p className="text-xl text-gray-600">Materi tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-6">
        <div className="flex items-center gap-4 mb-8">
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">{currentMaterial.title}</h1>
        </div>
      </div>

      {/* Hero Section untuk video */}
   {material === 'siklus' && currentMaterial.video && (
  <div className="max-w-4xl mx-auto px-4 md:px-6 mb-12">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      {currentMaterial.title}
    </h2>
    <div className="rounded-2xl overflow-hidden shadow-lg border">
      <video
        autoPlay
        muted
        controls
        playsInline
        className="w-full max-h-[70vh] object-cover"
        poster="/assets/siklus-thumbnail.jpg" // opsional thumbnail
      >
        <source src={currentMaterial.video} type="video/mp4" />
        Browser Anda tidak mendukung pemutar video.
      </video>
    </div>
  </div>
)}




      {/* Konten materi */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6 pb-12">
        {currentMaterial.content.map((section, index) => (
          <Card key={index} className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">{section.subtitle}</CardTitle>
            </CardHeader>
            <CardContent>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.subtitle}
                  className="w-full max-w-md mb-4 rounded shadow"
                />
              )}
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MaterialPage;
