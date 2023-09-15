import React, {useEffect, useState} from 'react';
import {Button} from "antd/lib";
import moment from "moment";
import {data} from "autoprefixer";

const ExecutorModal = ({ onDataMomentChange, showModalClose}) => {
    const [dataMoment, setDataMoment] = useState('');


    const today = moment().calendar(null, {
        sameDay: '[Сегодня]',
        lastDay: '[Вчера]',
        lastWeek: 'dddd',
        sameElse: 'DD.MM.YYYY',
    });
    const tomorrow = moment().add(1, 'day').calendar(null, {
        sameDay: '[Сегодня]',
        nextDay: '[Завтра]',
        lastDay: '[Вчера]',
        lastWeek: 'dddd',
        sameElse: 'DD.MM.YYYY',
    });
    const TwoDayAgo = moment().add(2, 'days').calendar();
    const ThreeDayAgo = moment().add(3, 'days').calendar();
    const ForeDayAgo = moment().add(4, 'days').calendar();
    const FiveDayAgo = moment().add(5, 'days').calendar();
    const handleDateButtonClick = (date) => {
        onDataMomentChange(date);
        showModalClose()
    };

    return (
        <>
            <div>
                Выберите Дату
            </div>
            <div>
                <div>
                    <Button onClick={() => handleDateButtonClick(today)}>{today}</Button>
                </div>

                <div>
                    <Button  onClick={() => handleDateButtonClick(tomorrow)}>{tomorrow}</Button>
                </div>
                <div>
                    <Button onClick={() => handleDateButtonClick(TwoDayAgo)}>{TwoDayAgo}</Button>
                </div>
                <div>
                    <Button onClick={() => handleDateButtonClick(ThreeDayAgo)}>{ThreeDayAgo}</Button>
                </div>
                <div>
                    <Button onClick={() => handleDateButtonClick(ForeDayAgo)}>{ForeDayAgo}</Button>
                </div>
                <div>
                    <Button onClick={() => handleDateButtonClick(FiveDayAgo)}>{FiveDayAgo}</Button>
                </div>

                <div>
                    <Button>Выбрать дату</Button>
                </div>
            </div>
        </>
    );
};

export default ExecutorModal;