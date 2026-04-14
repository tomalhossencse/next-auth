"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

const userCollection = dbConnect("users");

export const postUser = async (payload) => {
  console.log(payload);

  //   1 . cheack user exit or not

  const isExist = await userCollection.findOne({ email: payload.email });
  if (isExist) {
    return {
      success: false,
      message: "user already existed",
    };
  }

  //  2. create new user
  const hashPassword = await bcrypt.hash(payload.password, 10);

  const newUser = {
    ...payload,
    createdAt: new Date().toISOString(),
    role: "user",
    password: hashPassword,
  };
  console.log(newUser);

  //   3. save user in db

  const result = await userCollection.insertOne(newUser);
  if (result.acknowledged) {
    return {
      success: true,
      message: `user created with ${result.insertedId.toString()}`,
    };
  } else {
    return {
      success: false,
      message: `something went wrong.try again`,
    };
  }
};
