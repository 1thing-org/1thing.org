import React from 'react';
import './WorkingOn.css';
import placeholderimg from '../../../assets//home-page/working-on-placeholder.svg';

function WorkingOn() {
  return (
<div className="container">
  <h1 className="main-title">We're also Working on</h1>
  <div className="images">
    <div className="image-container">
      <img className="left-image" src={placeholderimg} alt="Left Image" />
      <h2 className='title'>Project Together</h2>
      <p className='text'>Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus. Eget orci vestibulum fringilla diam adipiscing proin. </p>
      <a href="/" >Learn More</a>
    </div>
    <div className="image-container">
      <img className="right-image" src={placeholderimg} alt="Right Image" />
      <h2 className='title'>Supporting Victims</h2>
      <p className='text'>Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus. Eget orci vestibulum fringilla diam adipiscing proin. </p>
      <a href="/" >Learn More</a>
    </div>
  </div>
</div>


    // <div className="container">
    //     <p className="workingOn-title">
    //         We're also working on
    //         </p>
    //     <div className='workingOn-container'>
          
    //             <img className="project-image" />
    //             <p className='project-title'>Project Together</p>
    //             <p className='project-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam qui molestiae reiciendis, expedita laboriosam non. Dolores, sit odit nihil quod aperiam sapiente, laudantium iusto enim quis blanditiis cum laborum molestias.</p>
    //         <div>
    //             <img className="supporting-image" />
    //             <p className='supporting-title'>Supporting Victims</p>
    //             <p className='supporting-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam qui molestiae reiciendis, expedita laboriosam non. Dolores, sit odit nihil quod aperiam sapiente, laudantium iusto enim quis blanditiis cum laborum molestias.</p>
    //         </div>
    //     </div>
    // </div>
  
  );
}
export default WorkingOn;