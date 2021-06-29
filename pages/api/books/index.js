import connectDB from "../middleware/mongodb";
import Book from "../models/book";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Check if name, email or password is provided
    const { title, author, pages, price } = req.body;
    if (title && author && pages && price) {
      try {
        const book = new Book({
          title,
          author,
          pages,
          price,
        });
        // Create new user
        const bookCreated = await book.save();

        return res.status(200).send(bookCreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
