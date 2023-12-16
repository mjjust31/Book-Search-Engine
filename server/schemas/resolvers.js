const { User } = require("../models");

const resolvers = {
  //quries all users. don't really need this for the front end.
  Query: {
    me: async () => {
      return await User.find({});
    },
    findOneUser: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return await User.create({ username, email, password });
    },
  },
};

module.exports = resolvers;
