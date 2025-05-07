import React, { useEffect } from 'react'; // Import useEffect
import '../styles/news_updates.css';

const posts = [
  {
    title: 'Changelog for 2024',
    description: 'Explore the latest updates and enhancements in our 2024 changelog. Discover new latest updates and enhancements in our 2024 changelog.',
    date: 'January 01, 2021',
  },
  {
    title: 'Understanding React Hooks',
    description: 'A comprehensive guide to understanding and using React Hooks in your projects.',
    date: 'February 15, 2021',
  },
  {
    title: 'CSS Grid Layout',
    description: 'Learn how to create complex layouts easily with CSS Grid.',
    date: 'March 10, 2021',
  },
];

const NewsAndUpdates = () => {
  // useEffect(() => {
  //   const container = document.querySelector('.news-container');

  //   for (let i = 0; i < 100; i++) {
  //     const particle = document.createElement('div');
  //     particle.classList.add('particle');

  //     const randomX = Math.random() * window.innerWidth;
  //     const randomY = Math.random() * window.innerHeight;
  //     particle.style.left = `${randomX}px`;
  //     particle.style.top = `${randomY}px`;

  //     container.appendChild(particle);
  //   }
  // }, []);


    return (
        <div className="news-container">
            <div className='news-content'>
                <h2 className="news-heading">News & Updates</h2>
                <p>The latest news and updates</p>
                
            </div>
          <div className="posts-container">
            <div className='left'>
            <iframe width="600" height="320" src="https://www.youtube.com/embed/4OrD4Y1Nd5c" title="Innovation lab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='right'>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div key={index} className="post">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                  <p className="post-date">{post.date}</p>
                </div>
              ))
            ) : (
              <p>No posts available</p>
            )}
            </div>
       
          </div>
        </div>
      );
    };
    
    export default NewsAndUpdates;