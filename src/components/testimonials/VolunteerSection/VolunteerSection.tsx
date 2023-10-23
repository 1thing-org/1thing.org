import Volunteer from './Volunteer';
import './VolunteerSection.css';
import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {Container, Row, Col} from 'react-bootstrap'

const volunteerData: { name: string, quote: string, pic: string, interview: string}[] = [
    {
        "name": "Li M.",
        "quote": "The presentation experience shifted my perspective, motivating me to take manageable actions without fretting over immediate results and encouraging others to join me. I believed that if enough people became mobilized, real change would follow. This led me to establish the non-profit organization, 1 Thing Against Racism.",
        "pic": require("assets/volunteers/Li.png"),
        "interview": "In April 2021, my journey to 1 Thing started with a basic presentation to document anti-Asian hate incidents, aiming to raise awareness among Google colleagues about the AAPI community's challenges. Unexpectedly, the presentation garnered attention within Google, leading others to contribute additional incidents, refine content, and share it widely. As a result, the presentation reached thousands of Googlers and was cited in numerous internal events and initiatives. \n\n I noticed that many AAPI community members, including myself, were upset about anti-Asian hate but seldom took action. Upon reflecting on my own inaction, I identified several excuses, such as feeling powerless, lacking time and resources, struggling to find suitable actions, being discouraged by the lack of results, and feeling isolated due to others' inactivity.\n\n The presentation experience shifted my perspective, motivating me to take manageable actions without fretting over immediate results and encouraging others to join me. I believed that if enough people became mobilized, real change would follow. This led me to establish the non-profit organization, 1 Thing Against Racism. \n\n 1 Thing's mission is to mobilize individuals and communities to take small actions against racism and hate, inspiring others to participate in the movement. By fostering a cycle of action, sharing, and inspiration, we aim to create a positive feedback loop that combines small efforts into a large social movement driving meaningful change. \n\n Using our volunteers' technological expertise, 1 Thing developed tools to help others embrace the 1 Thing concept. We transformed the anti-Asian hate incident presentation into the real-time tracking website hatecrimetracker.1thing.org. Upon analyzing incident data, we found many victims and families needed immediate assistance, so we established the anti-Asian hate victim support fund. Furthermore, volunteers are developing Together, a mobile app tailored for social and racial equality volunteers, enabling them to practice the 1 Thing idea and achieve their objectives."
    },
    {
        "name": "Kai K.",
        "quote": "Sometimes we can be daunted by how big of an idea we have but once we start breaking it down and just start doing something, no matter how big or small it is at least we are doing something. The big idea will feel less daunting and more achievable.",
        "pic": require("assets/home-page/profile-placeholder.jpeg"),
        "interview": "Kai is both a passionate teacher, and, a UX designer. Currently, Kai is the lead designer for “Together” - a mobile app the 1 Thing Against Racism organization is creating. The project is named “Together” because Kai believes no matter how big or small a single person’s contribution is, all of our contributions together can make a difference. \n\n The spike of hate crimes following the COVID-19 outbreak provoked Kai to begin looking for ways to fight AAPI hate in America. She tried talking about the issues and found that the lack of awareness about this issue was the first big obstacle. “When I was sharing my thoughts about Anti-asian hate, people didn’t really know about it. So first, I want to raise awareness about the existence of anti-asian hate. It hasn’t just existed as a result of COVID, it’s happened for a long, long, time.” \n\n Using her technical and creative skills, Kai created a digital guide to teach people what actions can be taken in situations of AAPI hate. The website’s goal is to act as a reference for what actions can be taken in order to support the AAPI community and combat AAPI hate crimes. By providing actions for different perspectives in situations of racism, the website is a framework anybody can learn from and be empowered by. \n\n Being a teacher, Kai also worked to expand her efforts to include her local community - the school she teaches at. As the supervisor of the Asian Society, Kai worked with students and fellow teachers to create a safe space for members to share their story, to be seen, and to feel appreciated. Students not only had a place to share themselves,  but through the efforts of the Asian society as a collective -  students that may not realize AAPI hate is real and that it is a thing that is happening around them began to understand more about this issue. After starting weekly checkin’s for any Asian student or faculty member to come in and share their stories Kai found that being listened to and heard really impacted people in a positive way. \n\n Finding ways to celebrate the stories students and colleagues shared, Kai decided to lead a partnership between her local middle and high school’s with Three in Five. After creating a PSA about AAPI hate at her school, and seeing that the surge of Asian visibility in the media had no impact on the number of Asian hate crimes, she wanted to do more. \n\n Kai found 1 Thing, really liked the mission, and felt joining the organization would be a happy union between projects that are both working to help the AAPI community. \n\n In Kai’s words: “We are more capable of change than we think. I do believe that together we can make a difference. Don’t think that your voice or your action is too small - it’s never too small. And there's a community of people who share your values - together we can make a difference. "
    },
    {
        "name": "Josh C.",
        "quote": "Share your story, because how else are you going to get to know another person? Be empathetic. You have to start somewhere and what easier place to start than with your personal story?",
        "pic": require("assets/volunteers/Josh.png"),
        "interview": "While in between jobs, Josh was looking for a way to network, grow his career, and make a positive difference. When Josh found the VolunteerMatch post for a UX design role at 1 Thing Against Racism he said it was like a lightbulb had switched on. \n\n One of the reasons he was drawn to the non-profit was because of why it was founded. “I do believe in the organization’s mission: if everyone took on a small act everyday, once a week, or even once a month - that these small acts can genuinely be small -  it would be that much easier to root out racism.” \n\n The rise in anti-Asian sentiment during the pandemic struck closer to home when Josh learned that his mom was getting aggressive looks at the grocery store. When a shooting spree occurred in March of 2021 at several spas in Atlanta, where Josh currently resides, he felt even more motivated to work with an organization doing what it can to make a positive impact. \n\n Through his desire to support its mission, he has become involved with a few aspects of the organization. He’s currently working on an overhaul of the 1 Thing Against Racism’s website, collaborating with other volunteers to revamp its design and messaging. He’s also contributing his UX design skills to the development of a mobile app version of the “Anti-Asian Hate Crime Tracker” project. \n\n In particular, Josh finds the hate crime tracker to be a powerful tool because with it, there is a unique opportunity to visualize and perhaps make more tangible an issue that has always been hard to demonstrate the frequency of. By taking newly reported acts of violence rooted in racism, aggregating the data, and visualizing it, the goal of the tracker is to act as a visual, shareable, reference for statistics of racism in acts big and small. \n\n As it picks up momentum, Josh hopes 1 Thing Against Racism will accomplish its goal of raising awareness, inspiring volunteers, and establishing a community of people who are united around a singular goal of making a difference in a world that could use a lot more kindness. When asked to give a message for those interested in putting the organization's mission into practice, he had this to say:\n\n “Be kind to each other, I feel like that’s kind of a cliche thing to say but there's a reason to say that. Maybe there's not enough kindness in the world. I think there is a reason it is a cliche, cause it’s an easy aspiration anyone can get behind and so it’s like really easy to say ‘be kind to each other’. And [...] share your story, because how else are you going to get to know another person? Be empathetic. You have to start somewhere and what easier place to start than with your personal story?”        "
    }
]


