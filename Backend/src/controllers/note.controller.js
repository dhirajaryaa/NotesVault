import { AsyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { Note } from "../../models/notes.model.js";
import {nanoid} from "nanoid";

// create new notes
const createNotes = AsyncHandler(async (req, res) => {
  const { title, password, content, isSecure, tags, sharedLink } = req.body;

  if ([title, password, content, isSecure].some((item) => item === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const collectionRes = await Note.create({
    title,
    content,
    password,
    isSecure,
    tags: tags || [],
    sharedLink: sharedLink || nanoid(10),
  });

  const data = await Note.findById(collectionRes._id).select(
    "-password -viewCount"
  );

  res.status(201).json(new ApiResponse(201, data, "Notes Created :)"));
});

export { createNotes };
