import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "To Kill a Mockingbird",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    },
    {
      name: "Little Women",
      rating: "5/5"
    }
  ],
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ],

  Comic: [
    {
      name: "Watchmen",
      rating: "5/5"
    },
    {
      name: "The Boy, the Mole, the Fox and the Horse",
      rating: "4/5"
    },
    {
      name: "The Walking Dead: Compendium One",
      rating: "5/5"
    }
  ],
  Mystery: [
    {
      name: "The Adventures of Sherlock Holmes",
      rating: "5/5"
    },
    {
      name: "And Then There Were None",
      rating: "3/5"
    },
    {
      name: "The Night Fire",
      rating: "3.5/5"
    }
  ],
  Fantasy: [
    {
      name: "Circe",
      rating: "5/5"
    },
    {
      name: "Ninth House",
      rating: "3/5"
    },
    {
      name: "The Water Dancer",
      rating: "3.5/5"
    }
  ],
  HistoricalFiction: [
    {
      name: "The Help",
      rating: "3.5/5"
    },
    {
      name: "One Hundred Years of Solitude",
      rating: "4.5/5"
    },
    {
      name: "One Hundred Years of SolitudeMemoirs of a Geisha",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <header id="logo">
        <h1>
          {" "}
          <span role="img">📚</span> BESTBOOKS{" "}
        </h1>
      </header>
      <section className="hero">
        <div id="heading">
          {" "}
          Checkout my favorite books. Select a genre to get started
        </div>

        <div>
          {Object.keys(bookDB).map((genre) => (
            <button
              id="btn"
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer"
              }}
            >
              {genre}
            </button>
          ))}
        </div>
        <hr />
        <div style={{ textAlign: "center" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {bookDB[selectedGenre].map((book) => (
              <li className="list" key={book.name}>
                {" "}
                <div style={{ fontSize: "larger" }}> {book.name} </div>
                <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer class="end">
        <h1>
          Made by{" "}
          <a href="https://utsav-kumar.netlify.app/" target="_blank">
            Utsav kumar
          </a>
        </h1>
      </footer>
    </div>
  );
}
