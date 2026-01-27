
import React, { useState } from 'react';
import { Truck, MapPin, Phone, User, Calendar, CheckCircle2 } from 'lucide-react';

const PickupForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto py-12 text-center animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Pickup Scheduled!</h2>
        <p className="text-gray-500 mb-8">Your pickup for shipment #DLV-PKP-9021 has been successfully scheduled for tomorrow morning.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-3 bg-[#002B49] text-white rounded-xl font-bold hover:bg-blue-900 transition-all"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-col items-center flex-1 relative">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors ${
              step >= s ? 'bg-[#FF6B00] text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              {s}
            </div>
            <span className={`text-xs mt-2 font-bold uppercase tracking-wide ${step >= s ? 'text-[#FF6B00]' : 'text-gray-400'}`}>
              {s === 1 ? 'Details' : s === 2 ? 'Address' : 'Schedule'}
            </span>
            {s < 3 && <div className={`absolute top-5 left-1/2 w-full h-0.5 ${step > s ? 'bg-[#FF6B00]' : 'bg-gray-200'}`}></div>}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right-4">
            <h3 className="text-lg font-bold mb-4">Shipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">What are you sending?</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Clothing & Accessories</option>
                  <option>Electronics</option>
                  <option>Home & Kitchen</option>
                  <option>Documents</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Estimated Weight</label>
                <input type="text" placeholder="e.g. 500g or 2kg" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none" />
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl flex space-x-3">
              <Truck className="text-[#002B49]" size={20} />
              <p className="text-xs text-[#002B49] leading-relaxed">
                Free home pickup for all Express shipments. For standard delivery, a nominal fee of ₹20 might apply if total shipment weight is under 1kg.
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right-4">
            <h3 className="text-lg font-bold mb-4">Pickup Address</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center"><User size={14} className="mr-1"/> Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center"><Phone size={14} className="mr-1"/> Contact Number</label>
                  <input type="text" placeholder="+91 9XXXX XXXXX" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center"><MapPin size={14} className="mr-1"/> Street Address</label>
                <textarea rows={2} placeholder="Building, Street, Landmark" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"></textarea>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in slide-in-from-right-4">
            <h3 className="text-lg font-bold mb-4">Pickup Schedule</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border-2 border-[#FF6B00] bg-orange-50 rounded-xl text-center">
                <p className="font-bold text-[#FF6B00]">Tomorrow</p>
                <p className="text-xs text-[#FF6B00]">Feb 26, 2024</p>
              </button>
              <button className="p-4 border-2 border-gray-100 rounded-xl text-center hover:border-orange-200 transition-colors">
                <p className="font-bold text-gray-700">Tue, Feb 27</p>
                <p className="text-xs text-gray-400">Next Available</p>
              </button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center"><Calendar size={14} className="mr-1"/> Time Slot</label>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none">
                <option>Morning (10:00 AM - 01:00 PM)</option>
                <option>Afternoon (01:00 PM - 04:00 PM)</option>
                <option>Evening (04:00 PM - 07:00 PM)</option>
              </select>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button 
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 text-gray-500 font-bold hover:bg-gray-50 rounded-lg transition-colors"
            >
              Back
            </button>
          )}
          <div className="ml-auto">
            {step < 3 ? (
              <button 
                onClick={() => setStep(step + 1)}
                className="px-10 py-3 bg-[#FF6B00] text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md"
              >
                Continue
              </button>
            ) : (
              <button 
                onClick={() => setIsSubmitted(true)}
                className="px-10 py-3 bg-[#002B49] text-white rounded-xl font-bold hover:bg-blue-900 transition-all shadow-md"
              >
                Schedule Pickup
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupForm;
