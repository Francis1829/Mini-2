import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmails = JSON.parse(localStorage.getItem('newsletter')) || [];
    storedEmails.push(email);
    localStorage.setItem('newsletter', JSON.stringify(storedEmails));
    setEmail('');
  };

  return (
    <>
    <div className="w-full">
        <div className="w-full flex justify-center items-center">
        <div className="newsletter w-[50%] text-center">
      <h2 className='font-[Agency] font-semibold lg:text-[30px] text-[20px]'>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className='flex justify-around items-center my-5'>
      <input
                  name="email"
                  id="email"
                  placeholder="sample@gmail.com"
                  className="block box-border w-full rounded-md shadow-md transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm px-4 py-2"
          value={email}
          onChange={handleEmailChange}
        />
        <div className='flex justify-center items-center'>
        <button type="submit" className='cursor-pointer space-x-2 text-center text-white font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-theme-color border shadow-md text-md px-7 py-2 hidden lg:block m-1 hover:bg-light hover:text-black'>Subscribe</button></div>
      </form>
    </div>
    </div>  
    </div>
    </>
  )
}

export default Newsletter;
