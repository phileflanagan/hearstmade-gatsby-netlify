import React from 'react';
import { Link } from 'gatsby';

import './Contacts.sass';

const Contacts = class extends React.Component {
    render() {
        return (
            <section className="vertPadding subtle contacts">
                <div className="container df flex-row centerXY">
                    <figure className="centerXY">
                        <h6>Business Inquiries</h6>
                    </figure>
                    <figure className="centerXY">
                        <h6>Career Inquiries</h6>
                    </figure>
                    <figure className="centerXY">
                        <h6>Press Inquiries</h6>
                    </figure>
                </div>
            </section>
        );
    }
};

export default Contacts;
