import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../article-content';
import heroVideo from '../../assets/Dota_2_Logo.mp4';

function HomePage() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-copy">
            <p className="eyebrow">Self Improvement. Growth. Progress.</p>
            <h1>Personal Project of Renaire Odarve</h1>
            <p className="lead">
              Sharing progress of his self improvement journey to 
              inspire others, while also helping himself for self improvement.
            </p>
            <div className="hero-actions">
              <Link to="/articles" className="button-link primary">
                Browse articles
              </Link>
              <Link to="/about" className="button-link secondary">
                About the project
              </Link>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>{articles.length}+</strong>
                <span>Articles</span>
              </div>
              <div className="stat">
                <strong>29%</strong>
                <span>Progress</span>
              </div>
              <div className="stat">
                <strong>9</strong>
                <span>Goals still to accomplish</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-panel">
              <video autoPlay loop muted playsInline >
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        <section className="feature-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Highlights</p>
            <h2>Goals Accomplished</h2>
          </div>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Attend a Concert</h3>
            <p>
              Able to go to a concert without help despite social anxiety.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Go to a Mall</h3>
            <p>
              Able to go to a mall and walk alone without help despite social anxiety.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>None</h3>
            <p>
              Need more goals to accomplish.
            </p>
          </div>
        </div>
        </section>

        <section className="articles-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Articles</p>
            <h2>Most reads</h2>
          </div>
          <Link to="/articles" className="button-link primary">
            View all
          </Link>
        </div>
        <div className="article-preview-grid">
          {featuredArticles.map((article) => (
            <div key={article.name} className="article-preview">
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0, 150)}...</p>
              <Link to={`/articles/${article.name}`} className="button-link secondary">
                Read article
              </Link>
            </div>
          ))}
        </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;