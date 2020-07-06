import React from "react";

function NhomCuaSinhVien() {
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
                                Tên nhóm của sinh viên
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
                                    <h3 className="m-portlet__head-text">
                                        Giảng Viên: Hello
                                    </h3>               
                                </div>
                            </div> 
                        </div>
                             <div className="col-6">
                                <p>Email:2122@fpt.edu.vn</p> 
                                <p>Số điện thoại:09092392</p>
                             </div> 
                        <div className="m-portlet__body">
                            <div className="m-section">
                                <div className="m-section__content">
                                    <div className="float-md-right">
                                        <div>
                                            <b>Mã Code:</b>
                                            <p>222332</p>
                                        </div>
                                        <div>
                                            <b>Số lượng thành viên:</b>
                                            <p>5/7</p>
                                        </div>
                                        <div>
                                            <b>Ngày khởi tạo:</b>
                                            <p>12/12/2000</p>
                                        </div>
                                    </div>
                                    <table className="table m-table m-table--head-bg-success">
                                        <thead>
                                            <tr>
                                                <th>ID </th>
                                                <th>Họ và tên </th>
                                                <th>Mã SV</th>
                                                <th>Chuyên nghành</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
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
export default NhomCuaSinhVien;
