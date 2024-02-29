import React from 'react';

export default function About() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="font-sans font-extrabold text-5xl mb-8">About Me</div>
      <img
        src="../images/vecteezy_user-icon-on-transparent-background_19879186.png"className="w-52 rounded-full mb-8"   />
      <p className="mt-4 text-lg max-w-md text-center">
        Hi, I'm Liya Tsegaye, a 3rd Year Software Engineering student at AASTU.
        <br />
        Contact me via{' '}
        <a href="mailto:liyatsegaye2301@gmail.com" target="_blank" className="text-blue-300">email </a>{' '}
      </p>
      <p className="mt-4 text-lg max-w-md text-center">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, inventore in libero aliquam ex nesciunt
        voluptatum harum eaque alias qui reprehenderit totam, assumenda fugit quam quasi nostrum cum sed facere.
      </p>
    </div>
  );
}
