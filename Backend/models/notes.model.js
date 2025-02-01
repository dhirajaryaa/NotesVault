import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title"],
      index: true,
      unique: true,
      trim: true,
      maxlength: [40, "Title can not exceed 40 characters"],
    },
    content: {
      type: String,
      required: [true, "Please enter the content"],
      trim: true,
    },
    tags: {
      type: Array,
      default: [],
    },
    password: {
      type: String,
    },
    isSecure: {
      type: Boolean,
      default: false,
    },
    sharedLink: {
      type: String,
      default: "",
    },
    viewCount: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const Note = mongoose.model("Note", notesSchema);
