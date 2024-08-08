const { User, Book }  = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
   Query: {
      me: async (parent, args, context) => {
         if(context.user) {
            return User.findOne({_id: context.user._id})
         }
   },
  },

  Mutation: {
      addUser: async (parent, {username, email, password}) => {
         const user = await User.create({ username, email, password });
         const token = signToken(user);
         return { token, user };
      },
      login: async (parent, { email, password }) => {
         const user = await User.findOne({ email });

         if(!user) {
            throw AuthenticationError;
         };
         const token = signToken(user);
         return { token, user };
      },
      
      saveBook: async (parent, {bookId, title, authors, description, image, link}, context) => {
         if(context.user){
            return Book.findOneAndUpdate(
               {_id: user._id},
               {
                 $addToSet: {
                   savedBooks: {bookId, title, authors, description, image, link},
                 }
               },
               { new: true, runValidators: true}
            )
         }
         throw AuthenticationError
      }
  }
}

module.exports =resolvers;
