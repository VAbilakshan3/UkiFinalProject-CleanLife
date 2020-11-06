import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';




const Help = () => {

return (
    <Layout className="container mt-5 mb-5 col-lg-4 col-md-6 col-sm-12">
        <br />
        <div className="row jumbotro pt-3 pr-2 pl-2 mt-5 jco ">
            <div className="col-md-12 offset-md-0">
                <div className="text-center">
                <iframe
                    allow="microphone;"
                    width="350"
                    height="430"
                    src="https://console.dialogflow.com/api-client/demo/embedded/3a931f5e-dcf5-4d24-92fd-a48f1702a500">
                </iframe>
                </div>

            </div>
        </div>
    </Layout>
);

};
export default Help;







