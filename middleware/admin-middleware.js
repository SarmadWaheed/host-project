const adminmiddleware = async (req, res, next) => {
  try {
    // Ensure req.user exists and has the 'isAdmin' property
    if (!req.user || typeof req.user.isAdmin === 'undefined') {
      return res.status(403).json({ message: "Cannot access because the user is not an admin or user information is missing" });
    }

    const admin = req.user.isAdmin;

    // Check if the user is an admin
    if (!admin) {
      return res.status(403).json({ message: "Cannot access because the user is not an admin" });
    }

    // If the user is an admin, continue to the next middleware/handler
    next();
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

module.exports = adminmiddleware;
