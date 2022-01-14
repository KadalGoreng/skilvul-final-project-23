const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/admin.controller");

router.get("/", AdminController.getAdmins);
router.get("/get-peserta", AdminController.getPesertas);
router.get("/get-mentor", AdminController.getMentors);
router.get("/get-map", AdminController.getMaps);
router.get("/get-quest", AdminController.getQuests);
router.get("/get-todo", AdminController.getTodos);
router.get("/get-feedback", AdminController.getFeedbacks);
router.post("/login", AdminController.loginAdmin);
router.post("/create-peserta", AdminController.createPeserta);
router.post("/create-mentor", AdminController.createMentor);
router.post("/register", AdminController.createAdmin);

module.exports = router;
