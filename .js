import React, { useState } from 'react';
import { Brain, Settings, Plus, Image, FileText } from 'lucide-react';

const QuestionGenerator = () => {
  const [difficulty, setDifficulty] = useState({
    sedang: { active: true, count: 2 },
    sulit: { active: true, count: 2 }
  });

  const [additionalFeatures, setAdditionalFeatures] = useState({
    gambar: { active: true, style: 'Ilustrasi Edukasi', count: 2 },
    wacana: { active: true, count: 2 }
  });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Brain className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-indigo-900">Pembuat Soal Otomatis</h1>
            <p className="text-xs text-gray-500 italic">Generator Soal: Formatif, Sumatif, dll.</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-emerald-500 text-emerald-600 rounded-full text-sm font-medium hover:bg-emerald-50 transition">
          <Settings className="w-4 h-4" /> Pengaturan API
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        
        {/* Kolom Kiri: Konfigurasi */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 bg-indigo-500 rounded-full"></div>
            <h2 className="text-sm font-bold text-indigo-900 uppercase tracking-wider">Konfigurasi Tipe Soal</h2>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-400 mb-2 block uppercase">Jenis Soal</label>
            <select className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none">
              <option>Benar Salah</option>
              <option>Pilihan Ganda</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="text-xs font-semibold text-gray-400 mb-2 block uppercase">Distribusi Kesulitan</label>
            <div className="space-y-3">
              {['Mudah', 'Sedang', 'Sulit'].map((level) => (
                <div key={level} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={difficulty[level.toLowerCase()]?.active || false}
                      className="w-5 h-5 rounded text-indigo-600" 
                    />
                    <span className="text-sm font-medium text-gray-700">{level}</span>
                  </div>
                  {difficulty[level.toLowerCase()]?.active && (
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-400 uppercase font-bold">Jumlah Soal:</span>
                      <input 
                        type="number" 
                        defaultValue={difficulty[level.toLowerCase()].count}
                        className="w-12 p-1 border border-gray-200 rounded text-center text-sm"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Level Kognitif & Fitur */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 bg-indigo-500 rounded-full"></div>
            <h2 className="text-sm font-bold text-indigo-900 uppercase tracking-wider">Level Kognitif & Fitur Tambahan</h2>
          </div>

          <label className="text-xs font-semibold text-gray-400 mb-2 block uppercase">Pilih Level Kognitif</label>
          <div className="grid grid-cols-3 gap-2">
            {['C1', 'C2', 'C3', 'C4', 'C5', 'C6'].map((c) => (
              <button 
                key={c}
                className={`p-3 rounded-lg border text-center transition-all ${
                  ['C3', 'C4'].includes(c) 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                  : 'bg-white text-gray-300 border-gray-100'
                }`}
              >
                <div className="font-bold text-sm">{c}</div>
                <div className="text-[8px] uppercase">{c === 'C3' ? 'Menerapkan' : c === 'C4' ? 'Menganalisis' : '...'}</div>
              </button>
            ))}
          </div>

          <div className="mt-6">
            <label className="text-xs font-semibold text-gray-400 mb-2 block uppercase">Fitur Tambahan</label>
            <div className="space-y-3">
              {/* Fitur Gambar */}
              <div className="p-3 border border-gray-100 rounded-xl flex items-center gap-4 bg-white">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-indigo-600" />
                <Image className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-medium text-gray-600 flex-1">Gambar Ilustrasi AI</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Gaya:</span>
                  <select className="text-xs p-1 bg-gray-50 border rounded">
                    <option>Ilustrasi Edukasi</option>
                  </select>
                  <span className="text-[10px] text-gray-400 font-bold uppercase ml-2">Jumlah:</span>
                  <input type="number" defaultValue="2" className="w-10 p-1 border rounded text-xs text-center" />
                </div>
              </div>

              {/* Fitur Wacana */}
              <div className="p-3 border border-gray-100 rounded-xl flex items-center gap-4 bg-white">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-indigo-600" />
                <FileText className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-medium text-gray-600 flex-1">Teks Wacana (Literasi)</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Jumlah Wacana:</span>
                  <input type="number" defaultValue="2" className="w-10 p-1 border rounded text-xs text-center" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tombol Action */}
        <div className="md:col-span-2 pt-4">
          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-[0.98]">
            <Plus className="w-5 h-5" /> Tambahkan ke Daftar Struktur
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionGenerator;
