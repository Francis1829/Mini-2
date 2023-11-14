import React from 'react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    document.getElementById('contactForm').reset();
  };

  return (
    <>
      <main className="w-full h-full flex justify-center my-10">
        <div className="container bg-theme-color p-8 rounded-md shadow-lg">
          <div className="text-start text-[60px] tracking-wider font-bold font-[Agency]">
            Contact Us
          </div>
          <div className="container flex justify-center py-10">
            <div className="cont flex justify-start w-full">
              <div className="get flex flex-col w-[40%] m-2 font-[Roboto]">
                <div className="getin mt-7 mb-4 text-[40px] font-semibold ">
                  Get in touch
                </div>
                <div className="text-lg mb-2">Email: Sample@gmail.com</div>
                <div className="text-lg mb-7">Phone: 09 XXXX XXX</div>
                <div className="text-xl">
                  We're friendly and available to chat. Reach out to us anytime
                  and we'll happily answer your questions.
                </div>
              </div>
              <form
                id="contactForm"
                onSubmit={handleSubmit}
                className="smsinput flex flex-col w-[60%]"
              >
                <div className="flex justify-between">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="block box-border w-full rounded-md shadow-sm transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm px-4 py-2 mr-2 my-5"
                  />
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="block box-border w-full rounded-md shadow-sm transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm px-4 py-2 ml-2 my-5 "
                  />
                </div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  cols="10"
                  rows="8"
                  className="px-4 py-2 block box-border w-full rounded-md shadow-sm transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm resize-none"
                />
                <div className="bnttt mt-4">
                  <button
                    id="send"
                    type="submit"
                    className='cursor-pointer space-x-2 text-center font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-none bg-t-hover text-white border border-white shadow-sm text-md px-7 py-1 hidden lg:block m-1 hover:bg-light hover:text-black'
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
