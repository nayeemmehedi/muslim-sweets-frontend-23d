import React, { useState } from "react";
import {  Form, Input, Modal, Space,Select } from "antd";

const { Option } = Select;

interface MyComponentProps {
  modal: boolean;
  toggleModal: () => any;
}
const ModalProduct: React.FC<MyComponentProps> = ({ modal, toggleModal }) => {
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        title="Shipping Address"
        open={modal}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              console.log(values);
              form.resetFields();
              toggleModal;
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
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
          <Form.Item label="Address">
      <Space.Compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[{ required: true, message: 'Province is required' }]}
        >
          <Select placeholder="Select province">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[{ required: true, message: 'Street is required' }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input street" />
        </Form.Item>
      </Space.Compact>
    </Form.Item>

        </Form>
      </Modal>
    </>
  );
};

export default ModalProduct;
