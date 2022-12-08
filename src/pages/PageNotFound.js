import React from "react";
import {Result} from "antd";
import "./PageNotFound.css";

function PageNotFound() {
    return <div className="notFound">
        <Result
            status="404"
            title="404"
            subTitle="Página não encontrada"
        />
    </div>;
}

export default PageNotFound;