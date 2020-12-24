//Serve para atualizar o campo updated at de qualquer entidade do BD
module.exports = {
  UpdateFunction(updateObject) {
    let d = new Date();
    updateObject["updated_at"] = d.toUTCString();
    return updateObject;
  },
  CreateFunction(createObject) {
    let d = new Date();
    createObject["created_at"] = createObject["updated_at"] = d.toUTCString();
    return createObject;
  },
};
