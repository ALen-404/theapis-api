module.exports = (app) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const PostSchema = new Schema({
    name: {
      type: String,
      unique: true,
    },
    avatar: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
    },
    isVip: {
      type: Boolean,
    },
  })
  return mongoose.model('user', PostSchema, 'user')
}
