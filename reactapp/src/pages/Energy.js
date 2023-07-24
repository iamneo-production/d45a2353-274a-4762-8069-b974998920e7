import React from 'react';
import BasicArea from '../components/Graph';
import PersistentDrawerLeft from '../components/Drawer';

export default function Energy(){
    return(
        <div>
             <PersistentDrawerLeft/>
            <BasicArea/>
        </div>
    )
}