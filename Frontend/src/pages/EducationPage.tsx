import React, { useState, useEffect } from 'react';
import { BookOpen, Code, Palette, Calculator, Filter, ExternalLink, Loader2 } from 'lucide-react';
import { apiService, EducationData } from '../services/api';

const EducationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [educationData, setEducationData] = useState<EducationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiService.getEducationData();
        setEducationData(response.data);
      } catch (err) {
        setError('Failed to load education data. Please try again later.');
        console.error('Error fetching education data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEducationData();
  }, []);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'technology', label: 'Technology' },
    { value: 'medical', label: 'Medical' },
    { value: 'arts', label: 'Arts' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'business', label: 'Business' },
    { value: 'science', label: 'Science' }
  ];

  const skillCategories = [
    { value: 'all', label: 'All Skills' },
    { value: 'coding', label: 'Coding' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'finance', label: 'Finance' }
  ];

  const filteredScholarships = educationData?.scholarships 
    ? (selectedCategory === 'all' 
        ? educationData.scholarships 
        : educationData.scholarships.filter(s => s.category === selectedCategory))
    : [];

  const filteredResources = educationData?.learningResources
    ? (selectedSkill === 'all'
        ? educationData.learningResources
        : educationData.learningResources.filter(r => r.type === selectedSkill))
    : [];

  const getCategoryIcon = (category: string) => {
    const icons = {
      technology: <Code className="w-5 h-5" />,
      medical: <BookOpen className="w-5 h-5" />,
      arts: <Palette className="w-5 h-5" />,
      engineering: <Calculator className="w-5 h-5" />,
      business: <BookOpen className="w-5 h-5" />,
      science: <BookOpen className="w-5 h-5" />
    };
    return icons[category as keyof typeof icons] || <BookOpen className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      technology: 'from-blue-500 to-blue-600',
      medical: 'from-green-500 to-green-600',
      arts: 'from-purple-500 to-purple-600',
      engineering: 'from-orange-500 to-orange-600',
      business: 'from-pink-500 to-pink-600',
      science: 'from-teal-500 to-teal-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Education & Opportunities
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock your potential with scholarships, free courses, and skill development opportunities designed for women.
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="flex items-center space-x-2">
              <Loader2 className="w-6 h-6 animate-spin text-purple-600" />
              <span className="text-lg text-gray-600">Loading education data...</span>
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
              Education & Opportunities
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock your potential with scholarships, free courses, and skill development opportunities designed for women.
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
            Education & Opportunities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock your potential with scholarships, free courses, and skill development opportunities designed for women.
          </p>
        </div>

        {/* Scholarships Section */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
              Available Scholarships
            </h2>
            
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map((scholarship) => (
              <div key={scholarship.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${getCategoryColor(scholarship.category)}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(scholarship.category)} rounded-lg flex items-center justify-center text-white`}>
                      {getCategoryIcon(scholarship.category)}
                    </div>
                    <span className="text-2xl font-bold text-purple-600">{scholarship.amount}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{scholarship.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{scholarship.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Deadline:</span>
                      <span className="font-medium text-gray-900">{scholarship.deadline}</span>
                    </div>
                    <div className="text-sm text-gray-600">{scholarship.eligibility}</div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-shadow font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Free Learning Resources */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
              Free Learning Resources
            </h2>
            
            {/* Skill Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                className="bg-white border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {skillCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-600">FREE</span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded-full font-medium">
                    {resource.level}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4">by {resource.provider}</p>
                
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {resource.duration}</span>
                  <span className="capitalize">{resource.type}</span>
                </div>
                
                <button className="w-full bg-white border-2 border-purple-600 text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-medium flex items-center justify-center space-x-2">
                  <span>Start Learning</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Don't miss out on these amazing opportunities. Start your journey towards personal and professional growth today.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Get Started Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationPage;