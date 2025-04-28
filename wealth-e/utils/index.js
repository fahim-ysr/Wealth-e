// Function to convert numbers to correct format in Dashboard. For eg. $10,000 will be displayed as $10K

const format_num = (num) => {
  // Formatting number for billion
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  }
  // Formatting number for million
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  }
  // Formatting number for thousand
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

export default format_num;
