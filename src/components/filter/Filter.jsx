import React, { useEffect } from 'react';

import styles from './filter.module.scss';

const Filter = ({ items, handleCheckbox }) => {
    const [filteredItems, setFilteredItems] = React.useState([]);

    useEffect(() => {
        const filteredItems = items.filter(item => item.body === 'Sport');
        setFilteredItems(filteredItems);
    }, [items]);

    const sportItems = items.filter(item => item.body === 'Sport');
    const suvItems = items.filter(item => item.body === 'SUV');
    const mpvItems = items.filter(item => item.body === 'MPV');
    const sedanItems = items.filter(item => item.body === 'Sedan');
    const coupeItems = items.filter(item => item.body === 'Coupe');
    const hatchbackItems = items.filter(item => item.body === 'Hatchback');
    const twoPerson = items.filter(item => item.capacity === '2');
    const fourPerson = items.filter(item => item.capacity === '4');
    const sixPerson = items.filter(item => item.capacity === '6');
    const eightPerson = items.filter(item => item.capacity === '8');

    return (
        <div className={styles.filter}>
            <div className={styles.filterTitle}>TYPE</div>
            <ul className='mt-28'>
                <li className='mt-12'>
                    <input
                        className={styles.input}
                        onChange={handleCheckbox}
                        type='checkbox'
                        id='Sport'
                    />
                    <label className='c-p fw600' htmlFor='Sport'>
                        Sport <span>({sportItems.length})</span>
                    </label>
                </li>
                <li className='mt-12'>
                    <input
                        className={styles.input}
                        onChange={handleCheckbox}
                        type='checkbox'
                        id='SUV'
                    />
                    <label className='c-p fw600' htmlFor='SUV'>
                        SUV <span>({suvItems.length})</span>
                    </label>
                </li>
                <li className='mt-12'>
                    <input
                        className={styles.input}
                        onChange={handleCheckbox}
                        type='checkbox'
                        id='MPV'
                    />
                    <label className='c-p fw600' htmlFor='MPV'>
                        MPV <span>({mpvItems.length})</span>
                    </label>
                </li>
                <li className='mt-12'>
                    <input
                        className={styles.input}
                        onChange={handleCheckbox}
                        type='checkbox'
                        id='Sedan'
                    />
                    <label className='c-p fw600' htmlFor='Sedan'>
                        Sedan <span>({sedanItems.length})</span>
                    </label>
                </li>
                <li className='mt-12'>
                    <input
                        className={styles.input}
                        onChange={handleCheckbox}
                        type='checkbox'
                        id='Coupe'
                    />
                    <label className='c-p fw600' htmlFor='Coupe'>
                        Coupe <span>({coupeItems.length})</span>
                    </label>
                </li>
                <li className='mt-12'>
                    <input
                        className={styles.input}
                        onChange={handleCheckbox}
                        type='checkbox'
                        id='Hatchback'
                    />
                    <label className='c-p fw600' htmlFor='Hatchback'>
                        Hatchback <span>({hatchbackItems.length})</span>
                    </label>
                </li>
            </ul>
            <div className={styles.filterTitle}>Capacity</div>
            <ul className='mt-28'>
                <li className='mt-12'>
                    <input
                        className={styles.input}
                        onChange={handleCheckbox}
                        type='checkbox'
                        id='TwoPerson'
                    />
                    <label className='c-p fw600' htmlFor='TwoPerson'>
                        2 Person <span>({twoPerson.length})</span>
                    </label>
                </li>
                <li className='mt-12'>
                    <input
                        className={styles.input}
                        onChange={handleCheckbox}
                        type='checkbox'
                        id='FourPerson'
                    />
                    <label className='c-p fw600' htmlFor='FourPerson'>
                        4 Person <span>({fourPerson.length})</span>
                    </label>
                </li>
                <li className='mt-12'>
                    <input
                        className={styles.input}
                        onChange={handleCheckbox}
                        type='checkbox'
                        id='SixPerson'
                    />
                    <label className='c-p fw600' htmlFor='SixPerson'>
                        6 Person <span>({sixPerson.length})</span>
                    </label>
                </li>
                <li className='mt-12'>
                    <input
                        className={styles.input}
                        onChange={handleCheckbox}
                        type='checkbox'
                        id='EightPerson'
                    />
                    <label className='c-p fw600' htmlFor='EightPerson'>
                        8 or more <span>({eightPerson.length})</span>
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
                <p className='mt-12'>Max price: $100.00</p>
            </div>
        </div>
    );
};

export default Filter;
