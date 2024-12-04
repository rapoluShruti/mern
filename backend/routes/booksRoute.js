// import express from "express";
// import { Book } from "../models/bookModel.js";
// const router = express.Router();
// router.post("/", async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       return res.status(400).send({
//         message: "All feilds are required",
//       });
//     }
//     //creating a new book
//     const newBook = {
//       title: req.body.title,
//       author: req.body.author,
//       publishYear: req.body.publishYear,
//     };
//     //calling fucntion
//     const book = await Book.create(newBook);
//     return res.status(201).send(book);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// //get all books
// router.get("/", async (req, res) => {
//   try {
//     const books = await Book.find({});
//     return res.status(200).json({
//       count: books.length,
//       data: books,
//     });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// //get book by id
// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const books = await Book.findById(id);
//     return res.status(200).json(books);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// //update book
// router.put("/:id", async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       return res.status(400).send({
//         message: "all feilds are required",
//       });
//     }
//     const { id } = req.params;

//     const result = await Book.findByIdAndUpdate(id, req.body);

//     if (!result) {
//       return res.status.apply(400).json({ message: "Book not found" });
//     }

//     return res.status(200).send({ message: "Book upadted successfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// //deleet book
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await Book.findByIdAndDelete(id);

//     if (!result) {
//       return res.status(404).json({ message: "Book not found" });
//     }

//     return res.status(200).send({ message: "Book deleted successfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// export default router;
import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();

// POST: Create a new book
router.post("/", async (req, res) => {
  try {
    // Ensure all fields are provided, including imageUrl
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.imageUrl
    ) {
      return res.status(400).send({
        message: "All fields are required",
      });
    }

    // Creating a new book object, now including the imageUrl
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      imageUrl: req.body.imageUrl, // Added imageUrl
    };

    // Creating the book in the database
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// GET: Fetch all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// GET: Fetch a single book by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// PUT: Update a book
router.put("/:id", async (req, res) => {
  try {
    // Ensure all fields are provided, including imageUrl
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.imageUrl
    ) {
      return res.status(400).send({
        message: "All fields are required",
      });
    }

    const { id } = req.params;
    const updatedData = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      imageUrl: req.body.imageUrl, // Added imageUrl
    };

    const result = await Book.findByIdAndUpdate(id, updatedData, { new: true });

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res
      .status(200)
      .send({ message: "Book updated successfully", book: result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// DELETE: Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
