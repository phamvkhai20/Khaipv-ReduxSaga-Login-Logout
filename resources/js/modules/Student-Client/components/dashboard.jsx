import React from "react";
function Dashboard() {
    return (
        <div>
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div className="m-subheader ">
                    <div className="d-flex align-items-center" style={{height:'60px'}}>
                        
                    </div>
                </div>
                <div className="m-content">
                    <div className="d-flex justify-content-around">
                        <div
                            className="m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible fade show "
                            role="alert"
                            style={{
                                width: "100%",
                                height: "106px",
                                marginRight: "25px"
                            }}
                        >
                            <div className="m-alert__icon">
                                <i className="la la-warning"></i>
                            </div>
                            <div className="m-alert__text">
                                <strong>
                                    <span
                                        className="m-lert__text"
                                        style={{ color: "brown" }}
                                    >
                                        223
                                    </span>{" "}
                                </strong>
                                <br />
                                <p style={{ fontFamily: "tahoma" }}>
                                    Đăng Kí
                                </p>
                            </div>
                            <div className="m-alert__close"></div>
                        </div>
                       
                        <div
                            className="m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible fade show"
                            role="alert"
                            style={{
                                width: "100%",
                                height: "106px",
                                marginRight: "25px"
                            }}
                        >
                            <div className="m-alert__icon">
                                <i className="la la-warning"></i>
                            </div>
                            <div className="m-alert__text">
                                <strong>
                                    <span
                                        className="m-lert__text"
                                        style={{ color: "blue" }}
                                    >
                                        223
                                    </span>{" "}
                                </strong>
                                <br />
                                <p style={{ fontFamily: "tahoma" }}>
                                    Chờ xác nhận hoàn thành
                                </p>
                            </div>
                            <div className="m-alert__close"></div>
                        </div>
                        <div
                            className="m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible fade show"
                            role="alert"
                            style={{
                                width: "100%",
                                height: "106px",
                            }}>
                            <div className="m-alert__icon">
                                <i className="la la-warning"></i>
                            </div>
                            <div className="m-alert__text">
                                <strong>
                                    <span
                                        className="m-lert__text"
                                        style={{ color: "pink" }}>
                                        223
                                    </span>
                                </strong>
                                <br />
                                <p style={{ fontFamily: "tahoma" }}>Trễ hạn</p>
                            </div>
                            <div className="m-alert__close"></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="m-content">
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
                                                <th>Số lượng người</th>
                                                <th>Trạng thái</th>
                                                <th>Thao tác</th>
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
                                                <td>@jhon</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <nav aria-label="..." style={{float:"right"}}>
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    Previous
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    2{" "}
                                                    <span className="sr-only">
                                                        (current)
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
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
        </div>
    );
}
export default Dashboard;
