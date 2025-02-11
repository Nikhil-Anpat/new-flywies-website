/** @format */

import "../public/css/bootstrap.min.css";
import "animate.css";
import "../public/css/boxicons.min.css";
import "../public/css/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../public/css/style.css";
import "../public/css/responsive.css";

import App from "next/app";
import Head from "next/head";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Link from "next/link";

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Flyweis Technology</title>
          <meta
            name="keywords"
            content="Flyweis Services Pvt.Ltd, Flyweis Services, Flyweis, Flyweis Group, Flyweis Technology, Flyweis Services Private Limited"
          />
          <meta
            name="description"
            content="Flyweis Technology Provides Complete IT Solutions to Businesses, Services Related to APP Development, Website Development, Artificial Intelligence, Cyber Secuirity, etc"
          />

          {/* <script
            id="ze-snippet"
            src="https://static.zdassets.com/ekr/snippet.js?key=e387e7a4-5ce6-497c-88b7-5049e6b72c4a"
          >
            {" "}
          </script> */}
        </Head>
        <ReactNotification />
        <Component {...pageProps} />

        <Link href="https://wa.me/919599293491">
          <span className="btn-whatsapp-pulse">
            <i className="bx bxl-whatsapp"></i>
          </span>
        </Link>

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        {/* <GoTop scrollStepInPx="100" delayInMs="10.50" /> */}
      </>
    );
  }
}
