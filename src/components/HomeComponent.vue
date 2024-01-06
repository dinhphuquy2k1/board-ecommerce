<template>
  <div>
    <main id="main" class="">
      <div id="content" role="main" class="content-area">
        <section
          class="section section-carousel-header"
          id="section_1135197926"
        >
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row row-collapse row-full-width" id="row-1386767568">
              <Carousel
                :value="banner"
                :numVisible="1"
                :numScroll="1"
                circular
                :responsiveOptions="responsiveOptions"
              >
                <template #item="slotProps">
                  <div>
                    <img
                        style="max-height: 500px"
                            loading="lazy"
                            decoding="async"
                            width="100%"
                            height="100%"
                            :src="'../../assets/images/'+slotProps.data.image"
                            class="attachment-medium size-medium"
                            alt=""
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                    {{ slotProps.data.price }}</div>
                </template>
              </Carousel>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section hide-for-small" id="section_675948359">
          <div class="bg section-bg fill bg-fill bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row" id="row-2013835724">
              <div class="col medium-3 small-12 large-3">
                <div class="col-inner">
                  <div
                    class="icon-box featured-box icon-box-center text-center"
                    style="margin: 0px 0px 0px 0px"
                  >
                    <div class="icon-box-img" style="width: 84px">
                      <div class="icon">
                        <div class="icon-inner">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="300"
                            height="300"
                            src="https://bangtot.vn/wp-content/uploads/2018/10/free-ship-300x300.png"
                            class="attachment-medium size-medium"
                            alt=""
                            srcset="
                              https://bangtot.vn/wp-content/uploads/2018/10/free-ship-300x300.png 300w,
                              https://bangtot.vn/wp-content/uploads/2018/10/free-ship-150x150.png 150w,
                              https://bangtot.vn/wp-content/uploads/2018/10/free-ship-768x768.png 768w,
                              https://bangtot.vn/wp-content/uploads/2018/10/free-ship-600x600.png 600w,
                              https://bangtot.vn/wp-content/uploads/2018/10/free-ship-100x100.png 100w,
                              https://bangtot.vn/wp-content/uploads/2018/10/free-ship.png         846w
                            "
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="icon-box-text last-reset">
                      <h3>
                        <strong
                          ><span style="color: #008000"
                            >Giao hàng trong 24h</span
                          ></strong
                        >
                      </h3>
                      <p>Miễn phí lắp đặt nội thành Hà Nội, Tp.HCM</p>
                    </div>
                  </div>
                  <!-- .icon-box -->
                </div>
              </div>
              <div class="col medium-3 small-12 large-3">
                <div class="col-inner">
                  <div
                    class="icon-box featured-box icon-box-center text-center"
                  >
                    <div class="icon-box-img" style="width: 84px">
                      <div class="icon">
                        <div class="icon-inner">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="300"
                            height="300"
                            src="https://bangtot.vn/wp-content/uploads/2019/07/bảo-hành-300x300.png"
                            class="attachment-medium size-medium"
                            alt=""
                            srcset="
                              https://bangtot.vn/wp-content/uploads/2019/07/bảo-hành-300x300.png         300w,
                              https://bangtot.vn/wp-content/uploads/2019/07/bảo-hành-300x300-150x150.png 150w,
                              https://bangtot.vn/wp-content/uploads/2019/07/bảo-hành-300x300-100x100.png 100w
                            "
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="icon-box-text last-reset">
                      <h3>
                        <strong
                          ><span style="color: #008000"
                            >Bảo hành 12 – 36 tháng&nbsp;</span
                          ></strong
                        >
                      </h3>
                    </div>
                  </div>
                  <!-- .icon-box -->
                </div>
              </div>
              <div class="col medium-3 small-12 large-3">
                <div class="col-inner">
                  <div
                    class="icon-box featured-box icon-box-center text-center"
                  >
                    <div class="icon-box-img" style="width: 84px">
                      <div class="icon">
                        <div class="icon-inner">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="300"
                            height="300"
                            src="https://bangtot.vn/wp-content/uploads/2019/07/trên-10-năm-1-300x300.png"
                            class="attachment-medium size-medium"
                            alt=""
                            srcset="
                              https://bangtot.vn/wp-content/uploads/2019/07/trên-10-năm-1-300x300.png         300w,
                              https://bangtot.vn/wp-content/uploads/2019/07/trên-10-năm-1-300x300-150x150.png 150w,
                              https://bangtot.vn/wp-content/uploads/2019/07/trên-10-năm-1-300x300-100x100.png 100w
                            "
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="icon-box-text last-reset">
                      <h3>
                        <span style="color: #008000"
                          ><strong>Sản phẩm chính hãng chất lượng</strong></span
                        >
                      </h3>
                    </div>
                  </div>
                  <!-- .icon-box -->
                </div>
              </div>
              <div class="col medium-3 small-12 large-3">
                <div class="col-inner">
                  <div
                    class="icon-box featured-box icon-box-center text-center"
                  >
                    <div class="icon-box-img" style="width: 84px">
                      <div class="icon">
                        <div class="icon-inner">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="300"
                            height="300"
                            src="https://bangtot.vn/wp-content/uploads/2018/11/ho-tro-tron-doi-300x300.png"
                            class="attachment-medium size-medium"
                            alt="Hỗ trợ trọn đời"
                            srcset="
                              https://bangtot.vn/wp-content/uploads/2018/11/ho-tro-tron-doi-300x300.png 300w,
                              https://bangtot.vn/wp-content/uploads/2018/11/ho-tro-tron-doi-150x150.png 150w,
                              https://bangtot.vn/wp-content/uploads/2018/11/ho-tro-tron-doi-100x100.png 100w,
                              https://bangtot.vn/wp-content/uploads/2018/11/ho-tro-tron-doi.png         301w
                            "
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="icon-box-text last-reset">
                      <h3 style="text-align: center">
                        <span style="color: #008000"
                          ><strong>Hỗ trợ trọn đời</strong></span
                        >
                      </h3>
                      <p style="text-align: center"></p>
                    </div>
                  </div>
                  <!-- .icon-box -->
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section" id="section_1048536497">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row row-collapse row-full-width" id="row-1628492792">
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div class="text-right">
                    <div
                      class="is-divider divider clearfix"
                      style="
                        max-width: 100px;
                        background-color: rgb(0, 137, 11);
                      "
                    ></div>
                  </div>
                  <!-- .divider -->
                </div>
              </div>
              <div class="col medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="row row-collapse row-full-width"
                    id="row-477903574"
                  >
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                    <div class="col medium-8 large-8">
                      <div class="col-inner">
                        <h2 style="text-align: center">
                          <strong
                            ><span style="font-size: 100%; color: #008000"
                              ><span
                                style="
                                  font-family: arial, helvetica, sans-serif;
                                "
                                >Bảng Văn Phòng</span
                              ></span
                            ></strong
                          >
                        </h2>
                      </div>
                    </div>
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="is-divider divider clearfix"
                    style="max-width: 100px; background-color: rgb(0, 137, 11)"
                  ></div>
                  <!-- .divider -->
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section section-carousel" id="section_1135197926">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row row-collapse row-full-width" id="row-1386767568">
              <Carousel
                :value="office_products"
                :numVisible="4"
                :numScroll="4"
                circular
                :responsiveOptions="responsiveOptions"
              >
                <template #item="slotProps">
                  <div
                    class="row is-selected"
                    id="row-371828278"
                    aria-selected="true"
                  >
                    <div class="col-inner">
                      <div class="banner has-hover" id="banner-1255833922">
                        <div class="banner-inner fill">
                          <div class="banner-bg fill">
                            <div class="bg fill bg-fill bg-loaded"></div>
                            <div class="overlay"></div>
                          </div>
                          <!-- bg-layers -->
                          <div class="banner-layers container">
                            <a
                              class="fill"
                              href="https://bangtot.vn/san-pham/bang-lich-cong-tac-tuan/"
                              ><div class="fill banner-link"></div
                            ></a>
                            <div
                              id="text-box-167499134"
                              class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                            >
                              <div class="text">
                                <div class="text-inner text-right">
                                  <a
                                    href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                    target="_self"
                                    class="button primary is-shade is-large expand"
                                    style="
                                      border-radius: 20px;
                                      font-size: 0.7rem;
                                    "
                                  >
                                    <span
                                      style="
                                        font-size: 0.7rem;
                                        padding: 0 1.2em;
                                      "
                                      >Xem thêm</span
                                    >
                                  </a>
                                </div>
                              </div>
                              <!-- text-box-inner -->
                            </div>
                            <!-- text-box -->

                            <div
                              id="text-box-1658848146"
                              class="text-box header_item banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                            >
                              <div class="text dark text-shadow-1">
                                <div class="text-inner text-center">
                                  <p style="text-align: left">
                                    <span
                                      style="font-size: 100%; color: #ffffff"
                                      ><a
                                        style="color: #ffffff"
                                        href="https://bangtot.vn/san-pham/bang-lich-cong-tac-tuan/"
                                        ><strong>
                                          {{
                                            slotProps.data.name
                                          }}&nbsp;</strong
                                        ></a
                                      ></span
                                    >
                                  </p>
                                </div>
                              </div>
                              <!-- text-box-inner -->
                            </div>
                            <!-- text-box -->
                          </div>
                          <!-- .banner-layers -->
                        </div>
                        <!-- .banner-inner -->

                        <div class="height-fix is-invisible">
                          <img
                            width="600"
                            height="600"
                            :src="'assets/images/' + slotProps.data.image"
                            class="attachment-large size-large"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />
                        </div>
                      </div>
                      <!-- .banner -->
                    </div>
                  </div>
                </template>
              </Carousel>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section" id="section_1311074243">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row row-collapse row-full-width" id="row-560276204">
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div class="text-right">
                    <div
                      class="is-divider divider clearfix"
                      style="
                        max-width: 100px;
                        background-color: rgb(0, 137, 11);
                      "
                    ></div>
                  </div>
                  <!-- .divider -->
                </div>
              </div>
              <div class="col medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="row row-collapse row-full-width"
                    id="row-1760409232"
                  >
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                    <div class="col medium-8 large-8">
                      <div class="col-inner">
                        <h2 style="text-align: center">
                          <strong
                            ><span style="font-size: 100%; color: #008000"
                              ><span
                                style="
                                  font-family: arial, helvetica, sans-serif;
                                "
                                >Bảng Giáo Dục</span
                              ></span
                            ></strong
                          >
                        </h2>
                      </div>
                    </div>
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="is-divider divider clearfix"
                    style="max-width: 100px; background-color: rgb(0, 137, 11)"
                  ></div>
                  <!-- .divider -->
                </div>
              </div>

            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section section-carousel" id="section_1135197926">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row row-collapse row-full-width" id="row-1386767568">
              <Carousel
                :value="education_products"
                :numVisible="4"
                :numScroll="4"
                circular
                :responsiveOptions="responsiveOptions"
              >
                <template #item="slotProps">
                  <div
                    class="row is-selected"
                    id="row-371828278"
                    aria-selected="true"
                  >
                    <div class="col-inner">
                      <div class="banner has-hover" id="banner-1255833922">
                        <div class="banner-inner fill">
                          <div class="banner-bg fill">
                            <div class="bg fill bg-fill bg-loaded"></div>
                            <div class="overlay"></div>
                          </div>
                          <!-- bg-layers -->
                          <div class="banner-layers container">
                            <a
                              class="fill"
                              href="https://bangtot.vn/san-pham/bang-lich-cong-tac-tuan/"
                              ><div class="fill banner-link"></div
                            ></a>
                            <div
                              id="text-box-167499134"
                              class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                            >
                              <div class="text">
                                <div class="text-inner text-right">
                                  <a
                                    href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                    target="_self"
                                    class="button primary is-shade is-large expand"
                                    style="
                                      border-radius: 20px;
                                      font-size: 0.7rem;
                                    "
                                  >
                                    <span
                                      style="
                                        font-size: 0.7rem;
                                        padding: 0 1.2em;
                                      "
                                      >Xem thêm</span
                                    >
                                  </a>
                                </div>
                              </div>
                              <!-- text-box-inner -->
                            </div>
                            <!-- text-box -->

                            <div
                              id="text-box-1658848146"
                              class="text-box header_item banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                            >
                              <div class="text dark text-shadow-1">
                                <div class="text-inner text-center">
                                  <p style="text-align: left">
                                    <span
                                      style="font-size: 100%; color: #ffffff"
                                      ><a
                                        style="color: #ffffff"
                                        href="https://bangtot.vn/san-pham/bang-lich-cong-tac-tuan/"
                                        ><strong>
                                          {{
                                            slotProps.data.name
                                          }}&nbsp;</strong
                                        ></a
                                      ></span
                                    >
                                  </p>
                                </div>
                              </div>
                              <!-- text-box-inner -->
                            </div>
                            <!-- text-box -->
                          </div>
                          <!-- .banner-layers -->
                        </div>
                        <!-- .banner-inner -->

                        <div class="height-fix is-invisible">
                          <img
                            width="600"
                            height="600"
                            :src="'assets/images/' + slotProps.data.image"
                            class="attachment-large size-large"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />
                        </div>
                      </div>
                      <!-- .banner -->
                    </div>
                  </div>
                </template>
              </Carousel>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section" id="section_110001210">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row row-collapse row-full-width" id="row-968894294">
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div class="text-right">
                    <div
                      class="is-divider divider clearfix"
                      style="
                        max-width: 100px;
                        background-color: rgb(0, 137, 11);
                      "
                    ></div>
                  </div>
                  <!-- .divider -->
                </div>
              </div>
              <div class="col medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="row row-collapse row-full-width"
                    id="row-455144020"
                  >
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                    <div class="col medium-8 large-8">
                      <div class="col-inner">
                        <h2 style="text-align: center">
                          <strong
                            ><span style="font-size: 100%; color: #008000"
                              ><span
                                style="
                                  font-family: arial, helvetica, sans-serif;
                                "
                                >Bảng Quản Trị</span
                              ></span
                            ></strong
                          >
                        </h2>
                      </div>
                    </div>
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="is-divider divider clearfix"
                    style="max-width: 100px; background-color: rgb(0, 137, 11)"
                  ></div>
                  <!-- .divider -->
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section co-the-ban-thich" id="section_2137592021">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row" id="row-1989794410">
              <div class="col medium-6 small-12 large-6">
                <div class="col-inner">
                  <div class="row" id="row-1223220600">
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-891085495">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/san-pham/bang-lich-cong-tac-tuan/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-1721771229"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-1819156718"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #ffffff"
                                        ><a
                                          style="color: #ffffff"
                                          href="https://bangtot.vn/san-pham/bang-lich-cong-tac-tuan/"
                                          ><strong
                                            >Bảng Quản Lý Phân
                                            Xưởng&nbsp;</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/10/05-bang-theo-doi-lich-hen_grande.png"
                              class="attachment-large size-large"
                              alt="Bảng theo dõi lịch hẹn"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/10/05-bang-theo-doi-lich-hen_grande.png         600w,
                                https://bangtot.vn/wp-content/uploads/2018/10/05-bang-theo-doi-lich-hen_grande-150x150.png 150w,
                                https://bangtot.vn/wp-content/uploads/2018/10/05-bang-theo-doi-lich-hen_grande-300x300.png 300w,
                                https://bangtot.vn/wp-content/uploads/2018/10/05-bang-theo-doi-lich-hen_grande-100x100.png 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-1934385111">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-383039940"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-1299832562"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #ffffff"
                                        ><a
                                          style="color: #ffffff"
                                          href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                          ><strong
                                            >Bảng Lịch Công Tác&nbsp;</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/10/09-phong-kham-dha_grande.png"
                              class="attachment-large size-large"
                              alt="Bảng lịch công tác"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/10/09-phong-kham-dha_grande.png         600w,
                                https://bangtot.vn/wp-content/uploads/2018/10/09-phong-kham-dha_grande-150x150.png 150w,
                                https://bangtot.vn/wp-content/uploads/2018/10/09-phong-kham-dha_grande-300x300.png 300w,
                                https://bangtot.vn/wp-content/uploads/2018/10/09-phong-kham-dha_grande-100x100.png 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col medium-6 small-12 large-6">
                <div class="col-inner">
                  <div class="row" id="row-314739867">
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-807929271">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-361256205"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-90146238"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #ffffff"
                                        ><a
                                          style="color: #ffffff"
                                          href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                          ><strong
                                            >Bảng Thông Tin Ghim Nỉ</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/10/21-bang-thong-tin-ghim-combo_grande.png"
                              class="attachment-large size-large"
                              alt="Bảng ghim nỉ thông báo"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/10/21-bang-thong-tin-ghim-combo_grande.png         600w,
                                https://bangtot.vn/wp-content/uploads/2018/10/21-bang-thong-tin-ghim-combo_grande-150x150.png 150w,
                                https://bangtot.vn/wp-content/uploads/2018/10/21-bang-thong-tin-ghim-combo_grande-300x300.png 300w,
                                https://bangtot.vn/wp-content/uploads/2018/10/21-bang-thong-tin-ghim-combo_grande-100x100.png 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-1272590706">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-672376388"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #ffffff"
                                        ><a
                                          style="color: #ffffff"
                                          href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                          ><strong
                                            >Bảng Sơ Đồ Tổ Chức</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-1369296133"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-dan-decal/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/11/07-so-do-to-chuc-khoa-nhiem-khuan_grande.png"
                              class="attachment-large size-large"
                              alt="Bảng sơ đồ tổ chức"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/11/07-so-do-to-chuc-khoa-nhiem-khuan_grande.png         600w,
                                https://bangtot.vn/wp-content/uploads/2018/11/07-so-do-to-chuc-khoa-nhiem-khuan_grande-150x150.png 150w,
                                https://bangtot.vn/wp-content/uploads/2018/11/07-so-do-to-chuc-khoa-nhiem-khuan_grande-300x300.png 300w,
                                https://bangtot.vn/wp-content/uploads/2018/11/07-so-do-to-chuc-khoa-nhiem-khuan_grande-100x100.png 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section" id="section_691514773">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row row-collapse row-full-width" id="row-759517920">
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div class="text-right">
                    <div
                      class="is-divider divider clearfix"
                      style="
                        max-width: 100px;
                        background-color: rgb(0, 137, 11);
                      "
                    ></div>
                  </div>
                  <!-- .divider -->
                </div>
              </div>
              <div class="col medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="row row-collapse row-full-width"
                    id="row-1181714749"
                  >
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                    <div class="col medium-8 large-8">
                      <div class="col-inner">
                        <h2 style="text-align: center">
                          <strong
                            ><span style="font-size: 100%; color: #008000"
                              ><span
                                style="
                                  font-family: arial, helvetica, sans-serif;
                                "
                                >Bảng Thông Tin</span
                              ></span
                            ></strong
                          >
                        </h2>
                      </div>
                    </div>
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="is-divider divider clearfix"
                    style="max-width: 100px; background-color: rgb(0, 137, 11)"
                  ></div>
                  <!-- .divider -->
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section co-the-ban-thich" id="section_2140447833">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row" id="row-748747625">
              <div class="col medium-6 small-12 large-6">
                <div class="col-inner">
                  <div class="row" id="row-1884570186">
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-145552083">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-ngoai-troi/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-204566105"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-ngoai-troi/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-1509899284"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #ffffff"
                                        ><a
                                          style="color: #ffffff"
                                          href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-ngoai-troi/"
                                          ><strong
                                            >Bảng Thông Tin Ngoài Trời Nhà
                                            Máy&nbsp;</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-ngoai-troi.jpg"
                              class="attachment-large size-large"
                              alt="Bảng thông tin ngoài trời nhà máy sản xuất"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-ngoai-troi.jpg         600w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-ngoai-troi-150x150.jpg 150w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-ngoai-troi-300x300.jpg 300w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-ngoai-troi-100x100.jpg 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-118982812">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-ngoai-troi/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-2418045"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-ngoai-troi/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-421286276"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #ffffff"
                                        ><a
                                          style="color: #ffffff"
                                          href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-ngoai-troi/"
                                          ><strong
                                            >Bảng Thông Tin Ngoài Trời Trường
                                            Mầm Non</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-truong-man-non.jpg"
                              class="attachment-large size-large"
                              alt=""
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-truong-man-non.jpg         600w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-truong-man-non-150x150.jpg 150w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-truong-man-non-300x300.jpg 300w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-truong-man-non-100x100.jpg 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col medium-6 small-12 large-6">
                <div class="col-inner">
                  <div class="row" id="row-2075993135">
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-1927149589">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-trong-nha/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-1782280001"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-trong-nha/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-473047583"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #333333"
                                        ><a
                                          style="color: #333333"
                                          href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-trong-nha/"
                                          ><strong
                                            >Bảng Thông Tin Kính Lùa Có
                                            Khóa&nbsp;</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/11/bang_tin_kinh_lua_co_khoa.jpg"
                              class="attachment-large size-large"
                              alt=""
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/11/bang_tin_kinh_lua_co_khoa.jpg         600w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang_tin_kinh_lua_co_khoa-150x150.jpg 150w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang_tin_kinh_lua_co_khoa-300x300.jpg 300w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang_tin_kinh_lua_co_khoa-100x100.jpg 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-1526694688">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-trong-nha/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-1700511439"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #333333"
                                        ><a
                                          style="color: #333333"
                                          href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-trong-nha/"
                                          ><strong
                                            >Bảng Thông Tin Trong Nhà</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-600645894"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-thong-tin/bang-thong-tin-trong-nha/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-trong-nha.jpg"
                              class="attachment-large size-large"
                              alt="Bảng thông tin trong nhà"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-trong-nha.jpg         600w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-trong-nha-150x150.jpg 150w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-trong-nha-300x300.jpg 300w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-thong-tin-trong-nha-100x100.jpg 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section" id="section_1002094993">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row row-collapse row-full-width" id="row-1359408861">
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div class="text-right">
                    <div
                      class="is-divider divider clearfix"
                      style="
                        max-width: 100px;
                        background-color: rgb(0, 137, 11);
                      "
                    ></div>
                  </div>
                  <!-- .divider -->
                </div>
              </div>
              <div class="col medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="row row-collapse row-full-width"
                    id="row-1819826396"
                  >
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                    <div class="col medium-8 large-8">
                      <div class="col-inner">
                        <h2 style="text-align: center">
                          <strong
                            ><span style="font-size: 100%; color: #008000"
                              ><span
                                style="
                                  font-family: arial, helvetica, sans-serif;
                                "
                                >Bảng Nhà Hàng</span
                              ></span
                            ></strong
                          >
                        </h2>
                      </div>
                    </div>
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="is-divider divider clearfix"
                    style="max-width: 100px; background-color: rgb(0, 137, 11)"
                  ></div>
                  <!-- .divider -->
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section co-the-ban-thich" id="section_323503181">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row" id="row-1621691228">
              <div class="col medium-6 small-12 large-6">
                <div class="col-inner">
                  <div class="row" id="row-253824574">
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-1974969514">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/bang-gia-ve/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-2135186988"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-gia-ve/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-1595901744"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #282828"
                                        ><a
                                          style="color: #282828"
                                          href="https://bangtot.vn/danh-muc/bang-gia-ve/"
                                          ><strong
                                            >Giá Vẽ Trẻ Em 2 Mặt</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/11/gia-ve-tre-em-2-mat.jpg"
                              class="attachment-large size-large"
                              alt="Giá vẽ trẻ em 2 mặt"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/11/gia-ve-tre-em-2-mat.jpg         600w,
                                https://bangtot.vn/wp-content/uploads/2018/11/gia-ve-tre-em-2-mat-150x150.jpg 150w,
                                https://bangtot.vn/wp-content/uploads/2018/11/gia-ve-tre-em-2-mat-300x300.jpg 300w,
                                https://bangtot.vn/wp-content/uploads/2018/11/gia-ve-tre-em-2-mat-100x100.jpg 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-1911359853">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/san-pham/bang-tu-trang-han-quoc-economy/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-1664078386"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/san-pham/bang-tu-trang-han-quoc-economy/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-621459090"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #ffffff"
                                        ><a
                                          style="color: #ffffff"
                                          href="https://bangtot.vn/san-pham/bang-tu-trang-han-quoc-economy/"
                                          ><strong
                                            >Bảng Từ Trắng Economy</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/10/bang-tu-trang-han-quoc-2.jpg"
                              class="attachment-large size-large"
                              alt="Bảng từ trắng economy"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/10/bang-tu-trang-han-quoc-2.jpg         600w,
                                https://bangtot.vn/wp-content/uploads/2018/10/bang-tu-trang-han-quoc-2-150x150.jpg 150w,
                                https://bangtot.vn/wp-content/uploads/2018/10/bang-tu-trang-han-quoc-2-300x300.jpg 300w,
                                https://bangtot.vn/wp-content/uploads/2018/10/bang-tu-trang-han-quoc-2-100x100.jpg 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col medium-6 small-12 large-6">
                <div class="col-inner">
                  <div class="row" id="row-1230317614">
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-227227333">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/san-pham/bang-combo-tu-trang-ghim/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-1441570313"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/san-pham/bang-combo-tu-trang-ghim/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-254720647"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #ffffff"
                                        ><a
                                          style="color: #ffffff"
                                          href="https://bangtot.vn/san-pham/bang-combo-tu-trang-ghim/"
                                          ><strong
                                            >Bảng Combo Từ Trắng + Ghim
                                            Nỉ</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="500"
                              height="500"
                              src="https://bangtot.vn/wp-content/uploads/2018/10/bang-com-tu-trang-li-e-khung-nhom-1_grande-2.jpg"
                              class="attachment-large size-large"
                              alt="Bảng combo từ trắng ghim nỉ"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/10/bang-com-tu-trang-li-e-khung-nhom-1_grande-2.jpg         500w,
                                https://bangtot.vn/wp-content/uploads/2018/10/bang-com-tu-trang-li-e-khung-nhom-1_grande-2-150x150.jpg 150w,
                                https://bangtot.vn/wp-content/uploads/2018/10/bang-com-tu-trang-li-e-khung-nhom-1_grande-2-300x300.jpg 300w,
                                https://bangtot.vn/wp-content/uploads/2018/10/bang-com-tu-trang-li-e-khung-nhom-1_grande-2-100x100.jpg 100w
                              "
                              sizes="(max-width: 500px) 100vw, 500px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                    <div class="col medium-6 small-12 large-6">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-231285453">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/bang-tu-trang/bang-tu-trang-khong-khung/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-1967808949"
                                class="text-box banner-layer x50 md-x50 lg-x50 y0 md-y0 lg-y0 res-text"
                              >
                                <div class="text dark text-shadow-1">
                                  <div class="text-inner text-center">
                                    <p style="text-align: left">
                                      <span
                                        style="font-size: 100%; color: #282828"
                                        ><a
                                          style="color: #282828"
                                          href="https://bangtot.vn/danh-muc/bang-tu-trang/bang-tu-trang-khong-khung/"
                                          ><strong
                                            >Bảng Không Khung&nbsp;</strong
                                          ></a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->

                              <div
                                id="text-box-1439538754"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-tu-trang/bang-tu-trang-khong-khung/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Xem thêm</span>
                                    </a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="600"
                              height="600"
                              src="https://bangtot.vn/wp-content/uploads/2018/11/bang-khong-khung.png"
                              class="attachment-large size-large"
                              alt="Bảng không khung"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-khong-khung.png         600w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-khong-khung-150x150.png 150w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-khong-khung-300x300.png 300w,
                                https://bangtot.vn/wp-content/uploads/2018/11/bang-khong-khung-100x100.png 100w
                              "
                              sizes="(max-width: 600px) 100vw, 600px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section" id="section_403463315">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row row-collapse row-full-width" id="row-1960568303">
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div class="text-right">
                    <div
                      class="is-divider divider clearfix"
                      style="
                        max-width: 100px;
                        background-color: rgb(0, 137, 11);
                      "
                    ></div>
                  </div>
                  <!-- .divider -->
                </div>
              </div>
              <div class="col medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="row row-collapse row-full-width"
                    id="row-699251916"
                  >
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                    <div class="col medium-8 large-8">
                      <div class="col-inner">
                        <h2 style="text-align: center">
                          <strong
                            ><span style="font-size: 100%; color: #008000"
                              ><span
                                style="
                                  font-family: arial, helvetica, sans-serif;
                                "
                                >Nội Thất</span
                              ></span
                            ></strong
                          >
                        </h2>
                      </div>
                    </div>
                    <div class="col hide-for-small medium-2 large-2">
                      <div class="col-inner">
                        <div
                          class="is-divider divider clearfix"
                          style="
                            max-width: 100px;
                            background-color: rgb(0, 137, 11);
                          "
                        ></div>
                        <!-- .divider -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col hide-for-small medium-4 large-4">
                <div class="col-inner">
                  <div
                    class="is-divider divider clearfix"
                    style="max-width: 100px; background-color: rgb(0, 137, 11)"
                  ></div>
                  <!-- .divider -->
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section co-the-ban-thich" id="section_430381527">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row" id="row-254955225">
              <div class="col medium-6 small-12 large-6">
                <div class="col-inner">
                  <div class="row" id="row-659530342">
                    <div class="col small-12 large-12">
                      <div class="col-inner">
                        <div class="banner has-hover" id="banner-343265240">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/noi-that-phong-hoc/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-2103814375"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/noi-that-phong-hoc/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Nội Thất Phòng Học</span>
                                      <i class="icon-expand"></i
                                    ></a>
                                  </div>
                                </div>
                                <!-- text-box-inner -->
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="650"
                              height="379"
                              src="https://bangtot.vn/wp-content/uploads/2018/11/noi-that-phong-hoc.jpg"
                              class="attachment-large size-large"
                              alt="Nội thất phòng học"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/11/noi-that-phong-hoc.jpg         650w,
                                https://bangtot.vn/wp-content/uploads/2018/11/noi-that-phong-hoc-300x175.jpg 300w,
                                https://bangtot.vn/wp-content/uploads/2018/11/noi-that-phong-hoc-600x350.jpg 600w
                              "
                              sizes="(max-width: 650px) 100vw, 650px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col medium-6 small-12 large-6">
                <div class="col-inner">
                  <div class="row" id="row-1877550963">
                    <div class="col small-12 large-12">
                      <div
                        class="col-inner"
                        style="
                          padding: 0px 0px 0px 0px;
                          margin: 0px 0px -px 0px;
                        "
                      >
                        <div class="banner has-hover" id="banner-1774193767">
                          <div class="banner-inner fill">
                            <div class="banner-bg fill">
                              <div class="bg fill bg-fill bg-loaded"></div>
                              <div class="overlay"></div>
                              <div
                                class="is-border"
                                style="
                                  border-width: 0px 0px 0px 0px;
                                  margin: 0px 0px 0 0px;
                                "
                              ></div>
                            </div>
                            <!-- bg-layers -->
                            <div class="banner-layers container">
                              <a
                                class="fill"
                                href="https://bangtot.vn/danh-muc/bang-tu-xanh/bang-tu-xanh-di-dong/"
                                ><div class="fill banner-link"></div
                              ></a>
                              <div
                                id="text-box-2048406401"
                                class="text-box banner-layer x10 md-x10 lg-x10 y100 md-y100 lg-y100 res-text"
                              >
                                <div class="text">
                                  <div class="text-inner text-right">
                                    <a
                                      href="https://bangtot.vn/danh-muc/bang-tu-xanh/bang-tu-xanh-di-dong/"
                                      target="_self"
                                      class="button primary is-shade is-large expand"
                                      style="border-radius: 20px"
                                    >
                                      <span>Nội Thất văn phòng</span>
                                      <i class="icon-expand"></i
                                    ></a>
                                  </div>
                                </div>
                              </div>
                              <!-- text-box -->
                            </div>
                            <!-- .banner-layers -->
                          </div>
                          <!-- .banner-inner -->

                          <div class="height-fix is-invisible">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="650"
                              height="379"
                              src="https://bangtot.vn/wp-content/uploads/2018/11/noi-that-van-phong.jpg"
                              class="attachment-large size-large"
                              alt="Nội Thất Văn Phòng"
                              srcset="
                                https://bangtot.vn/wp-content/uploads/2018/11/noi-that-van-phong.jpg         650w,
                                https://bangtot.vn/wp-content/uploads/2018/11/noi-that-van-phong-300x175.jpg 300w,
                                https://bangtot.vn/wp-content/uploads/2018/11/noi-that-van-phong-600x350.jpg 600w
                              "
                              sizes="(max-width: 650px) 100vw, 650px"
                            />
                          </div>
                        </div>
                        <!-- .banner -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section co-the-ban-thich" id="section_1059581150">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded"></div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row noi-dung" id="row-531387660">
              <div class="col small-12 large-12">
                <div
                  class="col-inner"
                  style="padding: 15px 15px 15px 15px; margin: 0px 0px 0px0 0px"
                >
                  <p>
                    <span style="color: #ff6600; font-size: 110%"
                      >Có thể bạn thích:</span
                    >
                  </p>

                  <div
                    class="row large-columns-6 medium-columns-3 small-columns-2 row-small slider row-slider slider-nav-simple slider-nav-outside slider-nav-light slider-nav-push flickity-enabled is-draggable"
                    data-flickity-options='{"imagesLoaded": true, "groupCells": "100%", "dragThreshold" : 5, "cellAlign": "left","wrapAround": true,"prevNextButtons": true,"percentPosition": true,"pageDots": false, "rightToLeft": false, "autoPlay" : false}'
                    tabindex="0"
                  >
                    <!-- col -->

                    <!-- col -->

                    <!-- col -->

                    <!-- col -->

                    <!-- col -->

                    <!-- col -->

                    <!-- col -->

                    <!-- col -->

                    <!-- col -->

                    <!-- col -->

                    <!-- col -->

                    <!-- col -->

                    <div
                      class="flickity-viewport"
                      style="height: 369.656px; touch-action: pan-y"
                    >
                      <div
                        class="flickity-slider"
                        style="left: 0px; transform: translateX(-199.99%)"
                      >
                        <div
                          class="col is-selected"
                          aria-selected="true"
                          style="position: absolute; left: 233.33%"
                          v-for="index in banner" :key="index"
                        >
                          <div class="col-inner">
                            <div
                              class="badge-container absolute left top z-1"
                            ></div>
                            <div
                              class="product-small box has-hover box-normal box-text-bottom"
                            >
                              <div class="box-image">
                                <div
                                  class="image-zoom image-cover"
                                  style="padding-top: 100%"
                                >
                                  <a>
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="2560"
                                      height="1826"
                                      src="https://bangtot.vn/wp-content/uploads/2023/03/bang-den-viet-phan.jpg"
                                      class="attachment-original size-original"
                                      alt="bảng đen dạy học"
                                      srcset="
                                        https://bangtot.vn/wp-content/uploads/2023/03/bang-den-viet-phan.jpg           2560w,
                                        https://bangtot.vn/wp-content/uploads/2023/03/bang-den-viet-phan-300x214.jpg    300w,
                                        https://bangtot.vn/wp-content/uploads/2023/03/bang-den-viet-phan-1024x730.jpg  1024w,
                                        https://bangtot.vn/wp-content/uploads/2023/03/bang-den-viet-phan-768x548.jpg    768w,
                                        https://bangtot.vn/wp-content/uploads/2023/03/bang-den-viet-phan-1536x1096.jpg 1536w,
                                        https://bangtot.vn/wp-content/uploads/2023/03/bang-den-viet-phan-2048x1461.jpg 2048w,
                                        https://bangtot.vn/wp-content/uploads/2023/03/bang-den-viet-phan-600x428.jpg    600w
                                      "
                                      sizes="(max-width: 2560px) 100vw, 2560px"
                                    />
                                  </a>
                                </div>
                                <div
                                  class="image-tools top right show-on-hover"
                                ></div>
                                <div
                                  class="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"
                                ></div>
                              </div>
                              <!-- box-image -->

                              <div class="box-text text-left">
                                <div class="title-wrapper">
                                  <p class="name product-title">
                                    <a
                                      
                                      >Bảng Đen Treo Tường</a
                                    >
                                  </p>
                                </div>
                                <div class="price-wrapper">
                                  <span class="price"
                                    ><span class="price"
                                      ><span
                                        class="woocommerce-Price-amount amount"
                                        ><bdi
                                          >650.000<span
                                            class="woocommerce-Price-currencySymbol"
                                            >₫</span
                                          ></bdi
                                        ></span
                                      ></span
                                    ></span
                                  >
                                </div>
                                <div
                                  class="variations_form cart in_loop initialized"
                                  data-product_id="16537"
                                  style="display: block"
                                  current-image="16549"
                                >
                                  <div class="variations pa_vi-tri">
                                    <select
                                      id="pa_vi-tri"
                                      name="attribute_pa_vi-tri"
                                      data-attribute_name="attribute_pa_vi-tri"
                                      data-type="label"
                                      data-default_value="ha-noi"
                                      class="yith_wccl_custom"
                                      style="display: none"
                                    >
                                      <option value="">
                                        Choose an option…
                                      </option>
                                      <option
                                        value="da-nang"
                                        data-value="Đà Nẵng"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        Đà Nẵng
                                      </option>
                                      <option
                                        value="ha-noi"
                                        selected="selected"
                                        data-value="Hà Nội"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        Hà Nội
                                      </option>
                                      <option
                                        value="tp-hcm"
                                        data-value="TP HCM"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        TP HCM
                                      </option>
                                    </select>
                                    <div
                                      class="select_box_label select_box attribute_pa_vi-tri"
                                    >
                                      <div
                                        class="select_option_label select_option"
                                        data-value="da-nang"
                                      >
                                        <span class="yith_wccl_value"
                                          >Đà Nẵng</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option selected"
                                        data-value="ha-noi"
                                      >
                                        <span class="yith_wccl_value"
                                          >Hà Nội</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="tp-hcm"
                                      >
                                        <span class="yith_wccl_value"
                                          >TP HCM</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div class="variations pa_size">
                                    <select
                                      id="pa_size"
                                      name="attribute_pa_size"
                                      data-attribute_name="attribute_pa_size"
                                      data-type="label"
                                      data-default_value="1000x1200"
                                      class="yith_wccl_custom"
                                      style="display: none"
                                    >
                                      <option value="">
                                        Choose an option…
                                      </option>
                                      <option
                                        value="1000x1200"
                                        selected="selected"
                                        data-value="1000x1200"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1000x1200
                                      </option>
                                      <option
                                        value="1200x1500"
                                        data-value="1200x1500"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x1500
                                      </option>
                                      <option
                                        value="1200x1600"
                                        data-value="1200x1600"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x1600
                                      </option>
                                      <option
                                        value="1200x1800"
                                        data-value="1200x1800"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x1800
                                      </option>
                                      <option
                                        value="1200x2000"
                                        data-value="1200x2000"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x2000
                                      </option>
                                      <option
                                        value="1200x2200"
                                        data-value="1200x2200"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x2200
                                      </option>
                                      <option
                                        value="1200x2400"
                                        data-value="1200x2400"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x2400
                                      </option>
                                      <option
                                        value="1200x3000"
                                        data-value="1200x3000"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x3000
                                      </option>
                                      <option
                                        value="1200x3200"
                                        data-value="1200x3200"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x3200
                                      </option>
                                      <option
                                        value="1200x3600"
                                        data-value="1200x3600"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x3600
                                      </option>
                                    </select>
                                    <div
                                      class="select_box_label select_box attribute_pa_size"
                                    >
                                      <div
                                        class="select_option_label select_option selected"
                                        data-value="1000x1200"
                                      >
                                        <span class="yith_wccl_value"
                                          >1000x1200</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x1500"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x1500</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x1600"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x1600</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x1800"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x1800</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x2000"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x2000</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x2200"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x2200</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x2400"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x2400</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x3000"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x3000</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x3200"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x3200</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x3600"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x3600</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="add-to-cart-button">
                                  <a
                                    href="https://bangtot.vn/san-pham/bang-den-treo-tuong/"
                                    rel="nofollow"
                                    data-product_id="16537"
                                    class="add_to_cart_button product_type_variable button primary is-flat mb-0 is-small"
                                    >Chọn mẫu</a
                                  >
                                </div>
                                <div
                                  class="variations_form cart in_loop initialized"
                                  data-product_id="16537"
                                  style="display: block"
                                  current-image="16549"
                                >
                                  <div class="variations pa_vi-tri">
                                    <select
                                      id="pa_vi-tri"
                                      name="attribute_pa_vi-tri"
                                      data-attribute_name="attribute_pa_vi-tri"
                                      data-type="label"
                                      data-default_value="ha-noi"
                                      class="yith_wccl_custom"
                                      style="display: none"
                                    >
                                      <option value="">
                                        Choose an option…
                                      </option>
                                      <option
                                        value="da-nang"
                                        data-value="Đà Nẵng"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        Đà Nẵng
                                      </option>
                                      <option
                                        value="ha-noi"
                                        selected="selected"
                                        data-value="Hà Nội"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        Hà Nội
                                      </option>
                                      <option
                                        value="tp-hcm"
                                        data-value="TP HCM"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        TP HCM
                                      </option>
                                    </select>
                                    <div
                                      class="select_box_label select_box attribute_pa_vi-tri"
                                    >
                                      <div
                                        class="select_option_label select_option"
                                        data-value="da-nang"
                                      >
                                        <span class="yith_wccl_value"
                                          >Đà Nẵng</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option selected"
                                        data-value="ha-noi"
                                      >
                                        <span class="yith_wccl_value"
                                          >Hà Nội</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="tp-hcm"
                                      >
                                        <span class="yith_wccl_value"
                                          >TP HCM</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div class="variations pa_size">
                                    <select
                                      id="pa_size"
                                      name="attribute_pa_size"
                                      data-attribute_name="attribute_pa_size"
                                      data-type="label"
                                      data-default_value="1000x1200"
                                      class="yith_wccl_custom"
                                      style="display: none"
                                    >
                                      <option value="">
                                        Choose an option…
                                      </option>
                                      <option
                                        value="1000x1200"
                                        selected="selected"
                                        data-value="1000x1200"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1000x1200
                                      </option>
                                      <option
                                        value="1200x1500"
                                        data-value="1200x1500"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x1500
                                      </option>
                                      <option
                                        value="1200x1600"
                                        data-value="1200x1600"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x1600
                                      </option>
                                      <option
                                        value="1200x1800"
                                        data-value="1200x1800"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x1800
                                      </option>
                                      <option
                                        value="1200x2000"
                                        data-value="1200x2000"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x2000
                                      </option>
                                      <option
                                        value="1200x2200"
                                        data-value="1200x2200"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x2200
                                      </option>
                                      <option
                                        value="1200x2400"
                                        data-value="1200x2400"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x2400
                                      </option>
                                      <option
                                        value="1200x3000"
                                        data-value="1200x3000"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x3000
                                      </option>
                                      <option
                                        value="1200x3200"
                                        data-value="1200x3200"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x3200
                                      </option>
                                      <option
                                        value="1200x3600"
                                        data-value="1200x3600"
                                        data-tooltip=""
                                        class="attached enabled"
                                      >
                                        1200x3600
                                      </option>
                                    </select>
                                    <div
                                      class="select_box_label select_box attribute_pa_size"
                                    >
                                      <div
                                        class="select_option_label select_option selected"
                                        data-value="1000x1200"
                                      >
                                        <span class="yith_wccl_value"
                                          >1000x1200</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x1500"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x1500</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x1600"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x1600</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x1800"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x1800</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x2000"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x2000</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x2200"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x2200</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x2400"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x2400</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x3000"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x3000</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x3200"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x3200</span
                                        >
                                      </div>
                                      <div
                                        class="select_option_label select_option"
                                        data-value="1200x3600"
                                      >
                                        <span class="yith_wccl_value"
                                          >1200x3600</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- box-text -->
                            </div>
                            <!-- box -->
                          </div>
                          <!-- .col-inner -->
                        </div>
                      </div>
                    </div>
                    <button
                      class="flickity-button flickity-prev-next-button previous"
                      type="button"
                      aria-label="Previous"
                    >
                      <svg class="flickity-button-icon" viewBox="0 0 100 100">
                        <path
                          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                          class="arrow"
                        ></path>
                      </svg></button
                    ><button
                      class="flickity-button flickity-prev-next-button next"
                      type="button"
                      aria-label="Next"
                    >
                      <svg class="flickity-button-icon" viewBox="0 0 100 100">
                        <path
                          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                          class="arrow"
                          transform="translate(100, 100) rotate(180) "
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
        <section class="section ban-chay-nhat-tuan" id="section_1442184273">
          <div class="bg section-bg fill bg-fill bg-loaded bg-loaded">
            <div class="is-border" style="border-width: 0px 0px 2 0px"></div>
          </div>
          <!-- .section-bg -->

          <div class="section-content relative">
            <div class="row" id="row-611762141">
              <div class="col small-12 large-12">
                <div
                  class="col-inner text-center"
                  style="padding: 0px 0px 0 0px; margin: 0px 0px 0 0px"
                >
                  <div
                    class="gap-element"
                    style="display: block; height: auto; padding-top: 40px"
                  ></div>
                  <h2 class="page-subheading">Tin tức – bài viết</h2>

                  <div
                    class="row large-columns-4 medium-columns-1 small-columns-1 row-small"
                  >
                    <div class="col post-item">
                      <div class="col-inner">
                        <a
                          href="https://bangtot.vn/bang-phooc-trang/"
                          class="plain"
                        >
                          <div
                            class="box box-bounce box-text-bottom box-blog-post has-hover"
                          >
                            <div class="box-image">
                              <div
                                class="image-overlay-add image-cover"
                                style="padding-top: 86%"
                              >
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="900"
                                  height="600"
                                  src="https://bangtot.vn/wp-content/uploads/2022/05/bang-phooc-trang.jpg"
                                  class="attachment-original size-original wp-post-image"
                                  alt="bang-phooc-trang"
                                  srcset="
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-phooc-trang.jpg         900w,
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-phooc-trang-300x200.jpg 300w,
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-phooc-trang-768x512.jpg 768w,
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-phooc-trang-600x400.jpg 600w
                                  "
                                  sizes="(max-width: 900px) 100vw, 900px"
                                />
                                <div
                                  class="overlay"
                                  style="background-color: rgba(0, 0, 0, 0.17)"
                                ></div>
                              </div>
                            </div>
                            <!-- .box-image -->
                            <div class="box-text text-left">
                              <div class="box-text-inner blog-post-inner">
                                <h5 class="post-title is-large">
                                  Bảng Phoóc Trắng Có Bền Không? Mua Bảng Trắng
                                  Giá Rẻ Viết Bút Lông
                                </h5>
                                <div class="post-meta is-small op-8"></div>
                                <div class="is-divider"></div>
                                <p class="from_the_blog_excerpt">
                                  Bảng phoóc trắng là thiết bị bảng viết đã có
                                  từ rất ...
                                </p>
                              </div>
                              <!-- .box-text-inner -->
                            </div>
                            <!-- .box-text -->
                          </div>
                          <!-- .box --> </a
                        ><!-- .link -->
                      </div>
                      <!-- .col-inner -->
                    </div>
                    <!-- .col -->
                    <div class="col post-item">
                      <div class="col-inner">
                        <a
                          href="https://bangtot.vn/gia-bang-tu-trang/"
                          class="plain"
                        >
                          <div
                            class="box box-bounce box-text-bottom box-blog-post has-hover"
                          >
                            <div class="box-image">
                              <div
                                class="image-overlay-add image-cover"
                                style="padding-top: 86%"
                              >
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="900"
                                  height="900"
                                  src="https://bangtot.vn/wp-content/uploads/2022/04/bang-tu-trang-treo-tuong.jpg"
                                  class="attachment-original size-original wp-post-image"
                                  alt="gia-bang-tu-trang"
                                  srcset="
                                    https://bangtot.vn/wp-content/uploads/2022/04/bang-tu-trang-treo-tuong.jpg         900w,
                                    https://bangtot.vn/wp-content/uploads/2022/04/bang-tu-trang-treo-tuong-300x300.jpg 300w,
                                    https://bangtot.vn/wp-content/uploads/2022/04/bang-tu-trang-treo-tuong-150x150.jpg 150w,
                                    https://bangtot.vn/wp-content/uploads/2022/04/bang-tu-trang-treo-tuong-768x768.jpg 768w,
                                    https://bangtot.vn/wp-content/uploads/2022/04/bang-tu-trang-treo-tuong-600x600.jpg 600w,
                                    https://bangtot.vn/wp-content/uploads/2022/04/bang-tu-trang-treo-tuong-100x100.jpg 100w
                                  "
                                  sizes="(max-width: 900px) 100vw, 900px"
                                />
                                <div
                                  class="overlay"
                                  style="background-color: rgba(0, 0, 0, 0.17)"
                                ></div>
                              </div>
                            </div>
                            <!-- .box-image -->
                            <div class="box-text text-left">
                              <div class="box-text-inner blog-post-inner">
                                <h5 class="post-title is-large">
                                  Giá Bảng Từ Trắng – Mua Bảng Trắng Viết Bút
                                  Lông Giá Rẻ
                                </h5>
                                <div class="post-meta is-small op-8"></div>
                                <div class="is-divider"></div>
                                <p class="from_the_blog_excerpt">
                                  Giá bảng từ trắng đắt hay rẻ?&nbsp; Bạn có thể
                                  dễ dàng ...
                                </p>
                              </div>
                              <!-- .box-text-inner -->
                            </div>
                            <!-- .box-text -->
                          </div>
                          <!-- .box --> </a
                        ><!-- .link -->
                      </div>
                      <!-- .col-inner -->
                    </div>
                    <!-- .col -->
                    <div class="col post-item">
                      <div class="col-inner">
                        <a
                          href="https://bangtot.vn/mua-bang-viet-bang-kinh/"
                          class="plain"
                        >
                          <div
                            class="box box-bounce box-text-bottom box-blog-post has-hover"
                          >
                            <div class="box-image">
                              <div
                                class="image-overlay-add image-cover"
                                style="padding-top: 86%"
                              >
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="600"
                                  height="400"
                                  src="https://bangtot.vn/wp-content/uploads/2022/05/bang-trang-khong-khung-dan-tuong.jpg"
                                  class="attachment-original size-original wp-post-image"
                                  alt="Bang-viet-bang-kinh-Dong-Nai"
                                  srcset="
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-trang-khong-khung-dan-tuong.jpg         600w,
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-trang-khong-khung-dan-tuong-300x200.jpg 300w
                                  "
                                  sizes="(max-width: 600px) 100vw, 600px"
                                />
                                <div
                                  class="overlay"
                                  style="background-color: rgba(0, 0, 0, 0.17)"
                                ></div>
                              </div>
                            </div>
                            <!-- .box-image -->
                            <div class="box-text text-left">
                              <div class="box-text-inner blog-post-inner">
                                <h5 class="post-title is-large">
                                  Mua Bảng Viết Bằng Kính – Bảng Kính Cường Lực
                                  Cho Văn Phòng Tại Đồng Nai
                                </h5>
                                <div class="post-meta is-small op-8"></div>
                                <div class="is-divider"></div>
                                <p class="from_the_blog_excerpt">
                                  Bảng viết bằng kính dành cho văn phòng, trung
                                  tâm, các khu ...
                                </p>
                              </div>
                              <!-- .box-text-inner -->
                            </div>
                            <!-- .box-text -->
                          </div>
                          <!-- .box --> </a
                        ><!-- .link -->
                      </div>
                      <!-- .col-inner -->
                    </div>
                    <!-- .col -->
                    <div class="col post-item">
                      <div class="col-inner">
                        <a
                          href="https://bangtot.vn/mua-bang-flipchart-dong-nai/"
                          class="plain"
                        >
                          <div
                            class="box box-bounce box-text-bottom box-blog-post has-hover"
                          >
                            <div class="box-image">
                              <div
                                class="image-overlay-add image-cover"
                                style="padding-top: 86%"
                              >
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="622"
                                  height="524"
                                  src="https://bangtot.vn/wp-content/uploads/2019/07/lap-bang-flipchart-tai-cac-tinh-thanh_2.jpg"
                                  class="attachment-original size-original wp-post-image"
                                  alt="Mua-bang-flipchart-Dong-Nai"
                                  srcset="
                                    https://bangtot.vn/wp-content/uploads/2019/07/lap-bang-flipchart-tai-cac-tinh-thanh_2.jpg         622w,
                                    https://bangtot.vn/wp-content/uploads/2019/07/lap-bang-flipchart-tai-cac-tinh-thanh_2-300x253.jpg 300w,
                                    https://bangtot.vn/wp-content/uploads/2019/07/lap-bang-flipchart-tai-cac-tinh-thanh_2-600x505.jpg 600w
                                  "
                                  sizes="(max-width: 622px) 100vw, 622px"
                                />
                                <div
                                  class="overlay"
                                  style="background-color: rgba(0, 0, 0, 0.17)"
                                ></div>
                              </div>
                            </div>
                            <!-- .box-image -->
                            <div class="box-text text-left">
                              <div class="box-text-inner blog-post-inner">
                                <h5 class="post-title is-large">
                                  Mua Bảng Flipchart Ở Đâu Đồng Nai?
                                </h5>
                                <div class="post-meta is-small op-8"></div>
                                <div class="is-divider"></div>
                                <p class="from_the_blog_excerpt">
                                  Mua bảng flipchart Đồng Nai nhằm phục vụ cho
                                  quá trình hội ...
                                </p>
                              </div>
                              <!-- .box-text-inner -->
                            </div>
                            <!-- .box-text -->
                          </div>
                          <!-- .box --> </a
                        ><!-- .link -->
                      </div>
                      <!-- .col-inner -->
                    </div>
                    <!-- .col -->
                    <div class="col post-item">
                      <div class="col-inner">
                        <a
                          href="https://bangtot.vn/bang-trang-dan-tuong-dong-nai/"
                          class="plain"
                        >
                          <div
                            class="box box-bounce box-text-bottom box-blog-post has-hover"
                          >
                            <div class="box-image">
                              <div
                                class="image-overlay-add image-cover"
                                style="padding-top: 86%"
                              >
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="600"
                                  height="600"
                                  src="https://bangtot.vn/wp-content/uploads/2022/05/bang-trang-dan-tuong-dong-nai.jpg"
                                  class="attachment-original size-original wp-post-image"
                                  alt="bang-trang-dan-tuong-dong-nai"
                                  srcset="
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-trang-dan-tuong-dong-nai.jpg         600w,
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-trang-dan-tuong-dong-nai-300x300.jpg 300w,
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-trang-dan-tuong-dong-nai-150x150.jpg 150w,
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-trang-dan-tuong-dong-nai-100x100.jpg 100w
                                  "
                                  sizes="(max-width: 600px) 100vw, 600px"
                                />
                                <div
                                  class="overlay"
                                  style="background-color: rgba(0, 0, 0, 0.17)"
                                ></div>
                              </div>
                            </div>
                            <!-- .box-image -->
                            <div class="box-text text-left">
                              <div class="box-text-inner blog-post-inner">
                                <h5 class="post-title is-large">
                                  Bảng Trắng Dán Tường Đồng Nai | Vì Sao Nên Mua
                                  Bảng Dán Tường Cho Văn Phòng?
                                </h5>
                                <div class="post-meta is-small op-8"></div>
                                <div class="is-divider"></div>
                                <p class="from_the_blog_excerpt">
                                  Bảng trắng dán tường Đồng Nai trở thành dòng
                                  bảng siêu hot ...
                                </p>
                              </div>
                              <!-- .box-text-inner -->
                            </div>
                            <!-- .box-text -->
                          </div>
                          <!-- .box --> </a
                        ><!-- .link -->
                      </div>
                      <!-- .col-inner -->
                    </div>
                    <!-- .col -->
                    <div class="col post-item">
                      <div class="col-inner">
                        <a
                          href="https://bangtot.vn/bang-trang-co-chan-dong-nai/"
                          class="plain"
                        >
                          <div
                            class="box box-bounce box-text-bottom box-blog-post has-hover"
                          >
                            <div class="box-image">
                              <div
                                class="image-overlay-add image-cover"
                                style="padding-top: 86%"
                              >
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="600"
                                  height="400"
                                  src="https://bangtot.vn/wp-content/uploads/2022/05/bang-lop-hoc-Dong-Nai.jpg"
                                  class="attachment-original size-original wp-post-image"
                                  alt="Bang-trang-co-chan-di-dong"
                                  srcset="
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-lop-hoc-Dong-Nai.jpg         600w,
                                    https://bangtot.vn/wp-content/uploads/2022/05/bang-lop-hoc-Dong-Nai-300x200.jpg 300w
                                  "
                                  sizes="(max-width: 600px) 100vw, 600px"
                                />
                                <div
                                  class="overlay"
                                  style="background-color: rgba(0, 0, 0, 0.17)"
                                ></div>
                              </div>
                            </div>
                            <!-- .box-image -->
                            <div class="box-text text-left">
                              <div class="box-text-inner blog-post-inner">
                                <h5 class="post-title is-large">
                                  Mua Bảng Trắng Có Chân Tại Biên Hòa, Đồng Nai
                                </h5>
                                <div class="post-meta is-small op-8"></div>
                                <div class="is-divider"></div>
                                <p class="from_the_blog_excerpt">
                                  Không khó để tìm mua bảng trắng có chân tại
                                  Đồng Nai ...
                                </p>
                              </div>
                              <!-- .box-text-inner -->
                            </div>
                            <!-- .box-text -->
                          </div>
                          <!-- .box --> </a
                        ><!-- .link -->
                      </div>
                      <!-- .col-inner -->
                    </div>
                    <!-- .col -->
                    <div class="col post-item">
                      <div class="col-inner">
                        <a
                          href="https://bangtot.vn/bang-day-hoc-dong-nai/"
                          class="plain"
                        >
                          <div
                            class="box box-bounce box-text-bottom box-blog-post has-hover"
                          >
                            <div class="box-image">
                              <div
                                class="image-overlay-add image-cover"
                                style="padding-top: 86%"
                              >
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="600"
                                  height="400"
                                  src="https://bangtot.vn/wp-content/uploads/2022/05/Mua-bang-day-hoc-tai-Dong-Nai.jpg"
                                  class="attachment-original size-original wp-post-image"
                                  alt="Bang-day-hoc-o-Dong-nai"
                                  srcset="
                                    https://bangtot.vn/wp-content/uploads/2022/05/Mua-bang-day-hoc-tai-Dong-Nai.jpg         600w,
                                    https://bangtot.vn/wp-content/uploads/2022/05/Mua-bang-day-hoc-tai-Dong-Nai-300x200.jpg 300w
                                  "
                                  sizes="(max-width: 600px) 100vw, 600px"
                                />
                                <div
                                  class="overlay"
                                  style="background-color: rgba(0, 0, 0, 0.17)"
                                ></div>
                              </div>
                            </div>
                            <!-- .box-image -->
                            <div class="box-text text-left">
                              <div class="box-text-inner blog-post-inner">
                                <h5 class="post-title is-large">
                                  Mua Bảng Dạy Học Ở Đồng Nai – Bảng Lớp Học Giá
                                  Rẻ Cho Trường Học, Trung Tâm
                                </h5>
                                <div class="post-meta is-small op-8"></div>
                                <div class="is-divider"></div>
                                <p class="from_the_blog_excerpt">
                                  Bạn đang có nhu cầu mua bảng dạy học ở Đồng
                                  Nai ...
                                </p>
                              </div>
                              <!-- .box-text-inner -->
                            </div>
                            <!-- .box-text -->
                          </div>
                          <!-- .box --> </a
                        ><!-- .link -->
                      </div>
                      <!-- .col-inner -->
                    </div>
                    <!-- .col -->
                    <div class="col post-item">
                      <div class="col-inner">
                        <a
                          href="https://bangtot.vn/bang-kinh-van-phong-dong-nai/"
                          class="plain"
                        >
                          <div
                            class="box box-bounce box-text-bottom box-blog-post has-hover"
                          >
                            <div class="box-image">
                              <div
                                class="image-overlay-add image-cover"
                                style="padding-top: 86%"
                              >
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="1000"
                                  height="1000"
                                  src="https://bangtot.vn/wp-content/uploads/2018/12/bang-kinh-trang.jpg"
                                  class="attachment-original size-original wp-post-image"
                                  alt=""
                                  srcset="
                                    https://bangtot.vn/wp-content/uploads/2018/12/bang-kinh-trang.jpg         1000w,
                                    https://bangtot.vn/wp-content/uploads/2018/12/bang-kinh-trang-300x300.jpg  300w,
                                    https://bangtot.vn/wp-content/uploads/2018/12/bang-kinh-trang-150x150.jpg  150w,
                                    https://bangtot.vn/wp-content/uploads/2018/12/bang-kinh-trang-768x768.jpg  768w,
                                    https://bangtot.vn/wp-content/uploads/2018/12/bang-kinh-trang-600x600.jpg  600w,
                                    https://bangtot.vn/wp-content/uploads/2018/12/bang-kinh-trang-100x100.jpg  100w
                                  "
                                  sizes="(max-width: 1000px) 100vw, 1000px"
                                />
                                <div
                                  class="overlay"
                                  style="background-color: rgba(0, 0, 0, 0.17)"
                                ></div>
                              </div>
                            </div>
                            <!-- .box-image -->
                            <div class="box-text text-left">
                              <div class="box-text-inner blog-post-inner">
                                <h5 class="post-title is-large">
                                  Mua Bảng Kính Văn Phòng Ở Đâu Đồng Nai?
                                </h5>
                                <div class="post-meta is-small op-8"></div>
                                <div class="is-divider"></div>
                                <p class="from_the_blog_excerpt">
                                  Hiện nay, bảng kính trắng được dân văn phòng
                                  khá ưa chuộng ...
                                </p>
                              </div>
                              <!-- .box-text-inner -->
                            </div>
                            <!-- .box-text -->
                          </div>
                          <!-- .box --> </a
                        ><!-- .link -->
                      </div>
                      <!-- .col-inner -->
                    </div>
                    <!-- .col -->
                  </div>
                  <div
                    class="gap-element"
                    style="display: block; height: auto; padding-top: 30px"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <!-- .section-content -->
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Carousel from "primevue/carousel";
export default {
  name: "HomeComponent",
  components: {
    Carousel,
  },
  data() {
    return {
      selected: null,
      banner: [
        {
          id: "996",
          code: "f230fh0g3",
          name: "Bảng Từ Trắng Treo Tường",
          description: "Product Description",
          image: "slideshow_5.png",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "997",
          code: "nvklal433",
          name: "Bảng Ghim Nỉ Treo Tường",
          description: "Product Description",
          image: "slideshow2.png",
          price: 72,
          category: "Accessories",
          quantity: 61,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "998",
          code: "zz21cz3c1",
          name: "Bảng Kính Trắng",
          description: "Product Description",
          image: "bang-kinh-trang-van-phong.jpg",
          price: 79,
          category: "Fitness",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "999",
          code: "244wgerg2",
          name: "Bảng Flipchart",
          description: "Product Description",
          image: "slideshow1.png",
          price: 29,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
      ],
      office_products: [
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bảng Từ Trắng Treo Tường",
          description: "Product Description",
          image: "bang-tu-trang-treo-tuong.png",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1001",
          code: "nvklal433",
          name: "Bảng Ghim Nỉ Treo Tường",
          description: "Product Description",
          image: "bang-ghim-vai-ni-1_grande.jpg",
          price: 72,
          category: "Accessories",
          quantity: 61,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1002",
          code: "zz21cz3c1",
          name: "Bảng Kính Trắng",
          description: "Product Description",
          image: "bang-kinh-trang-van-phong.jpg",
          price: 79,
          category: "Fitness",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1003",
          code: "244wgerg2",
          name: "Bảng Flipchart",
          description: "Product Description",
          image: "bang-flipchart-up-side-down.png",
          price: 29,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1004",
          code: "244wgerg2",
          name: "Bảng Từ Trắng Di Động",
          description: "Product Description",
          image: "bang-di-dong-1-mat-trang-5_grande.jpg",
          price: 29,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1005",
          code: "h456wer53",
          name: "Bảng Từ Trắng Không Khung",
          description: "Product Description",
          image: "bang-tu-trang-khong-khung-ceramic_grande.png",
          price: 15,
          category: "Accessories",
          quantity: 73,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1006",
          code: "av2231fwg",
          name: "Bảng Quản Trị",
          description: "Product Description",
          image: "05-bang-theo-doi-lich-hen_grande.png",
          price: 120,
          category: "Accessories",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4,
        },
        {
          id: "1007",
          code: "av2231fwg",
          name: "Bảng Combo Ghim Nỉ + Từ Trắng",
          description: "Product Description",
          image: "bang-com-tu-trang-li-e-khung-nhom-1_grande-2.jpg",
          price: 120,
          category: "Accessories",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4,
        },
      ],

      education_products: [
      {
          id: "1008",
          code: "f230fh0g3",
          name: "Bảng Từ Xanh Treo Tường",
          description: "Product Description",
          image: "bang-tu-xanh-han-quoc-1_grande.png",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1009",
          code: "nvklal433",
          name: "Bảng Từ Xanh Kẻ Ô Ly",
          description: "Product Description",
          image: "bang-tu-xanh-ke-o-ly-11_grande.png",
          price: 72,
          category: "Accessories",
          quantity: 61,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1010",
          code: "zz21cz3c1",
          name: "Bảng Từ Xanh Di Động",
          description: "Product Description",
          image: "bang-tu-xanh-di-dong-1-mat-1_grande-2.jpg",
          price: 79,
          category: "Fitness",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1011",
          code: "244wgerg2",
          name: "Bảng Trượt Cột",
          description: "Product Description",
          image: "bang-cot-1_grande.jpg",
          price: 29,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1012",
          code: "244wgerg2",
          name: "Bảng Trượt Ngang",
          description: "Product Description",
          image: "bang-truot-ngang-1.jpg",
          price: 29,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1013",
          code: "h456wer53",
          name: "Bảng Từ Trắng Không Khung",
          description: "Product Description",
          image: "bang-tu-trang-khong-khung-ceramic_grande.png",
          price: 15,
          category: "Accessories",
          quantity: 73,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1014",
          code: "av2231fwg",
          name: "Bảng Từ Trắng Treo Tường",
          description: "Product Description",
          image: "bang-tu-trang-treo-tuong.png",
          price: 120,
          category: "Accessories",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4,
        },
        {
          id: "1015",
          code: "av2231fwg",
          name: "Bảng Từ Trắng Di Động",
          description: "Product Description",
          image: "bang-di-dong-1-mat-trang-5_grande.jpg",
          price: 120,
          category: "Accessories",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4,
        },
      ],
      responsiveOptions: [
        {
          breakpoint: "1400px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "1199px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "767px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "575px",
          numVisible: 1,
          numScroll: 1,
        },
      ],

      suggest_products:[
      {
          id: "1016",
          code: "f230fh0g3",
          name: "Bảng Dạy Học Thông Minh – Màn Hình Phẳng Tương Tác Android 12 ( VDT1-IFP-A12)",
          description: "Product Description",
          image: "bang-thong-minh-vadoto.jpg",
          price: 0,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1017",
          code: "nvklal433",
          name: "Màn Hình Tương Tác Thông Minh Dạy Học Cao Cấp – Android 12 Interactive Flat Panel built in NFC (VDT-IFP-A12)",
          description: "Product Description",
          image: "bang-tuong-tac-thong-minh.jpg",
          price: 0,
          category: "Accessories",
          quantity: 61,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1018",
          code: "zz21cz3c1",
          name: "Bảng Đen Treo Tường",
          description: "Product Description",
          image: "bang-den-viet-phan-1536x1096.jpg",
          price: 650000,
          category: "Fitness",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1019",
          code: "244wgerg2",
          name: "Bộ Bút Viết Bảng Trắng Cao Cấp và Bông Lau VADOTO",
          description: "Product Description",
          image: "but-viet-bang-trang.jpg",
          price: 50000,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1020",
          code: "244wgerg2",
          name: "Bảng Từ Xanh Viết Phấn Cao Cấp Vadoto NanoTech (TT-X1-02N)",
          description: "Product Description",
          image: "bang-xanh-viet-phan-cao-cap.jpg",
          price: 500000,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1021",
          code: "244wgerg2",
          name: "Bút Lông Viết Bảng Artline – Bút Lông Ngòi Lớn",
          description: "Product Description",
          image: "but-long-viet-bang.jpg",
          price: 65,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
      ],
    };
  },

  methods:{
    selectedData(data){
        this.selected = data;
    }
  }
};
</script>
