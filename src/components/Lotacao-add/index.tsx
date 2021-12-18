/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState, Component, ChangeEvent } from "react";
import { api } from "../../services/api";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { FormInstance } from "antd/es/form";
import LotacaoDataService from "../../services/lotacao.service";
import IServidorData from "../../types/servidor.type";
import ILotacoesData from "../../types/lotacao.type";
import { useRouter } from "next/router";

const { Option } = Select;

const layout = {
  labelCol: { span: 16 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 1, span: 16 },
};

// type State = IServidorData & {
//   submitted: boolean;
// };
type Servidor = IServidorData;

type Lotacoes = ILotacoesData;

export function LotacaoAdd(props: any) {
  const lotacao = props?.lotacao;
  const isAddMode = !lotacao;

  const router = useRouter();

  function onFinish(form: any) {
    setLotacoes(form);
    const data = form;
    data.dateCreated = new Date();
    data.dateUpdated = new Date();

    return isAddMode ? createLotacao(data) : updateLotacao(lotacao.id, data);
  }

  function createLotacao(data: any) {
    return LotacaoDataService.create(data)
      .then(() => {
        console.log(data);
        router.push("/lotacao-list");
      })
      .catch(Error);
  }

  function updateLotacao(id: any, data: any) {
    return LotacaoDataService.update(id, data)
      .then(() => {
        console.log(data);
        router.push("/lotacao-list");
      })
      .catch(Error);
  }

  const [servidores, setServidores] = useState<Servidor>();
  const [lotacoes, setLotacoes] = useState<Lotacoes[]>([]);

  // useEffect(() => {
  //   //chamada pra API
  //   api.get("/lotacoes").then((response) => {
  //     setLotacoes(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  return (
    <Form
      {...layout}
      name="control-ref"
      onFinish={onFinish}
      layout="vertical"
      // onValuesChange={onFormLayoutChange}
    >
      <h1>{isAddMode ? "Cadastro de Lotação" : "Editar Lotação"}</h1>

      <br />
      <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
        <Input placeholder="Nome" maxLength={100} />
      </Form.Item>

      <Form.Item
        name="descricao"
        label="Descrição"
        rules={[{ required: true }]}
      >
        <Input placeholder="Descrição" maxLength={200} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}
