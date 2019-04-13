import React, {PureComponent} from 'react'
import {Button} from 'carbon-components-react';

import './calendar.scss';

class Calendar extends PureComponent {
    openAd(key) {
        console.log('Opening key', key)
    }

    render() {
        const activeAds = {
            0: {
                title: 'My super ad',
                photo: 'http://localhost:9000/images/churros_1.jpg',
                budget: '3000',
                warning: true,
                insights: [
                    {
                        perfomance: '-5%',
                        text: 'Worst than your competitors'
                    }
                ],
                suggestions: [
                    'Change the title',
                    'Upload new picture',
                ]
            },
            4: {
                title: 'My super ad',
                photo: 'http://localhost:9000/images/churros.jpg',
                budget: '3000',
            },
            6: {
                title: 'My super ad',
                photo: 'http://localhost:9000/images/churros_3.jpg',
                budget: '3000'
            },
            10: {
                title: 'My super ad',
                photo: 'http://localhost:9000/images/churros_4.jpg',
                budget: '3000',
                warning: true,
                insights: [
                    {
                        perfomance: '-5%',
                        text: 'Worst than your competitors'
                    }
                ],
                suggestions: [
                    'Change the title',
                    'Upload new picture',
                ]
            },
            9: {
                title: 'My super ad',
                photo: 'http://localhost:9000/images/churros_5.jpg',
                budget: '3000',
            },
            13: {
                title: 'My super ad',
                photo: 'http://localhost:9000/images/churros_6.jpg',
                budget: '3000',
            },
            22: {
                title: 'My super ad',
                photo: 'http://localhost:9000/images/churros_7.jpg',
                budget: '3000',
            },
            18: {
                title: 'My super ad',
                photo: 'http://localhost:9000/images/churros_8.jpg',
                budget: '3000',
            },
            24: {
                title: 'My super ad',
                photo: 'http://localhost:9000/images/churros_9.jpg',
                budget: '3000',
            }
        };

        const daysList = Array.from(Array(30).keys());

        return (
            <div className="calendar">

                <div className="calendar__title">
                    <h1>Your campaign agenda</h1>
                    <Button className="btn--new">Create new add</Button>
                </div>

                <div className="calendar__wrapper">
                    {daysList.map((key) => {
                        const data = activeAds[key] || null;
                        const extraClass = key === daysList.length - 1 ? 'calendar__card--last' : '';

                        return (
                            <div className={'calendar__card ' + extraClass} key={key} onClick={(event) => this.openAd(key)}>
                                <div className="calendar__card__header">
                                    <span>{key}</span>
                                </div>

                                {data && data.warning && (
                                    <div class='calendar__warning circle'></div>
                                )}

                                <div
                                    className='calendar__card__wrapper'
                                >
                                    {data && (
                                        <img src={data.photo} alt="my data" width="100%" />
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Calendar;