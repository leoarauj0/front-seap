import { useState, useEffect } from "react";
import { api } from "../../services/api";

type Servidor = {
  id: string;
  nome: string;
  matricula: string;
  data_cadastro: Date;
  lotacoes: {
    descricao: string;
    data_cadastro: Date;
  };
};

export function ServidorLista() {
  const [servidores, setServidores] = useState<Servidor[]>([]);

  useEffect(() => {
    //chamada pra API
    api.get("/servidores").then((response) => {
      setServidores(response.data);
    });
  }, []);

  return (
    <ul>
      {servidores.map((servidor) => {
        return (
          <li key={servidor.id}>
            <span>{servidor.id}</span>
            <br />
            <span>{servidor.matricula}</span>
            <br />
            <span>{servidor.nome}</span>
            {/* <p>{servidor.lotacao.descricao}</p> */}
          </li>
        );
      })}
    </ul>
  );
}
