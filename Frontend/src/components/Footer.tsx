import React from 'react';
import { Instagram, Linkedin, Youtube, Mail, Phone, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">आ</span>
              </div>
              <span className="text-2xl font-bold">Aarohi</span>
            </div>
            <p className="text-purple-100 mb-6 max-w-md">
              Empowering women through education, health awareness, legal support, and community building. Together we rise, together we thrive.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-purple-100 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-purple-100 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-purple-100 hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-300" />
                <span className="text-purple-100">contact@aarohi.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-300" />
                <span className="text-purple-100">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-100 flex items-center justify-center space-x-1">
            <span>{t('footer.made')}</span>
            <Heart className="w-4 h-4 text-pink-400" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;