function VolunteerSection(){
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderVolunteers = () => (
    <Carousel showThumbs={false} showStatus={false} dynamicHeight={false} useKeyboardArrows={true}>
       
        {volunteerData.map((volunteer, index) => (       
            <div key={index}>
                <Volunteer 
                    name={volunteer.name} 
                    quote={volunteer.quote} 
                    pic={volunteer.pic} 
                    interview={volunteer.interview}
                />
                   
            </div>
        ))}
    
    </Carousel>
);

return (
    <div id="volunteer-section">
        <Row>
            <h2 className='our-volunteers'>Hear our stories</h2>
        </Row>   
        
            <div className="volunteers">
            <Row>
            {isMobile ? renderVolunteers() : ( 
                <>
                    <Col>
                        <Volunteer name={volunteerData[0].name} quote={volunteerData[0].quote} pic={volunteerData[0].pic} interview={volunteerData[0].interview}/>
                    </Col>  
                    <Col>
                        <Volunteer name={volunteerData[1].name} quote={volunteerData[1].quote} pic={volunteerData[1].pic} interview={volunteerData[1].interview}/>
                    </Col>  
                 
                    <Col>
                        <Volunteer name={volunteerData[2].name} quote={volunteerData[2].quote} pic={volunteerData[2].pic} interview={volunteerData[2].interview}/>
                    </Col>           
                </>
             
            )}
        </Row>  
            </div>
     

       
    </div>
);
}

export default VolunteerSection;