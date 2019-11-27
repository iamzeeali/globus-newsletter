const mongoose = require("mongoose");
const validator = require("validator");

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Please enter company name!"],
    unique: true
  },
  country: {
    type: String,
    required: [true, "Please enter company's country!"]
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  companyAddress: {
    type: String
  },
  companyPhone: {
    type: String
  },
  companyEmail: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    required: false
  },
  photo: String,
  description: String,
  active: {
    type: Boolean,
    default: true,
    select: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

companySchema.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});

module.exports = Company = mongoose.model("Company", companySchema);
