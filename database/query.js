const queries = {
    getAllClientes: 'SELECT * FROM dbo.clientes',
    getById: 'SELECT * FROM funkos where id = @id',
    addNewRegister:
      'INSERT INTO funkos (name,serie,serilNumer) VALUES (@name,@serie,@serilNumer);',
    updateRegister:
      'UPDATE funkos set name = @name,serie = @serie, serilNumer = @serilNumer WHERE id = @id;',
    deleteRegister: 'DELETE FROM funkos WHERE id = @id',
  };
  
  module.exports = { queries };