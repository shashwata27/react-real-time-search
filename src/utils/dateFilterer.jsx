const dateFilterer = (data, date) => {
  if (date === "") {
    return data;
  } else {
    if (data.dob.replaceAll("/", "") === date.replaceAll("-", "")) {
      return data;
    }
  }
};

export default dateFilterer;
