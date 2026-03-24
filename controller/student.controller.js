import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../services/studentService.js";


export const getStudents = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getStudent = async (req, res) => {
  try {
    const student = await getStudentById(req.params.id);
    if (!student) return res.status(404).json({ message: "Not found" });

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addStudent = async (req, res) => {
  try {
    const result = await createStudent(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const editStudent = async (req, res) => {
  try {
    const result = await updateStudent(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const removeStudent = async (req, res) => {
  try {
    const result = await deleteStudent(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};