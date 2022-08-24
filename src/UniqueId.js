
const UniqueId = () => {

  const prefix = '/contacts/';
  const generateId = () => Math.round(Math.random() * 100000000);
  return (prefix + generateId());

}

export default UniqueId;
