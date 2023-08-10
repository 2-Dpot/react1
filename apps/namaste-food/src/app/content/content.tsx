import styles from './content.module.scss';

/* eslint-disable-next-line */
export interface ContentProps {}

const contentStyle = {
  border: '1px solid blue',
  backgroundColor: 'grey',
};

const Content = (
  <div style={contentStyle}>
    <div>Content</div>
    <div className={styles.content}>Lorem Ipsum daler mendi</div>
  </div>
);

export default Content;
