import { DataTypes } from "sequelize";
import { db } from "../config/database";

export const Post = db.define(
  "posts",
  {
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  { timestamps: false }
);
