export const setSacco = (key = "sacco", value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getSacco = () => {
  if (typeof window !== "undefined") {
    let sacco = JSON.parse(localStorage.getItem("sacco"));
    return sacco;
  }
  return null;
};
