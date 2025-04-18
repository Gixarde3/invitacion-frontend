import headerStyle from '../assets/styles/header.module.css';
import headerImg from '../assets/img/header.svg';
import { useEffect, useState } from 'react';
function Header() {
    const actualDate = new Date();
    // diferencia en dias, horas y minutos para el 7/june/2025
    const endDate = new Date(2025, 5, 7, 15, 0);
    const diffTime = Math.abs(endDate - actualDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)) % 24;
    const diffMinutes = Math.ceil(diffTime / (1000 * 60)) % 60;
    const diffSeconds = Math.ceil(diffTime / 1000) % 60;
    const diff = {
        days: diffDays,
        hours: diffHours,
        minutes: diffMinutes,
        seconds: diffSeconds
    };
    const [time, setTime] = useState(diff);
    useEffect(() => {
        const interval = setInterval(() => {
            const actualDate = new Date();
            const endDate = new Date(2025, 5, 7);
            const diffTime = Math.abs(endDate - actualDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)) % 24;
            const diffMinutes = Math.ceil(diffTime / (1000 * 60)) % 60;
            const diffSeconds = Math.ceil(diffTime / 1000) % 60;
            setTime({
                days: String(diffDays).padStart(2, "0"),
                hours: String(diffHours).padStart(2, "0"),
                minutes: String(diffMinutes).padStart(2, "0"),
                seconds: String(diffSeconds).padStart(2, "0")
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.counter}>
                <h3>CONTADOR</h3>
                <h2>07 | 06 | 2025</h2>
                <p>{diff.days}:{diff.hours}:{diff.minutes}:{diff.seconds}</p>
            </div>
            <img src={headerImg} className={headerStyle.flor1 + " " + headerStyle.flor}/>
            <img src={headerImg} className={headerStyle.flor2 + " " + headerStyle.flor}/>
        </header>
    );
}

export default Header;