import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const GMATInterface = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showChat, setShowChat] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'Student',
      text: 'Could you explain the method for finding the number of factors of a number?',
      avatar: '/api/placeholder/32/32'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const tabs = [
    {
      title: 'Achieve',
      highlight: 'Quant',
      subtitle: 'Mastery',
      color: 'blue',
      image: 'https://d6mmsse0kchai.cloudfront.net/standalone/20250702/images/features/GMAT/home/achieve-quant-mastery@3x.webp'
    },
    {
      title: 'Conquer Every',
      highlight: 'Verbal',
      subtitle: 'Question Type',
      color: 'purple',
      image: 'https://d6mmsse0kchai.cloudfront.net/standalone/20250702/images/features/GMAT/home/conquer-every-verbal@2x.webp'
    },
    {
      title: 'Crush the',
      highlight: 'Data Insights',
      subtitle: 'Section',
      color: 'teal',
      image: 'https://d6mmsse0kchai.cloudfront.net/standalone/20250702/images/features/GMAT/home/crush-data-insights@2x.png'
    }
  ];

  const content = [
    {
      title: 'Achieve Quant mastery',
      subtitle: 'There will be no surprises on test day.',
      features: [
        'Crystal-clear, in-depth explanations of every Quant concept',
        'Easy-to-digest lessons that progressively build knowledge and skills',
        'Pro tips, tricks, shortcuts, and insights to up your game'
      ],
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Conquer every Verbal question',
      subtitle: 'GMAT Verbal has never been this easy to beat.',
      features: [
        'Specific strategies for each Critical Reasoning and Reading Comprehension',
        'Insider knowledge of every trap answer type and "trick of the trade"',
        'Realistic practice that builds key skills at every level'
      ],
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Crush the Data Insights section',
      subtitle: 'Develop the accuracy and speed required to excel in Data Insights.',
      features: [
        'Comprehensive lessons that break complex problems into simple steps',
        'Every DI concept, strategy, and skill demystified',
        'Ample practice in all 5 DI question types'
      ],
      bgColor: 'bg-teal-50'
    }
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        user: 'You',
        text: inputMessage,
        avatar: '/api/placeholder/32/32'
      }]);
      setInputMessage('');
    }
  };

  const getTabColorClasses = (index) => {
    const colors = {
      0: 'text-blue-600 border-blue-600',
      1: 'text-purple-600 border-purple-600',
      2: 'text-teal-600 border-teal-600'
    };
    return colors[index] || 'text-gray-600 border-gray-300';
  };

  const getHighlightColor = (index) => {
    const colors = {
      0: 'text-blue-600',
      1: 'text-purple-600',
      2: 'text-teal-600'
    };
    return colors[index] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-transparent">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-md font-medium text-2xl transition-all duration-100 ${
                  activeTab === index
                    ? `${getTabColorClasses(index)} bg-transparent border-b-2`
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.title} <span className={getHighlightColor(index)}>{tab.highlight}</span> {tab.subtitle}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className={`${content[activeTab].bgColor} rounded-2xl overflow-hidden`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                {content[activeTab].title.split(' ').map((word, index) => (
                  <span key={index} className={word === 'Quant' || word === 'Verbal' || word === 'Data' || word === 'Insights' ? getHighlightColor(activeTab) : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                {content[activeTab].subtitle}
              </p>

              <ul className="space-y-4">
                {content[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      <strong>{feature.split(' ')[0]} {feature.split(' ')[1]}</strong>
                      {' ' + feature.split(' ').slice(2).join(' ')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Mock Interface */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
                {/* Header */}
                <div className="bg-gray-800 text-white p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">GMAT Prep Platform</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 h-80 bg-gray-50">
                  <div className="bg-white rounded-lg p-4 shadow-sm h-full flex flex-col">
                    <div className="flex-1 overflow-hidden">
                      <img 
                        src={tabs[activeTab].image} 
                        alt={content[activeTab].title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {content[activeTab].title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {content[activeTab].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      

      {/* Chat Toggle Button (when chat is hidden) */}
      {/* {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center z-50"
        >
          <MessageCircle size={24} />
        </button>
      )} */}
    </div>
  );
};

export default GMATInterface;