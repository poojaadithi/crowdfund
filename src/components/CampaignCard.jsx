import React from 'react'
import { motion } from 'framer-motion'

export default function CampaignCard({ campaign, onDonate }) {
  const progress = Math.min(((campaign.funded || 0) / campaign.goal) * 100, 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(219, 39, 119, 0.4)' }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
    >
      <img src={campaign.imageUrl} alt={campaign.title} className="h-48 w-full object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-indigoSoft font-bold text-xl mb-2">{campaign.title}</h3>
        <p className="text-gray-600 flex-grow">{campaign.description}</p>

        <div className="mt-4">
          <div className="w-full h-3 bg-indigo-200 rounded-full overflow-hidden">
            <div
              className="h-3 bg-gradient-to-r from-indigo-600 to-pink-400 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1 text-sm text-indigoSoft">
            <span>Raised: ${campaign.funded || 0}</span>
            <span>Goal: ${campaign.goal}</span>
          </div>
        </div>

        <div className="mt-5 flex space-x-3">
          <button
            onClick={onDonate}
            className="flex-grow bg-gradient-to-r from-indigo-600 to-pink-400 text-white rounded-2xl py-2 shadow-md hover:shadow-pink-400 hover:scale-105 transition"
          >
            Donate
          </button>
          <button
            onClick={() => navigator.share ? navigator.share({ title: campaign.title, url: window.location.href }) : alert('Share not supported')}
            className="flex-grow border border-indigoSoft text-indigoSoft rounded-2xl py-2 hover:bg-indigo-50 transition"
          >
            Share
          </button>
        </div>
      </div>
    </motion.div>
  )
}
