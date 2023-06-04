import React from 'react';
import AddContact from '../components/AddContactModal';

const Contact = () => {
  return (
    <div className='h-full'>
      <div className='w-full flex justify-between items-center mb-4 py-3'>
        <div>
          <h1 className='text-lg md:text-2xl font-medium truncate'>List of Contacts</h1>
        </div>
        <div>
          <button className="w-full rounded-full py-1 px-3 bg-white hover:opacity-75 text-black font-bold uppercase">
            Create
          </button>
        </div>
      </div>
      <hr className='py-6' />
      <AddContact />
    </div>
  )
}

export default Contact;