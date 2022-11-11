import React, {useState} from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';
import {Trip} from "../types";
import {StorageService} from "../services/StorageService";
import {loadAppTrips} from "@/redux/actions/app.action";
import {useAppDispatch} from "@/redux/store";

const AddTripPage = (props: any) => {
  const {f7route, f7router} = props;
  const dispatch = useAppDispatch();

  const [tripName, setTripName] = useState('');
  const [tripDest, setTripDest] = useState('');
  const [tripDesc, setTripDesc] = useState('');
  const [tripBudget, setTripBudget] = useState('0');
  const [tripDate, setTripDate] = useState('');
  const [tripRequiresAssess, setTripRequiresAssess] = useState(false);

  // @ts-ignore
  const onFinish = async () => {
    if (
      tripName.trim() === '' ||
      tripDest.trim() === '' ||
      tripDate.trim() === ''
    ) {
      f7router.app.toast.create({
        text: 'Please input all required fields.'
      }).open();
      return;
    }
    const trip: Trip = {
      id: new Date().getTime(),
      name: tripName,
      description: tripDesc,
      destination: tripDest,
      budget: parseInt(tripBudget),
      date: tripDate,
      requiresRiskAssessment: tripRequiresAssess
    }
    const newTripList = await StorageService.addTrip(trip);
    dispatch(loadAppTrips());
    f7router.app.toast.create({
      text: 'New trip added.'
    }).open();
    f7router.navigate('/');
  }

  return (
    <Page name="form">
      <Navbar title="Add New Trip" backLink="Back"></Navbar>

      <BlockTitle>Trip details</BlockTitle>
      <List noHairlinesMd>
        <ListInput
          value={tripName}
          onChange={e => setTripName(e.target.value)}
          label="Trip Name (Required)"
          type="text"
          placeholder="Trip name"
        ></ListInput>

        <ListInput
          value={tripDest}
          onChange={e => setTripDest(e.target.value)}
          label="Destination (Required)"
          type="text"
          placeholder="Destination..."
        ></ListInput>

        <ListInput
          value={tripDate}
          onChange={e => setTripDate(e.target.value)}
          label="Date (Required)"
          type="date"
          placeholder="Trip date"
        ></ListInput>

        <ListInput
          value={tripBudget}
          onChange={e => setTripBudget(e.target.value)}
          label="Budget"
          type="number"
          placeholder="Budget"
        ></ListInput>

        <ListItem
          title="Requires risk assessment"
        >
          <Toggle
            checked={tripRequiresAssess}
            onToggleChange={checked => setTripRequiresAssess(!checked)}
            slot="after"
          />
        </ListItem>

        <ListInput
          value={tripDesc}
          onChange={e => setTripDesc(e.target.value)}
          type="textarea"
          label="Description"
          placeholder="Description..."
        ></ListInput>
      </List>

      <Block>
        <Button fill onClick={onFinish}>
          Finish
        </Button>
      </Block>
    </Page>
  );
}

export default AddTripPage;
