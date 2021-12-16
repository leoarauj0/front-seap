import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { FormInstance } from "antd/es/form";

const { Option } = Select;

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 1, span: 16 },
};

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

type Lotacoes = {
  id: string;
  descricao: string;
  data_cadastro: Date;
};

export function ServidorAdd() {
  const [lotacoes, setLotacoes] = useState<Lotacoes[]>([]);

  useEffect(() => {
    //chamada pra API
    api.get("/lotacoes").then((response) => {
      setLotacoes(response.data);
    });
  }, []);

  const onFinish = (values: any) => {
    console.log(values);
  };

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
              <Option value={lotacao.descricao} key={lotacao.id}>
                {" "}
                {lotacao.descricao}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("gender") === "other" ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item> */}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}
