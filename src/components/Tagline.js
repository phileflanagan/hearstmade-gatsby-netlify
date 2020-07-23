import React from 'react';

import './Tagline.sass';

const Tagline = ({ data }) => {
    return (
        <section className="topPadding subtle" id="tagline">
            <div className="container">
                <h1>Hello, We Are HearstMade</h1>
                <h2>Editorial Minds Solving Business Problems</h2>
            </div>
        </section>
    );
};

export default Tagline;
