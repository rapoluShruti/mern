import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch books data (this can also include demo books if necessary)
    axios
      .get("http://localhost:5555/books")
      .then((response) => setBooks(response.data.data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  // Add some demo books manually to the books array for demonstration
  const demoBooks = [
    {
      _id: "demo1",
      title: "Demo Book 1",
      author: "You can perform operations on this book",
      publishYear: "2024",

      imageUrl:
        "https://images.ctfassets.net/o78em1y1w4i4/LHN0F94cNFCx1drEcfcsY/984e632abf38018f2a6ab22c4b61fdc6/teaser-book-with-heart-pages.jpg?fm=webp&w=1160&q=75",
      isDemo: true,
    },
    {
      _id: "demo2",
      title: "Demo Book 2",
      author: "You can perform operations on this book",
      publishYear: "2024",
      Note: "Operations on this books can't be performed",
      imageUrl:
        "https://cdn.vectorstock.com/i/500p/98/52/watercolor-book-flowers-vector-47999852.jpg",
      isDemo: true,
    },
    {
      _id: "demo3",
      title: "Demo Book 3",
      author: "You can perform operations on this book",
      publishYear: "2024",
      Note: "Operations on this books can't be performed",
      imageUrl:
        "https://assets.blurb.com/pages/website-assets/lp-photo-books/5x5c-bd07817647d22fc4212fce841fc7d9a29e98200021600d6a858a4e737dfb5054.jpg",
      isDemo: true,
    },
    {
      _id: "demo4",
      title: "Demo Book 4",
      author: "You can perform operations on this book",
      publishYear: "2024",
      Note: "Operations on this books can't be performed",
      imageUrl:
        "https://assets.blurb.com/pages/website-assets/lp-photo-books/8x10c-3ebf23b4e0071cd7c914bbbdf59ab946166689b8a9fa4653aff2c315160b2d3f.jpg",
      isDemo: true,
    },
    {
      _id: "demo5",
      title: "Demo Book 5",
      author: "You can perform operations on this book",
      publishYear: "2024",
      Note: "Operations on this books can't be performed",
      imageUrl:
        "https://i.etsystatic.com/32632255/r/il/84fe26/4879452506/il_570xN.4879452506_bnih.jpg",
      isDemo: true,
    },
  ];

  // Combine fetched books and demo books
  const allBooks = [...books, ...demoBooks];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBooks.map((book) => (
          <BookCard key={book._id} book={book} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

export default BooksList;
