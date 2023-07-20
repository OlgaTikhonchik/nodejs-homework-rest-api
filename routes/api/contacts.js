const express = require("express");

const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schema } = require("../../models/contact");

const router = express.Router();

const ctrl = require("../../controllers/contactsControllers");

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schema.contactAddSchema),
  ctrl.addContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.removeContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schema.contactAddSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schema.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
