const style = require("ansi-styles");

function esc(str) {
  return "\001" + str + "\002";
}

module.exports.display = env => {
  const a = `${esc(style.red.open)}${env}${esc(style.red.close)}`;
  const output = `(${a})`;

  process.stdout.write(output);
};
