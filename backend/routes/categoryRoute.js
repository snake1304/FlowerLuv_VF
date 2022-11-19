const express = require("express");
const {
  newCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/category/new").post(isAuthenticatedUser, newCategory);
router.route("/categories").get(getAllCategories);
router
  .route("/admin/category/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateCategory)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCategory);

module.exports = router;
