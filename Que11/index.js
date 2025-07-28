function getFormattedDate() {
  const now = new Date();
  return now.toISOString().split("T")[0];
}

module.exports = { getFormattedDate };
