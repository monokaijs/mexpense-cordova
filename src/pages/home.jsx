import React from 'react';
import {
  Page,
  Icon
} from 'framework7-react';
import HomeHeader from "@/components/app/HomeHeader";
import {FAB} from "@/components/shared/FAB";

const HomePage = (props) => {
  const {f7route, f7router} = props;

  return (
    <Page name="home">
      <HomeHeader>
        <div className={"title"}>
          Hello Edward,
        </div>
        <div className={"description"}>
          Welcome back.
        </div>
        <div
          className={'search-box'}
        >
          <input
            placeholder={'Search...'}
          />
          <Icon className={'search-icon'} material={'search'}/>
        </div>
      </HomeHeader>
      <FAB icon={'add'} onClick={() => {
        f7router.navigate('/add-trip/');
      }}/>
    </Page>
  );
}
export default HomePage;
