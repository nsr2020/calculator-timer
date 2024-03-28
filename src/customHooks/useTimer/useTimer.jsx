import {useState, useEffect} from 'react';

const useTimer = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return() => clearInterval(timerID);
    }, []);

    return currentDate;
};

export default useTimer;
