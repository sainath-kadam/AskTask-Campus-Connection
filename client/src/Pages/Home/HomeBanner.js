import React from 'react';
import './Home.css';

const HomeBanner = () => {
  return (
    <div className="homepage">
      <div className="banner">
        <h1>Unlocking the World of Code</h1>
        <p>Your one-stop destination for learning.</p>
      </div>

      <div className="article">
        <div className="article-content">
          <h2>Sharing knowledge is a journey of mutual enlightenment, where every contribution lights the path for others</h2>
          <p>
          Group study and sharing is a powerful educational tool that fosters collaboration and deepens understanding. When individuals come together to study, they bring a diverse range of perspectives, knowledge, and insights to the table. This collective synergy enables participants to clarify doubts, tackle complex problems, and explore subjects from various angles. 
          Through open discussions, information exchange, and the pooling of resources, group study enriches the learning experience, making it more 
          engaging and interactive. Moreover, it instills a sense of responsibility and accountability, as each member contributes to the group's success. In this collaborative environment, not only do participants absorb information more effectively, but they also cultivate essential skills like teamwork, communication, and critical thinking. Group study and sharing, therefore, serve as a dynamic platform for mutual growth and academic excellence.
          </p>
        </div>

        <div className="article-image">
          <img src="https://i.ibb.co/8sxdxrb/fotis-fotopoulos-LJ9-KY8p-IH3-E-unsplash.jpg" alt="Article" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
