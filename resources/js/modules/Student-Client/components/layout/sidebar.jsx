import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Sidebar() {
    return (
       
            <div>
                <button
                    className="m-aside-left-close  m-aside-left-close--skin-dark "
                    id="m_aside_left_close_btn"
                >
                    <i className="la la-close"></i>
                </button>
                <div
                    id="m_aside_left"
                    className="m-grid__item	m-aside-left  m-aside-left--skin-dark "
                >
                    <div
                        id="m_ver_menu"
                        className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark "
                        m-menu-vertical="1"
                        m-menu-scrollable="1"
                        m-menu-dropdown-timeout="500"
                        style={{ position: "relative" }}
                    >
                        <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                            <li
                                className="m-menu__item  m-menu__item--active"
                                aria-haspopup="true" style={{marginBottom:"20px"}}
                            >
                          
                                    <Link className="m-menu__link" to="/student">
                                        <i className="m-menu__link-icon flaticon-line-graph"></i>
                                        <span className="m-menu__link-title">
                                            {" "}
                                            <span className="m-menu__link-wrap">
                                                {" "}
                                                <span className="m-menu__link-text">
                                                    Dashboard
                                                </span>
                                                <span className="m-menu__link-badge">
                                                    <span className="m-badge m-badge--danger">
                                                        2
                                                    </span>
                                                </span>{" "}
                                            </span>
                                        </span>
                                    </Link>
                            </li>
                            <li
                                className="m-menu__item  m-menu__item--submenu"
                                aria-haspopup="true"
                                m-menu-submenu-toggle="hover">
                                <Link to="/student/danh-sach-cac-nhom-da-chot"
                                    className="m-menu__link m-menu__toggle" >
                                    <i className="m-menu__link-icon flaticon-layers"></i>
                                    <span className="m-menu__link-text">
                                        Danh sách các nhóm đã chốt
                                    </span>
                                </Link>                        
                            </li>
                            <li
                                className="m-menu__item  m-menu__item--submenu"
                                aria-haspopup="true"
                                m-menu-submenu-toggle="hover">
                                <Link to="/student/danh-sach-cac-nhom-da-tao"
                                    className="m-menu__link m-menu__toggle" >
                                    <i className="m-menu__link-icon flaticon-layers"></i>
                                    <span className="m-menu__link-text">
                                        Danh sách các nhóm đã tạo
                                    </span>
                                </Link>                        
                            </li>
                            <li
                                className="m-menu__item  m-menu__item--submenu"
                                aria-haspopup="true"
                                m-menu-submenu-toggle="hover">
                                <Link to="/student/vao-nhom-co-san"
                                    className="m-menu__link m-menu__toggle" >
                                    <i className="m-menu__link-icon flaticon-layers"></i>
                                    <span className="m-menu__link-text">
                                        Vào nhóm có sẵn
                                    </span>
                                </Link>                        
                            </li>
                            <li
                                className="m-menu__item  m-menu__item--submenu"
                                aria-haspopup="true"
                                m-menu-submenu-toggle="hover">
                                <Link to="/student/tao-nhom"
                                    className="m-menu__link m-menu__toggle" >
                                    <i className="m-menu__link-icon flaticon-layers"></i>
                                    <span className="m-menu__link-text">
                                        Tạo nhóm
                                    </span>
                                </Link>                        
                            </li>
                            <li
                                className="m-menu__item  m-menu__item--submenu"
                                aria-haspopup="true"
                                m-menu-submenu-toggle="hover">
                                <a
                                    className="m-menu__link m-menu__toggle" >
                                    <i className="m-menu__link-icon flaticon-layers"></i>
                                    <span className="m-menu__link-text">
                                       Đăng xuất
                                    </span>
                                </a>                        
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}
export default Sidebar;
