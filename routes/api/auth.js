const express = require("express");
const ctrl = require("../../controllers/authControllers");

const { validateBody, authenticate, upload } = require("../../middlewares");
const { schema } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schema.registerSchema), ctrl.register);

router.get("/verify/:verificationCode", ctrl.verifyEmail);

router.post(
  "/verify",
  validateBody(schema.emailSchema),
  ctrl.resendVerifyEmail
);

router.post("/login", validateBody(schema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/users",
  authenticate,
  validateBody(schema.updateSubscriptionSchema),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
