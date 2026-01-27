
import React, { useState } from 'react';
import { Shield, Package, AlertTriangle, ArrowRight, Camera, Check, Sparkles, Box } from 'lucide-react';

const FragileView: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'standard' | 'photo'>('standard');

  const options = [
    {
      id: 'standard',
      title: 'Only specialized pickup',
      price: '₹199',
      description: 'Extra care and specialized handling by our dedicated fragile-goods team.',
      icon: <Package size={18} className="text-gray-400" />
    },
    {
      id: 'photo',
      title: 'Destinational Photo updates',
      price: '₹499',
      description: 'The product reaches every transit point, a photo will be clicked and shown to you in real-time.',
      icon: <Camera size={18} className="text-red-500" />,
      premium: true
    }
  ];

  return (
    <div className="p-6 pt-10 bg-white min-h-screen animate-in fade-in duration-300">
      {/* Top Banner - Replica style */}
      <div className="bg-[#FFF4F4] p-8 rounded-[40px] mb-8 border border-red-50 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-black text-[#1A202C] leading-tight">Fragile Shipping</h1>
          <p className="text-sm text-gray-500 mt-2 font-medium">Extra care for your most valuable items. Specialized packing and priority handling.</p>
        </div>
      </div>

      {/* Common Fragile Items - Replica style */}
      <div className="space-y-5 mb-8">
        <h3 className="font-bold text-lg text-[#1A202C]">Common Fragile Items</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Glassware', icon: <Box size={18} className="text-gray-400" /> },
            { name: 'Electronics', icon: <Box size={18} className="text-gray-400" /> },
            { name: 'Artwork', icon: <Box size={18} className="text-gray-400" /> },
            { name: 'Antiques', icon: <Box size={18} className="text-gray-400" /> }
          ].map(item => (
            <div key={item.name} className="p-4 bg-[#F7F8FA] rounded-2xl flex items-center space-x-3 border border-transparent hover:border-gray-200 transition-all">
              {item.icon}
              <span className="text-sm font-bold text-[#1A202C]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Choose Service Level */}
      <div className="space-y-4 mb-8">
        <h3 className="font-bold text-lg text-[#1A202C]">Choose Service Level</h3>
        <div className="space-y-3">
          {options.map((option) => (
            <div 
              key={option.id}
              onClick={() => setSelectedOption(option.id as any)}
              className={`relative p-5 rounded-[28px] border-2 transition-all cursor-pointer active:scale-[0.98] ${
                selectedOption === option.id 
                  ? 'border-red-500 bg-[#FFF4F4]' 
                  : 'border-[#F7F8FA] bg-white hover:border-gray-100'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-xl ${selectedOption === option.id ? 'bg-white shadow-sm' : 'bg-[#F7F8FA]'}`}>
                    {option.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A202C] flex items-center">
                      {option.title}
                      {option.premium && (
                        <span className="ml-2 bg-yellow-100 text-yellow-700 text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-tighter">Premium</span>
                      )}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-medium leading-relaxed mt-0.5 max-w-[200px]">
                      {option.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-sm font-black text-[#1A202C]">{option.price}</span>
                   {selectedOption === option.id && (
                     <div className="mt-2 bg-red-500 text-white rounded-full p-0.5">
                       <Check size={12} strokeWidth={4} />
                     </div>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Action Button - Replica of Screenshot */}
      <div className="p-5 bg-[#1A202C] rounded-[32px] text-white flex items-center justify-between group cursor-pointer active:scale-[0.98] transition-all shadow-xl shadow-gray-200">
        <div>
          <h4 className="font-bold text-lg">Book Specialized Pickup</h4>
          <p className="text-xs text-gray-400 font-medium">Starting at ₹199</p>
        </div>
        <div className="bg-[#EF4444] p-3 rounded-2xl group-hover:translate-x-1 transition-transform shadow-lg shadow-red-500/20">
          <ArrowRight size={24} strokeWidth={3} />
        </div>
      </div>

      {/* Pro-Tip section - Replica style */}
      <div className="mt-8 flex items-start space-x-3 text-orange-600 bg-[#FFF9F2] p-5 rounded-[28px] border border-orange-50">
        <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
        <p className="text-[11px] leading-relaxed font-semibold">
          <strong className="text-xs mb-0.5 block">Pro-Tip:</strong> Please ensure items are wrapped in at least two layers of bubble wrap before our executive arrives for final packing.
        </p>
      </div>
      
      {/* Bottom spacer */}
      <div className="h-28"></div>
    </div>
  );
};

export default FragileView;
