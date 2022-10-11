import { useLoadingContext } from '../../context';
import { Shadow } from '../shadow';
import css from './spinner.module.css';

export const Spinner = () => {
    const { isLoading } = useLoadingContext();
    return (
      <div style={{display: isLoading === true ? "block" : "none",background:'red',position:'absolute',width:`100%`,height:`100%`,top:0,left:0}}>
       <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis magni natus praesentium soluta in ipsa tempora pariatur similique porro accusantium deleniti corporis voluptatibus facilis, ut veniam dolor iusto sunt.</h1>
        <div
          className={css.loader}></div>
      </div>
    );
}