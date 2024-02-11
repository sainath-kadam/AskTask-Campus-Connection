import React from "react";
import "./Home.css";

const HomeBanner = () => {
  return (
    <div className="homepage">
      <div className="banner">
        <h1>Unlocking the World of Code</h1>
        <p>Your one-stop destination for learning.</p>
      </div>

      <div className="article">
        <div className="article-content">
          <h2>Empowering Enlightenment Through Shared Knowledge</h2>
          <p>
            Group study and sharing is a powerful educational tool that fosters
            collaboration and deepens understanding. When individuals come
            together to study, they bring a diverse range of perspectives,
            knowledge, and insights to the table. This collective synergy
            enables participants to clarify doubts, tackle complex problems, and
            explore subjects from various angles. Through open discussions,
            information exchange, and the pooling of resources, group study
            enriches the learning experience, making it more engaging and
            interactive. Moreover, it instills a sense of responsibility and
            accountability, as each member contributes to the group's success.
            In this collaborative environment, not only do participants absorb
            information more effectively, but they also cultivate essential
            skills like teamwork, communication, and critical thinking. Group
            study and sharing, therefore, serve as a dynamic platform for mutual
            growth and academic excellence.
          </p>
        </div>

        <div className="article-image">
          <img
            src="https://i.ibb.co/8sxdxrb/fotis-fotopoulos-LJ9-KY8p-IH3-E-unsplash.jpg"
            alt="Article"
          />
        </div>
      </div>

      <div className="article">
        <div className="article-image">
          <img
            src="https://i.ibb.co/8sxdxrb/fotis-fotopoulos-LJ9-KY8p-IH3-E-unsplash.jpg"
            alt="Article"
          />
        </div>

        <div className="article-content">
          <h2>
            Exploring Technological Advancements: A Dive into Modern Innovations
          </h2>
          <p>
  In today's rapidly evolving digital landscape, technological breakthroughs like <strong>AI</strong>, <strong>IoT</strong>, <strong>blockchain</strong>, <strong>AR</strong>, and <strong>VR</strong> are revolutionizing industries. <strong>AI</strong> empowers machines to learn, adapt, and perform human-like tasks, enhancing efficiency across sectors. <strong>IoT</strong> connects devices, enabling automation and convenience in smart homes and industrial settings. <strong>Blockchain</strong> ensures secure, transparent transactions, promising to transform finance and beyond. <strong>AR</strong> and <strong>VR</strong> blur physical and digital boundaries, offering immersive experiences in various fields. As technology advances, cybersecurity and privacy are paramount, driving innovations to safeguard data. Embracing these trends fosters innovation, addresses challenges, and shapes a more connected future. Leveraging these technological advancements unlocks new opportunities, accelerates progress, and facilitates a seamless integration of digital and physical worlds.
</p>


        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
