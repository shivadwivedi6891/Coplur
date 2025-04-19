import Book from '../models/book.js';

// GET all books
export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books', error: err.message });
  }
};

// GET book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching book', error: err.message });
  }
};

// POST: Add a new book
export const addBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;

    const newBook = new Book({
      title,
      author,
      year: Number(year) // Ensure year is a number
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ message: 'Error adding book', error: err.message });
  }
};

// PUT: Update a book
export const updateBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, year: Number(year) },
      { new: true, runValidators: true }
    );

    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: 'Error updating book', error: err.message });
  }
};

// DELETE: Remove a book
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting book', error: err.message });
  }
};
