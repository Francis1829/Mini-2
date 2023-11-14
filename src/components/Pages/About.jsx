import React from 'react'
import Navbar from '../Navbar'

export default function Category() {
  return (
    <>
    <main className='w-full h-full flex justify-center'> 
     <div class="container mt-[100px]">
        <div class="about-us flex flex-col m-5 items-center justify-center bg-theme-color p-14 rounded-[16px]" id="about">
            <div class="about_ mb-5">

               <h1 className='font-[Agency] text-[30px] text-white'>about us</h1></div>

            <div class="about_p text-center text-[20px] text-[#ccc]">Isabelaco is an online travel platform that brings high-value and rewarding travel experiences to people all over the isabela through the isabelaco website. Our mission is to empower everyone to be a traveler by offering affordable deals on hotels, Private villas, activities, and more, with an isabelaco booking experience that is hassle-free from start to finish.
            we’ve made searching and booking travel as easy and stress-free as it should be. Isabelaco customer care available 24/7.
            </div>
            </div>
        </div>
        </main>
        
    <div class="container">
        <div class="with_us m-5 flex justify-center text-white font-[Sudo]">
            <div class="with_">
                <div class="with__ text-[40px] my-[80px] mx-[2rem] text-black">What we offer.</div>
                <div class="bg-theme-color rounded-[16px] w-[350px] h-[320px] m-4 p-[40px]">
                    <div class="with_t text-[24px] ">24/7 Customer Care.</div>
                </div>
                <div class="bg-theme-color rounded-[16px] w-[350px] h-[320px] m-4 p-[40px]">
                    <div class="with_t text-[24px]">Travel and Villas Guides.</div>
                    <div class="with-img d-flex justify-content-center align-items-center mt-4">
                      
                    </div>
                </div>
            </div>
            <div class="with_2 text-[24px]">
                <div class="bg-theme-color rounded-[16px] w-[350px] h-[320px] m-4 p-[40px]">
                    <div class="with_t">Earn Rewards from every bookings.</div>
                    <div class="with-img d-flex justify-content-center align-items-center mt-2">
                        
                    </div>
                </div>
                <div class="bg-theme-color rounded-[16px] w-[350px] h-[320px] m-4 p-[40px]">
                    <div class="with_t">Private Villas, House, Hotels, Appartments, and more.</div>
                    <div class="with-img d-flex justify-content-center align-items-center">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
