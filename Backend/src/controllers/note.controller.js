import { AsyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { Note } from "../../models/notes.model.js";

// create new notes
const createNotes = AsyncHandler(async (req, res) => {
  const { title, password, content, isSecure, tags } = req.body;

  if ([title, password, content, isSecure, tags].some((item) => item === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const collectionRes = await Note.create({
    title,
    content,
    password,
    isSecure,
    tags,
  });
  

  res.status(201).json(new ApiResponse(201,collectionRes ,"Notes Created :)"));
});

export { createNotes };
