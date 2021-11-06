import React from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../data/carList';
const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride or swipw up or more ..</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CardDetails>
              <Service>{car.service}</Service>
              <Time>5Min Away</Time>
            </CardDetails>
            <Price>24.00 AED</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;
const Title = tw.div`text-gray-500 text-center text-xs py-2 border-b2`;
const CardDetails = tw.div`flex-1`;
const Service = tw.div` font-medium`;
const Time = tw.div`text-xs text-blue-500`;
const Price = tw.div`text-sm`;
const Car = tw.div`flex p-4 items-center`;
const Wrapper = tw.div`flex-1 overflow-y-scroll flex flex-col `;
const CarImage = tw.div`h-14 mr-2`;

const CarList = tw.div`
overlfow-y-scroll`;
