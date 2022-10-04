import { useLoadingContext } from '../../context';
import css from './spinner.module.css';

export const Spinner = () => {
    const { isLoading } = useLoadingContext();
    return (
      <div style={{ display: isLoading === true? 'block':'none'}} className={css.loader}>
      </div>
    );
}