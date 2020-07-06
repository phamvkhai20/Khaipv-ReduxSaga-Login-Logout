import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../../../Auth/components/login";
import DashboardContainer from "../../container/HeaderContainer";

const DanhSachCacNhomDaChot = React.lazy(() =>
    import("../Dang_ky_du_an_tot_nghiep/danh-sach-cac-nhom-da-chot")
);
const DanhSachCacNhomDaTao = React.lazy(() =>
    import("../Dang_ky_du_an_tot_nghiep/danh-sach-cac-nhom-da-tao")
);
const TaoNhom = React.lazy(() =>
    import("../Dang_ky_du_an_tot_nghiep/tao-nhom")
);
const VaoNhomCoSan = React.lazy(() =>
    import("../Dang_ky_du_an_tot_nghiep/vao-nhom-co-san")
);
const NhomCuaSinhVien = React.lazy(() =>
    import("../Dang_ky_du_an_tot_nghiep/nhom-cua-sinh-vien")
);
const Dashboard = React.lazy(() => import("../dashboard"));

function RouterStudent() {
    return (
        <Switch>
            <Route exact path="/student">
                <DashboardContainer />
            </Route>
            <Route exact path="/student/danh-sach-cac-nhom-da-chot">
                <DanhSachCacNhomDaChot />
            </Route>
            <Route exact path="/student/danh-sach-cac-nhom-da-tao">
                <DanhSachCacNhomDaTao />
            </Route>
            <Route exact path="/student/tao-nhom">
                <TaoNhom />
            </Route>
            <Route exact path="/student/vao-nhom-co-san">
                <VaoNhomCoSan />
            </Route>
            <Route exact path="/student/nhom-cua-sinh-vien">
                <NhomCuaSinhVien />
            </Route>
        </Switch>
    );
}
export default RouterStudent;
