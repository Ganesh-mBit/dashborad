import React from 'react'; 

const Home = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-between items-center mb-4 py-3'>
        <div>
          <h1 className='text-lg md:text-2xl font-medium truncate'>Welcom back to dashborad</h1>
        </div>
      </div>
      <hr className='py-6' />
      <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
        <h1 className='text-4xl font-bold'>Visualizing the Impact: <span className='text-red-400'>COVID-19</span> Dashboard with Detailed Reporting</h1>
        <p className="text-lg leading-7">Access the latest COVID-19 data and gain valuable insights with our easy-to-use dashboard. Stay updated on the number of cases, deaths, and recoveries across countries and regions. Make informed decisions and stay vigilant during these challenging times. Explore interactive maps, charts, and graphs to understand the spread of the virus, track key statistics, and make data-driven decisions.</p>
        <div>
          <img src="https://img.freepik.com/premium-vector/family-medical-masks-stands-protective-bubble-adults-children-are-protected-from-new-coronavirus-covid-2019_321061-38.jpg?w=1800" alt="main" className='w-full md:w-[600px]' />
        </div>
      </div>
    </div>
  )
}

export default Home;