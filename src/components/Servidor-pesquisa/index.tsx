import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Input, Table, Tag, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import ServidorDataService from "../../services/servidor.service";

const { Search } = Input;

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

const columns = [
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
  },
  {
    title: "Matricula",
    dataIndex: "matricula",
    key: "matricula",
  },
  {
    title: "Lotacão",
    dataIndex: "lotacao",
    key: "lotacao",
  },
  {
    title: "",
    dataIndex: "acoes",
    key: "acoes",
    render: () => (
      <Space size="middle">
        <a>Editar</a>
        <a>Deletar</a>
      </Space>
    ),
  },
];

export function ServidorPesquisa() {
  const [servidores, setServidores] = useState<Servidor[]>([]);

  const onSearch = (matricula: any) => {
    ServidorDataService.findByTitle(matricula)
      .then((response: any) => {
        console.log(response.data);

        setServidores(response.data);

        // router.push("/");
      })
      .catch(Error);
  };

  return (
    <>
      <Space direction="vertical">
        <h1>Pesquisa por matricula:</h1>
        <Search
          placeholder="Pesquisa por matricula"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      <Table columns={columns} dataSource={servidores} className="table" />

      {/* <ul>
        {servidores.map((servidor) => {
          return (
            <li key={servidor.id}>
              <span>{servidor.id}</span>
              <br />
              <span>{servidor.matricula}</span>
              <br />
              <span>{servidor.nome}</span>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}
