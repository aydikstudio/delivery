import React, { Component } from "react";
 import "react-sweet-progress/lib/style.css";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Avatar from 'react-avatar';

const apikey = '6f07eb13-253b-4278-af82-e9b5ead6cb3a';
 
export const SemiCircleProgressBarNew = () => {
  return(
    <SemiCircleProgressBar percentage={33}  diameter={300} />

    )
}

export const GetMap = () => {
  const map = React.useRef(null);
  const mapState = {
    center: [39.2811, 0.2238],
    zoom: 12
  };

  const addRoute = (ymaps) => {
    const pointA = [39.475946, -0.384494]; 
    const pointB = [41.385064, 2.173404]; 

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: "pedestrian"
        }
      },
      {
        boundsAutoApply: true
      }
    );

    map.current.geoObjects.add(multiRoute);
  };

  return (
    <div className="App">
      <YMaps query={{ apikey }}>
        <Map
          width={400}
          height={250}
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map}
          onLoad={addRoute}
        ></Map>
      </YMaps>
    </div>
  );
}



export const Avatar_new = () => {
  return (
    <Avatar name="Wim Mostmans" size={50} round="50px" />
  )
}