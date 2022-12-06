import React from "react";
import {Link} from "react-router-dom";
import {Tooltip} from "antd";
import {LinkOutlined} from "@ant-design/icons";
import "./Footer.css";

function Footer() {
    return <div className="footer">
        <div className="content">
            <div className="signature">
                © Appagro, Inc. 2022.
            </div>
            <div className="more-info">
                <a
                    href="https://github.com/miguelbeckers/appagro-service-01"
                    rel="noopener noreferrer"
                    target="__blank"
                ><p>Service-01</p></a>
                <a
                    href="https://github.com/miguelbeckers/appagro-service-02"
                    rel="noopener noreferrer"
                    target="__blank"
                ><p>Service-02</p></a>
                <a
                    href="https://github.com/miguelbeckers/appagro-service-03"
                    rel="noopener noreferrer"
                    target="__blank"
                ><p>Service-03</p></a>

            </div>
            <div className="icons">
                <Tooltip title="404 page">
                    <Link to="/random-url">
                        <LinkOutlined/>
                    </Link>
                </Tooltip>
            </div>
        </div>
    </div>;
}

export default Footer;