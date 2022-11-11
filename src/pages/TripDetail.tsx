import React, {useEffect, useState} from 'react';
import {
  Page,
  Navbar,
  Block,
  Link,
  Preloader,
  Card,
  CardHeader,
  CardContent,
  Button,
  BlockTitle
} from 'framework7-react';
import {Expense, Trip} from "@/types";
import {StorageService} from "@/services/StorageService";
import {useAppDispatch} from "@/redux/store";
import {loadAppTrips} from "@/redux/actions/app.action";

const TripDetailPage = (props: any) => {
  const dispatch = useAppDispatch();
  const {f7route, f7router} = props;
  const [trip, setTrip] = useState<Trip | null>(null);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    StorageService.getTrip(f7route.params.id).then((thisTrip) => {
      const trip = thisTrip as Trip;
      setTrip(trip);

      StorageService.getAllTripExpenses(trip.id).then(expenses => {
        setExpenses(expenses);
      });
    });
  }, []);

  const onDelete = () => {
    if (!trip) return;
    const dialog = f7router.app.dialog;
    dialog.confirm("Are sure you want to delete this trip?", () => {
      dialog.alert("Successfully deleted trip.");
      StorageService.deleteTrip(trip.id).then(() => {
        f7router.navigate('/');
        dispatch(loadAppTrips());
      });
    });
  }

  return (
    <Page>
      <Navbar title="Dynamic Route" backLink="Back"/>
      {trip && (
        <>
          <Block className={'trip-detail-card'}>
            <div className={'header'}>
              <div className={'header-content'}>
                <div className={'name'}>
                  {trip.name}
                </div>
                <div className={'controls'}>
                  <Button
                    fill small
                    iconSize={14}
                    iconMaterial={'edit'}
                  >
                    Edit
                  </Button>
                  <Button
                    color={"red"}
                    fill small
                    iconSize={14}
                    iconMaterial={'delete'}
                    type={'danger'}
                    onClick={onDelete}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
            <div className={'body'}>
              <p>
                Trip date: {trip.date}<br/>
                Trip budget: ${trip.budget}
              </p>
            </div>
          </Block>
          <BlockTitle>
            Description
          </BlockTitle>
          <Card>
            <CardContent>
              {trip.description ? trip.description : 'No description provided...'}
            </CardContent>
          </Card>
          <BlockTitle>
            Expenses
          </BlockTitle>
        </>
      )}
    </Page>
  );
}

export default TripDetailPage;
