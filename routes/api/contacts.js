const express = require("express");

const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/contactsSchema");

const router = express.Router();

const ctrl = require("../../controllers/contactsControllers");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schema.contactSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put(
  "/:contactId",
  validateBody(schema.contactSchema),
  ctrl.updateContact
);

module.exports = router;
