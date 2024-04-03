import React from 'react';

const Button = ({ variant, children }) => {
  const buttonClasses = variant === 'outlined' 
    ? 'py-2 px-4 border border-white rounded' 
    : 'py-2 px-4 bg-black rounded';

  return (
    <div className={buttonClasses}>
      <button className="text-white text-base font-medium">{children}</button>
    </div>
  );
};

export default function Landing() {
  return (
    <div className='bg-[url("./assets/mesh-gradient.png")] bg-cover left-0 w-screen top-0 flex justify-center items-center z-1 overflow-x-hidden' style={{ margin: 0, padding: 0 }}>
      <div className="px-8 py-16 bg-transparent flex flex-col justify-center items-center gap-16">
        <h1 className="text-white text-4xl font-bold leading-tight text-center">Welcome to Academate</h1>
        <p className="text-white text-lg font-normal leading-relaxed text-center">Create remarkable projects that will set you apart.</p>
        <div className="flex gap-4">
          <Button variant="outlined">Log In</Button>
          <Button variant="filled">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
