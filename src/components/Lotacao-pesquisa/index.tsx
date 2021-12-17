import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Input, Table, Tag, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import LotacaoDataService from "../../services/lotacao.service";
import ILotacoesData from "../../types/lotacao.type";

type Lotacoes = ILotacoesData;

const { Search } = Input;

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

export function LotacaoPesquisa() {
  const [lotacoes, setLotacoes] = useState<Lotacoes[]>([]);

  const onSearch = (nome: any) => {
    LotacaoDataService.findByTitle(nome)
      .then((response: any) => {
        console.log(response.data);

        setLotacoes(response.data);

        // router.push("/");
      })
      .catch(Error);
  };

  return (
    <>
      <Space direction="vertical">
        <h1>Pesquisa por Nome:</h1>
        <Search
          placeholder="Pesquisa por nome"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      <Table columns={columns} dataSource={lotacoes} className="table" />
    </>
  );
}
