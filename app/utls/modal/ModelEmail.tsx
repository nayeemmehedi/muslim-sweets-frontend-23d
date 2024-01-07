import React, { useState } from "react";
import { Form, Input, Modal } from "antd";

interface MyComponentProps {
  modal: boolean;
  toggleModal: () => any;
}
const ModalEmail: React.FC<MyComponentProps> = ({ modal, toggleModal }) => {
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        title="Email Change if you want to"
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
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalEmail;
