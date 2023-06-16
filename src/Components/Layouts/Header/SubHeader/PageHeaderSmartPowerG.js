import React from 'react';

function PageHeaderSmartPowerG() {
  return (
    <header className="entry-header">
      <h1 className="entry-title">
        Smart Power Gym
      </h1>
      <nav
        id="thebase-breadcrumbs"
        aria-label="Breadcrumbs"
        className="thebase-breadcrumbs"
      >
        <div className="thebase-breadcrumb-container">
          <span>
            <a
              href="/"
              itemprop="url"
              className="thebase-bc-home"
            >
              <span>Gimnasios</span>
            </a>
          </span>{' '}
          <span className="bc-delimiter">/</span>{' '}
          <span className="thebase-bread-current">
            Smart Power Gym
          </span>
        </div>
      </nav>
    </header>
  );
}

export default PageHeaderSmartPowerG;