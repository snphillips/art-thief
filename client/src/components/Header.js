import React from 'react';

export default function Header(props) {
    return (
        <header>
          <h1 className="header-container">
            <div>
              <a href="/"
              className="header-link"
              >
                Art Thief
            </a>
            </div>
          </h1>
          <p>Be inspired by random items from the Cooper Hewitt Museum's collection</p>
        </header>
    );
}
