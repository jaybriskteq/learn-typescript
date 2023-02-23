import { Router } from "express";
import { CreateReminderDTO } from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();
let reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDTO;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const iduser: number = parseInt(id);
  let ele: Reminder | undefined = reminders.find((e) => e.id === iduser);
  const { title } = req.body as CreateReminderDTO;
  ele!.titleset = title;
  res.status(201).json(ele);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const iduser: number = parseInt(id);
  reminders = reminders.filter((e) => e.id !== iduser);
  res.status(201).json(reminders);
});

export default router;
