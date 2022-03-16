module.exports = (app) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const PostSchema = new Schema({
    address: {
      type: String,
    },
    projectName: {
      type: String,
    },
    mintPrice: {
      type: String,
    },
    mintNumberPerWallet: {
      type: String,
    },
    date: {
      type: String,
    },
    note: {
      type: String,
    },
    total: {
      type: String,
    },
    website: {
      type: String,
    },
    discord: {
      type: String,
    },
    twitter: {
      type: String,
    },
  })
  return mongoose.model('drop', PostSchema, 'drop')
}
