"use client";

import React, { useState } from "react";
import type { CascaderProps } from "antd";
// import LottieReact from "@/utls/LottieReact.js";
import LottieReact from "@/app/utls/LottieReact";
import read from "@/public/illustration/read.json";

import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    // xs: { span: 24 },
    // sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  // wrapperCol: {
  //   xs: {
  //     span: 24,
  //     offset: 0,
  //   },
  //   sm: {
  //     span: 16,
  //     offset: 8,
  //   },
  // },
};

const ContactUs: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="grid grid-cols-6 ">
      <div className="col-span-1"></div>
      <div className="col-span-2 ">
        <p className="font-bold text-2xl text-red-300 py-10 ">Contact Form</p>
        <Form
          layout="vertical"
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
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

          <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="info"
            label="Your Informantion"
            rules={[{ required: true, message: "Please input Info" }]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button
              className="text-rose-600 border border-red-600 hover:text-lime-900 w-full my-4 "
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="col-span-3">
       <div >
       <LottieReact value={read}></LottieReact>
       </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
