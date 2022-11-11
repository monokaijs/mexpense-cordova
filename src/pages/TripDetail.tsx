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

const TripDetailPage = (props: any) => {
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
