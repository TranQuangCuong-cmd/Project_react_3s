import data_api from "./api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import AnhSlide from "./AnhSlide";
import SpNoiBat from "./SpNoiBat";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function TrangChu() {
  const [data, setData] = useState(data_api);
  const [input, setInput] = useState("");

  const clickMeal = (type) => {
    const item = data_api.filter((e) => e.category === type);
    setData(item);
  };

  useEffect(() => {
    const result = data_api.filter((data_api) => {
      if (input === "") {
        return data_api;
      } else if (data_api.name.toLowerCase().includes(input.toLowerCase())) {
        return data_api;
      }
    });
    setData(result);
  }, [input]);

  const clickAll = () => {
    setData(data_api);
  };
  const clickIkea = () => {
    clickMeal("Ikea");
  };
  const clickMarcos = () => {
    clickMeal("Marcos");
  };
  const clickCaressa = () => {
    clickMeal("Caressa");
  };
  const clickLiddy = () => {
    clickMeal("Lindy");
  };

  const navigate = useNavigate();
  const SubmitMua = (e) => {
    e.preventDefault();
    navigate("./Mua");
  };

  return (
    <div className="home">
      <div className="header">
        <div className="1">Tài Khoản</div>
        <div className="1">Giỏ Hàng</div>
        <div className="1">Đơn Hàng</div>
        <div className="1" onClick={clickAll}>
          Tất Cả Mặt Hàng{" "}
        </div>
        <div className="inputlayout">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="input_text"
            placeholder="Nhập đồ cần tìm:"
          />
        </div>
      </div>

      <div className="Photo">
        <div className="imgcolumn1">
          <AnhSlide />
        </div>
        <div className="imgcolumn2">
          <div className="photo2_1">
            <img
              className="imaga2_1"
              width="500px"
              height="300px"
              src="https://demo037123.web30s.vn/datafiles/34976/upload/images/azeno_img2-1.jpg?t=1651562412"
              alt="DÀNH CHO PHỤ NỮ"
            />
          </div>
          <div className="photo2_2">
            <img
              className="image2_2"
              width="500px"
              height="300px"
              src="https://demo037123.web30s.vn/datafiles/34976/upload/images/azeno_img2-2.jpg?t=1651562425"
              alt="mid season"
            />
          </div>
        </div>
      </div>
      <div className="Company">
        <h3>COMPANY</h3>
        <button className="btn_xemthem">XEM THÊM</button>
      </div>
      <div className="btn_group">
        <h5 onClick={clickAll}>All</h5>
        <h5 onClick={clickIkea}>Ikea</h5>
        <h5 onClick={clickMarcos}>Marcos</h5>
        <h5 onClick={clickCaressa}>Caressa</h5>
        <h5 onClick={clickLiddy}>Liddy</h5>
      </div>
      <div className="category_group">
        {data.map((item = {}) => (
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button onClick={SubmitMua}>Mua Ngay</Button>
                </CardBody>
              </Card>
            </div>
          </>
        ))}
      </div>
      <div>
        <SpNoiBat />
      </div>
      <Footer />
    </div>
  );
}

export default TrangChu;
