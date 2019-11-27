const express = require("express");
const authController = require("../controllers/authController");
const companyController = require("./../controllers/companyController");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin"));

router
  .route("/")
  .get(companyController.getAllCompanies)
  .post(companyController.createCompany);

router
  .route("/:id")
  .get(companyController.getCompany)
  .patch(companyController.updateCompany)
  .delete(
    authController.restrictTo("super-admin"),
    companyController.deleteCompany
  );

module.exports = router;
