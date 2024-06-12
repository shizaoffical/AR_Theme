import React from 'react';
import styles from '../Home.module.css'; 
import CardHeading from '@snippets/CardHeading';
import MainButton from '@snippets/MainButton';
import CardValue from '../../../snippets/CardValue';

function BestPlaces() {
    return (
        <div>
            <div className={styles.bestPlace}> {/* Use CSS module class */}
                <div className={`container ${styles.bestPlaceInner}`}> {/* Use CSS module class */}
                    <CardValue title="Best places" />
                    <CardHeading heading="Luxury homes for rent" anotherclass={styles.bestPlacesHeading} /> {/* Use CSS module class */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta consectetur ipsa. At cum repellendus earum aut, similique ratione corrupti aliquam quasi, doloribus optio nobis dolorum nisi ab ipsa obcaecati.</p>
                    <MainButton anotherclass={styles.bestPlacesBtn} button="Get Started" /> {/* Use CSS module class */}
                </div>
            </div>
        </div>
    );
}

export default BestPlaces;
