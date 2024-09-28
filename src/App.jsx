import { useState } from 'react'

export default function LandingPage() {
  const [chatMessage, setChatMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle chat submission logic here
    console.log('Message submitted:', chatMessage)
    setChatMessage('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">GiftGenius</div>
          <div className="space-x-4">
            <a href="#features" className="text-purple-600 hover:text-purple-800">Features</a>
            <a href="#how-it-works" className="text-purple-600 hover:text-purple-800">How It Works</a>
            <a href="#get-started" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">Get Started</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6">
              Find the Perfect Gift with GiftGenius
            </h1>
            <p className="text-xl text-purple-600 mb-8">
              Our AI-powered chatbot helps you discover ideal gifts for any occasion, tailored to your preferences and budget.
            </p>
            <a href="#get-started" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg hover:bg-purple-700 transition duration-300 inline-block">
              Start Gifting
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-2xl">
              <div className="bg-purple-100 rounded-t-lg p-4 mb-4">
                <p className="text-purple-600">GiftGenius AI</p>
              </div>
              <div className="space-y-4 mb-4">
                <p className="bg-purple-100 text-purple-600 p-2 rounded-lg inline-block">Hello! I'm here to help you find the perfect gift. What's the occasion?</p>
                <p className="bg-gray-100 text-gray-600 p-2 rounded-lg inline-block">It's my mom's birthday next week.</p>
                <p className="bg-purple-100 text-purple-600 p-2 rounded-lg inline-block">Great! What's your budget for this gift?</p>
              </div>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow border border-purple-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-r-full hover:bg-purple-700 transition duration-300">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Why Choose GiftGenius?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Personalized Recommendations', description: 'Our AI analyzes preferences to suggest perfect gifts', icon: '🎁' },
                { title: 'Budget-Friendly Options', description: 'Find great gifts within your specified budget', icon: '💰' },
                { title: 'Occasion-Specific Ideas', description: 'Get tailored suggestions for any event or celebration', icon: '🎉' },
              ].map((feature, index) => (
                <div key={index} className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">{feature.title}</h3>
                  <p className="text-purple-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              {[
                { step: 1, title: 'Start a Chat', description: 'Begin your conversation with our AI chatbot' },
                { step: 2, title: 'Provide Details', description: 'Tell us about the occasion, recipient, and your budget' },
                { step: 3, title: 'Get Suggestions', description: 'Receive personalized gift recommendations' },
                { step: 4, title: 'Make Your Choice', description: 'Select the perfect gift and complete your purchase' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">{item.title}</h3>
                  <p className="text-purple-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="get-started" className="bg-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find the Perfect Gift?</h2>
            <p className="text-xl mb-8">Start chatting with our AI and discover amazing gift ideas in minutes!</p>
            <a href="#" className="bg-white text-purple-700 px-8 py-3 rounded-full text-lg hover:bg-purple-100 transition duration-300 inline-block">
              Launch GiftGenius Now
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">GiftGenius</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-300">About</a>
              <a href="#" className="hover:text-purple-300">Privacy</a>
              <a href="#" className="hover:text-purple-300">Terms</a>
              <a href="#" className="hover:text-purple-300">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-purple-300">
            © {new Date().getFullYear()} GiftGenius. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}