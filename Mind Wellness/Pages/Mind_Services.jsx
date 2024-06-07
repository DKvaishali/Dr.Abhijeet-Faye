import React from 'react';
import NavBarMind from '../Components/NavBarMind';
import Illness_issue from '../Components/Illness_issue';
import Issue_MgmtOf from '../Components/Issue_MgmtOf';
import Issue_Therapies from '../Components/Issue_Therapies';
import Issue_Assessment from '../Components/Issue_Assessment';
import Contact_detail from '../Components/Contact_detail';
import Information from '../Components/Information';
import FAQ from '../Components/FAQ';

const Mind_Services = () => {
  return (
    <div>
         <NavBarMind/>
<Illness_issue/>
<Issue_MgmtOf/>
<Issue_Therapies/>
<Issue_Assessment/>
<Information/>
<FAQ/>
         <Contact_detail/>
    </div>
  )
}

export default Mind_Services
