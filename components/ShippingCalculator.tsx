
import React, { useState } from 'react';
import { Calculator, MapPin, Package, AlertCircle, ArrowRight } from 'lucide-react';

const ShippingCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    weight: '',
    type: 'Standard'
  });
  const [result, setResult] = useState<{ standard: number; express: number } | null>(null);

  const calculate = () => {
    // Simulated calculation
    const base = parseInt(formData.weight || '1') * 50 + 100;
    setResult({
      standard: base,
      express: base * 1.8
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-orange-50 text-[#FF6B00] rounded-xl flex items-center justify-center">
            <Calculator size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Shipping Rate Calculator</h2>
            <p className="text-gray-500">Get an instant estimate for your shipment</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center">
              <MapPin size={16} className="mr-2 text-gray-400" />
              Pickup Pincode
            </label>
            <input 
              type="text" 
              placeholder="e.g. 110001"
              value={formData.origin}
              onChange={(e) => setFormData({...formData, origin: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center">
              <MapPin size={16} className="mr-2 text-gray-400" />
              Delivery Pincode
            </label>
            <input 
              type="text" 
              placeholder="e.g. 560001"
              value={formData.destination}
              onChange={(e) => setFormData({...formData, destination: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center">
              <Package size={16} className="mr-2 text-gray-400" />
              Weight (in KG)
            </label>
            <input 
              type="number" 
              placeholder="e.g. 2.5"
              value={formData.weight}
              onChange={(e) => setFormData({...formData, weight: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Shipment Type</label>
            <select 
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none"
            >
              <option>Document</option>
              <option>Standard Package</option>
              <option>Fragile/Sensitive</option>
              <option>Oversized</option>
            </select>
          </div>
        </div>

        <button 
          onClick={calculate}
          className="w-full mt-8 py-4 bg-[#002B49] text-white rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg"
        >
          Calculate Estimate
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 -mr-16 -mt-16 rounded-full group-hover:bg-blue-50 transition-colors"></div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Delhivery Lite</h3>
            <p className="text-sm text-gray-500 mb-6">Standard ground delivery (3-5 days)</p>
            <div className="flex items-baseline space-x-1 mb-6">
              <span className="text-3xl font-bold">₹{result.standard}</span>
              <span className="text-xs font-medium text-gray-400 uppercase">+ GST</span>
            </div>
            <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center justify-center">
              Book Now <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="bg-[#002B49] p-6 rounded-2xl border border-transparent shadow-xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full"></div>
            <div className="inline-block px-2 py-1 bg-[#FF6B00] rounded text-[10px] font-bold uppercase mb-4 tracking-wider">Most Popular</div>
            <h3 className="text-lg font-bold mb-2">Delhivery Express</h3>
            <p className="text-white/60 text-sm mb-6">Next-day air delivery (1-2 days)</p>
            <div className="flex items-baseline space-x-1 mb-6">
              <span className="text-3xl font-bold">₹{result.express}</span>
              <span className="text-xs font-medium text-white/40 uppercase">+ GST</span>
            </div>
            <button className="w-full py-2 bg-[#FF6B00] text-white rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center">
              Book Now <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      )}

      <div className="bg-orange-50 p-4 rounded-xl flex items-start space-x-3 border border-orange-100">
        <AlertCircle className="text-[#FF6B00] flex-shrink-0" size={20} />
        <p className="text-xs text-orange-800 leading-relaxed">
          <strong>Note:</strong> Estimates are based on the inputs provided. Final weight and dimensions will be verified at our facility. Volumetric weight might apply for larger items.
        </p>
      </div>
    </div>
  );
};

export default ShippingCalculator;
