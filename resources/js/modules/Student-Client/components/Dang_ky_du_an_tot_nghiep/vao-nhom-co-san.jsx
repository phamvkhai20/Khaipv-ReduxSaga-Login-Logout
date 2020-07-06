import React from "react";

function VaoNhomCoSan() {
    return (
        <div className="container m-3">
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div className="m-subheader ">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <h3
                                className="m-subheader__title "
                                style={{ color: "#111111" }}
                            >
                           Vào nhóm có sẵn
                            </h3>
                        </div>
                        <div>
                            <span
                                className="m-subheader__daterange"
                                id="m_dashboard_daterangepicker"
                            >
                                <span className="m-subheader__daterange-label">
                                    <span className="m-subheader__daterange-title"></span>
                                    <span className="m-subheader__daterange-date m--font-brand"></span>
                                </span>
                                <a
                                    href="#"
                                    className="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill"
                                >
                                    <i className="la la-angle-down"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="m-content">
                    <div className="m-portlet">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <span className="m-portlet__head-icon m--hide">
                                        <i className="la la-gear"></i>
                                    </span>
                                    <h3 className="m-portlet__head-text">
                                        Điền thông tin nhóm
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <form className="m-form m-form--label-align-right">
                            <div className="m-portlet__body">
                                <div className="m-form__section m-form__section--first ">
                                  
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-2 col-form-label">
                                                Mã code:
                                            </label>
                                            <div className="col-lg-6">
                                                <input
                                                    type="email"
                                                    className="form-control m-input"
                                                    placeholder="Enter full name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-2 col-form-label">
                                                Họ và tên:
                                            </label>
                                            <div className="col-lg-6">
                                                <input
                                                    type="email"
                                                    className="form-control m-input"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-2 col-form-label">
                                                Mã sinh viên:
                                            </label>
                                            <div className="col-lg-6">
                                                <input
                                                    type="email"
                                                    className="form-control m-input"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-2 col-form-label">
                                               Vị trí:
                                            </label>
                                            <div className="col-lg-6">
                                                <input
                                                    type="email"
                                                    className="form-control m-input"
                                                    placeholder="Enter full name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-2 col-form-label">
                                               Chuyên nghành:
                                            </label>
                                            <div className="col-lg-6">
                                            <select class="form-control m-input" id="exampleSelect1">
													<option>Chọn chuyên nghành</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
												</select>
                                            </div>
                                        </div>
                                </div>
                                <div style={{ marginLeft: "180px" }}>
                                    <button
                                        className="alert alert-success"
                                        style={{ marginRight: "50px" }}
                                    >
                                        Tham gia
                                    </button>
                                    <button className="alert alert-danger">
                                        Hủy
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VaoNhomCoSan;
