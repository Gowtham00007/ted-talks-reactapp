import React, { useState } from "react";
import "./styles.css";

const tedtalksLists = {
  Technology: [
    {
      name: "How AI can enhance our memory, work and social lives",
      rating: " 4.6 out of 5 stars",
      discription:
        "Tom Gruber, one of the co-creators of Siri, discusses the potential of artificial intelligence to enhance human memory and improve our work and social interactions. He explores how AI can be a valuable tool for augmenting our capabilities and helping us achieve more meaningful connections."
    },
    {
      name: "The Internet of Things that Talk to Us",
      rating: "4.4 out of 5 stars",
      discription:
        "Kevin Ashton, a pioneer in the field of IoT (Internet of Things), talks about the interconnected world of everyday objects and devices that communicate with each other through the internet. He discusses the potential benefits, challenges, and implications of this technology for our lives and industries."
    }
  ],
  Entertainment: [
    {
      name: "The Art of Asking",
      rating: " 4.9 out of 5 stars",
      discription:
        "Amanda Palmer, a musician and performance artist, shares her perspective on the connection between artists and their audience. She discusses the power of vulnerability, the value of asking for support, and the transformational impact of genuine human connection in the world of entertainment."
    },
    {
      name: "Play is More than Fun",
      rating: " 4.7 out of 5 stars",
      discription:
        "Stuart Brown, a psychiatrist and founder of the National Institute for Play, explores the essential role of play in human development and creativity. He discusses how play shapes our brains, fosters innovation, and contributes to our overall well-being, emphasizing that it's not just for children."
    }
  ],
  Design: [
    {
      name: "Design and Destiny",
      rating: "4.5 out of 5 stars",
      discription:
        " Philippe Starck, a renowned industrial designer, reflects on the role of design in shaping our lives and influencing the future. He discusses the importance of ethical design, sustainability, and creating products that enhance the human experience."
    },
    {
      name: "Embrace the Near Win",
      rating: "4.6 out of 5 stars",
      discription:
        "Sarah Lewis, an art historian and curator, explores the concept of the near win in creative pursuits. She discusses how the pursuit of mastery and the embrace of setbacks and almost-successes can lead to greater innovation and growth in the world of design and other creative endeavors."
    }
  ]
  // const tedtaks = Object.keys(tedtalksLists);
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Design");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "black" }}>
        {" "}
        <span style={{ color: " red" }}>TED</span> talks
      </h1>
      <h2> Talks to stir your curiosity Find just the right one </h2>

      <div>
        {Object.keys(tedtalksLists).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div id="divlist">
        <ol>
          {tedtalksLists[selectedGenre].map((talk) => (
            <li key={talk.name}>
              {" "}
              <div id="name">{talk.name}</div>
              <div id="rating">{talk.rating}</div>
              <div id="discription">{talk.discription}</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
