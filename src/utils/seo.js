import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../Photos/Seo/favicon-96x96.png";

const seo = ({ title, pageSlug }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="canonical"
        href={`https://www.emergingtech4health.com/${pageSlug}`}
      />
      <meta
        name="description"
        content="Emerging Tech 4 Health is a platform dedicated to showcasing cutting-edge research in the health sector, powered by Artificial Intelligence. Explore the latest innovations, breakthroughs, and applications of AI in healthcare."
      />
      <meta
        name="keywords"
        content="Health, Artificial Intelligence, AI in Healthcare, Health Research, Medical AI, Emerging Technology, Healthcare Innovation, Machine Learning, Data Science, Emerging Tech 4 Health, emergingtech4health, emerging tech for health"
      />

      <meta name="author" content="emergingtech4health" />

      <meta
        property="og:title"
        content={
          title ? title : "Emerging Tech 4 Health - AI-Powered Health Research"
        }
      />
      <meta
        property="og:description"
        content="Discover the latest AI-driven research and innovations in the health sector at Emerging Tech 4 Health. Stay ahead with insights into how Artificial Intelligence is transforming healthcare."
      />
      <meta property="og:image" content={favicon} />
      <meta
        property="og:url"
        content={`https://www.emergingtech4health.com/${pageSlug}`}
      />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content={favicon} />
      <meta
        name="twitter:title"
        content={
          title ? title : "Emerging Tech 4 Health - AI-Powered Health Research"
        }
      />
      <meta
        name="twitter:description"
        content="Explore groundbreaking AI applications in healthcare at Emerging Tech 4 Health. Learn about the latest research and innovations in the medical field."
      />
      <meta name="twitter:image" content={favicon} />
    </Helmet>
  );
};

export default seo;
