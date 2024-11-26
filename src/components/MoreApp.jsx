import React from 'react'
import { NavLink } from 'react-router-dom'

const MoreApp = () => {
  return (
    <div>
        <div className="h-screen sticky top-0">
    <aside className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-semibold">MORE APP</div>
      <nav className="flex flex-col space-y-2 mt-4 px-4">
       <NavLink
          to="/advise-app"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          More API App
        </NavLink>
      </nav>
    </aside>

</div></div>
  )
}

export default MoreApp