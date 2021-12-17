import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Table, Tag, Space } from "antd";
import ILotacoesData from "../../types/lotacao.type";

type Lotacoes = ILotacoesData;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
  },
  {
    title: "Descrição",
    dataIndex: "descricao",
    key: "descricao",
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

export function LotacaoLista() {
  const [lotacoes, setLotacoes] = useState<Lotacoes[]>([]);

  useEffect(() => {
    //chamada pra API
    api.get("/lotacoes").then((response) => {
      setLotacoes(response.data);
    });
  }, []);

  return (
    <>
      <h1>Lista de Servidores:</h1>
      <Table columns={columns} dataSource={lotacoes} />
    </>
  );
}
