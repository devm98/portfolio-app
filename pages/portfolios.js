import React from "react";
import Link from "next/link";
import axios from "axios";
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Row } from "reactstrap";

function Portfolios({ posts }) {
  return (
    <div className="portfolio-page container">
      <div className="portfolio-page-head d-flex align-items-cent justify-content-between">
        <h1>Hello Man !!!</h1>
        <Link href="/portfolio/new">
          <Button color="primary">Create Portfolio</Button>
        </Link>
      </div>
      <hr />
      <Row className="py-3">
        {posts.map((item, idx) => {
          console.log("item", item);
          return (
            // <Link key={item.id} href={`/portfolio/${item.id}`}>
            <Col md="4 mb-3" key={item.id}>
              <span>
                <Card className="portfolio-card">
                  <CardHeader className="portfolio-card-header">{item.useId}{idx}</CardHeader>
                  <CardBody>
                    <p className="portfolio-card-city"> Some Location {idx} </p>
                    <CardTitle className="portfolio-card-title">Some Company {idx}</CardTitle>
                    <CardText className="portfolio-card-text">Some Description {idx}</CardText>
                    <div className="readMore"> </div>
                  </CardBody>
                </Card>
              </span>
            </Col>
            // </Link>
          );
        })}
      </Row>
    </div>
  );
}

Portfolios.getInitialProps = async () => {
  try {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return {
      posts: posts.data.splice(0, 10),
    };
  } catch (error) {
    console.log("error", error);
  }
  return {};
};

export default Portfolios;
