import React, { useState } from 'react';
import { Scale, FileText, Users, AlertCircle, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const LegalPage: React.FC = () => {
  const [expandedLaw, setExpandedLaw] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    issue: '',
    description: '',
    urgency: 'medium'
  });

  const legalRights = [
    {
      id: 'dowry',
      title: 'Dowry Prohibition Act',
      summary: 'Protection against dowry demands and harassment',
      details: [
        'Dowry demand is a criminal offense punishable by imprisonment up to 2 years and fine up to ₹10,000',
        'Both giving and taking dowry is illegal',
        'Harassment for dowry can lead to imprisonment up to 3 years',
        'You can file a complaint at the nearest police station',
        'Women can seek help from local women\'s commission'
      ],
      penalties: 'Imprisonment: 5 years to life, Fine: ₹15,000 or more'
    },
    {
      id: 'domestic-violence',
      title: 'Domestic Violence Act 2005',
      summary: 'Protection from physical, emotional, and economic abuse',
      details: [
        'Covers physical, sexual, verbal, emotional and economic abuse',
        'Includes harassment by husband or relatives',
        'Right to reside in shared household',
        'Right to maintenance and compensation',
        'Protection officers available in every district'
      ],
      penalties: 'Imprisonment: Up to 1 year, Fine: Up to ₹20,000'
    },
    {
      id: 'workplace',
      title: 'Sexual Harassment at Workplace',
      summary: 'Protection against workplace harassment',
      details: [
        'Every workplace must have Internal Complaints Committee (ICC)',
        'Right to file complaint within 3 months of incident',
        'Employer must provide safe working environment',
        'Protection against retaliation',
        'Right to interim relief during inquiry'
      ],
      penalties: 'Compensation up to ₹5 lakhs, Job termination for harasser'
    },
    {
      id: 'rape',
      title: 'Section 375 & 376 IPC - Rape Laws',
      summary: 'Legal protection and justice for sexual assault victims',
      details: [
        'Minimum punishment of 7 years imprisonment',
        'Death penalty for rape causing death',
        'Special provisions for minors',
        'Right to in-camera trial',
        'Free legal aid available'
      ],
      penalties: 'Imprisonment: 7 years to life/death penalty'
    }
  ];

  const firSteps = [
    {
      step: 1,
      title: 'Go to Police Station',
      description: 'Visit nearest police station immediately'
    },
    {
      step: 2,
      title: 'Provide Details',
      description: 'Give complete information about the incident'
    },
    {
      step: 3,
      title: 'Get FIR Copy',
      description: 'Ensure you receive a copy of the FIR'
    },
    {
      step: 4,
      title: 'Follow Up',
      description: 'Stay in touch with investigating officer'
    }
  ];

  const legalAidContacts = [
    {
      name: 'National Legal Services Authority',
      phone: '011-2338-7381',
      description: 'Free legal aid for women',
      email: 'nalsa@nic.in'
    },
    {
      name: 'Delhi Legal Aid Board',
      phone: '011-2389-0112',
      description: 'Legal assistance in Delhi',
      email: 'legal.aid.delhi@gov.in'
    },
    {
      name: 'Women\'s Legal Rights Initiative',
      phone: '1800-300-9933',
      description: '24/7 legal helpline',
      email: 'help@womensrights.org'
    }
  ];

  const toggleLaw = (lawId: string) => {
    setExpandedLaw(expandedLaw === lawId ? null : lawId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Legal aid request submitted:', formData);
    alert('Your request has been submitted. A legal expert will contact you within 24 hours.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      issue: '',
      description: '',
      urgency: 'medium'
    });
  };

  const callLegalAid = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Legal Rights & Support
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Know your rights, understand the law, and get the legal support you deserve.
          </p>
        </div>

        {/* Emergency Legal Help */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border-2 border-red-200">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Immediate Legal Help?</h2>
              <p className="text-gray-600 mb-6">
                If you're in immediate danger or need urgent legal assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => callLegalAid('100')}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Police - 100</span>
                </button>
                <button
                  onClick={() => callLegalAid('1800-300-9933')}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Legal Helpline</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Rights Information */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Know Your Legal Rights
          </h2>
          
          <div className="space-y-4">
            {legalRights.map((law) => (
              <div key={law.id} className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden">
                <button
                  onClick={() => toggleLaw(law.id)}
                  className="w-full p-6 text-left hover:bg-purple-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{law.title}</h3>
                      <p className="text-gray-600">{law.summary}</p>
                    </div>
                    {expandedLaw === law.id ? (
                      <ChevronUp className="w-6 h-6 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-600" />
                    )}
                  </div>
                </button>
                
                {expandedLaw === law.id && (
                  <div className="px-6 pb-6 border-t border-purple-100 bg-purple-50">
                    <div className="pt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Provisions:</h4>
                      <ul className="space-y-2 mb-4">
                        {law.details.map((detail, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-white rounded-lg p-4 border border-purple-200">
                        <h5 className="font-semibold text-gray-900 mb-2">Penalties:</h5>
                        <p className="text-sm text-gray-700">{law.penalties}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* How to File FIR */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How to File an FIR
          </h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {firSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-white rounded-lg p-6 inline-block">
                <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-700">
                  <strong>Remember:</strong> FIR can be filed at any police station, and it's your right to get a copy immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Aid Contacts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Free Legal Aid Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalAidContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-purple-100 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Scale className="w-8 h-8 text-purple-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">{contact.name}</h3>
                    <p className="text-sm text-gray-600">{contact.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={() => callLegalAid(contact.phone)}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{contact.phone}</span>
                  </button>
                  
                  <div className="text-center">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-purple-600 hover:text-purple-800 text-sm"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Aid Request Form */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8">
            <div className="text-center mb-6">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Request Legal Assistance
              </h2>
              <p className="text-gray-600">
                Fill out this form to get connected with a legal expert
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Legal Issue
                  </label>
                  <select
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select an issue</option>
                    <option value="domestic-violence">Domestic Violence</option>
                    <option value="dowry-harassment">Dowry Harassment</option>
                    <option value="workplace-harassment">Workplace Harassment</option>
                    <option value="property-rights">Property Rights</option>
                    <option value="divorce">Divorce/Separation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="low">Low - General advice needed</option>
                    <option value="medium">Medium - Issue needs attention</option>
                    <option value="high">High - Urgent assistance required</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe Your Situation
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Please provide details about your legal issue..."
                  required
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegalPage;