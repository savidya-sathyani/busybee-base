const Color = require("./color");

exports.allColors = [
  new Color("orange", "#ffd8a8"),
  new Color("yellow", "#ffec99"),
  new Color("lime", "#d8f5a2"),
  new Color("green", "#b2f2bb"),
  new Color("teal", "#96f2d7"),
  new Color("cyan", "#99e9f2"),
  new Color("blue", "#a5d8ff"),
  new Color("indigo", "#bac8ff"),
  new Color("violet", "#d0bfff"),
  new Color("grape", "#eebefa"),
  new Color("pink", "#fcc2d7"),
  new Color("red", "#ffc9c9"),
  new Color("gray", "#e9ecef"),
];

exports.getAllTodoCardColors = [...this.allColors];

exports.getRandomTodoColor = () =>
  this.getAllTodoCardColors[
    Math.floor(Math.random() * this.getAllTodoCardColors.length)
  ];
