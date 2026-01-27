
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MessageSquare, 
  Package, 
  RefreshCcw, 
  MapPin
} from 'lucide-react';

interface OrdersViewProps {
  onTrackOrder?: (order: any) => void;
}

const OrdersView: React.FC<OrdersViewProps> = ({ onTrackOrder }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Local', 'Courier', 'Parcel'];

  const sampleOrder = {
    id: 'AWB90213847',
    sender: 'Ayush Kumar Maurya',
    senderLoc: 'Kharagpur - 721303',
    receiver: 'Vishal Peripherals',
    receiverLoc: 'Hyderabad - 500003',
    status: 'Delivered',
    type: 'Courier'
  };

  return (
    <div className="flex flex-col min-h-screen bg-white animate-in fade-in duration-300">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Orders</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Search size={24} className="text-gray-600" />
          <button className="flex items-center space-x-1 border border-gray-200 rounded-lg px-3 py-1.5 bg-white shadow-sm">
            <MessageSquare size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Help</span>
          </button>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="flex space-x-3 px-4 py-4 overflow-x-auto hide-scrollbar">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${
              activeFilter === filter
                ? 'bg-[#1A202C] text-white border-transparent'
                : 'bg-white text-gray-600 border-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Order Cards List */}
      <div className="flex-1 px-4 space-y-4 pb-10">
        <div className="bg-white rounded-[24px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden">
          {/* Card Top */}
          <div className="p-5 flex items-center justify-between border-b border-gray-50">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative flex items-center justify-center">
                 <div className="w-10 h-10 bg-gray-800 rounded relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                 </div>
              </div>
              <span className="text-green-600 font-bold text-sm">{sampleOrder.status}</span>
            </div>
            <div className="flex items-center space-x-1 bg-gray-50 px-3 py-1.5 rounded-lg">
              <Package size={14} className="text-gray-400" />
              <span className="text-xs font-bold text-gray-600">{sampleOrder.type}</span>
            </div>
          </div>

          {/* Card Middle: Timeline */}
          <div className="p-5 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-gray-900">{sampleOrder.sender}</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">(Pickup)</span>
                </div>
                <p className="text-xs text-gray-500">{sampleOrder.senderLoc}</p>
              </div>
            </div>

            {/* Connecting line */}
            <div className="ml-[3px] border-l border-dashed border-gray-200 h-6"></div>

            <div className="flex items-start space-x-3">
              <MapPin size={16} className="text-red-500 mt-0.5" fill="currentColor" />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-gray-900">{sampleOrder.receiver}</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">(Delivery)</span>
                </div>
                <p className="text-xs text-gray-500">{sampleOrder.receiverLoc}</p>
              </div>
            </div>
          </div>

          {/* Card Bottom: Actions */}
          <div className="p-4 grid grid-cols-2 gap-3 bg-gray-50/30">
            <button className="flex items-center justify-center space-x-2 bg-white border border-gray-100 py-3 rounded-xl font-bold text-xs shadow-sm hover:bg-gray-50 transition-colors">
              <RefreshCcw size={14} />
              <span>Rebook</span>
            </button>
            <button 
              onClick={() => onTrackOrder?.(sampleOrder)}
              className="flex items-center justify-center space-x-2 bg-white border border-gray-100 py-3 rounded-xl font-bold text-xs shadow-sm hover:bg-gray-50 transition-colors"
            >
              <MapPin size={14} />
              <span>Track Order</span>
            </button>
          </div>
        </div>

        <div className="pt-10 flex flex-col items-center justify-center opacity-20">
          <Package size={64} className="text-gray-300" />
          <p className="text-sm font-medium mt-4">More orders will show here</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersView;
