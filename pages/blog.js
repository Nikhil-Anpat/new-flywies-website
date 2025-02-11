/** @format */

import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import NewsGridCard from "../components/News/NewsGridCard";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
class NewsGrid extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Blog</title>
        </Head>
        <Navbar />
        <div className="banner_blog">
          <img
            loading="lazy"
            className="blog_img"
            src="/images/blog 2.png"
            alt=""
          />
        </div>
        <NewsGridCard />
        <Footer />
      </>
    );
  }
}

export default NewsGrid;
