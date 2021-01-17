const Message = require("../models/messageRecord");
const ApiData = require("../models/apiData");
module.exports = {
  sendMessage: async function (args, req, res, next) {
    const message = new Message({
      email: args.email,
      name: args.name,
      message: args.message,
    });
    const sendMessage = await message.save();
    return { ...sendMessage.dataValues };
  },

  getData: async function (args, req, res, next) {
    const content = await ApiData.findOne({ id: 1 });

    return { ...content.dataValues };
  },
  
  sendContent: async function (args, req, res, next) {
    const content = new ApiData({
      mainheader: args.mainheader,
      description: args.description,
    });
    const finalContent = await content.save();
    return { ...finalContent.dataValues };
  },
};
