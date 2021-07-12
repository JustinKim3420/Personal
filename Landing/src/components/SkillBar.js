import React from 'react'

const SkillBar = ({rank=1})=>{
    let fullBar=[];
    let initial = 0;
    while(initial <5){
        if(initial<rank){
            initial===4
            ?fullBar.push(<div className={initial===4? 'skillbar-full skillbar-last':'skillbar-full'}></div>)
            :fullBar.push(<div className={initial===0? 'skillbar-full skillbar-first':'skillbar-full'}></div>)
        } else{
            fullBar.push(<div className={initial===4? 'skillbar-empty skillbar-last':'skillbar-empty'}></div>)
        }
        initial++;
    }
    return(
        <div className='skillbar'>
            {fullBar}
        </div>
    )
}

export default SkillBar