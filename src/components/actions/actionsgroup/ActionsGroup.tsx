import YourActionsLeft from './YourActionsLeft';
import YourActionsRight from './YourActionsRight';

const actionData: { name: string, desc: string[], actiontUrl: string, actionId: string }[] = [
    {
        "name": "Raise awareness",
        "desc":[
            'Tell a friend or colleague that you are concerned for your safety out in the streets nowadays because of Anti-Asian hate crime incidents.',
            'Talk about this issue with coworkers.',
            'In a team meeting, share what you are doing to fight hate.',
            'Share anti-hate materials to your team or organization.',
            'If you experienced a biased incident, tell your non-asian friends and colleagues about that. Share both facts and your feelings.',
            'Raise questions to the leaders of your organization, encourage concrete plans to address this issue.',
            'Inform your asian/non-asian friends about actions taken by governments and companies. Knowing that anti-Asian hate has drawn significant society-wise attention (not just among AAPI communities) will encourage everyone to do something.'
        ],
        "actiontUrl": "/",
        "actionId": "raiseAwareness"
    },
    {
        "name": "Support Anti-Asian hate crime victims",
        "desc": [
            'Donate to Anti-Asian hate crime victims.',
            'Help capture suspects.',
            'Help effort to bring justice to victims.',
            'Tell a hate incident/crime victim that you want to listen to their feelings.',
            'Tell a hate incident/crime victim that you are here to help.'
        ],
        "actiontUrl": "/",
        "actionId": "support"
    },
    {
        "name": "Use your skills",
        "desc": [
           'Create: paint, draw, or digitally make a piece of art that reflects your attitude towards asian-hate, prejudice, and bias.',
           'Share: art, websites, or books that inspire and help you.',
           'Support: use your analytical skills to proofread articles, slide decks, and other educational content.',
           'Research: fact-check news articles, perform data analysis, or implement data crawling.',
           'Develop: create apps, websites, or online platforms.',
           'Collaborate: propose solutions, help with projects, or volunteer out in the community.'
        ],
        "actiontUrl": "/",
        "actionId": "useSkills"
    },
    {
        "name": "Promote cross racial understanding",
        "desc": [
            'Communicate: as a minority friend about their experience living in the US.',
            'Empathize: try to relate to others, share the challenges the APPI community is facing.',
            'Connect: host inclusive gatherings to connect with friends from different ethnic groups.',
            'Recommend: Asian storytelling movies. Eg: Crazy Rich Asians, The Joy Luck Club, to friends & colleagues.',
            'Invite: share something fun about Asian culture with non-Asian friends.'
        ],
        "actiontUrl": "/",
        "actionId": "understanding"
    }
    
];

function ActionsGroup(){
    return (
        <div id="action-section">
            <YourActionsRight
                name={actionData[0].name}
                desc={actionData[0].desc}
                actionId={actionData[0].actionId}
            />
            <YourActionsLeft
                name={actionData[1].name}
                desc={actionData[1].desc}
                actionId={actionData[1].actionId}
            />
            <YourActionsRight
                name={actionData[2].name}
                desc={actionData[2].desc}
                actionId={actionData[2].actionId}
            />
            <YourActionsLeft
                name={actionData[3].name}
                desc={actionData[3].desc}
                actionId={actionData[3].actionId}
            />
        </div>
    )
}

export default ActionsGroup;