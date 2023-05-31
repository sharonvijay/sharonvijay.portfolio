import { Col } from "react-bootstrap";
export const CertificateCard = ({ title, imgUrl, refUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="cert-imgbx">
        <img src={imgUrl} alt="CertificateCard" />
        <div className="cert-txtx">
          <h4>{title}</h4>
          <a href={refUrl} target="_blank" rel="noreferrer">
            Link
          </a>
        </div>
      </div>
    </Col>
  );
};
