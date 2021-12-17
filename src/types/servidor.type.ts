export default interface IServidor {
  id?: any | null;
  nome: string;
  matricula: string;
  dateCreated: Date;
  dateUpdated: Date;
  lotacoes: {
    descricao: string;
    dateCreated: Date;
    dateUpdated: Date;
  };
}
