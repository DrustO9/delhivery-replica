
import React, { useState } from 'react';
import { ChevronLeft, Share2, MapPin, Clock, Package, CheckCircle2 } from 'lucide-react';

interface TrackingViewProps {
  initialId: string;
}

const TrackingView: React.FC<TrackingViewProps> = ({ initialId }) => {
  const [trackingId, setTrackingId] = useState(initialId || '');
  const [isLoaded, setIsLoaded] = useState(!!initialId);

  const mockTimeline = [
    { status: 'Out for Delivery', location: 'HSR Layout Hub, Bangalore', time: 'Today, 09:15 AM', completed: false, active: true },
    { status: 'Reached Facility', location: 'Nelamangala Hub, Bangalore', time: 'Yesterday, 11:45 PM', completed: true },
    { status: 'Dispatched', location: 'Delhi Hub', time: '22 Feb, 06:20 PM', completed: true },
    { status: 'Booked', location: 'Delhi', time: '22 Feb, 02:00 PM', completed: true },
  ];

  return (
    <div className="animate-in slide-in-from-bottom-6 duration-300">
      <div className="bg-white px-4 pt-6 pb-4 flex items-center space-x-4 border-b border-gray-50">
        <button onClick={() => window.location.reload()} className="p-1"><ChevronLeft size={24} /></button>
        <h2 className="text-lg font-bold">Track Shipment</h2>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-4 py-3">
             <input 
              type="text" 
              placeholder="Enter AWB or Order ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none font-bold text-sm"
            />
            <button 
              onClick={() => setIsLoaded(true)}
              className="bg-black text-white px-4 py-1.5 rounded-lg text-xs font-bold"
            >
              Track
            </button>
          </div>
        </div>

        {isLoaded && (
          <div className="space-y-4 pb-20">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Expected Delivery</span>
                  <h3 className="text-xl font-bold mt-0.5">Today by 9:00 PM</h3>
                </div>
                <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                  In Transit
                </div>
              </div>

              <div className="space-y-6 relative">
                <div className="absolute top-2 left-[11px] bottom-2 w-0.5 bg-gray-100"></div>
                {mockTimeline.map((step, idx) => (
                  <div key={idx} className="relative flex items-start pl-8">
                    <div className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                      step.active ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]' : step.completed ? 'bg-green-500' : 'bg-gray-200'
                    }`}>
                      {step.active ? <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div> : step.completed ? <CheckCircle2 size={12} className="text-white" /> : <div className="w-2 h-2 rounded-full bg-gray-400"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className={`font-bold text-sm ${step.active ? 'text-gray-900' : 'text-gray-600'}`}>{step.status}</h5>
                        <span className="text-[10px] font-bold text-gray-400">{step.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{step.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black text-white rounded-3xl p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-xl">
                  <Share2 size={20} />
                </div>
                <span className="text-sm font-bold">Share tracking details</span>
              </div>
              <ChevronLeft size={20} className="rotate-180 opacity-50" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackingView;
