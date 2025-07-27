import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, MessageCircle, Send } from 'lucide-react';

const StoriesPage: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [showShareForm, setShowShareForm] = useState(false);
  const [shareFormData, setShareFormData] = useState({
    name: '',
    title: '',
    story: '',
    category: '',
    anonymous: false
  });

  const inspiringStories = [
    {
      id: 1,
      title: "From Survivor to Entrepreneur",
      author: "Priya S.",
      category: "Entrepreneurship",
      content: "After leaving an abusive marriage with nothing, I started a small tailoring business from home. Today, I employ 15 women and run a successful fashion boutique. Every stitch taught me that we can rebuild our lives stronger than before.",
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
      likes: 234,
      comments: 18,
      date: "2 days ago"
    },
    {
      id: 2,
      title: "Breaking Barriers in Tech",
      author: "Anita K.",
      category: "Technology",
      content: "As the first woman in my family to pursue engineering, I faced countless challenges. Despite societal pressure to quit, I persevered and now lead a team of 50 engineers at a tech giant. Dreams do come true with determination.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      likes: 189,
      comments: 24,
      date: "5 days ago"
    },
    {
      id: 3,
      title: "Education Changed Everything",
      author: "Meera D.",
      category: "Education",
      content: "Born in a village where girls weren't sent to school, I fought for my education. Today, I'm a doctor serving my community. Education is the key that unlocks every door and breaks every chain.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      likes: 312,
      comments: 41,
      date: "1 week ago"
    },
    {
      id: 4,
      title: "Finding Strength After Loss",
      author: "Sunita M.",
      category: "Personal Growth",
      content: "When I lost my husband suddenly, I was left with two children and no job. Through sheer determination and support from other women, I started a small catering business. Today, we're financially independent and thriving.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      likes: 267,
      comments: 33,
      date: "1 week ago"
    },
    {
      id: 5,
      title: "Sports Saved My Life",
      author: "Kavya R.",
      category: "Sports",
      content: "Growing up in poverty, sports gave me hope and direction. Despite having no proper equipment or training facilities, I practiced every day. Now I'm a national-level athlete inspiring other girls to chase their dreams.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      likes: 198,
      comments: 27,
      date: "2 weeks ago"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % inspiringStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + inspiringStories.length) % inspiringStories.length);
  };

  const handleShareFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setShareFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setShareFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleShareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Story shared:', shareFormData);
    alert('Thank you for sharing your story! It will be reviewed and published soon.');
    setShareFormData({
      name: '',
      title: '',
      story: '',
      category: '',
      anonymous: false
    });
    setShowShareForm(false);
  };

  const categories = [
    'Entrepreneurship',
    'Technology',
    'Education',
    'Personal Growth',
    'Sports',
    'Arts & Culture',
    'Social Impact',
    'Other'
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Inspiring Stories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real women who overcame challenges and achieved their dreams. Be inspired, and share your own journey.
          </p>
        </div>

        {/* Featured Story Carousel */}
        <section className="mb-16">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-96 sm:h-80">
              <img
                src={inspiringStories[currentStory].image}
                alt={inspiringStories[currentStory].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Navigation arrows */}
              <button
                onClick={prevStory}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextStory}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Story content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="max-w-2xl">
                  <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-sm font-medium mb-3">
                    {inspiringStories[currentStory].category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    {inspiringStories[currentStory].title}
                  </h2>
                  <p className="text-purple-100 mb-4 line-clamp-3">
                    {inspiringStories[currentStory].content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm">by {inspiringStories[currentStory].author}</span>
                      <span className="text-sm text-purple-200">{inspiringStories[currentStory].date}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{inspiringStories[currentStory].likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{inspiringStories[currentStory].comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story indicators */}
            <div className="flex justify-center space-x-2 py-4 bg-white">
              {inspiringStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? 'bg-purple-600' : 'bg-purple-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* All Stories Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Inspiring Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inspiringStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
                      {story.category}
                    </span>
                    <span className="text-xs text-gray-500">{story.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{story.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">by {story.author}</span>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{story.likes}</span>
                      </div>
                      <button className="text-purple-600 hover:text-purple-800">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Share Your Story CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Story Matters
            </h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Every woman's journey is unique and powerful. Share your story to inspire others and be part of our growing community of strong women.
            </p>
            <button
              onClick={() => setShowShareForm(true)}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Share Your Story
            </button>
          </div>
        </section>

        {/* Share Story Form Modal */}
        {showShareForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900">Share Your Story</h3>
                  <button
                    onClick={() => setShowShareForm(false)}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <form onSubmit={handleShareSubmit} className="p-6">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <input
                      type="checkbox"
                      id="anonymous"
                      name="anonymous"
                      checked={shareFormData.anonymous}
                      onChange={handleShareFormChange}
                      className="w-4 h-4 text-purple-600"
                    />
                    <label htmlFor="anonymous" className="text-sm text-gray-700">
                      Share anonymously
                    </label>
                  </div>
                  
                  {!shareFormData.anonymous && (
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={shareFormData.name}
                        onChange={handleShareFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your name"
                        required={!shareFormData.anonymous}
                      />
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Story Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={shareFormData.title}
                    onChange={handleShareFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Give your story a compelling title"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={shareFormData.category}
                    onChange={handleShareFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Story
                  </label>
                  <textarea
                    id="story"
                    name="story"
                    value={shareFormData.story}
                    onChange={handleShareFormChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Share your journey, challenges, and triumphs. Your story can inspire others..."
                    required
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowShareForm(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Share Story</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Community Stats */}
        <section>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Growing Community
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">1,247</div>
                <p className="text-gray-600">Stories Shared</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">15,632</div>
                <p className="text-gray-600">Women Inspired</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-purple-800 mb-2">89</div>
                <p className="text-gray-600">Countries Reached</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StoriesPage;