import { Router } from "express";
import {
  createContactsController,
  deleteContactController,
  listContacstController,
} from "../controllers";
import { verifyAuth } from "../middleware";
import { verifyContactMiddlware } from "../middleware/verifyContact.middleware";
import { contactsSchema } from "../schemas/contacts/contacts";

export const contatcRountes: Router = Router();

contatcRountes.post(
  "/contact",
  verifyAuth,
  verifyContactMiddlware(contactsSchema),
  createContactsController
);

contatcRountes.get("/contact", verifyAuth, listContacstController);
contatcRountes.delete("/contact/:id", verifyAuth, deleteContactController);
