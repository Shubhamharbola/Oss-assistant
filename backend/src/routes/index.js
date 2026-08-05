import { Router } from "express"
import express from "express"
import {health} from '../controller/healtController.js'
import { fetchRepodata ,healthcheck} from "../controller/repoController.js";
const Port = process.env.PORT || 8000;
const router = express.Router();

router.get("/",health);
router.get("/api/repository",fetchRepodata);

router.get("/api/repository/health",healthcheck);

export default router;