import React from 'react';
import SymbolShelf from '@snippets/SymbolShelf';
import styles from './TextSection.module.css';
import { FaArrowCircleRight } from 'react-icons/fa';
import MainButton from '@snippets/MainButton';

function TextSection(props) {
  return (
    <div className={styles['text-section']}>
      <div className={styles['text-section-header']}>
        <div>
          {props.heading &&<h1 className={styles['text-section-title']}>{props.heading}</h1>}
          {props.heading1 &&<h1 className={styles['text-section-title-1']}>{props.heading1}</h1>}
          {props.description &&<h3 className={styles['text-section-subtitle']}>{props.description}</h3>}
          {props.date &&  ( <p className={styles['text-section-date']}> Posted Date: {props.date}</p>)}
        </div>
        <div>
          <div className={styles['text-section-detail']}>
            {props.contact && (<SymbolShelf anotherClass={styles['text-section-icon']}
              icon={<FaArrowCircleRight />} text="Contact Me" />)}
            {props.request && (<SymbolShelf anotherClass={styles['text-section-icon']}
              icon={<FaArrowCircleRight />} text="Request Property" />)}
          </div>

          {props.button && (<MainButton button={props.button} anotherClass={styles['text-section-button']} />)}
          {props.amount && (<h3 className={styles['text-section-amount']}>RS.{props.amount}</h3>)}
        </div>
      </div>

      <div className={styles['text-section-body']}>
        {props.title && (<dt className={styles['text-section-highlight']}>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veritatis. Accusamus ea voluptatibus sit corrupti delectus, exercitationem, eveniet dolorum sint officia veritatis harum quidem adipisci repellat natus esse necessitatibus ipsa!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veritatis. Accusamus ea voluptatibus sit corrupti delectus, exercitationem, </dt>)}
        {props.text && (<p className={styles['text-section-caption']}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia! Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi. Quis beatae hic voluptates quas nihil, eos voluptate reprehenderit maxime quidem, possimus, inventore accusantium sequi a consequuntur quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus ut quasi.</p>)}
      </div>
    </div>
  );
}

export default TextSection;
