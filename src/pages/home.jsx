import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button, Input, Icon
} from 'framework7-react';
import HomeHeader from "@/components/app/HomeHeader";

const HomePage = () => (
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
  </Page>
);
export default HomePage;
