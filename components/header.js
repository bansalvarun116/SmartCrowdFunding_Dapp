import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';


export default()=>{
    return (
        <Menu>
        <Link route="/">
        <a className='items'>CrowdCoin</a>
        </Link>
        <Menu.Menu position ='right'>
        <Link route="/">
        <a className='items'>Campaign</a>
        </Link>
        <Link route="/campaigns/new">
        <a className='items'>CrowdCoin</a>
        </Link>
        </Menu.Menu>
        </Menu>


    );
}