const mongoose = require('mongoose');

//defining the fields for a lost or found item report
const reportSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum:['Electronics','Clothing','ID/Cards','Books/Notes','Keys','Other'],
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    reportType: {
      type: String,
      required: true,
      enum: ['Lost','Found'],
      trim: true,
    },
    status: {
      type: String,
      required: true,
      enum:['Available','Claimed'],
      default: 'Available',
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Report', reportSchema);