const RoleModel = require("../models/Role");

const verifyAdmin = (verifyRole) => {
  return async (req, res, next) => {
    const role = await RoleModel.findById("666edcb37110aa7008b7f1d2", "name");
    if (role.name === verifyRole) {
      next();
    } else {
      return res.sendStatus(403);
    }
  };
};

module.exports = { verifyAdmin };

// admin role : 666edcb37110aa7008b7f1d2
// executor role : 666edcc37110aa7008b7f1d3
