// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { MouseEvent, useEffect, useState } from 'react';
import styles from './app.module.scss';

import AppLayout from './nx-welcome';
import Header from './header/header';
import Content from './content/content';
import Content2 from './content2/content2';
import FilterButton from './filter-button/filter-button';
import ShimmerComponent from './shimmer-component/shimmer-component';

let kill = 'one';
const stepList = [
  {
    id: 1,
    step: 'Step 1',
    src: 'www.easytolearning.com/img/courseimage/html-image-tag_1578210205_92275784.png',
  },
  {
    id: 2,
    step: 'Step 2',
    src: 'https://i.stack.imgur.com/ocMsR.png',
  },
  {
    id: 3,
    step: 'Step 3',
    src: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/adding-html-images.PNG',
  },
  {
    id: 4,
    step: 'Step 4',
    src: 'https://ik.imagekit.io/taw2awb5ntf/wp-content/uploads/2022/03/img-html-tag.png',
  },
  {
    id: 5,
    step: 'Step 5',
    src: 'https://i.ytimg.com/vi/zZCSTAR-4w0/maxresdefault.jpg',
  },
];
const swiggyApi = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2828003&lng=85.82430529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
export function App() {
  //hook variables
  const [stepListSt, setStepListSt] = useState([]);
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [ restaurantsArr, setRestaurantsArr ] = useState<any[]>([]);

  //normal variables
  let x: NodeJS.Timer;

  useEffect(() => {
    console.log("%c useeffect called 🍌 ", " background: blue; color: white; display: block; font-size:40px;");
    if(isLogin)
    fetchData();
    // setTimeout(() => {
    //   setStepListSt([
    //     ...stepListSt,
    //     {
    //       id: 6,
    //       step: 'Step repeat',
    //       src: 'https://i.stack.imgur.com/ocMsR.png',
    //     },
    //   ]);
    //   kill = 'two';
    // }, 7000);
  }, [isLogin]);

  function fetchData() {
    fetch(swiggyApi, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(data => data.json()).then(res => {
      console.log("%c data-->", "background: blue;", res);
      const r = res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || 
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||  null ;
      setRestaurantsArr(r);
      setRestaurants([...r]);
      // console.log(restaurants)
    });
  }
  
  const filterEvent = (event: string) => {
    const filterRatinglessthan4 = restaurants.filter(data => {
      return (+data.info.avgRating < 4);
    })
    setRestaurants([...filterRatinglessthan4]);
  }

  const changeLoginState = (event: boolean) => {
    setIsLogin(!event)
  }

  const filterCards = (value: string) => {
    debounceInput(value)
  }

  const debounceInput = (val: string) => {
    if (x) { 
      clearInterval(x);
    }
    x = setInterval(() => {
      if (val.length === 0) {
        setRestaurants([...restaurantsArr]);
      } else {
        const txtFIlteredRestaurant = restaurantsArr.filter(d => {   
          return d.info.name.toLowerCase().includes(val.toLowerCase())
        });
        console.log(txtFIlteredRestaurant)
        if (txtFIlteredRestaurant.length) {
          setRestaurants([...txtFIlteredRestaurant])
        } 
      }
      clearInterval(x);
     }, 1500)
  }

  const mouseOverP = (e: MouseEvent) => {
    console.log(e.clientX);
  }
  if (restaurants.length === 0 && isLogin) {
    return (
      <ShimmerComponent />
      )
    } else if(isLogin && restaurants.length) {
    return (
      <div>
        <AppLayout title="namaste-food" />
        ---------------
      this is login -
        {String(isLogin)}
        --------------
        <Header login={{ isLogin, changeLoginState}} />
        {Content} - {kill}
        <FilterButton buttonClick={filterEvent}/>
        <div>
          <input onInput={(e: React.ChangeEvent<HTMLInputElement>) => {filterCards(e.target.value)}} type='text' placeholder='filter'/>
        </div>
        {/* <div className={styles['flex-party']}>
          {stepListSt.map((stepData, index) => {
            if (stepData) {
              return <Content2 key={stepData.id} content={stepData} mouseOver={mouseOverP} />;
            } else {
              return null;
            }
          })}
        </div> */}
        <div className={styles['flex-party']}>
          {restaurants.map((restaurant, index) => {
            if (restaurant) {
              return <Content2 key={restaurant.info.id} content={restaurant} mouseOver={mouseOverP} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return (<>
      <Header login={{ isLogin, changeLoginState }} />
      Yo Login NAW
    </>)
  }
}

export default App;
