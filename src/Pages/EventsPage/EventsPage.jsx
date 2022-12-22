import React from 'react'
import "./EventsPage.css"
import icon from "./01.png"

const data=[
  {
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?",
    readMore:" Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?"
  },
  {
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?",
    readMore:" Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?"
  },
  {
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?",
    readMore:" Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?"
  },
  {
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?",
    readMore:" Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?"
  },
]

const ReadMore=()=>{

}
const EventsPage = () => {
  return (
    <div className='EventPage'>
      <h1>Cyber Intrusion</h1>
      {data.map((paragraphs,i)=>{
          return(
            <div className='EventContainer'  key={i}>
            <div className='Eventbox'> 
            <div className='Eventicon'><div className='EventiconDiv'><img src={icon}/></div></div>
            <div className="Eventdes"><div className="EventDiscripDiv" ><p>{data[i].para}</p><button id='btn1' onClick={ReadMore}>Read more</button><button id='btn2'>Participants</button></div>
            </div></div>      
            </div>
          );
      })}
            
    
        
      
    </div>
  )
}

export default EventsPage;