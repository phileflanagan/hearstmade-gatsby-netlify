import React from 'react';

import './Tagline.sass';

const Tagline = ({ data }) => {
    return (
        <section className="topPadding subtle" id="tagline">
            <div className="container">
                <h1 className="f700">Hello, We&nbsp;Are HearstMade</h1>
                <h2>Editorial Minds Solving Business&nbsp;Problems</h2>
            </div>
        </section>
    );
};

export default Tagline;
