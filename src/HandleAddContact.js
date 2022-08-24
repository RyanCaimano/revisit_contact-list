const HandleAddContact = () => {
  let path = "/contacts/new";
  // couldn't get this to work the way we were taught...history.push(path);
  window.location.href = path;
}

export default HandleAddContact;