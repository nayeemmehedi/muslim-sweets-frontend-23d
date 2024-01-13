"use client"

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';

import { Dancing_Script } from "next/font/google";
import { ColorChange } from '@/app/utls/ColorChange';


const FormLogin: React.FC = () => {
  const onFinish = (values: any) => {
    // console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="email"
        label= {<ColorChange >User Email</ColorChange>}
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>


      <Form.Item
      label= {<ColorChange >Password</ColorChange>}
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password   prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password" />
    </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className='text-white'> Remember me</Checkbox>
        </Form.Item>

       
      </Form.Item>

     <div className='flex justify-between'>
     <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        
      </Form.Item>
      <Link href="/signup">
      <div className='text-amber-500'>
        <p> Or register now! </p>
      </div>
      </Link>
     </div>
    </Form>
  );
};

export default FormLogin;