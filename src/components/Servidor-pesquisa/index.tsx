import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Input, Table, Tag, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { Column, ColumnGroup } = Table;

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

  const deletarServidor = (record: any) => {
    const id = record.id;

    return ServidorDataService.delete(id)
      .then(() => {
        return setServidores([]);
      })
      .catch(Error);
  };
  return (
    <>
      <Space direction="vertical">
        <h1>Pesquisa por Matricula:</h1>
        <Search
          placeholder="Pesquisa por matricula"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      <Table dataSource={servidores} className="table">
        <Column title="Nome" dataIndex="nome" key="nome" />
        <Column title="Matricula" dataIndex="matricula" key="matricula" />
        <Column title="Lotacão" dataIndex="lotacao" key="lotacao" />
        <Column
          title=""
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Editar</a>

              <a
                onClick={() => {
                  deletarServidor(record);
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
