
import React, { useState } from 'react';
import { ArrowLeft, Check, Search, Camera, Info, Package as PackageIcon, Box, Smartphone, Globe, AlertCircle } from 'lucide-react';

interface SendPackageViewProps {
  onBack: () => void;
}

const SendPackageView: React.FC<SendPackageViewProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(2); // Starting at Step 2 "Package" as per screenshot
  const [selectedType, setSelectedType] = useState('Suitcase');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');
  const [showSmartDims, setShowSmartDims] = useState(false);
  const [smartMode, setSmartMode] = useState<'camera' | 'search' | null>(null);
  const [searchText, setSearchText] = useState('');

  const packageTypes = [
    { name: 'Envelope / Pouch', icon: '📩', desc: 'Documents' },
    { name: 'Box / Carton', icon: '📦', desc: 'Standard' },
    { name: 'Suitcase / Luggage', icon: '🧳', desc: 'Baggage' },
    { name: 'Backpack / Handbag', icon: '🎒', desc: 'Personal' },
  ];

  const packageContents = [
    { name: 'Books & Documents', icon: '📚' },
    { name: 'Clothes & Personal Items', icon: '👕' },
    { name: 'Consumables', icon: '🍪' },
    { name: 'Electronics', icon: '💻' },
  ];

  const handleSmartSearch = () => {
    // Simulated dimension guessing for specific models
    if (searchText.toLowerCase().includes('suitcase') || searchText.toLowerCase().includes('luggage')) {
      alert("Matched: Large Suitcase found. Suggested Dimensions: 75 x 50 x 30 cm");
    } else {
      alert("No exact match found. Please enter dimensions manually.");
    }
    setSmartMode(null);
    setShowSmartDims(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white animate-in slide-in-from-right duration-300">
      {/* Header */}
      <header className="px-6 pt-10 pb-4 flex items-center space-x-6 border-b border-gray-50">
        <button onClick={onBack} className="p-1 hover:bg-gray-50 rounded-full transition-colors">
          <ArrowLeft size={24} className="text-gray-800" />
        </button>
        <h1 className="text-xl font-bold text-[#1F2937]">Send a Package</h1>
      </header>

      {/* Progress Bar */}
      <div className="px-8 py-6">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 right-0 h-[2px] bg-gray-100 top-1/2 -translate-y-1/2 z-0"></div>
          
          {[
            { label: 'ADDRESS', step: 1, completed: true },
            { label: 'PACKAGE', step: 2, active: true },
            { label: 'SCHEDULE', step: 3 },
            { label: 'SUMMARY', step: 4 },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                item.completed ? 'bg-green-500 border-green-500 text-white' : 
                item.active ? 'bg-white border-black text-black' : 
                'bg-white border-gray-200 text-gray-300'
              }`}>
                {item.completed ? <Check size={16} /> : <div className={`w-2 h-2 rounded-full ${item.active ? 'bg-black' : 'bg-transparent'}`}></div>}
              </div>
              <span className={`text-[10px] font-bold mt-2 tracking-wider ${item.active ? 'text-black' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-8">
        {/* Describe Package */}
        <section>
          <h3 className="text-sm font-bold text-[#374151] mb-4">Describe Your Package</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
            {packageTypes.map((type) => (
              <button 
                key={type.name}
                onClick={() => setSelectedType(type.name)}
                className={`flex-shrink-0 w-32 h-40 rounded-2xl border-2 flex flex-col items-center justify-center p-4 transition-all ${
                  selectedType === type.name ? 'border-blue-500 bg-blue-50/30 shadow-sm' : 'border-gray-100 bg-white'
                }`}
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <span className="text-[11px] font-bold text-center leading-tight text-gray-700">{type.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* For Reference Section (Exact Replica of image) */}
        <section className="bg-gray-50/50 rounded-[32px] p-6 border border-dashed border-gray-200">
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-xs font-bold text-gray-500">For Reference</span>
            <Info size={14} className="text-gray-300" />
          </div>
          
          <div className="relative h-48 flex items-end justify-between px-4">
             {/* Human Outline Placeholder */}
             <div className="absolute right-0 bottom-0 h-full opacity-10 pointer-events-none">
                <div className="w-16 h-48 border-2 border-gray-400 rounded-full flex flex-col items-center">
                   <div className="w-10 h-10 rounded-full bg-gray-400 mt-2"></div>
                   <div className="w-14 h-32 bg-gray-400 rounded-t-xl mt-1"></div>
                </div>
                <span className="absolute top-0 -left-12 text-[10px] text-gray-400 font-bold whitespace-nowrap">180cm (6ft.)</span>
             </div>

             {/* Comparison Suitcases */}
             <div className="flex items-end space-x-4 w-3/4">
                {[
                  { h: 55, w: 40, label: '55cm' },
                  { h: 65, w: 45, label: '65cm' },
                  { h: 75, w: 50, label: '75cm' },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    <div 
                      className="bg-white border-2 border-gray-200 rounded-xl mb-2 transition-all group-hover:border-blue-300" 
                      style={{ height: `${s.h * 1.5}px`, width: `${s.w * 1.2}px` }}
                    ></div>
                    <span className="text-[10px] font-bold text-gray-400">{s.label}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Package Dimensions Input */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#374151]">Package Dimensions</h3>
            <div className="flex bg-gray-100 p-1 rounded-full">
               <button 
                 onClick={() => setUnit('cm')}
                 className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${unit === 'cm' ? 'bg-black text-white shadow-md' : 'text-gray-400'}`}
               >
                 cm
               </button>
               <button 
                 onClick={() => setUnit('in')}
                 className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${unit === 'in' ? 'bg-black text-white shadow-md' : 'text-gray-400'}`}
               >
                 in
               </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
             <input type="number" placeholder="L" className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
             <input type="number" placeholder="B" className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
             <input type="number" placeholder="H" className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
          </div>

          {/* Smart Dimensions Feature Button */}
          <button 
            onClick={() => setShowSmartDims(true)}
            className="w-full bg-blue-50 text-blue-600 py-3 rounded-2xl font-bold text-xs flex items-center justify-center space-x-2 border border-blue-100 active:scale-95 transition-all"
          >
            <Smartphone size={16} />
            <span>Try Smart Dimensions Guessing</span>
          </button>
        </section>

        {/* Package Weight */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-[#374151]">Package Weight</h3>
          <div className="relative">
             <input 
               type="number" 
               placeholder="Enter Package Weight" 
               className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
             />
             <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-500">
               Kg
             </div>
          </div>
          <div className="flex items-center justify-between px-2">
             <span className="text-xs font-bold text-gray-400">Chargeable Weight</span>
             <span className="text-xs font-bold text-blue-600">0 Kg</span>
          </div>
        </section>

        {/* Select Package Contents */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-[#374151]">Select Package Contents</h3>
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">0/7 Selected</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {packageContents.map((content) => (
              <button key={content.name} className="p-4 bg-white border border-gray-100 rounded-[28px] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow active:scale-95">
                <div className="text-3xl mb-2">{content.icon}</div>
                <span className="text-[10px] font-bold text-gray-600 leading-tight">{content.name}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-white border-t border-gray-50 z-50">
        <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
          Next
        </button>
      </div>

      {/* Smart Dimensions Modal */}
      {showSmartDims && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-md bg-white rounded-t-[40px] p-8 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-gray-900 italic">SMART DIMENSIONS</h3>
              <button onClick={() => { setShowSmartDims(false); setSmartMode(null); }} className="p-2 bg-gray-50 rounded-full text-gray-400">
                <ArrowLeft size={20} className="rotate-90" />
              </button>
            </div>

            {!smartMode ? (
              <div className="space-y-4">
                <p className="text-xs text-gray-500 mb-6 font-medium leading-relaxed">
                  Get a quick estimate of your package size using AI tools. Please note these are guesses and final billing is based on physical measurement.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setSmartMode('camera')}
                    className="flex flex-col items-center p-6 bg-blue-50 border border-blue-100 rounded-[32px] group hover:bg-blue-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 mb-3 shadow-sm">
                      <Camera size={24} />
                    </div>
                    <span className="text-xs font-bold text-blue-700">Camera Scan</span>
                  </button>
                  <button 
                    onClick={() => setSmartMode('search')}
                    className="flex flex-col items-center p-6 bg-purple-50 border border-purple-100 rounded-[32px] group hover:bg-purple-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-500 mb-3 shadow-sm">
                      <Globe size={24} />
                    </div>
                    <span className="text-xs font-bold text-purple-700">Model Search</span>
                  </button>
                </div>
              </div>
            ) : smartMode === 'camera' ? (
              <div className="space-y-6 flex flex-col items-center">
                 <div className="w-full aspect-square bg-gray-900 rounded-[40px] relative overflow-hidden flex items-center justify-center">
                    {/* Simulated Camera Feed */}
                    <div className="absolute inset-0 border-4 border-dashed border-white/20 m-12 rounded-xl"></div>
                    <div className="text-white/40 text-center px-8">
                       <Smartphone size={48} className="mx-auto mb-4 animate-pulse" />
                       <p className="text-[10px] font-bold uppercase tracking-widest">Align package within the box</p>
                    </div>
                    {/* Fake Dims */}
                    <div className="absolute bottom-6 left-6 bg-green-500 px-3 py-1 rounded-full text-white text-[10px] font-bold">L: 45cm</div>
                    <div className="absolute top-1/2 right-6 -translate-y-1/2 bg-green-500 px-3 py-1 rounded-full text-white text-[10px] font-bold">H: 30cm</div>
                 </div>
                 <button onClick={() => { setSmartMode(null); setShowSmartDims(false); }} className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold">
                    Apply Estimated Guesses
                 </button>
              </div>
            ) : (
              <div className="space-y-6">
                 <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="e.g. American Tourister 24 inch"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="w-full pl-12 pr-6 py-4 bg-gray-100 rounded-2xl text-sm font-bold focus:bg-white transition-all outline-none"
                    />
                 </div>
                 <div className="flex items-start space-x-3 bg-blue-50 p-4 rounded-2xl text-blue-700">
                    <AlertCircle size={18} className="flex-shrink-0" />
                    <p className="text-[10px] font-medium leading-relaxed">
                      Enter the product name or model number. We'll search for standard manufacturer dimensions to pre-fill the form.
                    </p>
                 </div>
                 <button 
                  onClick={handleSmartSearch}
                  className="w-full bg-black text-white py-4 rounded-2xl font-bold"
                 >
                    Search & Estimate
                 </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SendPackageView;
