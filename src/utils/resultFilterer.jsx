const resultFilterer = (data, search) => {
  let reg = new RegExp(search.toLocaleLowerCase(), "g");
  //g= global flag
  if (search === "") {
    return data;
  } else if (Number(search)) {
    if (reg.test(data.phone)) {
      return data;
    }
  } else if (/@/.test(search)) {
    //literal RegExp
    if (reg.test(data.email.toLocaleLowerCase())) {
      return data;
    }
  } else if (
    reg.test(data.city.toLocaleLowerCase()) ||
    reg.test(data.first_name.toLocaleLowerCase()) ||
    reg.test(data.last_name.toLocaleLowerCase()) ||
    reg.test(data.first_name.concat(" ", data.last_name).toLocaleLowerCase())
  ) {
    return data;
  }
};

export default resultFilterer;
