import "./SpNoiBat.css";
import data_api from "./api";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function SpNoiBat() {
  const navigate = useNavigate();
  const SubmitMua = (e) => {
    e.preventDefault();
    navigate("./Mua");
  };

  const item = data_api.filter((e) => e.spnb === "true");

  // const SPNB = () => {
  //   SP("true");
  // };
  return (
    <div>
      <div className="containerSP">
        <div>
          <div>
            <h6>ĐỒ THỂ THAO</h6>
            <h1>NỔI BẬT</h1>
            <div className="btn_spnb">
              <button className="btn_xemthem">Xem Thêm</button>
            </div>
          </div>
          <div className="img_spnb1">
            <img
              height=" 400px"
              width="700px"
              src="https://demo037123.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/7101-7200/30S-03-7123/azeno_img2-4.jpg&amp;width=0"
              alt="images"
            ></img>
          </div>
        </div>
        <div className="img_spnb2">
          <img
            height="550px"
            width="700px"
            src="https://demo037123.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/7101-7200/30S-03-7123/azeno_img2-3.jpg&amp;width=0"
            alt="images"
          ></img>
        </div>
      </div>
      <div className="container_spnb">
        <div className="SPNB">
          <h1>SẢN PHẨM MỚI</h1>
          <h6>
            Đồ thể thao thời thượng chính hãng từ các thương hiệu nổi tiếng.
          </h6>
        </div>
        <div className="category_group">
          {item.map((item = {}) => (
            <>
              <div className="category">
                <Card
                  style={{
                    width: "19rem",
                  }}
                >
                  <img height="200px" width=" 304px" src={item.img} />
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardTitle tag="h5">{item.price}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card‘s content.
                    </CardText>
                    <Button onClick={SubmitMua}>Mua Ngay</Button>
                  </CardBody>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SpNoiBat;
