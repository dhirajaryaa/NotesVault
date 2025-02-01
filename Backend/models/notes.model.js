import mongoose from "mongoose";
import bcrypt from "bcrypt";

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title"],
      index: true,
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
    sharedId: {
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

notesSchema.pre("save", async function (next) {
  if (!this.isModified) return null;
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

notesSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const Note = mongoose.model("Note", notesSchema);
