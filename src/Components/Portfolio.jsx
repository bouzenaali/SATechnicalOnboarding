/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/HT Code-a-thon_ Website Design - HT School.jpg";

const imageAltText = "laptop and programming languages";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Spam Classification using Machine Learning",
    description: "🤖 ML project that classifies emails/SMS to spam or non-spam",
    url: "https://github.com/bouzenaali/spam-classification",
  },
  {
    title: "puddle",
    description: "💸 an online marketplace where people can buy and sell items built with django",
    url: "https://github.com/bouzenaali/puddle",
  },
  {
    title: "snake game",
    description: "🐍 snake game developed with vanilla java",
    url: "https://github.com/bouzenaali/snake-game",
  },
  {
    title: "react.js calculator",
    description:
      "🔢 react.js calculator with all the operations and the logic in it coded by me (didn't use any library for that)",
    url: "https://github.com/bouzenaali/reactjs-calculator",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.title}>
              <div className="box">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                <p className="small">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
