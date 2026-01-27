
import React from 'react';
import { 
  Navigation, 
  Search, 
  ChevronDown, 
  ArrowRight,
  TrendingUp,
  Briefcase,
  Layers,
  Sparkles,
  ShieldCheck,
  Package,
  ArrowUpRight
} from 'lucide-react';

interface BusinessDashboardProps {
  onTrack: () => void;
}

const BusinessDashboard: React.FC<BusinessDashboardProps> = ({ onTrack }) => {
  return (
    <div className="flex flex-col animate-in fade-in duration-500 relative bg-[#F7F8FA]">
      {/* Corporate Header Section */}
      <div className="bg-[#0F172A] px-6 pt-10 pb-16 rounded-b-[48px] relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/5 rounded-full -ml-24 -mb-24 blur-3xl"></div>
        
        <div className="relative z-10">
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                <Briefcase size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black text-blue-400 uppercase tracking-widest">Business Hub</span>
                <span className="text-xs text-white/60 font-medium">Cyber City, Gurugram</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
               <div className="p-2 bg-white/10 rounded-xl text-white">
                  <Search size={20} />
               </div>
               <div className="p-2 bg-blue-500 rounded-xl text-white shadow-lg shadow-blue-500/30">
                  <ArrowUpRight size={20} />
               </div>
            </div>
          </header>

          <h2 className="text-3xl font-black text-white leading-tight tracking-tight">
            Logistics for <br/> 
            <span className="text-blue-400 italic font-black">Modern Enterprises</span>
          </h2>
          <p className="text-sm text-white/40 mt-3 font-medium max-w-[240px]">High-speed fulfillment & enterprise-grade API integration.</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-5 -mt-8 space-y-6 pb-32">
        
        {/* Business Plus Subscription Banner - AS REQUESTED */}
        <div className="relative w-full p-8 bg-white rounded-[40px] shadow-2xl shadow-gray-200 border border-gray-100 overflow-hidden group active:scale-[0.98] transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-[#1A202C] p-2 rounded-xl text-yellow-400">
                <Sparkles size={16} fill="currentColor" />
              </div>
              <span className="text-[10px] font-black text-[#1A202C] uppercase tracking-[0.3em]">Business Plus Exclusive</span>
            </div>
            
            <h3 className="text-3xl font-black text-[#1A202C] leading-none mb-1">
              Save <span className="text-blue-600">25%</span>
            </h3>
            <p className="text-lg font-bold text-gray-400">up to 100Kg of goods</p>
            
            <div className="mt-6 flex flex-col space-y-3">
               <div className="flex items-center space-x-3 text-xs font-bold text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span>Priority Fleet Access</span>
               </div>
               <div className="flex items-center space-x-3 text-xs font-bold text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span>Dedicated Key Account Manager</span>
               </div>
            </div>

            <button className="mt-8 w-full bg-[#1A202C] hover:bg-black text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-2 shadow-xl shadow-gray-200 transition-all">
               <span>Activate Membership</span>
               <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Quick Insights */}
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between h-40">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                 <Layers size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-gray-900">Bulk Upload</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Excel/CSV Support</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between h-40">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                 <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-gray-900">Risk Cover</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Enhanced Transit</p>
              </div>
           </div>
        </div>

        {/* Tracking Action */}
        <div className="bg-[#1A202C] rounded-[40px] p-8 flex items-center justify-between shadow-2xl">
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
              <Package size={28} />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Fleet Monitor</h3>
              <p className="text-xs text-white/40 font-medium mt-1">Live visibility of all assets</p>
            </div>
          </div>
          <button 
            onClick={onTrack}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A202C] active:scale-90 transition-all"
          >
            <ArrowRight size={24} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default BusinessDashboard;
