import React from 'react';

import AboutImg from '../assets/iam.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">I am developer</p>
          <p className="py-2 text-gray-600">
            I have spent the last 2 years in the freelance. I have always had a knack for technology
            and working with computers. In 2020 I started working with HTML and CSS to make some
            minor edits on a small project for my friend .What I thought was just a few small edits
            turned into a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn to learn more. I
            started learning javascript and was even more enthused with making websites interactive.
            I then started freelancing . I am now spending my time building projects with React JS,
            TypeScript, Firebase, Next.js and learning new technologies.
          </p>
          {/* <Link href="/pdfview" className="py-2 text-gray-900 font-semibold underline "> */}
          {/* <div
            style={{
              color: 'black',
              fontWeight: 'bold',
              textDecoration: 'underline',
              fontSize: '20px',
              cursor: 'pointer',
              marginLeft: '20px',
              marginTop: '20px',
            }}>
            {' '}
            Show my resume
          </div> */}
          {/* </Link> */}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src={AboutImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default About;
