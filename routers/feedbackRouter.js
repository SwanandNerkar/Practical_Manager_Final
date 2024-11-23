import {createAdmin,createTeacher,createStudent,getAllUsers,getAllTeacher,getAllStudent, getAllAdmin} from "../controller/Usercontroller.js";
import { createSubject,getAllSubject } from "../controller/SubjectController.js";
import { createPractical,getAllPractical} from "../controller/PracticalController.js";
import { enrollStudent } from "../controller/EnrollController.js";
import { isAdmin,isAdminOrTeacher,isTeacher } from "../middleware/Middleware.js";
import express from "express";

const router  = express.Router();

router.post("/admin/create",createAdmin);
router.post("/teacher/create",createTeacher);
router.post("/student/create",createStudent);
router.get("/userall/get",getAllUsers);
router.get("/admin/get",getAllAdmin);
router.get("/AllTeacher/get",getAllTeacher);
router.get("/AllStudent/get",getAllStudent);
router.post("/subject/create",isAdmin,createSubject);
router.post("/practical/create",isTeacher,createPractical);

router.get("/subject/get",getAllSubject);
router.post("/enroll/student",enrollStudent);
router.get("/pratical/get",getAllPractical);

export default router;



