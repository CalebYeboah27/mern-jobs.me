import express from "express";

import {
  getAllJobs,
  createJob,
  showStats,
  updateJob,
  deleteJob,
} from "../controllers/jobs.controller.js";

const jobsRouter = express.Router();

jobsRouter.route("/jobs").get(getAllJobs).post(createJob);
// place stats before :id
jobsRouter.route("/stats").get(showStats).post(createJob);
jobsRouter.route("/jobs").patch(updateJob).delete(deleteJob)


export default jobsRouter;
