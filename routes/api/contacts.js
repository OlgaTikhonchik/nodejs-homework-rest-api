const express = require("express");

const { validateBody, isValidId } = require("../../middlewares");
const { schema } = require("../../models/contact");

const router = express.Router();

const ctrl = require("../../controllers/contactsControllers");

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schema.contactAddSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schema.contactAddSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schema.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
