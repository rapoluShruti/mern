import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateBook = () => {
  const [book, setBook] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishYear: "",
    imageUrl: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setFormData({
          title: response.data.title,
          author: response.data.author,
          publishYear: response.data.publishYear,
          imageUrl: response.data.imageUrl,
        });
      })
      .catch((error) => console.error("Error fetching book", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5555/books/${id}`, formData)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => console.error("Error updating book", error));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Update Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="publishYear"
          value={formData.publishYear}
          onChange={handleChange}
          placeholder="Publish Year"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
