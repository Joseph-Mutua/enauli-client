export const setSaccoId = (key = "saccoId", value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getSaccoId = () => {
  if (typeof window !== "undefined") {
    let saccoId = JSON.parse(localStorage.getItem("sacco"));
    return saccoId;
  }
  return null;
};
