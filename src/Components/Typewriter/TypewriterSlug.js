import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterSlug = () => {

    return (
        <div>
            <h2> {' '}
                <span className="bg-black text-white">
                    <Typewriter 
                        words={[ 'Junior MERN Stack Developer💻', 'Junior Front-end Developer 💻', 'Junior Full Stack Developer💻', 'Junior React Developer💻' ]}
                        cursor
                        cursorStyle='∎'
                        typeSpeed={90}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        loop={1000}
                    />
                </span>
            </h2>
        </div>
    );
};

export default TypewriterSlug;