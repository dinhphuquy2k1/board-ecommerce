<template>
  <header id="header" class="header has-sticky sticky-jump" style="">
    <div class="header-wrapper">
      <div
        id="top-bar"
        class="header-top nav-dark flex-has-center hide-for-medium">
        <div class="flex-row container">
          <div class="flex-col hide-for-medium flex-left">
            <ul class="nav nav-left medium-nav-center nav-small nav-divided">
              <li class="header-contact-wrapper">
                <ul
                  id="header-contact"
                  class="nav nav-divided nav-uppercase header-contact"
                >
                  <li class="">
                    <a href="tel:0983289958" class="tooltip tooltipstered">
                      <i class="icon-phone" style="font-size: 16px"></i>
                      <span></span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="html custom html_topbar_right">
                <span style="font-size: 14px"> Hà Nội: 0983.289.958</span>&nbsp;
                &nbsp;
                <span style="font-size: 14px">Hải Phòng: 0988 46 33 58</span>
              </li>
            </ul>
          </div>
          <!-- flex-col left -->

          <div class="flex-col hide-for-medium flex-center">
            <ul class="nav nav-center nav-small nav-divided">
              <li class="html custom html_nav_position_text_top">
                &nbsp; &nbsp;
                <span style="font-size: 14px"> TP HCM: 0981.444.956</span>
                <span style="font-size: 14px"> Đà Nẵng: 0961.84.33.88</span>
              </li>
            </ul>
          </div>
          <!-- center -->

          <div class="flex-col hide-for-medium flex-right">
            <ul class="nav top-bar-nav nav-right nav-small nav-divided">
              <li class="html custom html_top_right_text">
                <span style="font-size: 14px"> Bình Dương : 0963.352.528</span>
                &nbsp;<span style="font-size: 14px"
                  >Đồng Nai: 0963.399.856</span
                >
              </li>
            </ul>
          </div>
          <!-- .flex-col right -->
        </div>
        <!-- .flex-row -->
      </div>
      <!-- #header-top -->
      <div id="masthead" class="header-main">
        <div
          class="header-inner flex-row container logo-left medium-logo-center"
          role="navigation"
        >
          <!-- Logo -->
          <div id="logo" class="flex-col logo">
            <!-- Header logo -->
            <a
              href="https://bangtot.vn/"
              title="Bangtot.vn - Bangtot.vn"
              rel="home"
            >
              <img
                width="160"
                height="103"
                src="https://bangtot.vn/wp-content/uploads/2019/03/logo-bangtot.vn1_-3.jpg"
                class="header_logo header-logo"
                alt="Bangtot.vn" /><img
                width="160"
                height="103"
                src="https://bangtot.vn/wp-content/uploads/2019/03/logo-bangtot.vn1_-3.jpg"
                class="header-logo-dark"
                alt="Bangtot.vn"
            /></a>
          </div>

          <!-- Mobile Left Elements -->
          <div class="flex-col show-for-medium flex-left">
            <ul class="mobile-nav nav nav-left">
              <li class="nav-icon has-icon">
                <div class="header-button">
                  <a
                    href="#"
                    data-open="#main-menu"
                    data-pos="left"
                    data-bg="main-menu-overlay"
                    data-color=""
                    class="icon primary button circle is-small"
                    aria-controls="main-menu"
                    aria-expanded="false"
                  >
                    <i class="icon-menu"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <!-- Left Elements -->
          <div class="flex-col hide-for-medium flex-left flex-grow">
            <ul
              class="header-nav header-nav-main nav nav-left nav-divided nav-size-small nav-spacing-small nav-uppercase"
            >
              <li
                id="menu-item-1913"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1913"
              >
                <a href="https://bangtot.vn/bangtot-vn/" class="nav-top-link"
                  >Giới thiệu</a
                >
              </li>
              <li
                id="menu-item-106"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-106 has-dropdown"
              >
                <a href="https://bangtot.vn/cua-hang/" class="nav-top-link"
                  >Sản Phẩm<i class="icon-angle-down"></i
                ></a>
                <ul
                  class="nav-dropdown nav-dropdown-bold nav-dropdown-full"
                  style=""
                >
                  <li
                    id="menu-item-1209"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1209 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/bang-tu-trang/"
                      >Bảng Từ Trắng</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-1210"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1210"
                      >
                      <router-link to="/product-detail">Bảng Từ Trắng Treo Tường</router-link>
                      </li>
                      <li
                        id="menu-item-1211"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1211"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-tu-trang/bang-tu-trang-di-dong/"
                          >Bảng Từ Trắng Di Dộng</a
                        >
                      </li>
                      <li
                        id="menu-item-1212"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1212"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-tu-trang/bang-tu-trang-khong-khung/"
                          >Bảng Từ Trắng Không Khung</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1213"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1213 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/bang-tu-xanh/"
                      >Bảng Từ Xanh</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-1214"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1214"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-tu-xanh/bang-tu-xanh-treo-tuong/"
                          >Bảng Từ Xanh Treo Tường</a
                        >
                      </li>
                      <li
                        id="menu-item-1215"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1215"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-tu-xanh/bang-tu-xanh-di-dong/"
                          >Bảng Từ Xanh Di Động</a
                        >
                      </li>
                      <li
                        id="menu-item-1216"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1216"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-tu-xanh/bang-ke-o-ly/"
                          >Bảng Kẻ Ô Ly</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1217"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1217 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/bang-ghim/"
                      >Bảng Ghim</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-1218"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1218"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-ghim/bang-ghim-treo-tuong/"
                          >Bảng Ghim Treo Tường</a
                        >
                      </li>
                      <li
                        id="menu-item-1219"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1219"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-ghim/bang-ghim-di-dong/"
                          >Bảng Ghim Di Động</a
                        >
                      </li>
                      <li
                        id="menu-item-1731"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1731"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-ghim/bang-ghim-ban/"
                          >Bảng Ghim Bần</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1220"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1220 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/bang-kinh/"
                      >Bảng Kính</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-1221"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1221"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-kinh/bang-kinh-treo-tuong/"
                          >Bảng Kính Treo Tường</a
                        >
                      </li>
                      <li
                        id="menu-item-1222"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1222"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-kinh/bang-kinh-di-dong/"
                          >Bảng Kính Di Động</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1224"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1224 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/bang-thong-tin/"
                      >Bảng Thông Tin</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-1225"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1225"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-trong-nha/"
                          >Bảng Thông Tin Trong Nhà</a
                        >
                      </li>
                      <li
                        id="menu-item-1226"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1226"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-ngoai-troi/"
                          >Bảng Thông Tin Ngoài Trời</a
                        >
                      </li>
                      <li
                        id="menu-item-4706"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4706"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-tin-toa-nha-chung-cu/"
                          >Bảng Tin Tòa Nhà – Chung Cư</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1227"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1227 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/bang-truot/"
                      >Bảng Trượt</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-1228"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1228"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-truot/bang-truot-ngang/"
                          >Bảng Trượt Ngang</a
                        >
                      </li>
                      <li
                        id="menu-item-1229"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1229"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-truot/bang-truot-doc/"
                          >Bảng Trượt Dọc</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-4631"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4631 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/bang-quan-tri/"
                      >Bảng Quản Trị</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-4632"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4632"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-quan-tri/bieu-mau-van-phong/"
                          >Biểu Mẫu Văn Phòng</a
                        >
                      </li>
                      <li
                        id="menu-item-4634"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4634"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-quan-tri/bieu-mau-nha-may/"
                          >Biểu Mẫu Nhà Máy</a
                        >
                      </li>
                      <li
                        id="menu-item-4636"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4636"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-quan-tri/bieu-mau-benh-vien/"
                          >Biểu Mẫu Bệnh Viện</a
                        >
                      </li>
                      <li
                        id="menu-item-4638"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4638"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-quan-tri/bieu-mau-truong-hoc/"
                          >Biểu Mẫu Trường Học</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-4399"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4399 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/noi-that-phong-hoc/"
                      >Nội thất phòng học</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-10560"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10560"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/ban-ghe-hoc-sinh-cao-cap-vdt2020/"
                          >Bàn Ghế Học Sinh Cao Cấp VDT2020</a
                        >
                      </li>
                      <li
                        id="menu-item-6761"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6761"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/noi-that-phong-hoc/ban-ghe-chong-gu-chong-can/"
                          >Bàn Ghế Chống Gù Chống Cận</a
                        >
                      </li>
                      <li
                        id="menu-item-4708"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4708"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/noi-that-phong-hoc/trung-tam-ngoai-ngu/"
                          >Trung Tâm Ngoại Ngữ</a
                        >
                      </li>
                      <li
                        id="menu-item-4710"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4710"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/noi-that-phong-hoc/truong-mam-non/"
                          >Trường Mầm Non</a
                        >
                      </li>
                      <li
                        id="menu-item-4712"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4712"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/noi-that-phong-hoc/truong-tieu-hoc/"
                          >Trường Tiểu Học</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5932"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5932 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/bang-menu-nha-hang/"
                      >Bảng Menu</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-6019"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6019"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-menu-nha-hang/bang-menu-treo-tuong/"
                          >Bảng Menu Treo Tường</a
                        >
                      </li>
                      <li
                        id="menu-item-6020"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6020"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-menu-nha-hang/bang-menu-co-chan/"
                          >Bảng Menu Có Chân</a
                        >
                      </li>
                      <li
                        id="menu-item-6021"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6021"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-menu-nha-hang/bang-menu-de-ban/"
                          >Bảng Menu Để Bàn</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5446"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5446 nav-dropdown-col"
                  >
                    <a>Khác</a>
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-1223"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1223"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-flipchart/"
                          >Bảng Flipchart</a
                        >
                      </li>
                      <li
                        id="menu-item-1230"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1230"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-huynh-quang/"
                          >Bảng Huỳnh Quang</a
                        >
                      </li>
                      <li
                        id="menu-item-1232"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1232"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-gia-ve/"
                          >Bảng Giá Vẽ</a
                        >
                      </li>
                      <li
                        id="menu-item-4640"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4640"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-ghi-chu/"
                          >Bảng Ghi Chú</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-8565"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8565 nav-dropdown-col"
                  >
                    <a
                      href="https://bangtot.vn/danh-muc/bang-tuong-tac-thong-minh/bang-tuong-tac/"
                      >THIẾT BỊ TƯƠNG TÁC</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-6082"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6082"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/bang-tuong-tac-thong-minh/"
                          >Bảng Tương Tác Thông Minh</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5445"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5445 nav-dropdown-col"
                  >
                    <a>Lĩnh Vực</a>
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-5438"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5438"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-van-phong/"
                          >Bảng Văn Phòng</a
                        >
                      </li>
                      <li
                        id="menu-item-5439"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5439"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-truong-hoc/"
                          >Bảng Trường Học</a
                        >
                      </li>
                      <li
                        id="menu-item-5440"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5440"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-benh-vien/"
                          >Bảng Bệnh Viện</a
                        >
                      </li>
                      <li
                        id="menu-item-5441"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5441"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-nha-may/"
                          >Bảng Nhà Máy</a
                        >
                      </li>
                      <li
                        id="menu-item-5442"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5442"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-nha-hang/"
                          >Bảng Nhà Hàng</a
                        >
                      </li>
                      <li
                        id="menu-item-5443"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5443"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-gia-dinh/"
                          >Bảng Gia Đình</a
                        >
                      </li>
                      <li
                        id="menu-item-5444"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5444"
                      >
                        <a href="https://bangtot.vn/danh-muc/bang-toa-nha/"
                          >Bảng Tòa Nhà</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-1704"
                class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children active menu-item-1704 has-dropdown"
              >
                <a href="https://bangtot.vn" class="nav-top-link"
                  >Chính Sách Bán Hàng<i class="icon-angle-down"></i
                ></a>
                <ul class="nav-dropdown nav-dropdown-bold" style="">
                  <li
                    id="menu-item-1922"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1922"
                  >
                    <a href="https://bangtot.vn/van-chuyen-tp-ha-noi/"
                      >Vận Chuyển Lắp Đặt Tp Hà Nội</a
                    >
                  </li>
                  <li
                    id="menu-item-1927"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1927"
                  >
                    <a href="https://bangtot.vn/van-chuyen-lap-dat-tp-hcm/"
                      >Vận Chuyển Lắp Đặt Tp HCM</a
                    >
                  </li>
                  <li
                    id="menu-item-1708"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1708"
                  >
                    <a href="https://bangtot.vn/chinh-sach-bao-hanh/"
                      >Chính Sách Bảo Hành Sản Phẩm</a
                    >
                  </li>
                  <li
                    id="menu-item-5399"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5399"
                  >
                    <a href="https://bangtot.vn/chinh-sach-doi-tra/"
                      >Chính Sách Đổi Trả Sản Phẩm</a
                    >
                  </li>
                  <li
                    id="menu-item-4750"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4750"
                  >
                    <a href="https://bangtot.vn/chinh-sach-tang-phu-kien/"
                      >Chính Sách Tặng Phụ Kiện</a
                    >
                  </li>
                  <li
                    id="menu-item-4751"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4751"
                  >
                    <a href="https://bangtot.vn/chinh-sach-bao-mat-thong-tin/"
                      >Chính Sách Bảo Mật Thông Tin</a
                    >
                  </li>
                  <li
                    id="menu-item-4752"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4752"
                  >
                    <a
                      href="https://bangtot.vn/chinh-sach-khach-hang-than-thiet/"
                      >Chính Sách Khách Hàng Thân Thiết</a
                    >
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-4753"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4753 has-dropdown"
              >
                <a href="http://#" class="nav-top-link"
                  >Hỗ Trợ Khách Hàng<i class="icon-angle-down"></i
                ></a>
                <ul class="nav-dropdown nav-dropdown-bold">
                  <li
                    id="menu-item-5434"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5434"
                  >
                    <a href="https://bangtot.vn/ke-hoach-giao-bang/"
                      >Kế Hoạch Giao Bảng</a
                    >
                  </li>
                  <li
                    id="menu-item-5510"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5510"
                  >
                    <a href="https://bangtot.vn/huong-dan-mua-bang/"
                      >Hướng Dẫn Mua Bảng</a
                    >
                  </li>
                  <li
                    id="menu-item-1934"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1934"
                  >
                    <a href="https://bangtot.vn/huong-dan-thanh-toan/"
                      >Hướng Dẫn Thanh Toán</a
                    >
                  </li>
                  <li
                    id="menu-item-4754"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4754"
                  >
                    <a
                      href="https://bangtot.vn/huong-dan-lap-dat-bang-treo-tuong/"
                      >Hướng Dẫn Lắp Đặt</a
                    >
                  </li>
                  <li
                    id="menu-item-4755"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4755"
                  >
                    <a href="https://bangtot.vn/huong-dan-su-dung/"
                      >Hướng Dẫn Sử Dụng</a
                    >
                  </li>
                  <li
                    id="menu-item-6195"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6195"
                  >
                    <a href="https://bangtot.vn/ho-tro-nha-xe-cac-tinh/"
                      >Hỗ Trợ Thông Tin Nhà Xe Các Tỉnh</a
                    >
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-4823"
                class="menu-item menu-item-type- menu-item-object- menu-item-has-children menu-item-4823 has-dropdown"
              >
                <a class="nav-top-link"
                  >Khách Hàng<i class="icon-angle-down"></i
                ></a>
                <ul class="nav-dropdown nav-dropdown-bold">
                  <li
                    id="menu-item-5388"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5388 nav-dropdown-col"
                  >
                    <a
                      href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-tieu-bieu/"
                      >Khách hàng tiêu biểu</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-5389"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5389"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-tieu-bieu/truong-hoc/"
                          >Trường Học</a
                        >
                      </li>
                      <li
                        id="menu-item-5482"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5482"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-tieu-bieu/van-phong/"
                          >Văn Phòng</a
                        >
                      </li>
                      <li
                        id="menu-item-5390"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5390"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-tieu-bieu/benh-vien/"
                          >Bệnh Viện</a
                        >
                      </li>
                      <li
                        id="menu-item-5391"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5391"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-tieu-bieu/nha-may/"
                          >Nhà Máy</a
                        >
                      </li>
                      <li
                        id="menu-item-5484"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5484"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-tieu-bieu/nha-hang/"
                          >Nhà Hàng</a
                        >
                      </li>
                      <li
                        id="menu-item-5483"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5483"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-tieu-bieu/toa-nha/"
                          >Tòa Nhà</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5297"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5297 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/khach-hang/tay-bac-bo/"
                      >Tây Bắc Bộ</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-5312"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5312"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-bac-bo/khach-hang-mua-bang-tai-lao-cai/"
                          >Lào Cai</a
                        >
                      </li>
                      <li
                        id="menu-item-5313"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5313"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-bac-bo/khach-hang-mua-bang-tai-yen-bai/"
                          >Yên Bái</a
                        >
                      </li>
                      <li
                        id="menu-item-5314"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5314"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-bac-bo/khach-hang-mua-bang-tai-dien-bien/"
                          >Điện Biên</a
                        >
                      </li>
                      <li
                        id="menu-item-5315"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5315"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-bac-bo/khach-hang-mua-bang-tai-hoa-binh/"
                          >Hòa Bình</a
                        >
                      </li>
                      <li
                        id="menu-item-5316"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5316"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-bac-bo/khach-hang-mua-bang-tai-lai-chau/"
                          >Lai Châu</a
                        >
                      </li>
                      <li
                        id="menu-item-5317"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5317"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-bac-bo/khach-hang-mua-bang-tai-son-la/"
                          >Sơn La</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5318"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5318 nav-dropdown-col"
                  >
                    <a
                      href="https://bangtot.vn/danh-muc/khach-hang/dong-bac-bo/"
                      >Đông Bắc Bộ</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-5319"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5319"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bac-bo/khach-hang-mua-bang-tai-ha-giang/"
                          >Hà Giang</a
                        >
                      </li>
                      <li
                        id="menu-item-5320"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5320"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bac-bo/khach-hang-mua-bang-tai-cao-bang/"
                          >Cao Bằng</a
                        >
                      </li>
                      <li
                        id="menu-item-5321"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5321"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bac-bo/khach-hang-mua-bang-tai-bac-kan/"
                          >Bắc Cạn</a
                        >
                      </li>
                      <li
                        id="menu-item-5322"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5322"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bac-bo/khach-hang-mua-bang-tai-lang-son/"
                          >Lạng Sơn</a
                        >
                      </li>
                      <li
                        id="menu-item-5323"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5323"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bac-bo/khach-hang-mua-bang-tai-tuyen-quang/"
                          >Tuyên Quang</a
                        >
                      </li>
                      <li
                        id="menu-item-5324"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5324"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bac-bo/khach-hang-mua-bang-tai-thai-nguyen/"
                          >Thái Nguyên</a
                        >
                      </li>
                      <li
                        id="menu-item-5325"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5325"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bac-bo/khach-hang-mua-bang-tai-phu-tho/"
                          >Phú Thọ</a
                        >
                      </li>
                      <li
                        id="menu-item-5326"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5326"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bac-bo/khach-hang-mua-bang-tai-bac-giang/"
                          >Bắc Giang</a
                        >
                      </li>
                      <li
                        id="menu-item-5327"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5327"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bac-bo/khach-hang-mua-bang-tai-quang-ninh/"
                          >Quảng Ninh</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5328"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5328 nav-dropdown-col"
                  >
                    <a
                      href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/"
                      >Đồng Bằng Sông Hồng</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-5329"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5329"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/khach-hang-mua-bang-tai-bac-ninh/"
                          >Bắc Ninh</a
                        >
                      </li>
                      <li
                        id="menu-item-5330"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5330"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/khach-hang-mua-bang-tai-ha-nam/"
                          >Hà Nam</a
                        >
                      </li>
                      <li
                        id="menu-item-5331"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5331"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/khach-hang-mua-bang-tai-ha-noi/"
                          >Hà Nội</a
                        >
                      </li>
                      <li
                        id="menu-item-5332"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5332"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/khach-hang-mua-bang-tai-hai-duong/"
                          >Hải Dương</a
                        >
                      </li>
                      <li
                        id="menu-item-5333"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5333"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/khach-hang-mua-bang-tai-hung-yen/"
                          >Hưng Yên</a
                        >
                      </li>
                      <li
                        id="menu-item-5334"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5334"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/khach-hang-mua-bang-tai-hai-phong/"
                          >Hải Phòng</a
                        >
                      </li>
                      <li
                        id="menu-item-5335"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5335"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/khach-hang-mua-bang-tai-nam-dinh/"
                          >Nam Định</a
                        >
                      </li>
                      <li
                        id="menu-item-5336"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5336"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/khach-hang-mua-bang-tai-ninh-binh/"
                          >Ninh Bình</a
                        >
                      </li>
                      <li
                        id="menu-item-5337"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5337"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/khach-hang-mua-bang-tai-thai-binh/"
                          >Thái Bình</a
                        >
                      </li>
                      <li
                        id="menu-item-5338"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5338"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-bang-song-hong/khach-hang-mua-bang-tai-vinh-phuc/"
                          >Vĩnh Phúc</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5340"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5340 nav-dropdown-col"
                  >
                    <a
                      href="https://bangtot.vn/danh-muc/khach-hang/bac-trung-bo/"
                      >Bắc Trung Bộ</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-5341"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5341"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/bac-trung-bo/khach-hang-mua-bang-tai-thanh-hoa/"
                          >Thanh Hóa</a
                        >
                      </li>
                      <li
                        id="menu-item-5342"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5342"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/bac-trung-bo/khach-hang-mua-bang-tai-nghe-an/"
                          >Nghệ An</a
                        >
                      </li>
                      <li
                        id="menu-item-5343"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5343"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/bac-trung-bo/khach-hang-mua-bang-tai-ha-tinh/"
                          >Hà Tĩnh</a
                        >
                      </li>
                      <li
                        id="menu-item-5344"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5344"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/bac-trung-bo/khach-hang-mua-bang-tai-quang-binh/"
                          >Quảng Bình</a
                        >
                      </li>
                      <li
                        id="menu-item-5345"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5345"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/bac-trung-bo/khach-hang-mua-bang-tai-quang-tri/"
                          >Quảng Trị</a
                        >
                      </li>
                      <li
                        id="menu-item-5346"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5346"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/bac-trung-bo/khach-hang-mua-bang-tai-thua-thien-hue/"
                          >Thừa Thiên Huế</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5347"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5347 nav-dropdown-col"
                  >
                    <a
                      href="https://bangtot.vn/danh-muc/khach-hang/nam-trung-bo/"
                      >Nam Trung Bộ</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-5348"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5348"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/nam-trung-bo/khach-hang-mua-bang-tai-da-nang/"
                          >Đà Nẵng</a
                        >
                      </li>
                      <li
                        id="menu-item-5349"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5349"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/nam-trung-bo/khach-hang-mua-bang-tai-quang-nam/"
                          >Quảng Nam</a
                        >
                      </li>
                      <li
                        id="menu-item-5350"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5350"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/nam-trung-bo/khach-hang-mua-bang-tai-quang-ngai/"
                          >Quảng Ngãi</a
                        >
                      </li>
                      <li
                        id="menu-item-5351"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5351"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/nam-trung-bo/khach-hang-mua-bang-tai-binh-dinh/"
                          >Bình Định</a
                        >
                      </li>
                      <li
                        id="menu-item-5352"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5352"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/nam-trung-bo/khach-hang-mua-bang-tai-phu-yen/"
                          >Phú Yên</a
                        >
                      </li>
                      <li
                        id="menu-item-5353"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5353"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/nam-trung-bo/khach-hang-mua-bang-tai-khanh-hoa/"
                          >Khánh Hòa</a
                        >
                      </li>
                      <li
                        id="menu-item-5354"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5354"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/nam-trung-bo/khach-hang-mua-bang-tai-ninh-thuan/"
                          >Ninh Thuận</a
                        >
                      </li>
                      <li
                        id="menu-item-5355"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5355"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/nam-trung-bo/khach-hang-mua-bang-tai-binh-thuan/"
                          >Bình Thuận</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5356"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5356 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/khach-hang/tay-nguyen/"
                      >Tây Nguyên</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-5357"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5357"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nguyen/khach-hang-mua-bang-tai-kon-tum/"
                          >Kon Tum</a
                        >
                      </li>
                      <li
                        id="menu-item-5358"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5358"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nguyen/khach-hang-mua-bang-tai-gia-lai/"
                          >Gia Lai</a
                        >
                      </li>
                      <li
                        id="menu-item-5359"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5359"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nguyen/khach-hang-mua-bang-tai-dac-lac/"
                          >Đắc Lắc</a
                        >
                      </li>
                      <li
                        id="menu-item-5360"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5360"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nguyen/khach-hang-mua-bang-tai-dac-nong/"
                          >Đắc Nông</a
                        >
                      </li>
                      <li
                        id="menu-item-5361"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5361"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nguyen/khach-hang-mua-bang-tai-lam-dong/"
                          >Lâm Đồng</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5362"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5362 nav-dropdown-col"
                  >
                    <a
                      href="https://bangtot.vn/danh-muc/khach-hang/dong-nam-bo/"
                      >Đông Nam Bộ</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-5368"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5368"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-nam-bo/khach-hang-mua-bang-tai-tphcm/"
                          >TP HCM</a
                        >
                      </li>
                      <li
                        id="menu-item-5363"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5363"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-nam-bo/khach-hang-mua-bang-tai-binh-phuoc/"
                          >Bình Phước</a
                        >
                      </li>
                      <li
                        id="menu-item-5364"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5364"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-nam-bo/khach-hang-mua-bang-tai-binh-duong/"
                          >Bình Dương</a
                        >
                      </li>
                      <li
                        id="menu-item-5365"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5365"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-mua-bang-tai-dong-nai/"
                          >Đồng Nai</a
                        >
                      </li>
                      <li
                        id="menu-item-5366"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5366"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-nam-bo/khach-hang-mua-bang-tai-tay-ninh/"
                          >Tây Ninh</a
                        >
                      </li>
                      <li
                        id="menu-item-5367"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5367"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/dong-nam-bo/khach-hang-mua-bang-tai-ba-ria-vung-tau/"
                          >Mua Bảng Tại Bà Rịa – Vũng Tàu</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-5369"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5369 nav-dropdown-col"
                  >
                    <a href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/"
                      >Tây Nam Bộ</a
                    >
                    <ul class="nav-column nav-dropdown-bold">
                      <li
                        id="menu-item-5370"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5370"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/khach-hang-mua-bang-tai-long-an/"
                          >Long An</a
                        >
                      </li>
                      <li
                        id="menu-item-5371"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5371"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-mua-bang-tai-dong-thap/"
                          >Đồng Tháp</a
                        >
                      </li>
                      <li
                        id="menu-item-5372"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5372"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/khach-hang-mua-bang-tai-an-giang/"
                          >An Giang</a
                        >
                      </li>
                      <li
                        id="menu-item-5373"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5373"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/khach-hang-mua-bang-tai-ben-tre/"
                          >Bến Tre</a
                        >
                      </li>
                      <li
                        id="menu-item-5374"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5374"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/khach-hang-mua-bang-tai-vinh-long/"
                          >Vĩnh Long</a
                        >
                      </li>
                      <li
                        id="menu-item-5375"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5375"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-mua-bang-tai-tra-vinh/"
                          >Trà Vinh</a
                        >
                      </li>
                      <li
                        id="menu-item-5376"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5376"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/khach-hang-mua-bang-tai-hau-giang/"
                          >Hậu Giang</a
                        >
                      </li>
                      <li
                        id="menu-item-5377"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5377"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/khach-hang-mua-bang-tai-kien-giang/"
                          >Kiên Giang</a
                        >
                      </li>
                      <li
                        id="menu-item-5378"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5378"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/khach-hang-mua-bang-tai-soc-trang/"
                          >Sóc Trăng</a
                        >
                      </li>
                      <li
                        id="menu-item-5379"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5379"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/khach-hang-mua-bang-tai-bac-lieu/"
                          >Mua Bảng Tại Bạc Liêu</a
                        >
                      </li>
                      <li
                        id="menu-item-5381"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5381"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/khach-hang-mua-bang-tai-ca-mau/"
                          >Cà Mau</a
                        >
                      </li>
                      <li
                        id="menu-item-5382"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5382"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/khach-hang-mua-bang-tai-can-tho/"
                          >Cần Thơ</a
                        >
                      </li>
                      <li
                        id="menu-item-5383"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5383"
                      >
                        <a
                          href="https://bangtot.vn/danh-muc/khach-hang/tay-nam-bo/khach-hang-mua-bang-tai-tien-giang/"
                          >Tiền Giang</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-5211"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5211"
              >
                <a href="https://bangtot.vn/tin-tuc/" class="nav-top-link"
                  >Tin Tức</a
                >
              </li>
              <li
                id="menu-item-5210"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5210"
              >
                <a href="https://bangtot.vn/lien-he/" class="nav-top-link"
                  >Liên Hệ</a
                >
              </li>
            </ul>
          </div>

          <!-- Right Elements -->
          <div class="flex-col hide-for-medium flex-right">
            <ul
              class="header-nav header-nav-main nav nav-right nav-divided nav-size-small nav-spacing-small nav-uppercase"
            >
              <li class="cart-item has-icon">
                <div class="header-button">
                  <a
                    href="https://bangtot.vn/gio-hang/"
                    class="header-cart-link off-canvas-toggle nav-top-link icon primary button round is-small"
                    data-open="#cart-popup"
                    data-class="off-canvas-cart"
                    title="Giỏ hàng"
                    data-pos="right"
                  >
                    <i class="icon-shopping-cart" data-icon-label="0"> </i>
                  </a>
                </div>

                <!-- Cart Sidebar Popup -->
                <div id="cart-popup" class="mfp-hide widget_shopping_cart">
                  <div class="cart-popup-inner inner-padding">
                    <div class="cart-popup-title text-center">
                      <h4 class="uppercase">Giỏ hàng</h4>
                      <div class="is-divider"></div>
                    </div>
                    <div class="widget_shopping_cart_content">
                      <p class="woocommerce-mini-cart__empty-message">
                        Chưa có sản phẩm trong giỏ hàng.
                      </p>
                    </div>
                    <div class="cart-sidebar-content relative"></div>
                  </div>
                </div>
              </li>
              <li class="header-search header-search-lightbox has-icon">
                <div class="header-button">
                  <a
                    href="#search-lightbox"
                    data-open="#search-lightbox"
                    data-focus="input.search-field"
                    class="icon button circle is-outline is-small"
                  >
                    <i class="icon-search" style="font-size: 16px"></i
                  ></a>
                </div>

                <div id="search-lightbox" class="mfp-hide dark text-center">
                  <div
                    class="searchform-wrapper ux-search-box relative form- is-large"
                  >
                    <form
                      role="search"
                      method="get"
                      class="searchform"
                      action="https://bangtot.vn/"
                    >
                      <div class="flex-row relative">
                        <div class="flex-col search-form-categories">
                          <select
                            class="search_categories resize-select mb-0"
                            name="product_cat"
                            style="width: 184.25px">
                            <option value="1" selected>
                              Danh mục sản phẩm
                            </option>
                            <option value="ban-ghe-hoc-sinh-cao-cap-vdt2020">
                              Bàn Ghế Học Sinh Cao Cấp VDT2020
                            </option>
                            <option
                              value="ban-ghe-hoc-sinh-chong-gu-chong-can-cho-be"
                            >
                              Bàn Ghế Học Sinh Chống Gù Chống Cận Cho Bé
                            </option>
                            <option value="bang-tuong-tac-thong-minh">
                              Bảng - Thiết Bị Tương Tác
                            </option>
                            <option value="bang-benh-vien">
                              Bảng Bệnh Viện
                            </option>
                            <option value="bang-chong-loa">
                              Bảng Chống Lóa
                            </option>
                            <option value="bang-day-hoc">Bảng Dạy Học</option>
                            <option value="bang-den">Bảng Đen</option>
                            <option value="bang-flipchart">
                              Bảng Flipchart
                            </option>
                            <option value="bang-ghi-chu">Bảng Ghi Chú</option>
                            <option value="bang-ghim">Bảng Ghim</option>
                            <option value="bang-gia-dinh">Bảng Gia Đình</option>
                            <option value="bang-gia-ve">Bảng Giá Vẽ</option>
                            <option value="bang-huynh-quang">
                              Bảng Huỳnh Quang
                            </option>
                            <option value="bang-kinh">Bảng Kính</option>
                            <option value="bang-menu-nha-hang">
                              Bảng Menu
                            </option>
                            <option value="bang-nha-hang">Bảng Nhà Hàng</option>
                            <option value="bang-nha-may">Bảng Nhà Máy</option>
                            <option value="bang-quan-tri">Bảng Quản Trị</option>
                            <option value="bang-thong-tin">
                              Bảng Thông Tin
                            </option>
                            <option value="bang-toa-nha">Bảng Tòa Nhà</option>
                            <option value="bang-truong-hoc">
                              Bảng Trường Học
                            </option>
                            <option value="bang-truot">Bảng Trượt</option>
                            <option value="bang-tu-trang">Bảng Từ Trắng</option>
                            <option value="bang-tu-xanh">Bảng Từ Xanh</option>
                            <option value="bang-van-phong">
                              Bảng Văn Phòng
                            </option>
                            <option value="khach-hang">Khách hàng</option>
                            <option value="noi-that-phong-hoc">
                              Nội thất phòng học
                            </option>
                            <option value="san-pham-moi">Sản phẩm mới</option>
                          </select>
                        </div>
                        <!-- .flex-col -->
                        <div class="flex-col flex-grow">
                          <input
                            type="search"
                            class="search-field mb-0"
                            name="s"
                            value=""
                            placeholder="Tìm kiếm sản phẩm..."
                            autocomplete="off"
                          />
                          <input
                            type="hidden"
                            name="post_type"
                            value="product"
                          />
                        </div>
                        <!-- .flex-col -->
                        <div class="flex-col">
                          <button
                            type="submit"
                            class="ux-search-submit submit-button secondary button icon mb-0"
                          >
                            <i class="icon-search"></i>
                          </button>
                        </div>
                        <!-- .flex-col -->
                      </div>
                      <!-- .flex-row -->
                      <div class="live-search-results text-left z-top">
                        <div
                          class="autocomplete-suggestions"
                          style="
                            position: absolute;
                            display: none;
                            max-height: 300px;
                            z-index: 9999;
                          "
                        ></div>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Mobile Right Elements -->
          <div class="flex-col show-for-medium flex-right">
            <ul class="mobile-nav nav nav-right"></ul>
          </div>
        </div>
        <!-- .header-inner -->
      </div>
      <!-- .header-main -->
      <div id="wide-nav" class="header-bottom wide-nav flex-has-center">
        <div class="flex-row container">
          <div class="flex-col hide-for-medium flex-center">
            <ul
              class="nav header-nav header-bottom-nav nav-center nav-spacing-xlarge nav-uppercase"
            >
              <li class="html custom html_topbar_left">
                <img
                  src="https://bangtot.vn/wp-content/uploads/2018/10/free-ship.png"
                  width="45"
                  height="45"
                />
                &nbsp;&nbsp;<b>Giao Hàng Lắp Đặt Tận Nơi</b
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src="https://bangtot.vn/wp-content/uploads/2019/07/bảo-hành-300x300.png"
                  width="45"
                  height="45"
                />
                &nbsp;&nbsp;<b>Bảo Hành Từ 1 đến 5 Năm</b
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img
                  src="https://bangtot.vn/wp-content/uploads/2018/11/ho-tro-tron-doi.png"
                  width="45"
                  height="45"
                />
                &nbsp;&nbsp;<b>Đổi Trả 2h ~ 7 Ngày </b
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img
                  src="https://bangtot.vn/wp-content/uploads/2019/07/trên-10-năm-1-300x300.png"
                  width="45"
                  height="45"
                />
                &nbsp;&nbsp;<b>Đúng Giá, Đúng Chất Lượng</b>
              </li>
            </ul>
          </div>
          <!-- flex-col -->

          <div class="flex-col show-for-medium flex-grow">
            <ul
              class="nav header-bottom-nav nav-center mobile-nav nav-spacing-xlarge nav-uppercase"
            ></ul>
          </div>
        </div>
        <!-- .flex-row -->
      </div>
      <!-- .header-bottom -->

      <div class="header-bg-container fill">
        <div class="header-bg-image fill"></div>
        <div class="header-bg-color fill"></div>
      </div>
      <!-- .header-bg-container -->
    </div>
    <!-- header-wrapper-->
  </header>
</template>

