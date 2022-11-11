import React from 'react';
import {
  Page,
  Icon, List, ListItem, Card, CardContent
} from 'framework7-react';
import HomeHeader from "@/components/app/HomeHeader";
import {FAB} from "@/components/shared/FAB";
import {useAppSelector} from "@/redux/store";

const HomePage = (props: any) => {
  const {f7route, f7router} = props;
  const {trips} = useAppSelector(state => state.app);

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
      {trips.map(trip => (
        <Card className={'item-trip'}>
          <CardContent>
            <div className={'trip-name'}>
              {trip.name}
            </div>
            <div className={'trip-destination'}>
              {trip.destination}
            </div>
          </CardContent>
        </Card>
      ))}
    </Page>
  );
}
export default HomePage;
