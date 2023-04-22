import React from 'react'

const SellForm = () => {
  return (
    <div className='h-[100lvh] flex'>
        <div className='flex-[4]'></div>
        <div className='flex-[6]'>
            <form className='flex flex-col border-black border'>
                <label>Name</label>
                <input type='text'/>
                <label>Item Type</label>
                <select>
                    <option>Camera</option>
                    <option>Phone</option>
                    <option>Computer</option>
                    <option>Laptop</option>
                </select>
                <label>Item Name</label>
                <input type='text'/>
                <label>Pictures</label>
                <input type='file'/>
            </form>
        </div>
    </div>
  )
}

export default SellForm