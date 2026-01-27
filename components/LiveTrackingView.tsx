
import React from 'react';
import { ChevronLeft, MapPin, Truck, CheckCircle2, Clock, Info, Package, Camera, ExternalLink } from 'lucide-react';

interface LiveTrackingViewProps {
  order: any;
  onBack: () => void;
}

const LiveTrackingView: React.FC<LiveTrackingViewProps> = ({ order, onBack }) => {
  const transitPoints = [
    { 
      status: 'Out for delivery', 
      location: 'HSR Layout Hub, Bangalore', 
      time: 'Today, 09:15 AM', 
      details: 'Our courier executive is on the way to your location with the fragile package.',
      completed: false, 
      active: true,
      icon: <Truck size={14} />
    },
    { 
      status: 'Package reached the facility', 
      location: 'Nelamangala Hub, Bangalore', 
      time: 'Feb 25, 11:45 PM', 
      details: 'Verification successful. Photo clicked at intake.',
      completed: true,
      hasPhoto: true,
      photoUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400',
      icon: <Camera size={14} />
    },
    { 
      status: 'Dispatched from Delhi hub', 
      location: 'Delhi Regional Hub', 
      time: 'Feb 24, 06:20 PM', 
      details: 'Shipment has been dispatched via dedicated air transport.',
      completed: true,
      icon: <CheckCircle2 size={14} />
    },
    { 
      status: 'Shipment Booked', 
      location: 'Kharagpur, West Bengal', 
      time: 'Feb 23, 04:30 PM', 
      details: 'Specialized fragile handling requested and confirmed.',
      completed: true,
      icon: <CheckCircle2 size={14} />
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#F7F8FA] animate-in slide-in-from-right-4 duration-300">
      {/* Cinematic Header */}
      <header className="bg-white px-6 pt-10 pb-6 flex items-center justify-between border-b border-gray-50 z-20 shadow-sm">
        <div className="flex items-center space-x-4">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <ChevronLeft size={24} className="text-[#1A202C]" />
          </button>
          <div>
            <h2 className="text-base font-black text-[#1A202C] tracking-tight">#{order?.id || 'AWB90213847'}</h2>
            <div className="flex items-center space-x-1.5 mt-0.5">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Live Status</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
           <div className="bg-red-50 text-red-500 p-2 rounded-xl">
              <Info size={18} />
           </div>
        </div>
      </header>

      {/* Blinkit-style Map Interface */}
      <div className="relative h-72 bg-gray-100 overflow-hidden flex-shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover opacity-60 grayscale brightness-90 contrast-125"
          alt="map"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20"></div>

        {/* SVG Visualization */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 288">
          <path 
            d="M 60 220 Q 200 60 340 120" 
            fill="none" 
            stroke="#1A202C" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeDasharray="6 8" 
            className="opacity-10"
          />
          <path 
            d="M 60 220 Q 200 60 340 120" 
            className="animate-path-flow"
            fill="none" 
            stroke="#EF4444" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeDasharray="8 12"
          />
          
          <circle cx="60" cy="220" r="10" fill="#3B82F6" className="shadow-2xl" />
          <circle cx="340" cy="120" r="10" fill="#EF4444" className="shadow-2xl" />

          {/* Current Marker */}
          <g className="animate-truck-move" style={{ offsetPath: "path('M 60 220 Q 200 60 340 120')", offsetDistance: '82%' }}>
            <circle r="14" fill="white" className="shadow-xl" />
            <circle r="6" fill="#1A202C" />
            <circle r="14" fill="#1A202C" className="animate-ping opacity-20" />
          </g>
        </svg>

        <div className="absolute top-4 left-4 right-4 flex justify-between">
           <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/20 flex items-center space-x-2">
              <span className="text-[9px] font-black text-blue-600 uppercase">Pickup</span>
              <span className="text-[10px] font-bold text-gray-700">Kharagpur</span>
           </div>
           <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/20 flex items-center space-x-2">
              <span className="text-[9px] font-black text-red-600 uppercase">Drop</span>
              <span className="text-[10px] font-bold text-gray-700">Hyderabad</span>
           </div>
        </div>

        <style>{`
          .animate-path-flow { stroke-dashoffset: 100; animation: dash 6s linear infinite; }
          @keyframes dash { to { stroke-dashoffset: 0; } }
          .animate-truck-move { animation: truckMove 40s linear infinite; }
          @keyframes truckMove { from { offset-distance: 0%; } to { offset-distance: 100%; } }
        `}</style>
      </div>

      {/* Amazon-style Status Panel */}
      <div className="flex-1 overflow-y-auto bg-white rounded-t-[48px] -mt-10 z-10 shadow-[0_-25px_50px_-15px_rgba(0,0,0,0.15)] p-8">
        <div className="w-16 h-1.5 bg-gray-100 rounded-full mx-auto mb-10"></div>

        <div className="flex items-center justify-between mb-10">
           <div>
              <h3 className="text-2xl font-black text-[#1A202C]">Arriving Today</h3>
              <p className="text-sm font-bold text-green-600 mt-1 flex items-center">
                 <CheckCircle2 size={16} className="mr-1.5" />
                 On track for 9:00 PM delivery
              </p>
           </div>
           <div className="bg-gray-50 w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-100">
              <Clock size={24} className="text-gray-400" />
           </div>
        </div>

        {/* Detailed Timeline with Photos */}
        <div className="space-y-0 relative">
          <div className="absolute left-[15px] top-6 bottom-6 w-0.5 bg-gray-100"></div>
          
          {transitPoints.map((point, index) => (
            <div key={index} className="relative flex items-start pl-12 pb-10 last:pb-0">
              {/* Marker */}
              <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm transition-colors ${
                point.active ? 'bg-red-500' : 'bg-green-500'
              }`}>
                <div className="text-white">
                  {point.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-0.5">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className={`text-sm font-black leading-tight ${point.active ? 'text-[#1A202C]' : 'text-gray-700'}`}>
                      {point.status}
                    </h4>
                    <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">{point.location}</p>
                  </div>
                  <span className="text-[10px] font-black text-gray-300 ml-4">{point.time}</span>
                </div>
                
                <p className={`text-xs mt-3 leading-relaxed ${point.active ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                  {point.details}
                </p>

                {point.hasPhoto && (
                  <div className="mt-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="relative w-full aspect-video rounded-[32px] overflow-hidden border-4 border-gray-50 shadow-md">
                      <img src={point.photoUrl} className="w-full h-full object-cover" alt="transit proof" />
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute bottom-4 left-4 right-4 bg-white/30 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex items-center justify-between">
                         <div className="flex items-center space-x-2">
                            <Camera size={14} className="text-white" />
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">Hub Snapshot</span>
                         </div>
                         <ExternalLink size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Actions */}
        <div className="mt-12 space-y-4 pb-10">
           <button className="w-full bg-[#1A202C] hover:bg-black text-white py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl active:scale-[0.98] transition-all">
              Shipment Full History
           </button>
           <button className="w-full bg-white border-2 border-gray-100 text-gray-600 py-4 rounded-3xl font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-all">
              Contact Support Agent
           </button>
        </div>
      </div>
    </div>
  );
};

export default LiveTrackingView;
