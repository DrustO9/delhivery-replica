
import React from 'react';
import { Play, PlayCircle, Clock } from 'lucide-react';

const StoriesView: React.FC = () => {
  const stories = [
    { id: 1, label: 'Fastest Delivery', duration: '2:15', img: 'https://images.unsplash.com/photo-1586864387917-f742f567b7d7?w=400&h=600&fit=crop' },
    { id: 2, label: 'Safety Protocols', duration: '1:45', img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&h=600&fit=crop' },
    { id: 3, label: 'Celebrating India', duration: '3:20', img: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=600&fit=crop' },
    { id: 4, label: 'Meet the Team', duration: '2:50', img: 'https://images.unsplash.com/photo-1524492459462-2290ce4bb099?w=400&h=600&fit=crop' },
    { id: 5, label: 'Tech Stack', duration: '4:10', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop' },
    { id: 6, label: 'Sustainability', duration: '1:30', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=600&fit=crop' }
  ];

  return (
    <div className="p-4 pt-8 bg-white min-h-screen animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-8 px-2">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Delhivery Stories</h1>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Exclusive Content</p>
        </div>
        <PlayCircle size={32} className="text-red-500" />
      </div>

      <div className="grid grid-cols-2 gap-4 pb-20">
        {stories.map(s => (
          <div key={s.id} className="relative aspect-[9/16] rounded-[28px] overflow-hidden group cursor-pointer active:scale-95 transition-all shadow-lg">
            <img src={s.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={s.label} />
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
            
            {/* Label and Duration */}
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-white font-black text-xs leading-tight block mb-1">{s.label}</span>
              <div className="flex items-center text-[10px] text-white/60">
                <Clock size={10} className="mr-1" />
                <span>{s.duration}</span>
              </div>
            </div>

            {/* Play Button Icon */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20">
              <Play size={14} className="text-white fill-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesView;
