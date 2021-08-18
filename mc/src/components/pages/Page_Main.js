import React from 'react';

import Main from '../Main/Main';

import appData from '../appData';

class Page_Company extends React.PureComponent {
          
  render() {

    return (
      <Main
        name={appData.companyName}
        clients={appData.clientsArr}
      />
    );
    
  }

}
    
export default Page_Company;