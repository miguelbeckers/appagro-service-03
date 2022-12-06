import React from "react";
import {Result} from "antd";
import "./PageNotFound.css";

function PageNotFound() {
    return <div className="notFound">
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
        />
    </div>;
}

export default PageNotFound;