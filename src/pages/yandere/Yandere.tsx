import React from "react";
import { Col, Row, Image } from "antd";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const url =
  "https://imgproxy.nanxiongnandi.com/UQCuribMQqmu8Y811_MkoXQR73JKYGkZ3G6jlmeE0w0/w:1280/aHR0cHM6Ly9pbWcu/bmFueGlvbmduYW5k/aS5jb20vMjAyMzA2/L1NvdXRoS2FpYmFi/VHJhaWwuanBn.jpg";

const YanderePage = () => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <Image width={200} src={url} />
        </Col>
        <Col className="gutter-row" span={6}>
          <Image width={200} src={url} />
        </Col>
        <Col className="gutter-row" span={6}>
          <Image width={200} src={url} />
        </Col>
        <Col className="gutter-row" span={6}>
          <Image width={200} src={url} />
        </Col>
      </Row>
    </>
  );
};

export default YanderePage;
