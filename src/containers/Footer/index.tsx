import { Col, Row } from "antd";
import { Wrapper } from "./styles";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Row justify="space-evenly">
        <Col span={4}>
          <h3>Our Food</h3>
          <ul>
            <li>Promotions</li>
            <li>Pizzas</li>
            <li>Sides</li>
            <li>Drinks</li>
          </ul>
        </Col>
        <Col span={4}>
          <h3> Our Journey</h3>
        </Col>
        <Col span={4}>
          <h3> Let’s Talk</h3>
        </Col>

        <Col span={4}>
          <img
            alt=""
            src="https://romanspizza.co.za/static/media/logo-shield-large.ac2e904a.png"
            style={{ height: "80px", width: "80px" }}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Footer;
