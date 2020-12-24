//Serve para atualizar o campo updated at de qualquer entidade do BD
module.exports = {
  UpdateFunction(updateObject) {
    var d = new Date();
    updateObject["updated_at"] = d.toUTCString();
    return updateObject;
  },
  CreateFunction(createObject) {
    var d = new Date();
    createObject["created_at"] = createObject["updated_at"] = d.toUTCString();
    return createObject;
  },
};
