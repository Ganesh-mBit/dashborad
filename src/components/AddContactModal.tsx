import React from 'react';

const AddContact = () => {
  return (
    <div className='absolute'>
      <div className="flex w-full justify-center items-center">
        <div className="rounded-lg p-6 border border-red-400">
          <h2 className="text-2xl font-bold mb-4">Create Contact</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="first-name" className="block mb-2">First Name</label>
              <input type="text" id="first-name" className="w-full px-4 py-2 border rounded" placeholder="Enter your first name"/>
            </div>
            <div className="mb-4">
              <label htmlFor="last-name" className="block mb-2">Last Name</label>
              <input type="text" id="last-name" className="w-full px-4 py-2 border rounded" placeholder="Enter your last name"/>
            </div>
            <div className="mb-4">
              <span className="block mb-2">Status</span>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="status" value="active"/>
                  <span className="ml-2">Active</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input type="radio" className="form-radio" name="status" value="inactive"/>
                  <span className="ml-2">Inactive</span>
              </label>
            </div>
            <button type="submit" className="w-full rounded-full py-1 px-3 bg-white hover:opacity-75 text-black font-bold uppercase">Add</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AddContact;