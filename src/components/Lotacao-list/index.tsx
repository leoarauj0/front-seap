import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Table, Tag, Space } from "antd";
import ILotacoesData from "../../types/lotacao.type";
import { Link } from "../Link/index";
import LotacaoDataService from "../../services/lotacao.service";
import { useRouter } from "next/router";

const { Column, ColumnGroup } = Table;

type Lotacoes = ILotacoesData;

export function LotacaoLista() {
  const [lotacoes, setLotacoes] = useState<Lotacoes[]>([]);

  useEffect(() => {
    //chamada pra API
    api.get("/lotacoes").then((response) => {
      setLotacoes(response.data);
    });
  }, []);

  const deletarLotacao = (record: any) => {
    const id = record.id;
    console.log(id);

    return LotacaoDataService.delete(id)
      .then(() => {
        api.get("/lotacoes").then((response) => {
          setLotacoes(response.data);
        });
      })
      .catch(Error);
  };

  return (
    <>
      <h1>Lista de Servidores:</h1>
      {/* <Table columns={columns} dataSource={lotacoes} /> */}

      <Table dataSource={lotacoes}>
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
