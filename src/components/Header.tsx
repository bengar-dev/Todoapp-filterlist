import React from 'react'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="bg-slate-900 p-4 flex flex-col shadow-lg">
        <h1 className="p-2 text-white text-center text-xl font-bold uppercase">Todo<span className="text-rose-400">App</span></h1>
        <SearchBar />
    </header>
  )
}
