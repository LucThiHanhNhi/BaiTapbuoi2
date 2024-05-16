import './layoutStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "./images/logo.webp";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram, FaShippingFast } from "react-icons/fa";
import Slider from "./components/Slider";


import product from "./images/nhi1.webp"
function App() {
  const hoten="Luc Thi Hanh Nhi";
  return (
    <>
      <header className='bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <img src={logo} alt="logo" style={{width:'200px', marginTop:'6px'}}  />
            </div>
            <div className='col-md-9'>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Đăng nhập
                        </a>
                        
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Đăng kí
                        </a>
                      
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Xem thêm
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Quần</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Áo</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Trang sức</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Phụ kiện đi kèm</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Giày</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Tin tức</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Liên hệ</a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success" type="submit" ><CiSearch /></button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className='col-md-1'>
              <div className="row">
                <div class="col-4 text-center" style={{fontSize:'25px'}}><CiUser /></div>
                <div class="col-4 text-center" style={{fontSize:'25px'}}><CiHeart /></div>
                <div class="col-4 text-center" style={{fontSize:'25px'}}><CiShoppingCart /></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="hdl-slideshow">
         <Slider/> 
        </section>
        <section class="hdl-maincontent">
          <div class="container">
            <div class='product_category'>
              <div class="row">
              <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product} class="img-fluid" alt=""
                          id="img1" />                       
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Mẫu váy với nhất tại cửa hàng</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>500.000đ</del></div>
                      <div class="flex-fill text-end text-main">250.000đ</div>
                    </h3>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product}  class="img-fluid" alt=""
                          id="img1" />
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Mẫu váy với nhất tại cửa hàng</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>500.000đ</del></div>
                      <div class="flex-fill text-end text-main">450.000đ</div>
                    </h3>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product}  class="img-fluid" alt=""
                          id="img1" />
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Mẫu váy với nhất tại cửa hàng</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>500.000đ</del></div>
                      <div class="flex-fill text-end text-main">450.000đ</div>
                    </h3>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product} class="img-fluid" alt=""
                          id="img1" />
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Mẫu váy với nhất tại cửa hàng</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>500.000đ</del></div>
                      <div class="flex-fill text-end text-main">450.000đ</div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-dark text-white'>
        <div class="container">
          <div class="row">
            <div class="col-md-4 pt-4">
					    <a href="/" title="F1GENZ Shoes" aria-label="F1GENZ Shoes">
						    <img title="F1GENZ Shoes" src={logo} alt="F1GENZ Shoes" style={{width:'200px'}}/>
					    </a>
					    <p>DKT Fashion luôn cam kết, đảm bảo đưa sản phẩm trực tiếp từ nhà sản xuất đến tay người
                  dùng và kiểm soát được chất lượng để đáp ứng được nhu cầu ngày càng cao của khách hàng.
                  Tất cả các sản phẩm tại DKT đều có nguồn gốc xuất xứ rõ ràng, chất lượng.</p>
              <h4>
                Liên hệ:
                <i class="fa fa-chevron-down"></i>
              </h4>
              <div class="footer-content">
                <p> Tư vấn dịch vụ:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 1800 6750</a><br></br>
                    Hỗ trợ sử dụng:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 1800 6750</a><br></br>
                    Hỗ trợ vận chuyển:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 1800 6750</a><br></br>
                    Email:
                    <a aria-label="liên hệ" title="liên hệ" href="mailto:support@sapo.vn"> support@sapo.vn</a><br></br>
                  </p>
                </div>
				    </div>
            <div class="col-md-4 pt-4">
					    <h4>Về chúng tôi <i class="fa fa-chevron-down"></i></h4>
					    <div class="footer-content">
						    <ul>
							    <li><a href="/gioi-thieu">Giới thiệu</a></li>
							    <li><a href="/chinh-sach-doi-tra">Chính sách đổi trả</a></li>
							    <li><a href="/chinh-sach-bao-mat">Chính sách bảo mật</a></li>
							    <li><a href="/dieu-khoan-dich-vu">Điều khoản dịch vụ</a></li>
						    </ul>
					    </div>
              <h4>Danh mục nổi bật <i class="fa fa-chevron-down"></i></h4>
					    <div class="footer-content">
						    <ul>
							    <li><a href="/chuck-2" aria-label="Chuck 2" title="Chuck 2">Quần</a></li>
							    <li><a href="/converse-all" aria-label="Converse All" title="Converse All">Áo</a></li>
							    <li><a href="/socks" aria-label="Socks" title="Socks">Giày</a></li>
							    <li><a href="/jack-purcell" aria-label="Jack Purcell" title="Jack Purcell">Phụ kiện</a></li>
							    <li><a href="/converse-seasonal" aria-label="Converse Seasonal" title="Converse Seasonal">Trang sức</a></li>
						    </ul>
					    </div>
				    </div>
            <div class="col-md-4 pt-4">
					    <h4>Liên hệ với chúng tôi <i class="fa fa-chevron-down"></i></h4>
						  <p></p>
              <div class="row">
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px'}}>
                    <FaFacebook />
                  </a>
                </div>
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color: 'black'}}>
                    <FaTiktok />
                  </a>
                </div>
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color: 'red'}}>
                    <FaYoutube />
                  </a>
                </div>
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color:'pink'}}>
                    <FaInstagram />
                  </a>
                </div>
                <div>
                  <h3 class="fs-5">
                    <strong>Lượt truy cập</strong>
                  </h3>
                  <p class="my-1">9888 lượt</p>
                </div>
	            </div>
				    </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
