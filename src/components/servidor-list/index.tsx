import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Table, Tag, Space } from "antd";
import IServidorData from "../../types/servidor.type";
import ILotacoesData from "../../types/lotacao.type";

type Servidor = IServidorData;

type Lotacoes = ILotacoesData;

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

export function ServidorLista() {
  const [servidores, setServidores] = useState<Servidor[]>([]);

  useEffect(() => {
    //chamada pra API
    api.get("/servidores").then((response) => {
      setServidores(response.data);
    });
  }, []);

  return (
    <>
      <h1>Lista de Servidores:</h1>
      <Table columns={columns} dataSource={servidores} />
    </>
  );
}
