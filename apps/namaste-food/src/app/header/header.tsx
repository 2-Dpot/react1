import styles from '../app.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  login: {
    isLogin: boolean;
    changeLoginState: (e: boolean) => void
  }
}


const Header = ({ login }: HeaderProps) => {
  console.log('H', login)
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
        <button onClick={() => login.changeLoginState(login.isLogin)} className='btn-cool'> {login.isLogin ? 'Log Off': 'Login'}</button>
      </div>
    </div>
  );
};

export default Header;
