module.exports.userModel = function (user) {
  return {
    uid: user.uid,
    firstname: user.displayName ? user.displayName.split(" ")[0] : "",
    lastname: user.displayName ? user.displayName.split(" ")[1] : "",
    email: user.email,
    admin: user.admin || false
  };
};
