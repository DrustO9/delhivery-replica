
import React, { useState, useEffect } from 'react';
import { 
  Home as HomeIcon, 
  User, 
  ClipboardList,
  Shield,
  PlayCircle
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import TrackingView from './components/TrackingView';
import OrdersView from './components/OrdersView';
import AIAssistant from './components/AIAssistant';
import DcoinsPopup from './components/DcoinsPopup';
import FragileView from './components/FragileView';
import StoriesView from './components/StoriesView';
import LiveTrackingView from './components/LiveTrackingView';
import LoginSelection from './components/LoginSelection';
import BusinessDashboard from './components/BusinessDashboard';
import SendPackageView from './components/SendPackageView';

type View = 'home' | 'fragile' | 'orders' | 'stories' | 'profile' | 'tracking' | 'live-tracking' | 'send-package';
type UserRole = 'none' | 'individual' | 'business';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>('none');
  const [currentView, setCurrentView] = useState<View>('home');
  const [trackingId, setTrackingId] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [showRewards, setShowRewards] = useState(false);

  useEffect(() => {
    if (userRole === 'individual') {
      const timer = setTimeout(() => {
        setShowRewards(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [userRole]);

  if (userRole === 'none') {
    return <LoginSelection onSelectRole={(role) => setUserRole(role)} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return userRole === 'business' 
          ? <BusinessDashboard onTrack={() => setCurrentView('tracking')} />
          : <Dashboard onTrack={() => setCurrentView('tracking')} onBookCourier={() => setCurrentView('send-package')} />;
      case 'fragile':
        return <FragileView />;
      case 'tracking':
        return <TrackingView initialId={trackingId} />;
      case 'orders':
        return <OrdersView onTrackOrder={(order) => { setSelectedOrder(order); setCurrentView('live-tracking'); }} />;
      case 'live-tracking':
        return <LiveTrackingView order={selectedOrder} onBack={() => setCurrentView('orders')} />;
      case 'send-package':
        return <SendPackageView onBack={() => setCurrentView('home')} />;
      case 'stories':
        return <StoriesView />;
      case 'profile':
        return (
          <div className="p-6 bg-white min-h-screen">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold">
                    {userRole === 'business' ? 'BC' : 'JD'}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{userRole === 'business' ? 'Business Center' : 'John Doe'}</h2>
                    <p className="text-gray-500 text-sm">{userRole === 'business' ? 'Corporate ID: DEL-9921' : '+91 9876543210'}</p>
                  </div>
               </div>
               <button onClick={() => setUserRole('none')} className="text-xs font-bold text-red-500 uppercase tracking-widest border border-red-100 px-3 py-1 rounded-lg">Switch</button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl font-medium">My Addresses</div>
              <div className="p-4 bg-gray-50 rounded-xl font-medium">Payment Methods</div>
              <div className="p-4 bg-gray-50 rounded-xl font-medium">Help & Support</div>
              <div className="p-4 bg-gray-50 rounded-xl text-red-500 font-bold">Logout</div>
            </div>
          </div>
        );
      default:
        return <Dashboard onTrack={() => setCurrentView('tracking')} onBookCourier={() => setCurrentView('send-package')} />;
    }
  };

  const showNav = !['live-tracking', 'send-package'].includes(currentView);

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden max-w-md mx-auto relative border-x border-gray-100 shadow-2xl">
      {/* View Content */}
      <main className="flex-1 overflow-y-auto pb-20 hide-scrollbar">
        {renderView()}
      </main>

      {/* Bottom Navigation */}
      {showNav && (
        <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 px-4 py-2 flex justify-between items-center z-40">
          <button 
            onClick={() => setCurrentView('home')}
            className={`flex flex-col items-center space-y-1 ${currentView === 'home' || currentView === 'tracking' ? 'text-red-500' : 'text-gray-400'}`}
          >
            <div className={`p-1.5 rounded-full ${currentView === 'home' ? 'bg-red-50' : ''}`}>
              <HomeIcon size={22} fill={currentView === 'home' ? 'currentColor' : 'none'} />
            </div>
            <span className="text-[10px] font-bold">Home</span>
          </button>

          <button 
            onClick={() => setCurrentView('fragile')}
            className={`flex flex-col items-center space-y-1 ${currentView === 'fragile' ? 'text-red-500' : 'text-gray-400'}`}
          >
            <div className={`p-1.5 rounded-full ${currentView === 'fragile' ? 'bg-red-50' : ''}`}>
              <Shield size={22} fill={currentView === 'fragile' ? 'currentColor' : 'none'} />
            </div>
            <span className="text-[10px] font-bold">Fragile</span>
          </button>

          <button 
            onClick={() => setCurrentView('orders')}
            className={`flex flex-col items-center space-y-1 ${currentView === 'orders' ? 'text-red-500' : 'text-gray-400'}`}
          >
            <div className={`p-1.5 rounded-full ${currentView === 'orders' ? 'bg-red-50' : ''}`}>
              <ClipboardList size={22} fill={currentView === 'orders' ? 'currentColor' : 'none'} />
            </div>
            <span className="text-[10px] font-bold">Orders</span>
          </button>

          <button 
            onClick={() => setCurrentView('stories')}
            className={`flex flex-col items-center space-y-1 ${currentView === 'stories' ? 'text-red-500' : 'text-gray-400'}`}
          >
            <div className={`p-1.5 rounded-full ${currentView === 'stories' ? 'bg-red-50' : ''}`}>
              <PlayCircle size={22} fill={currentView === 'stories' ? 'currentColor' : 'none'} />
            </div>
            <span className="text-[10px] font-bold">Stories</span>
          </button>

          <button 
            onClick={() => setCurrentView('profile')}
            className={`flex flex-col items-center space-y-1 ${currentView === 'profile' ? 'text-red-500' : 'text-gray-400'}`}
          >
            <div className={`p-1.5 rounded-full ${currentView === 'profile' ? 'bg-red-50' : ''}`}>
              <User size={22} fill={currentView === 'profile' ? 'currentColor' : 'none'} />
            </div>
            <span className="text-[10px] font-bold">Profile</span>
          </button>
        </nav>
      )}

      {/* AI Assistant */}
      <AIAssistant />

      {/* Rewards Popup */}
      {showRewards && <DcoinsPopup onClose={() => setShowRewards(false)} />}
    </div>
  );
};

export default App;
