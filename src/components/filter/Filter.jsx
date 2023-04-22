import React from 'react';

import styles from './filter.module.scss';

const Filter = () => {
    return (
        <div className={styles.filter}>
            <div className=''>
                <div className={styles.filterTitle}>TYPE</div>
                <ul className='mt-28'>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='sport' />
                        <label className='c-p' htmlFor='sport'>
                            Sport
                        </label>
                    </li>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='suv' />
                        <label className='c-p' htmlFor='suv'>
                            SUV
                        </label>
                    </li>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='mpv' />
                        <label className='c-p' htmlFor='mpv'>
                            MPV
                        </label>
                    </li>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='sport' />
                        <label className='c-p' htmlFor='SUV'>
                            SUV
                        </label>
                    </li>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='sedan' />
                        <label className='c-p' htmlFor='sedan'>
                            Sedan
                        </label>
                    </li>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='coupe' />
                        <label className='c-p' htmlFor='coupe'>
                            Coupe
                        </label>
                    </li>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='hatchback' />
                        <label className='c-p' htmlFor='hatchback'>
                            Hatchback
                        </label>
                    </li>
                </ul>
                <div className={styles.filterTitle}>Capacity</div>
                <ul className='mt-28'>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='two' />
                        <label className='c-p' htmlFor='two'>
                            2 Person
                        </label>
                    </li>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='four' />
                        <label className='c-p' htmlFor='four'>
                            4 Person
                        </label>
                    </li>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='six' />
                        <label className='c-p' htmlFor='six'>
                            6 Person
                        </label>
                    </li>
                    <li className='mt-12'>
                        <input className={styles.input} type='checkbox' id='eight' />
                        <label className='c-p' htmlFor='eight'>
                            8 or more
                        </label>
                    </li>
                </ul>
                <div className={styles.filterTitle}>Price</div>
                <div className='mt-24'>
                    <input
                        className={styles.priceRange}
                        type='range'
                        min={0}
                        max={99}
                        defaultValue={0}
                        step={1}
                        id='example'
                    />
                    <p className='mt-12'>Max price: $99</p>
                </div>
            </div>
        </div>
    );
};

export default Filter;
