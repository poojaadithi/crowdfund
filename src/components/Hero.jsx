import React from 'react'

export default function Hero({ onCreate, onExplore }) {
  return (
    <section className="relative bg-gradient-to-r from-indigo-400 via-pink-300 to-indigo-400 text-white py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529338296731-cfbf80e2f33a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Support projects that inspire change.</h2>
        <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">Join a community that empowers innovators and creators to bring their ideas to life.</p>
        <div className="space-x-4">
          <button
            onClick={onCreate}
            className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-indigo-400 hover:scale-105 transition transform"
          >
            Start a Campaign
          </button>
          <button
            onClick={onExplore}
            className="border border-white text-white font-semibold px-8 py-3 rounded-2xl hover:bg-white hover:text-indigo-600 transition"
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  )
}
