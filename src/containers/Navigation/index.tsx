import { Col, Row } from "antd";
import { Wrapper } from "./styles";

const NavBar: React.FC = () => {
  return (
    <Row align="middle">
      <Col span={8}>
        <Wrapper>
          <img
            alt=""
            src="https://romanspizza.co.za/static/media/logo-shield-large.ac2e904a.png"
            style={{ height: "80px", width: "80px" }}
          />
        </Wrapper>
      </Col>
      <Col span={16}>
        <Row justify="end">
          <Col span={4}>Order Now</Col>
          <Col span={4}>Menu</Col>
          <Col span={4}>Login / SignUp</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NavBar;
