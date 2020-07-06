import React from "react";

function DanhSachCacNhomDaChot() {
    return (
        <div className="container">
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div className="m-subheader ">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <h3
                                className="m-subheader__title "
                                style={{ color: "#111111" }}
                            >
                                Danh sách các nhóm đã chốt
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
                <div className="m-content" >
                    <div className="m-portlet">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <span className="m-portlet__head-icon m--hide">
                                        <i className="la la-gear"></i>
                                    </span>
                                    <h3 className="m-portlet__head-text">
                                        Tìm kiếm nhóm
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <form className="m-form m-form--label-align-right">
                            <div className="m-portlet__body">
                                <div className="m-form__section m-form__section--first d-flex">
                                    <div id="box-form">
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-5 col-form-label">
                                                ID phòng:
                                            </label>
                                            <div className="col-lg-7">
                                                <input
                                                    type="email"
                                                    className="form-control m-input"
                                                    placeholder="Enter full name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-5 col-form-label">
                                                Tên trưởng nhóm:
                                            </label>
                                            <div className="col-lg-7">
                                                <input
                                                    type="email"
                                                    className="form-control m-input"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-5 col-form-label">
                                                Giảng viên:
                                            </label>
                                            <div className="col-lg-7">
                                                <input
                                                    type="email"
                                                    className="form-control m-input"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="box-form">
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-5 col-form-label">
                                               Tên phòng:
                                            </label>
                                            <div className="col-lg-7">
                                                <input
                                                    type="email"
                                                    className="form-control m-input"
                                                    placeholder="Enter full name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-5 col-form-label">
                                               Chuyên nghành:
                                            </label>
                                            <div className="col-lg-7">
                                                <input
                                                    type="email"
                                                    className="form-control m-input"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group m-form__group row">
                                            <label className="col-lg-5 col-form-label">
                                                Ngày khởi tạo:
                                            </label>
                                            <div className="col-lg-7">
                                                <input
                                                    type="email"
                                                    className="form-control m-input"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginLeft: "180px" }}>
                                    <button
                                        className="alert alert-success"
                                        style={{ marginRight: "50px" }}
                                    >
                                        Tìm kiếm
                                    </button>
                                    <button className="alert alert-danger">
                                        Hủy
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="m-portlet">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <h3 className="m-portlet__head-text">
                                        Các nhóm đã chốt
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="m-portlet__body">
                            <div className="m-section">
                                <div className="m-section__content">
                                    <table className="table m-table m-table--head-bg-success">
                                        <thead>
                                            <tr>
                                                <th>ID phòng</th>
                                                <th>Tên phòng </th>
                                                <th>Trưởng nhóm</th>
                                                <th>Chuyên nghành</th>
                                                <th>Giàng viên</th>
                                                <th>Ngày khởi tạo</th>
                                                <th>Kỳ</th>
                                                <th>Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Jhon</td>
                                                <td>Stone</td>
                                                <td>@jhon</td>
                                                <th>@Json</th>
                                                <td>Jhon</td>
                                                <td>Stone</td>
                                                <td>@jhon</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <nav aria-label="..." style={{float:"right"}}>
                                        <ul class="pagination">
                                            <li class="page-item disabled">
                                                <a
                                                    class="page-link"
                                                    href="#"
                                                    tabindex="-1"
                                                >
                                                    Previous
                                                </a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="#">
                                                    2{" "}
                                                    <span class="sr-only">
                                                        (current)
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">
                                                    3
                                                </a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DanhSachCacNhomDaChot;
