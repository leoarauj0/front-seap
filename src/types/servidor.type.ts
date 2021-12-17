export default interface IServidor {
  id?: any | null;
  nome: string;
  matricula: string;
  data_cadastro: Date;
  lotacoes: {
    descricao: string;
    data_cadastro: Date;
  };
}
