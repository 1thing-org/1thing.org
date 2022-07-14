import React from "react";

import "./ActionTickerTape.scss";

const ActionTickerTape = () => {
    // This can later be substituted with a dynamic API call to simple db with actions taken
    const sampleActions = [
        { username: 'DemoDami', action: 'reportHateCrime' },
        { username: 'DemoDave', action: 'workplaceTraining' },
        { username: 'DemoDang', action: 'shareWebsite' },
        { username: 'DemoDao', action: 'organizeRally' },
        { username: 'DemoDiego', action: 'participateRally' },
    ];

    const actionTranslate = {
        'reportHateCrime': ' reported a hate crime!',
        'workplaceTraining': ' conducted/completed workplace bias training!',
        'shareWebsite': ' shared our website!',
        'organizeRally': ' organized a rally!',
        'participateRally': ' participated in a rally!',
    }

    return (
        <div className='ticker-wrap'>
            Action ticker tape
            <div className='ticker'>
                {sampleActions.map(sample => {
                    return (
                        <div className='ticker_item'>
                            {sample.username} {actionTranslate[sample.action]}
                        </div>
                    )
                })}
            </div>
        </div>
    )

};

export default ActionTickerTape;
