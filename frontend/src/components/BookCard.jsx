import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update/${book._id}`);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5555/books/${book._id}`)
      .then(() => alert("Book deleted successfully"))
      .catch((err) => alert("Error deleting book"));
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white bg-opacity-80 text-black">
      <img
        className="w-full h-56 object-cover"
        src={book.imageUrl}
        alt={book.title}
      />
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
        <p className="text-gray-500">Published: {book.publishYear}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <button
          onClick={handleUpdate}
          className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded focus:outline-none"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
