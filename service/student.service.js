import { ObjectId } from "mongodb";
import { client, MONGO_DATABASE } from "../index.js";

export const getAllStudents = async () => {
  return await client
    .db(MONGO_DATABASE)
    .collection("studentDetail")
    .find({})
    .toArray();
};


export const getStudentById = async (id) => {
    const data = await client
      .db(MONGO_DATABASE)
      .collection("studentDetail")
      .findOne({ _id: new ObjectId(id) });
    if (data) return data;
    else return null;}


export const createStudent = async (studentData) => {
    const {name, email, course,marks,created_at } = studentData;
    const temp = await client
      .db(MONGO_DATABASE)
      .collection("studentDetail")
      .insertOne({
        name: name,
        email: email,
        course:course,
        marks:marks,
        created_at:created_at
      });

    return temp;
    }

export const updateStudent = async (id,updateData) => {
    const {name,email, course,marks,created_at} = updateData;
    const temp = await client 
        .db(MONGO_DATABASE)
        .collection("studentDetail")
        .updateOne({
            _id: new ObjectId(id)
        },
        {
            $set:{
                name:name,
                email:email,
                course:course,
                marks:marks,
                created_at:created_at

            }
        }

    )
    return temp
    
}
export const deleteStudent = async (id) => {
  const student = await client
    .db(MONGO_DATABASE)
    .collection("studentDetail")
    .deleteOne({ _id: new ObjectId(id) });

  return student;
};