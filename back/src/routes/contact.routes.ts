import { Router } from "express";
import {
  createContactsController,
  deleteContactController,
  listContactstController,
  retrieverContactcController,
  updadeContactController,
} from "../controllers";
import { verifyAuth } from "../middleware";
import { verifyContactMiddlware } from "../middleware/verifyContact.middleware";
import {
  contactsSchema,
  contactsUpdateSchema,
} from "../schemas/contacts/contacts";

export const contatcRountes: Router = Router();

contatcRountes.post(
  "/contact",
  verifyAuth,
  verifyContactMiddlware(contactsSchema),
  createContactsController
);
contatcRountes.patch(
  "/contact/:id",
  verifyAuth,
  verifyContactMiddlware(contactsUpdateSchema),
  updadeContactController
);

contatcRountes.get("/contact/:id", verifyAuth, retrieverContactcController);
contatcRountes.get("/contact", verifyAuth, listContactstController);
contatcRountes.delete("/contact/:id", verifyAuth, deleteContactController);
