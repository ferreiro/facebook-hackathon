import React, {PureComponent} from 'react'
import {Button} from 'carbon-components-react';
import { TextInput } from 'carbon-components-react';

import './calendar.scss';

const Modal = ({id}) => {


    return (
        <div className="modal">
            <h1>Improve the add</h1>
        </div>
    )
}

class Calendar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

    openAd(key) {
        this.setState({id: key})
        console.log('Opening key', key)
    }

    render() {
        const activeAds = {
            0: {
                title: 'My super ad',
                photo: 'http://localhost:9000/images/churros_1.jpg',
                budget: '3000',
                insights: [
                    {
                        perfomance: '-5%',
                        text: 'Worst than your competitors'
                    },
                    {
                        perfomance: '-25%',
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
                photo: 'https://media.giphy.com/media/JloaMOt30dYBp4FfXs/source.gif',
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
        const activeAd = this.state.id ? activeAds[this.state.id] : null;

        console.log(activeAd)

        return (
            <div className="calendar">
                {this.state.id && activeAd && (
                    <div className="details">
                        <div className="detail__wrapper">
                            <h1>Ad for {activeAd.title}...</h1>

                            <div className="details__wrapper">
                                <div className="left">
                                    <h2>How is your campaign perfoming?</h2>
                                    <ul>
                                        <li class="bx--tile tile-pos">
                                            <p>-5% conversion</p>
                                        </li>
                                        <li class="bx--tile tile-pos">
                                            <p>3s users leave your video</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="right">
                                    <h2>What to improve?</h2>
                                    <p style={{marginBottom: '2em'}}>Prueba nuestros churros y obtén un 10% de descuento en las próximas compras. ¡Anímate!</p>
                                    <h2 style={{marginBottom: '1em'}}>Suggested refresh content:</h2>
                                    <img src="https://media.giphy.com/media/jt9t3N1R87t49bmwa6/giphy.gif" />
                                    <img src="https://media.giphy.com/media/Zb0rzqGmhtCikou2Ku/giphy.gif" />
                                    <img src="https://media.giphy.com/media/LQzxyls7LHzcnXoeOs/giphy.gif" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="calendar__outer">
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
            </div>
        );
    }
}

export default Calendar;