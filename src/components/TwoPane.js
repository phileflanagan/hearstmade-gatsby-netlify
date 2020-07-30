import React from 'react';

import './TwoPane.sass';

const TwoPane = ({ data }) => {
    return (
        <section className="botPadding subtle" id="twopane">
            <div className="container">
                <div className="panel-container">
                    <div className="panel panel-left">
                        <h3>Branded Content</h3>
                        <p>
                            Our renowned Branded Content programs connect our
                            partners with Hearst’s hyper-engaged audiences by
                            leveraging the appeal and trust of Hearst Magazines’
                            brands on behalf of our clients. Our editorial
                            expertise spans just about every passion
                            point—fashion, beauty, food, fitness, autos, travel,
                            and more!—which means we can create a program
                            tailored just for you. We work diligently to
                            understand your business goals and communication
                            objectives, and we present the most compelling
                            editorial brand alignment based on data and
                            insights. From there, our award winning content
                            creators develop editorial-minded programs that
                            connect with the audiences we know so well. We
                            obsess over what those audiences read, watch, like,
                            share, and buy. Which, in turn, drives people to
                            action. Let’s work together to inspire and delight!
                        </p>
                    </div>
                    <div className="panel panel-right">
                        <h3>Custom Content</h3>
                        <p>
                            As a modern marketer, you’re tasked every day with
                            finding ways to keep your channels active and engage
                            consumers in new ways. At Hearst, we know a lot
                            about that. We know what consumers crave, what makes
                            them click, what makes them come back. And we know
                            how to get a message across in an authentic way. For
                            years we’ve been in the business of creating content
                            for OUR audiences. Now we’re putting that know-how
                            to work for YOU, bringing you insights from our
                            audience of over 300 million, editorial brain power
                            across industry sectors, and an entire toolbox of
                            capabilities ranging from UX/UI design to SEO
                            expertise to distribution and monetization
                            opportunities. Let’s create custom content to
                            connect with and inspire your consumers to act!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TwoPane;
