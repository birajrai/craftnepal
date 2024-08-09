import React, { useState } from 'react';
import Countdown from 'react-countdown';

const Events = () => {
    const [open, setOpen] = useState(true);

    const date = new Date(1723875300000); // Convert timestamp to Date object

    return (
        <>
            {open ? (
                <div className="events-box">
                    <div className="event-header">
                        <div className="event-title">END DIMENTION</div>
                        <i className="fa fa-close event-close" onClick={() => setOpen(false)}></i>
                    </div>
                    <div className="event-body">
                        <div className="event-img-box">
                            <img src="./assets/images/endframe.png" alt="Event Image" className="event-img"></img>
                        </div>
                        <div className="countdown-container">
                            <Countdown className="countdown" date={date} key="countdown"></Countdown>
                            <div className="countdown-header">Opens In</div>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default Events;
