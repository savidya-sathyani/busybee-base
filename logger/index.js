const log4js = require("log4js");

log4js.configure({
  appenders: {
    multi: {
      type: "multiFile",
      base: `${pro}/logs`,
      property: "categoryName",
      extension: ".log",
      maxLogSize: 30000,
      backup: 1,
      compress: true,
    },
    out: { type: "stdout" },
  },
  categories: {
    default: {
      appenders: ["out"],
      level: "info",
    },
    user: {
      appenders: ["out", "multi"],
      level: "info",
    },
    todo: {
      appenders: ["out", "multi"],
      level: "info",
    },
    journal: {
      appenders: ["out", "multi"],
      level: "info",
    },
  },
});

const categoryArray = ["todo", "user", "journal"];

const getLogger = (category) => {
  if (category) {
  }
  return log4js.getLogger(category);
};

module.exports = getLogger;
