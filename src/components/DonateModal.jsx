import React, { useState } from 'react'

export default function DonateModal({ campaign, onClose, onDonate }) {
  const [amount, setAmount] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const num = parseFloat(amount)
    if (!num || num <= 0) return alert('Enter a valid amount.')
    onDonate(num)
    alert('Thank you for your donation 💖')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full space-y-6">
        <h2 className="text-2xl font-bold text-indigoSoft">Donate to {campaign.title}</h2>

        <input
          type="number"
          placeholder="Donation amount (USD)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full border border-indigoSoft rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex justify-between">
          <button type="button" onClick={onClose} className="px-6 py-2 rounded-2xl bg-indigo-100 hover:bg-indigo-200 transition">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white hover:shadow-lg transition">
            Donate
          </button>
        </div>
      </form>
    </div>
  )
}
