import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CampaignCard from './components/CampaignCard'
import CreateCampaignForm from './components/CreateCampaignForm'
import DonateModal from './components/DonateModal'
import Footer from './components/Footer'

export default function App() {
  const [campaigns, setCampaigns] = useState(() => {
    const saved = localStorage.getItem('campaigns')
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        title: "Revolutionary Solar Water Purifier",
        description: "Clean water for everyone using solar technology. Help us bring safe drinking water to remote communities.",
        goal: 50000,
        funded: 32500,
        imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        creator: "EcoTech Solutions"
      },
      {
        id: 2,
        title: "Smart Urban Garden Kit",
        description: "Grow fresh vegetables in your apartment with our AI-powered hydroponic system.",
        goal: 25000,
        funded: 18750,
        imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        creator: "GreenSpace Innovations"
      },
      {
        id: 3,
        title: "Educational VR for Kids",
        description: "Immersive learning experiences that make education fun and engaging for children worldwide.",
        goal: 75000,
        funded: 45000,
        imageUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        creator: "FutureLearn VR"
      }
    ]
  })

  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDonateModal, setShowDonateModal] = useState(false)
  const [currentCampaign, setCurrentCampaign] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    localStorage.setItem('campaigns', JSON.stringify(campaigns))
  }, [campaigns])

  function addCampaign(newCampaign) {
    setCampaigns([newCampaign, ...campaigns])
  }

  function openDonateModal(campaign) {
    setCurrentCampaign(campaign)
    setShowDonateModal(true)
  }

  function donate(amount) {
    setCampaigns(campaigns.map(c => {
      if (c.id === currentCampaign.id) {
        return { ...c, funded: (c.funded || 0) + amount }
      }
      return c
    }))
    setShowDonateModal(false)
    setCurrentCampaign(null)
  }

  const filteredCampaigns = campaigns.filter(c =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 via-pinkPastel to-lavender font-poppins">
      <Header onCreate={() => setShowCreateModal(true)} />
      <Hero onCreate={() => setShowCreateModal(true)} onExplore={() => window.scrollTo({ top: 600, behavior: 'smooth' })} />
      
      <section className="px-6 py-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigoSoft mb-4">Featured Campaigns</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover amazing projects from creators around the world and help bring their ideas to life.</p>
        </div>
        
        <input
          type="text"
          placeholder="Search campaigns..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full max-w-md mx-auto block p-3 mb-8 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition shadow-sm"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCampaigns.length > 0 ? (
            filteredCampaigns.map(c => (
              <CampaignCard key={c.id} campaign={c} onDonate={() => openDonateModal(c)} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-12">No campaigns found. Try a different search term.</p>
          )}
        </div>
      </section>

      {showCreateModal && <CreateCampaignForm onClose={() => setShowCreateModal(false)} onCreate={addCampaign} />}
      {showDonateModal && <DonateModal campaign={currentCampaign} onClose={() => setShowDonateModal(false)} onDonate={donate} />}
      
      <Footer />
    </div>
  )
}
