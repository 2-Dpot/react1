import styles from './content2.module.scss';
import { MouseEvent } from 'react';

/* eslint-disable-next-line */
export interface ContentOverload {
  content: {
    step: string;
    src: string;
    id: number;
  };
  mouseOver: (e: MouseEvent<HTMLDivElement>) => void;
}

export function Content2({ content, mouseOver } ) {
  const cloudinaryBase = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;
  return (
    <div className="powerCard" onMouseOver={($event) => mouseOver($event)}>
      {content.info.name}: Applying configuration to libraries Lastly, let's update RATIGS -
      {content.info.avgRating}
      the application's project configuration to point to the postcss.config.js
      file that we created in step 2. Open up the apps/{'{your app here}'}
      /project.json file and add the following to the build target.
      <img src={cloudinaryBase + content.info.cloudinaryImageId} alt="kakarotto"></img>
      {content.info.costfortwo}
    </div>
  );
}

export default Content2;
