import React from 'react'
import InputField from '../components/InputField'


const JobPosting = ({handleChange}) => {
    const now=new Date();
    const twentyFourHoursAgo=new Date(now-24*60*60*1000)
    const sevenDaysAgo=new Date(now-7*24*60*60*1000)
    const thirtyDaysAgo=new Date(now-30*24*60*60*1000)

    const twentyFourHoursAgoDate=twentyFourHoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate=sevenDaysAgo.toISOString().slice(0,10);
    const thirtyDaysAgoDate=thirtyDaysAgo.toISOString().slice(0,10);
    
  return (
    
    <div>
        <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
        <div className='text-primary'>
            <label className='sidebar-label-container'>
                <input type="radio" name="text" id="test" value="" onClick={handleChange}/>
                <span className='checkmark'></span>All Time
            </label>
            
            <InputField 
                handleChange={handleChange} 
                value={twentyFourHoursAgoDate} 
                title="Last 24 Hours" 
                name="test" 
            />
            <InputField 
                handleChange={handleChange} 
                value={sevenDaysAgoDate} 
                title="Last 7 Days Ago" 
                name="test" 
            />
            <InputField 
                handleChange={handleChange} 
                value={thirtyDaysAgoDate}
                title="Last 30 Days Ago" 
                name="test" 
            />
        </div>
    </div>
  )
}

export default JobPosting