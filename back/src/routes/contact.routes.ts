import { Router } from "express";
import {
  createContactsController,
  deleteContactController,
  listContactstController,
  retrieverContactcController,
  updadeContactController,
} from "../controllers";
import { verifyAuth, verifyContactIdParameter } from "../middleware";
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
  verifyContactIdParameter,
  verifyAuth,
  verifyContactMiddlware(contactsUpdateSchema),
  updadeContactController
);

contatcRountes.get(
  "/contact/:id",
  verifyContactIdParameter,
  verifyAuth,
  retrieverContactcController
);
contatcRountes.get("/contact", verifyAuth, listContactstController);
contatcRountes.delete(
  "/contact/:id",
  verifyContactIdParameter,
  verifyAuth,
  deleteContactController
);
