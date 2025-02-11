import React, { useEffect } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import Head from "next/head";

function thankingyou() {
  const get = useRouter();
  const { id } = get.query;
  console.log(id);

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1670114066500042");
        ReactPixel.pageView();
        get.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
    actionUrl();
    gtag_report_conversion();
  }, [get.events]);

  function actionUrl() {
    if (id !== undefined) {
      Router.push(
        `https://api.whatsapp.com/send/?phone=919811124632&text=${id}`
      );
    }
  }
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
      </Head>
    </>
  );
}

export default thankingyou;
