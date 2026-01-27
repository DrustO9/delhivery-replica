
import React, { useState } from 'react';
import { 
  Navigation, 
  Search, 
  MessageSquare, 
  ChevronDown, 
  ArrowRight,
  MapPin,
  X,
  Ticket,
  Percent
} from 'lucide-react';

interface DashboardProps {
  onTrack: () => void;
  onBookCourier?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onTrack, onBookCourier }) => {
  const [showContinueBooking, setShowContinueBooking] = useState(true);

  return (
    <div className="flex flex-col animate-in fade-in duration-500 relative bg-[#F7F8FA]">
      {/* Cinematic Hero Image Section */}
      <div className="relative w-full h-[260px] bg-black overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          alt="Delhivery Logistics Hero" 
          className="w-full h-full object-cover opacity-80"
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-[1]"></div>
        
        {/* Brand Tagline on Image */}
        <div className="absolute bottom-12 left-6 z-[5] animate-in slide-in-from-left-4 duration-700">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_#EF4444]"></div>
            <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.3em]">Largest Network</span>
          </div>
          <h2 className="text-2xl font-black text-white leading-tight drop-shadow-2xl">
            Reliability in <br/>Every Package.
          </h2>
          <p className="text-[10px] text-white/60 mt-2 font-medium">Powering 18,000+ Pin Codes across India</p>
        </div>
      </div>

      {/* Main Content Area - Rounded Overlap */}
      <div className="flex flex-col space-y-5 px-4 pt-6 pb-32 relative z-[2] -mt-8 bg-[#F7F8FA] rounded-t-[32px] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]">
        
        {/* Header with Location and Search */}
        <header className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-red-500">
              <Navigation size={22} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="text-sm font-bold text-gray-900">Pickup From</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
              <span className="text-xs text-gray-500 truncate max-w-[180px]">Ward number 27, Br nagar, Puri gate</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Search size={22} className="text-gray-700 hover:text-red-500 transition-colors cursor-pointer" />
            <button className="flex items-center space-x-1 border border-gray-200 rounded-lg px-3 py-1.5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <MessageSquare size={16} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Help</span>
            </button>
          </div>
        </header>

        {/* Attractive Compact Coupon Banner */}
        <div className="relative w-full h-32 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-[28px] overflow-hidden shadow-[0_12px_35px_-8px_rgba(239,68,68,0.4)] flex items-center p-6 text-white group cursor-pointer active:scale-[0.98] transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12 blur-lg"></div>
          <div className="absolute right-12 top-4 opacity-10">
             <Percent size={80} strokeWidth={3} />
          </div>

          <div className="relative z-10 flex w-full items-center justify-between">
            <div className="max-w-[65%]">
              <div className="flex items-center space-x-2 mb-1.5">
                 <div className="bg-yellow-400 p-1 rounded-md shadow-sm">
                   <Ticket size={12} className="text-red-700" fill="currentColor" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-yellow-300">New User Special</span>
              </div>
              <h2 className="text-xl font-black leading-tight tracking-tight drop-shadow-md">
                Ship Heavy, Save Big
              </h2>
              <div className="mt-2 inline-flex items-center bg-white/15 backdrop-blur-md border border-white/20 px-2 py-1 rounded-lg">
                 <span className="text-[9px] font-bold text-white/90 mr-2">CODE:</span>
                 <span className="text-xs font-black tracking-wider">HEAVY25</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
               <div className="bg-white rounded-2xl w-14 h-14 shadow-xl flex flex-col items-center justify-center transform group-hover:rotate-6 transition-transform mb-2">
                  <span className="text-red-600 text-lg font-black leading-none">25%</span>
                  <span className="text-red-600 text-[8px] font-black uppercase">OFF</span>
               </div>
               <div className="bg-black/20 hover:bg-black/30 p-2 rounded-full transition-colors">
                  <ArrowRight size={18} />
               </div>
            </div>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center space-x-1.5 py-1">
          <div className="w-5 h-1.5 rounded-full bg-red-500 shadow-sm shadow-red-100"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
        </div>

        {/* Book a Courier Card */}
        <div 
          onClick={onBookCourier}
          className="relative bg-white rounded-[24px] h-32 shadow-sm border border-gray-100 flex items-center justify-between group active:scale-[0.98] transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/parcel.png" 
              className="absolute right-0 bottom-0 w-32 h-32 object-contain grayscale blur-[1px]" 
              alt="decoration" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>

          <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center p-4">
             <img 
               src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=60&w=800" 
               className="w-full h-full object-cover scale-150 grayscale"
               alt="background pattern"
             />
          </div>

          <div className="relative z-10 flex items-center space-x-5 px-6">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-50 rounded-2xl transform rotate-2"></div>
              <div className="absolute inset-0 bg-white rounded-2xl border border-gray-100 flex items-center justify-center shadow-inner">
                 <div className="w-10 h-10 bg-gray-800 rounded relative overflow-hidden shadow-xl">
                   <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                   <div className="absolute bottom-1 right-1 w-2 h-2 bg-white/20"></div>
                 </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">Book a Courier</h3>
              <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase italic tracking-wider">Send Anything, Anywhere</p>
            </div>
          </div>
          <ArrowRight size={24} className="text-gray-300 mr-6 relative z-10 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
        </div>

        {/* Tracking Tool */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="text-red-500 bg-red-50 p-2.5 rounded-2xl">
              <MapPin size={24} fill="currentColor" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Track Your Orders</h3>
              <p className="text-xs text-gray-500 font-medium">Real-time status updates</p>
            </div>
          </div>
          <button 
            onClick={onTrack}
            className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center space-x-2 active:scale-95 hover:bg-gray-900 transition-all"
          >
            <span>Track</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Continue your booking Floating Bar */}
        {showContinueBooking && (
          <div className="fixed bottom-24 left-4 right-4 z-40 animate-in slide-in-from-bottom-6 duration-500">
            <div className="bg-[#1A202C] rounded-3xl p-4 shadow-2xl flex items-center justify-between text-white border border-white/5 backdrop-blur-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1.5">
                   <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></div>
                   <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Incomplete Booking</h4>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black truncate max-w-[90px]">Ayush Kumar...</span>
                    <span className="text-[10px] text-gray-500">Kharagpur</span>
                  </div>
                  <ArrowRight size={14} className="text-gray-600" />
                  <div className="flex flex-col text-right">
                    <span className="text-[11px] font-black truncate max-w-[90px]">Ayush Kumar...</span>
                    <span className="text-[10px] text-gray-500">Lucknow</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 ml-4">
                <button className="bg-red-600 text-white px-6 py-2.5 rounded-2xl font-black text-xs shadow-lg shadow-red-900/40 active:scale-95 transition-transform hover:bg-red-500">
                  Proceed
                </button>
                <button 
                  onClick={() => setShowContinueBooking(false)}
                  className="p-1.5 text-gray-500 hover:text-white transition-colors bg-white/5 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
