import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-pink-400 text-white py-6 mt-auto text-center font-semibold">
      © {new Date().getFullYear()} Made with <span className="text-pink-300">💜</span> using React & Tailwind
    </footer>
  )
}
