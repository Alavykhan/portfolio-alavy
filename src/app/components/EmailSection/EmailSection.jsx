"use client"
import React, { useState } from 'react';
import GithubIcon from '../../../../public/image/github-icon.svg';
import LinkedinIcon from '../../../../public/image/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id='Contact'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try best to get back you!</p>
                <div className='social flex flex-row gap-2'>
                    <Link href='https://github.com/Alavykhan' target='blank'><Image src={GithubIcon} alt='github icon'/></Link>
                    <Link href='https://www.linkedin.com/in/alavykhan/' target='blank'><Image src={LinkedinIcon} alt='linkedin icon'/></Link>
                </div>
            </div>
            <div>
            {emailSubmitted ? (
                <p className="text-green-500 text-sm mt-2">
                  Email sent successfully!
                </p>
              ) : (

                <form className='flex flex-col'onSubmit={handleSubmit}>
                <label htmlFor='email'  className='text-white block text-sm font-medium mb-2'>Your email</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full mb-6 p-2.5' type="email" name='email' id='email' placeholder='Your Email' required />

                <label htmlFor='subject'  className='text-white block text-sm font-medium mb-2'>Subject</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full mb-6 p-2.5' name='subject' type="text" id='subject' placeholder='Project Name' required />

                <label htmlFor='message'  className='text-white block text-sm font-medium mb-2'>Message</label>
                <textarea className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full mb-6 p-2.5' name="message" id="message" cols="20" rows="5" placeholder='Your Message'></textarea>

                <button className='bg-gray-500 hover:bg-gray-600 text-white font-medium py-2.5 px-5 rounded-lg w-full ' type='submit'>Send Message</button>
                </form>
              )}
            </div>
        </section>
    );
};

export default EmailSection;