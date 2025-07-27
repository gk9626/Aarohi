import React, { useState } from 'react';
import { Heart, Calendar, Brain, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const HealthPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const pcodSlides = [
    {
      title: "What is PCOD?",
      content: "Polycystic Ovarian Disease is a hormonal disorder common among women of reproductive age.",
      tips: ["Maintain a healthy weight", "Exercise regularly", "Eat a balanced diet"]
    },
    {
      title: "Symptoms to Watch",
      content: "Irregular periods, weight gain, acne, and excessive hair growth are common symptoms.",
      tips: ["Track your menstrual cycle", "Monitor weight changes", "Consult a gynecologist regularly"]
    },
    {
      title: "Management Tips",
      content: "PCOD can be managed effectively with lifestyle changes and proper medical care.",
      tips: ["Include whole grains in diet", "Practice stress management", "Take prescribed medications"]
    }
  ];

  const menstrualTips = [
    { title: "Pain Relief", tip: "Use heating pads and practice gentle yoga", icon: "🧘‍♀️" },
    { title: "Nutrition", tip: "Eat iron-rich foods and stay hydrated", icon: "🥗" },
    { title: "Hygiene", tip: "Change sanitary products regularly", icon: "🧴" },
    { title: "Exercise", tip: "Light walking can reduce cramps", icon: "🚶‍♀️" }
  ];

  const helplines = [
    { name: "Women Helpline", number: "1091", available: "24/7" },
    { name: "Mental Health Helpline", number: "1800-233-3330", available: "24/7" },
    { name: "Suicide Prevention", number: "1800-599-0019", available: "24/7" },
    { name: "Women in Distress", number: "181", available: "24/7" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pcodSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pcodSlides.length) % pcodSlides.length);
  };

  const callHelpline = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Women's Health & Wellness
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your health matters. Find resources, tips, and support for every aspect of women's wellness.
          </p>
        </div>

        {/* Menstrual Health Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Menstrual Health Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menstrualTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
                <div className="text-4xl mb-4 text-center">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{tip.title}</h3>
                <p className="text-gray-600 text-sm text-center">{tip.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PCOD Awareness Carousel */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            PCOD Awareness
          </h2>
          <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {pcodSlides[currentSlide].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {pcodSlides[currentSlide].content}
                </p>
                <div className="space-y-2">
                  {pcodSlides[currentSlide].tips.map((tip, index) => (
                    <div key={index} className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronLeft className="w-5 h-5 text-purple-600" />
                </button>
                
                <div className="flex space-x-2">
                  {pcodSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-purple-600' : 'bg-purple-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronRight className="w-5 h-5 text-purple-600" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Breast Cancer Awareness */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Breast Cancer Awareness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Self-Examination</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Examine breasts monthly after menstruation</li>
                <li>• Look for changes in size, shape, or skin texture</li>
                <li>• Feel for lumps or thickening</li>
                <li>• Check for discharge from nipples</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">When to See a Doctor</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Any new lump or thickening</li>
                <li>• Changes in breast size or shape</li>
                <li>• Skin dimpling or puckering</li>
                <li>• Nipple discharge or inversion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mental Health Breathing Exercise */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Breathing Exercise for Calm
              </h2>
              <p className="text-gray-600">
                Practice this 4-7-8 breathing technique to reduce stress and anxiety
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Inhale</h3>
                <p className="text-sm text-gray-600">Breathe in through nose for 4 counts</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">7</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hold</h3>
                <p className="text-sm text-gray-600">Hold your breath for 7 counts</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">8</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Exhale</h3>
                <p className="text-sm text-gray-600">Breathe out through mouth for 8 counts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mental Health Helplines */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Mental Health Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {helplines.map((helpline, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                <h3 className="font-semibold text-gray-900 mb-2">{helpline.name}</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">{helpline.number}</p>
                <p className="text-sm text-gray-600 mb-4">Available {helpline.available}</p>
                <button
                  onClick={() => callHelpline(helpline.number)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthPage;