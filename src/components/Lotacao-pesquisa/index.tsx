import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Input, Table, Tag, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { Column, ColumnGroup } = Table;

import LotacaoDataService from "../../services/lotacao.service";
import ILotacoesData from "../../types/lotacao.type";

type Lotacoes = ILotacoesData;

const { Search } = Input;

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

  const deletarLotacao = (record: any) => {
    const id = record.id;

    return LotacaoDataService.delete(id)
      .then(() => {
        return setLotacoes([]);
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
      <Table dataSource={lotacoes} className="table">
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="nome" key="nome" />
        <Column title="Descricao" dataIndex="descricao" key="descricao" />
        <Column
          title=""
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Editar</a>

              <a
                onClick={() => {
                  deletarLotacao(record);
                }}
              >
                Deletar
              </a>
            </Space>
          )}
        />
      </Table>
    </>
  );
}
