import { Col, Row } from "antd";
import { Wrapper } from "./styles";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Row justify="space-evenly">
        <Col span={4}>
          <h2>Our Food</h2>
          <ul>
            <li>Promotions</li>
            <li>Pizzas</li>
            <li>Sides</li>
            <li>Drinks</li>
          </ul>
        </Col>
        <Col span={4}>
          <h2> Our Journey</h2>
        </Col>
        <Col span={4}>
          <h2> Let’s Talk</h2>
        </Col>

        <Col span={4}>
          <img
            alt=""
            src="https://romanspizza.co.za/static/media/logo-shield-large.ac2e904a.png"
            style={{ height: "80px", width: "80px" }}
          />
        </Col>
      </Row>

      <Row justify="center">
        <Col span={8}>Copyright © 2022 Roman's Pizza. All rights reserved.</Col>
      </Row>
    </Wrapper>
  );
};

export default Footer;
