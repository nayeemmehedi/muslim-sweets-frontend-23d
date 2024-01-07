import React, { useState } from "react";
import {  Form, Input, Modal,Select  } from "antd";

interface MyComponentProps {
  modal: boolean;
  toggleModal: () => any;
}

const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

const ModalPhone: React.FC<MyComponentProps> = ({ modal, toggleModal }) => {
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        title="Phone No"
        open={modal}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              toggleModal;
            })
            .catch((info) => {
            });
        }}
        onCancel={toggleModal}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          // initialValues={{ modifier: "public" }}
        >
           <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalPhone;
