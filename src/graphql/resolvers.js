const { register, verifyAccount, login, auth } = require("../controllers/users")
const {
  addUserInfo,
  updateUserInfo,
  addDp,
  addCoverImg,
} = require("../controllers/user_profile")
const {
  requestConnection,
  acceptConnection,
  rejectConnection,
  getConnections,
  getAllConnections,
} = require("../controllers/connections")
const {
  follow,
  unfollow,
  getFollowers,
  getFollowings,
} = require("../controllers/follow")

module.exports = {
  Query: {
    auth,
    login,
    getFollowers,
    getFollowings,
    getConnections,
    getAllConnections,
  },
  Mutation: {
    register,
    verifyAccount,
    addUserInfo,
    updateUserInfo,
    addDp,
    addCoverImg,
    requestConnection,
    acceptConnection,
    rejectConnection,
    follow,
    unfollow,
  },
}
