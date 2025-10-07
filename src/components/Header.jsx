import React from 'react'

export default function Header({ onCreate }) {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-30">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl select-none">
            CF
          </div>
          <h1 className="font-bold text-indigoSoft text-xl">CrowdFund</h1>
        </div>

        <ul className="flex space-x-8 text-indigoSoft font-semibold">
          <li><button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} className="hover:text-indigo-600 transition">Explore</button></li>
          <li><button onClick={onCreate} className="hover:text-indigo-600 transition">Create</button></li>
          <li><a href="#about" className="hover:text-indigo-600 transition">About</a></li>
        </ul>

        <button
          onClick={onCreate}
          className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-5 py-2 rounded-2xl shadow-lg hover:shadow-pink-400 hover:scale-105 transition transform"
        >
          Start a Campaign
        </button>
      </nav>
    </header>
  )
}
