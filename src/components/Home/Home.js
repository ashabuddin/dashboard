import React from 'react';
import Sideber1 from '../Sideber/Sideber1';
import Sideber2 from '../Sideber/Sideber2';
import ManageUsers from '../ManageUsers/ManageUsers'


const Home = () => {
    return (
        <div className="row">
           <div className="col-md-2">
              <Sideber1/>
           </div>
           <div className="col-md-8">
           
           <ManageUsers/>
           </div>
          <div className="col-md-2">
             <Sideber2/>
          </div>
            
        </div>
    );
};

export default Home;