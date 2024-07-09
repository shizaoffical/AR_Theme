// import React from 'react';
// import styles from '../Index.module.css';
// import CardHeading from '@snippets/CardHeading';
// import MainButton from '@snippets/MainButton';

// function BestPlaces() {
//     return (
//         <div>
//             <div className={styles['best-place']}>
//                 <div className={`container ${styles['best-place-description']}`}> 
//                         <p className={styles['best-place-title']}>Best places</p>
//                     <CardHeading heading="Luxury homes for rent" anotherClass={styles['best-place-heading']} />
//                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta consectetur ipsa. At cum repellendus earum aut, similique ratione corrupti aliquam quasi, doloribus optio nobis dolorum nisi ab ipsa obcaecati.</p>
//                     <MainButton anotherClass={styles['best-place-button']} button="Get Started" /> 
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BestPlaces;
import React from 'react';
import styles from '../Index.module.css';
import CardHeading from '@snippets/CardHeading';
import MainButton from '@snippets/MainButton';

function BestPlaces() {
    return (
        <div className={styles['best-place']}>
            <div className={`container ${styles['best-place-description']}`}>
                <p className={styles['best-place-title']}>Best places</p>
                <CardHeading heading="Luxury homes for rent" anotherClass={styles['best-place-heading']} />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta consectetur ipsa. At cum repellendus earum aut, similique ratione corrupti aliquam quasi, doloribus optio nobis dolorum nisi ab ipsa obcaecati.</p>
                <MainButton anotherClass={styles['best-place-button']} button="Get Started" />
            </div>
            <div className={styles['best-place-image-container']}>
                <div className={styles['best-place-image']}></div>
                <div className={styles['best-place-overlay']}></div>
            </div>
        </div>
    );
}

export default BestPlaces;
