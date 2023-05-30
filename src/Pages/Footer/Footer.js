import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  const TrangChuClick = (e) => {
    navigate("#");
  };
  return (
    <div className="container_footer">
      <div className="column1">
        <img
          height="50px"
          width=" 120px"
          src="https://demo037123.web30s.vn/datafiles/34976/upload/files/logo.png?t=1651197902"
          alt="Valen"
        ></img>
        <div>344 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, TP.HCM</div>
        <div>19009477</div>
        <div>admin@demo037123.web30s.vn</div>
      </div>
      <div className="column2">
        <h6>HỖ TRỢ KHÁCH HÀNG</h6>
        <div className="cl2_text">
          <div onClick={TrangChuClick}>TRANG CHỦ</div>
          <div>GIỚI THIỆU</div>
        </div>
        <div className="cl2_text">
          <div>SẢN PHẨM</div>
          <div>DỊCH VỤ</div>
        </div>
        <div className="cl2_text">
          <div>TIN TỨC</div>
          <div>LIÊN HỆ</div>
        </div>
        <div className="group_img1">
          <div className="flex">
            <div className="pading">
              <img
                className="img_1"
                height="60px"
                width="100px"
                src="https://demo037123.web30s.vn/datafiles/34976/upload/images/banner/thanh-toan-chuyen-kh.png?t=1662522562)"
              ></img>
            </div>
            <div className="pading">
              <img
                className="img_1"
                height="60px"
                width="100px"
                src="https://demo037123.web30s.vn/datafiles/34976/upload/images/banner/zalopay.png?t=1662522562)"
              ></img>
            </div>
            <div className="pading">
              <img
                className="img_1"
                height="60px"
                width="100px"
                src="https://demo037123.web30s.vn/datafiles/34976/upload/images/banner/vnpay.png?t=1662522562)"
              ></img>
            </div>
            <div className="pading">
              <img
                className="img_1"
                height="60px"
                width="100px"
                src="https://demo037123.web30s.vn/datafiles/34976/upload/images/banner/paypal.png?t=1662522562)"
              ></img>
            </div>
          </div>
          <div className="flex">
            <div className="pading">
              <img
                className="img_1"
                height="60px"
                width="100px"
                src="https://demo037123.web30s.vn/datafiles/34976/upload/images/banner/onepay.png?t=1662522562)"
              ></img>
            </div>
            <div className="pading">
              <img
                className="img_1"
                height="60px"
                width="100px"
                src="https://demo037123.web30s.vn/datafiles/34976/upload/images/banner/ngan-luong.png?t=1662522562)"
              ></img>
            </div>
            <div className="pading">
              <img
                className="img_1"
                height="60px"
                width="100px"
                src="https://demo037123.web30s.vn/datafiles/34976/upload/images/banner/napas.png?t=1662522562)"
              ></img>
            </div>
            <div className="pading">
              <img
                className="img_1"
                height="60px"
                width="100px"
                src="https://demo037123.web30s.vn/datafiles/34976/upload/images/banner/momo.png?t=1662522562)"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="column3">
        <h5>DOWNLOAD APP</h5>
        <div className="groupimg">
          <div className="pading">
            <img
              width="200px"
              height="50px"
              src="https://demo037123.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/7101-7200/30S-03-7123/g_play.png&amp;width=0"
              alt="images"
            ></img>
          </div>
          <div className="pading">
            <img
              width="200px"
              height="50px"
              src="https://demo037123.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/7101-7200/30S-03-7123/app_store.png&amp;width=0"
              alt="images"
            ></img>
          </div>
        </div>
        <h5>NHẬN KHUYẾN MÃI</h5>
        <div>
          <input placeholder="Nhập địa chỉ emal"></input>
          <button>Đăng ký</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
