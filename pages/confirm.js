import React from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/dist/client/router';

import RideSelector from './components/RideSelector';
import Map from './components/Map';
import { useEffect, useState } from 'react';
import { accessToken } from 'mapbox-gl';
const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffcoordinates, setDropoffCoordinates] = useState();
  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoia2h1cnNoaWVkIiwiYSI6ImNrdmxwYmZjdjNpOTIzMXBnYjlodXhkaXkifQ.JDAST7jJhZYpGaoKqkKMeA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoia2h1cnNoaWVkIiwiYSI6ImNrdmxwYmZjdjNpOTIzMXBnYjlodXhkaXkifQ.JDAST7jJhZYpGaoKqkKMeA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };
  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffcoordinates={dropoffcoordinates}
      />
      <RideContainer>
        <RideSelector />
        <CofirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </CofirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col`;
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2`;

const CofirmButtonContainer = tw.div` border-t-2`;
const ConfirmButton = tw.div`bg-black text-white my-4 mx-4 py-4 text-center text-xl`;
