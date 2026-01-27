
import React from 'react';
import { X, Coins, Sparkles, TrendingUp } from 'lucide-react';

interface DcoinsPopupProps {
  onClose: () => void;
}

const DcoinsPopup: React.FC<DcoinsPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-sm bg-white rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Top Decorative Section */}
        <div className="bg-red-600 h-40 relative flex items-center justify-center overflow-hidden">
          {/* Abstract background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Coins size={40} className="text-yellow-500" fill="currentColor" />
             </div>
             <div className="mt-3 flex items-center space-x-1">
                <Sparkles size={16} className="text-yellow-300 fill-yellow-300" />
                <span className="text-white font-black text-xl tracking-tighter">DCOINS</span>
                <Sparkles size={16} className="text-yellow-300 fill-yellow-300" />
             </div>
          </div>

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 leading-tight">
            Welcome to <span className="text-red-600">Dcoins</span> Rewards!
          </h2>
          <p className="mt-3 text-gray-500 text-sm font-medium leading-relaxed">
            You've just earned your first <span className="font-bold text-gray-800">50 Dcoins</span>! 
            Earn coins on every shipment and redeem them for exclusive vouchers and shipping discounts.
          </p>

          <div className="mt-8 space-y-3">
             <button 
              onClick={onClose}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-red-200 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <span>Start Earning</span>
              <TrendingUp size={18} />
            </button>
            <button 
              onClick={onClose}
              className="w-full bg-gray-50 hover:bg-gray-100 text-gray-500 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-colors"
            >
              Skip for now
            </button>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gray-50 px-8 py-3 border-t border-gray-100 flex items-center justify-center">
           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
             100 Dcoins = ₹10 Discount
           </span>
        </div>
      </div>
    </div>
  );
};

export default DcoinsPopup;
