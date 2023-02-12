import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controllers.js"

const router = Router();

router.get("/", languageController.getLanguage);

export default router;