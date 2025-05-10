import React from 'react';

function About() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 text-center dark:bg-slate-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6 text-pink-500">About Us</h1>
      <p className="text-lg leading-7 mb-4">
        Welcome to <strong>TriSpark eBook</strong> — your digital library of curated knowledge. 
        Our platform is dedicated to providing a seamless reading experience with access to a wide range of books,
        from academic materials to leisure reading, all in one place.
      </p>
      <p className="text-lg leading-7 mb-4">
        We are a team of passionate developers and learners aiming to make learning more accessible and enjoyable.
        Whether you're preparing for exams or exploring new topics, we've got something for you.
      </p>
      <p className="text-lg leading-7">
        Built with ❤️ using the MERN stack (MongoDB, Express, React, Node.js).
      </p>
    </div>
  );
}

export default About;
