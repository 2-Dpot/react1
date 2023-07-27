// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.scss';

import AppLayout from './nx-welcome';

interface ContentOverload {
  content: {
    step: string;
    src: string;
    id: number;
  };
}
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

export function App() {
  const [stepListSt, setStepListSt] = useState(stepList);

  useEffect(() => {
    setTimeout(() => {
      console.log('---->');
      setStepListSt([
        ...stepList,
        {
          id: 6,
          step: 'Step repeat',
          src: 'https://i.stack.imgur.com/ocMsR.png',
        },
      ]);
      kill = 'two';
    }, 7000);
  }, []);

  return (
    <div>
      <AppLayout title="namaste-food" />
      <Header />
      {Content} - {kill}
      <div className={styles['flex-party']}>
        {stepListSt.map((stepData, index) => {
          console.log('stepData-->', stepData);
          if (stepData) {
            return <Content2 key={stepData.id} content={stepData} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

const contentStyle = {
  border: '1px solid blue',
  backgroundColor: 'grey',
};

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.logoContainer}
          src="src/assets/food.jpg"
          alt=""
        />
      </div>
      <div>
        <ul className={styles.navMain}>
          <li>Home</li>
          <li>Contact US</li>
          <li>Account</li>
        </ul>
      </div>
    </div>
  );
};

const Content = (
  <div style={contentStyle}>
    <div>Content</div>
    <div className={styles.content}>Lorem Ipsum daler mendi</div>
  </div>
);
const Content2 = ({ content }: ContentOverload) => {
  return (
    <div className="powerCard">
      {content.step}: Applying configuration to libraries Lastly, let's update
      the application's project configuration to point to the postcss.config.js
      file that we created in step 2. Open up the apps/{'{your app here}'}
      /project.json file and add the following to the build target.
      <img src={content.src} alt="kakarotto"></img>
    </div>
  );
};

export default App;
