import React from 'react';
import { ArrowRight, Heart, Shield, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">{t('hero.title')}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/help"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Shield className="w-5 h-5" />
                  <span>Get Help Now</span>
                </Link>
                <Link
                  to="/stories"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Read Stories</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg"
                  alt="Empowered women"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full animate-float"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Aarohi Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t('what.is.aarohi')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
              {t('aarohi.description')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-sm text-gray-600">24/7 emotional and practical support</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-sm text-gray-600">Learning opportunities and scholarships</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-sm text-gray-600">Connect with like-minded women</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Empowerment in Every Step
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive platform designed to support, educate, and empower women at every stage of their journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/health" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('health.title')}</h3>
                <p className="text-gray-600 text-sm">Comprehensive health resources, tips, and support for women's wellness</p>
              </div>
            </Link>
            
            <Link to="/education" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('education.title')}</h3>
                <p className="text-gray-600 text-sm">Scholarships, skill development, and learning opportunities</p>
              </div>
            </Link>
            
            <Link to="/help" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
                <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('help.title')}</h3>
                <p className="text-gray-600 text-sm">Emergency helplines and immediate assistance when you need it most</p>
              </div>
            </Link>
            
            <Link to="/legal" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('legal.title')}</h3>
                <p className="text-gray-600 text-sm">Legal guidance, rights awareness, and professional legal support</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join the Aarohi Community Today
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Be part of a movement that's creating positive change for women everywhere.
          </p>
          <Link
            to="/stories"
            className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Share Your Story</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;