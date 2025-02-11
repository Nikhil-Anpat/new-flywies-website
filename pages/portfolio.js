import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Portfoliobanner from '../components/Common/Portfoliobanner';
import TeamCard from '../components/Team/TeamCard';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";
class Team extends Component {
    render() {
        
        return (
            
            <>
               <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Portfolio</title>
        </Head>
                <Navbar />

                 <Portfoliobanner 
                    pageTitle="Team" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Team" 
                /> 


                <TeamCard />
                <Footer />
            </>
        );
    }
}

export default Team;