import React from 'react'
import defaultImage from './logo192.png'
import cssClasses from './UserQuestion.module.css';
import {FaAward}  from 'react-icons/fa';
function UserQuestion({questionNo,title, view_count,answer_count,owner, tags}) {
    // used short circuit to check missing data from url 
    // and provide default
    const userProfileUrl = owner && owner.profile_image;
    return (
            <article>
    <div className={cssClasses.flexcontainer}>
         <div className={cssClasses.flexleft}>
                     <h1 >#{questionNo}</h1>
                    
        </div>
        <div className={cssClasses.flexcenter}>
                    
                        <div className={cssClasses.flexrowcontainer}>
                            <h2>{title}</h2>
                        <div className={cssClasses.mainbox}>
                                    <img className={cssClasses.avatar} src={userProfileUrl||defaultImage} alt="name" />
                                    <span className={cssClasses.ownerlable}>OWNER</span>
                                    <p>{owner.display_name}</p>
                                <span className={cssClasses.verticalline}></span>
                                  <FaAward size = '30px'/>
                                    <div>
                                        <p>{owner.reputation}</p>
                                        <p>REPUTATION</p>
                                        
                                    </div>
                                    
                               
                            </div>
                    
                            <div>
                    {
                        tags.map((tag)=>{
                            return(
                            <p className={cssClasses.highlight}>{tag}</p>  
                            )
                        })
                    }
                            </div>
                        </div>
        </div>
        <div className={cssClasses.flexright}>
                       
                       <div className={cssClasses.flexrowcontainer}>
                            <div>
                                    <div className={cssClasses.graybox}>
                                        <h3>{answer_count}</h3>
                                        <p>ANSWERS</p>
                                        
                                    </div>
                                    
                                     <div className={cssClasses.orangebox}>
                                             <h3>{view_count}</h3>
                                        <p>VIEWS</p>
                                        
                                    </div>
                                
                               
                            </div>
                            <div className={cssClasses.orangebgbox}>
                                       <h5>VIEW</h5>
                            </div>
                        </div>
                  
                    
        </div>
        </div>
            
               
        </article>
    )
}
export default UserQuestion
