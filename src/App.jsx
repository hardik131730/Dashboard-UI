import { useState } from 'react'
import './App.css'

function App() {
  const [sidebarOpen, setsidebarOpen] = useState(false)
  const [darkMode, setdarkMode] = useState(false)

  const navItems = [
    {name : 'Dashboard', icon : '📊'},
    {name : 'Projects', icon : '🗂️'},
    {name : 'Calendar', icon : '📅'},
    {name : 'Documents', icon : '📄'},
    {name : 'Reports', icon : '📈'}
  ]

  return (
    <div className={`flex h-screen bg-gray-100 ${
      darkMode ? 'dark' : ''
    } dark:bg-gray-900`}>
      {/* sidebar */}
      <div className={`fixed bg-white h-screen shadow w-64 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0 lg:static dark:bg-gray-900`}
        >
          <div className='flex p-4 justify-between border-b'>
            <div className='font-bold text-xl dark:text-gray-100'>Logo</div>
            <button className='lg:hidden dark:text-gray-100' onClick={()=> setsidebarOpen(false)}>X</button>
          </div>

        {/* Navigation bar */}
        <div className='p-4 space-y-2'>
          {
            navItems.map((item) => {
              return(
                <div className='flex p-2 hover:bg-gray-100' >
                  <div className='text-xl'>{item.icon}</div>
                  <div className='text-xl dark:text-gray-100 dark:hover:dark:text-gray-900'>{item.name}</div>
                </div>
              )
            })
          }
        </div>

        {/* Dark Mode button */}
        <div className='flex text-2xl justify-left p-4'>
          {
            darkMode ? (
              <button 
              className = 'p-2 bg-black rounded-full' 
              onClick={() => setdarkMode(false)}>☀️</button>
            ) : (
              <button 
              className = 'p-2 bg-black rounded-full' 
              onClick={() => setdarkMode(true)}>🌙</button>
            )
          }
        </div>

      </div>

      {/* main */}
      <main className='flex-1'>
        <header className='bg-white flex justify-between p-4 dark:bg-gray-900'>
          <button className='p-2 text-xl font-bold lg:hidden dark:text-gray-100' 
          onClick={()=> setsidebarOpen(true)} 
          >
            ☰</button>
          <h1 className='text-2xl font-bold dark:text-gray-100'>Dashboard</h1>
          <div className='bg-gray-300 w-10 h-10 rounded-full'></div>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4'>
          {/* all cards */}
          <div className='bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800'>
            <h2 className='text-xl font-bold dark:text-gray-100'>Card</h2>
            <p className='text-lg p-1 text-gray-700 dark:text-gray-100'>Content goes here</p>
          </div>
          <div className='bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800'>
            <h2 className='text-xl font-bold dark:text-gray-100'>Card</h2>
            <p className='text-lg p-1 text-gray-700 dark:text-gray-100'>Content goes here</p>
          </div>
          <div className='bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800'>
            <h2 className='text-xl font-bold dark:text-gray-100'>Card</h2>
            <p className='text-lg p-1 text-gray-700 dark:text-gray-100'>Content goes here</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
