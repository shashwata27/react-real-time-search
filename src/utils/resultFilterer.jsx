const resultFilterer = (data, search) => {
  if (search === "") {
    return data;
  } else if (Number(search)) {
    if (data.phone.includes(search)) {
      return data;
    }
  } else if (search.includes("@")) {
    if (data.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return data;
    }
  } else if (
    data.city.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    data.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    data.last_name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    data.first_name
      .concat(" ", data.last_name)
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase())
  ) {
    return data;
  }
};

export default resultFilterer;
