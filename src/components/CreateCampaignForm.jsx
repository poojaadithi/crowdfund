import React, { useState } from 'react'

export default function CreateCampaignForm({ onClose, onCreate }) {
  const [title, setTitle] = useState('')
  const [goal, setGoal] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [creator, setCreator] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title || !goal || !description || !imageUrl || !creator) return alert('Please fill all fields.')

    onCreate({
      id: Date.now(),
      title,
      goal: parseFloat(goal),
      description,
      imageUrl,
      creator,
      funded: 0,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full space-y-6">
        <h2 className="text-2xl font-bold text-indigoSoft">Create New Campaign</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border border-indigoSoft rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          placeholder="Goal (USD)"
          value={goal}
          onChange={e => setGoal(e.target.value)}
          className="w-full border border-indigoSoft rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Short Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full border border-indigoSoft rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="url"
          placeholder="Image URL"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
          className="w-full border border-indigoSoft rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Creator Name"
          value={creator}
          onChange={e => setCreator(e.target.value)}
          className="w-full border border-indigoSoft rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex justify-between">
          <button type="button" onClick={onClose} className="px-6 py-2 rounded-2xl bg-indigo-100 hover:bg-indigo-200 transition">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white hover:shadow-lg transition">
            Create
          </button>
        </div>
      </form>
    </div>
  )
}
