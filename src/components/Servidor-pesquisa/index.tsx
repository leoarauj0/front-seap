import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Input, Table, Tag, Space, Modal, Select } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { Column, ColumnGroup } = Table;

const { Option } = Select;

import IServidorData from "../../types/servidor.type";
import ILotacoesData from "../../types/lotacao.type";

import ServidorDataService from "../../services/servidor.service";

const { Search } = Input;

type Servidor = {
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
};

type Lotacoes = ILotacoesData;
type ServidorData = IServidorData;

export function ServidorPesquisa() {
  const [editando, setEditando] = useState(false);
  const [editServ, setEditServ] = useState<ServidorData>();

  const [lotacoes, setLotacoes] = useState<Lotacoes[]>([]);

  useEffect(() => {
    api.get("/lotacoes").then((response) => {
      setLotacoes(response.data);
    });
  }, [editando]);

  const [servidores, setServidores] = useState<Servidor[]>([]);

  const editarServidor = (record: any) => {
    console.log(record);
    setEditando(true);
    setEditServ({ ...record });
  };

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
    Modal.confirm({
      title: "Você tem certeza que quer deletar esse servidor",
      cancelText: "Cancelar",

      onOk: () => {
        const id = record.id;

        return ServidorDataService.delete(id)
          .then(() => {
            api.get("/servidores").then((response) => {
              setServidores(response.data);
            });
          })
          .catch(Error);
      },
    });
  };

  const resetaEditando = () => {
    setEditando(false);
    setEditServ(undefined);
  };

  function atualizado() {
    const data = editServ;
    const id = editServ?.id;
    data.dateUpdated = new Date();

    return ServidorDataService.update(data, id)
      .then(() => {
        return setServidores([]);
        // api.get("/servidores").then((response) => {
        // });
      })
      .catch(Error);
  }

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
              <a
                onClick={() => {
                  editarServidor(record);
                }}
              >
                Editar
              </a>

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
      <Modal
        title="Editar Servidor"
        visible={editando}
        okText="Salvar"
        cancelText="Cancelar"
        onCancel={() => {
          resetaEditando();
        }}
        onOk={() => {
          atualizado();
          resetaEditando();
        }}
      >
        <p>Nome</p>
        <Input
          value={editServ?.nome}
          maxLength={400}
          onChange={(e) => {
            setEditServ((pre: any) => {
              return { ...pre, nome: e.target.value };
            });
          }}
        />
        <br />
        <br />

        <p>Matricula</p>
        <Input
          value={editServ?.matricula}
          maxLength={30}
          onChange={(e) => {
            setEditServ((pre: any) => {
              return { ...pre, matricula: e.target.value };
            });
          }}
        />
        <br />
        <br />

        <p>Lotação</p>
        <Select
          placeholder="Selecione uma opção de lotação."
          // onChange={}
          allowClear
          onChange={(e) => {
            setEditServ((pre: any) => {
              return { ...pre, lotacao: e };
            });
          }}
        >
          {lotacoes.map((lotacao) => {
            return (
              <Option value={lotacao.id} key={lotacao.id}>
                {" "}
                {lotacao.descricao}
              </Option>
            );
          })}
        </Select>
      </Modal>
    </>
  );
}
