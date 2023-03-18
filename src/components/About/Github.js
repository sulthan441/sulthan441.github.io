import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="sulthan441"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      
      <img style={{width:"40%" ,paddingTop:"50px"}} src="https://camo.githubusercontent.com/ce2697db18bce401ddd0d819a5b5b532b97dafd3263617a6f8639ce54740be7e/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d73756c7468616e34343126"/>
    </Row>
  );
}

export default Github;
