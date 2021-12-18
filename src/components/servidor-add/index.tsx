/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState, Component, ChangeEvent } from "react";
import { api } from "../../services/api";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { FormInstance } from "antd/es/form";
import ServidorDataService from "../../services/servidor.service";
import IServidorData from "../../types/servidor.type";
import ILotacoesData from "../../types/lotacao.type";
import { useRouter } from "next/router";

type Props = {};

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

export function ServidorAdd() {
  const router = useRouter();

  function onFinish(form: any) {
    setServidores(form);
    const data = form;
    data.dateCreated = new Date();
    data.dateUpdated = new Date();
    // form.resetFields();

    return ServidorDataService.create(data)
      .then(() => {
        console.log(data);
        console.log(servidores);
        router.push("/servidor-list");
      })
      .catch(Error);
  }

  const [servidores, setServidores] = useState<Servidor>();
  const [lotacoes, setLotacoes] = useState<Lotacoes[]>([]);

  useEffect(() => {
    //chamada pra API
    api.get("/lotacoes").then((response) => {
      setLotacoes(response.data);
      console.log(response.data);
    });
  }, []);

  // function saveServidor() {
  //   const data: IServidorData = {
  //     nome:
  //     description: this.state.description
  //   };

  //   ServidorDataService.create(data)
  //     .then((response: any) => {
  //       setServidores({
  //         id: response.data.id,
  //         title: response.data.title,
  //         description: response.data.description,
  //         published: response.data.published,
  //         submitted: true
  //       });
  //       console.log(response.data);
  //     })
  //     .catch((e: Error) => {
  //       console.log(e);
  //     });
  // }

  // newServidor() {
  //   this.setState({
  //     id: null,
  //     title: "",
  //     description: "",
  //     published: false,
  //     submitted: false
  //   });
  // }

  return (
    <Form
      {...layout}
      name="control-ref"
      onFinish={onFinish}
      layout="vertical"
      // onValuesChange={onFormLayoutChange}
    >
      <h1>Cadastro de Servidor</h1>
      <br />
      <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
        <Input placeholder="Nome completo" maxLength={400} />
      </Form.Item>
      <Form.Item
        name="matricula"
        label="Matricula"
        rules={[{ required: true }]}
      >
        <Input placeholder="Matricula" maxLength={30} />
      </Form.Item>
      {/* <Form.Item label="Data de Criação">
        <DatePicker />
      </Form.Item> */}
      <Form.Item name="lotacao" label="Lotação" rules={[{ required: true }]}>
        <Select
          placeholder="Selecione uma opção de lotação."
          // onChange={}
          allowClear
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
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}
