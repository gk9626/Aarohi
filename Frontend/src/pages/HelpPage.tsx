import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, AlertTriangle, Heart, Shield, Users, Loader2 } from 'lucide-react';
import { apiService, EmergencyData } from '../services/api';

const HelpPage: React.FC = () => {
  const [emergencyData, setEmergencyData] = useState<EmergencyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmergencyData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiService.getEmergencyData();
        setEmergencyData(response.data);
      } catch (err) {
        setError('Failed to load emergency contacts. Please try again later.');
        console.error('Error fetching emergency data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmergencyData();
  }, []);

  const getCategoryIcon = (category: string) => {
    const icons = {
      general: <Phone className="w-5 h-5" />,
      domestic: <Shield className="w-5 h-5" />,
      police: <Shield className="w-5 h-5" />,
      medical: <Heart className="w-5 h-5" />,
      mental: <Users className="w-5 h-5" />,
      legal: <Shield className="w-5 h-5" />
    };
    return icons[category as keyof typeof icons] || <Phone className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      general: 'from-blue-500 to-blue-600',
      domestic: 'from-red-500 to-red-600',
      police: 'from-indigo-500 to-indigo-600',
      medical: 'from-green-500 to-green-600',
      mental: 'from-purple-500 to-purple-600',
      legal: 'from-orange-500 to-orange-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const handleCall = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  if (loading) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Emergency Help & Support
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick access to emergency contacts and support resources when you need them most.
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="flex items-center space-x-2">
              <Loader2 className="w-6 h-6 animate-spin text-purple-600" />
              <span className="text-lg text-gray-600">Loading emergency contacts...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Emergency Help & Support
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick access to emergency contacts and support resources when you need them most.
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <p className="text-lg text-red-600 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Emergency Help & Support
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick access to emergency contacts and support resources when you need them most.
          </p>
        </div>

        {/* Emergency Alert Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-center text-white">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              If you're in immediate danger, don't hesitate to call emergency services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleCall('100')}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Police (100)</span>
              </button>
              <button 
                onClick={() => handleCall('102')}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Ambulance (102)</span>
              </button>
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyData?.contacts.map((contact) => (
              <div key={contact.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${getCategoryColor(contact.category)}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(contact.category)} rounded-lg flex items-center justify-center text-white`}>
                      {getCategoryIcon(contact.category)}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">
                        {contact.available ? 'Available' : 'Limited'}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{contact.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Number:</span>
                      <span className="font-medium text-gray-900">{contact.number}</span>
                    </div>
                    <div className="text-sm text-gray-600 capitalize">{contact.category}</div>
                  </div>
                  
                  <button 
                    onClick={() => handleCall(contact.number)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-shadow font-medium flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Safety Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Alert</h3>
              <p className="text-gray-600 text-sm">
                Always be aware of your surroundings and trust your instincts if something feels wrong.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Keep Contacts Ready</h3>
              <p className="text-gray-600 text-sm">
                Save emergency numbers in your phone and keep them easily accessible.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Share Your Location</h3>
              <p className="text-gray-600 text-sm">
                Share your location with trusted friends or family when traveling alone.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              You're Not Alone
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Remember, there are people and resources available to help you. Don't hesitate to reach out when you need support.
            </p>
            <button 
              onClick={() => window.location.href = '/stories'}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Read Inspirational Stories
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpPage; 