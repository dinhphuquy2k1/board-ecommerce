<template>
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
                style="max-width: 100px; background-color: rgb(0, 137, 11)"
              ></div>
            </div>
            <!-- .divider -->
          </div>
        </div>
        <div class="col medium-4 large-4">
          <div class="col-inner">
            <div class="row row-collapse row-full-width" id="row-477903574">
              <div class="col hide-for-small medium-2 large-2">
                <div class="col-inner">
                  <div
                    class="is-divider divider clearfix"
                    style="max-width: 100px; background-color: rgb(0, 137, 11)"
                  ></div>
                  <!-- .divider -->
                </div>
              </div>
              <div class="col medium-8 large-8">
                <div class="col-inner">
                  <h2 style="text-align: center">
                    <strong
                      ><span style="font-size: 100%; color: #008000"
                        ><span style="font-family: arial, helvetica, sans-serif"
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
                    style="max-width: 100px; background-color: rgb(0, 137, 11)"
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
          :value="products"
          :numVisible="4"
          :numScroll="4"
          circular
          :responsiveOptions="responsiveOptions"
        >
          <template #item="slotProps">
            {{ slotProps.data.price }}
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
                              style="border-radius: 20px; font-size: 0.7rem"
                            >
                              <span style="font-size: 0.7rem; padding: 0 1.2em"
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
                              <span style="font-size: 100%; color: #ffffff"
                                ><a
                                  style="color: #ffffff"
                                  href="https://bangtot.vn/san-pham/bang-lich-cong-tac-tuan/"
                                  ><strong
                                    >Bảng Quản Lý Phân Xưởng&nbsp;</strong
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
          </template>
        </Carousel>
      </div>
    </div>
    <!-- .section-content -->
  </section>
</template>

<script>
import Carousel from "primevue/carousel";
export default {
  components: {
    Carousel,
  },
};
</script>
