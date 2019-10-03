import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { ArticleList, ArticleItem } from "../components/ArticleList";


class FeaturedArticles extends Component {
    state = {
        features: [],
        title: "",
        description: "",
        image: "",
        link: ""
    };

    componentDidMount() {
        this.loadFeatures();
    }

    loadFeatures = () => {
        API.getFeatures()
            .then(res =>
                this.setState({ features: res.data, title: "", description: "", image: "", link: "" })
            )
            .catch(err => console.log(err));
    };

    //     <Col size="sm-12">
    //     <h1>Articles and Blog Posts from The Gentle Barn</h1>
    //     {this.state.features.length ? (
    //         <List>
    //             {this.state.features.map(article => (
    //                 <ListItem key={article._id}>
    //                     <strong>{article.title}</strong>
    //                     {article.image} + {article.description}
    //                     <Link to={article.link}>Read more...</Link>
    //                 </ListItem>
    //             ))}
    //         </List>
    //     ) : (
    //             <h3>No Results to Display</h3>
    //         )}
    // </Col>

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-12">
                        {/* <Jumbotron> */}
                        <h1>The Gentle Barn</h1>
                        <h2>October's Featured Charity</h2>
                        {/* </Jumbotron> */}
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12">
                        {!this.state.features.length ? (
                            <h3>No Results to Display</h3>
                        ) : (
                                <ArticleList>
                                    <h1>Articles and Blog Posts</h1>
                                    {this.state.features.map(article => {
                                        return (
                                            <ArticleItem
                                                image={article.image}
                                                title={article.title}
                                                description={article.description}
                                                link={article.link}
                                            />
                                        );
                                    })}
                                </ArticleList>
                            )}
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default FeaturedArticles;
