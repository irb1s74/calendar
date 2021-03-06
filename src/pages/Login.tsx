import React, { FC } from "react";
import { Card, Layout, Row } from "antd";
import LoginForm from "../components/form/LoginForm";

const Login: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card style={{ borderRadius: "10px" }}>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
