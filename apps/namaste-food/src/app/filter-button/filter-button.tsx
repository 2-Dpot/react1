import styles from './filter-button.module.scss';

/* eslint-disable-next-line */
export interface FilterButtonProps {
  buttonClick: (event: string) => void;
}

export function FilterButton({ buttonClick }: FilterButtonProps) {
  return (
    <div className={styles['container']}>
      <button onClick = {() => {buttonClick('keke')}}>Filter Me</button>
    </div>
  );
}

export default FilterButton;
