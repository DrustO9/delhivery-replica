
import React from 'react';
import { User, Briefcase, ChevronRight, Package, TrendingUp } from 'lucide-react';

interface LoginSelectionProps {
  onSelectRole: (role: 'individual' | 'business') => void;
}

const LoginSelection: React.FC<LoginSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-8 py-12 max-w-md mx-auto animate-in fade-in duration-500">
      {/* Brand Header */}
      <div className="mb-16 flex flex-col items-center">
        <div className="w-16 h-1 bg-red-600 rounded-full mb-6"></div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tighter italic">DELHIVERY</h1>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mt-2">Logistics Simplified</p>
      </div>

      <div className="w-full space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Choose your account</h2>
          <p className="text-sm text-gray-500 mt-2">Get started with shipping that fits your needs</p>
        </div>

        {/* Individual Option */}
        <button 
          onClick={() => onSelectRole('individual')}
          className="w-full bg-white border-2 border-gray-100 p-6 rounded-[32px] flex items-center space-x-5 group hover:border-red-500 transition-all active:scale-95 shadow-sm"
        >
          <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
            <User size={28} />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-lg font-bold text-gray-900">Individual</h3>
            <p className="text-xs text-gray-500 mt-0.5">Personal shipping, gifts & couriers</p>
          </div>
          <ChevronRight size={20} className="text-gray-300 group-hover:text-red-500 transition-colors" />
        </button>

        {/* Business Option */}
        <button 
          onClick={() => onSelectRole('business')}
          className="w-full bg-[#1A202C] p-6 rounded-[32px] flex items-center space-x-5 group hover:bg-black transition-all active:scale-95 shadow-xl"
        >
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
            <Briefcase size={28} />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-lg font-bold text-white">Business</h3>
            <p className="text-xs text-gray-400 mt-0.5">Bulk shipping, e-commerce & API</p>
          </div>
          <div className="flex flex-col items-center">
             <ChevronRight size={20} className="text-gray-500 group-hover:text-white transition-colors" />
             <div className="mt-2 bg-red-500 px-2 py-0.5 rounded-full">
                <span className="text-[8px] font-black text-white uppercase tracking-tighter">Growth</span>
             </div>
          </div>
        </button>
      </div>

      {/* Bottom Features */}
      <div className="mt-auto pt-16 grid grid-cols-2 gap-8 w-full">
        <div className="flex flex-col items-center text-center space-y-2">
           <Package size={20} className="text-gray-300" />
           <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">18k+ Pin Codes</span>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
           <TrendingUp size={20} className="text-gray-300" />
           <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Live Tracking</span>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;
