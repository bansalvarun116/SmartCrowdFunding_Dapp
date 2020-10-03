
import React , {Component} from 'react';
import factory from '../eth/factory';
import { Card,Button} from 'semantic-ui-react' 
import layout from '../components/layout'
class campaginIndex extends Component {
    static async getInitialProps(){
        const campaigns=  await factory.methods.get_deployed_campaigns().call();
        return {campaigns};
    }
    renderCampaigns(){
        const items=this.props.campaigns.map(address=>{
            return {
                header: address,
                description:<a>View Campaigns</a>,
                fluid:true
            };
        });
        return <Card.Group items={items} />;
    }
    
 /* async componentDidMount(){
        const campaigns = await factory.methods.get_deployed_campagins().call();
        console.log(campaigns);
    }
    */
    render(){
        //return <div>{this.props.campaigns[0]} </div>;
        return(
        <layout>
            <div>{this.renderCampaigns()}
                <h3>OPEN CAMPAIGNS</h3>
                <Button
                 content="create campaign"
                 icon="add circle"
                 primary={true}
                />

            </div>
        </layout>);
 
    }

}

export default campaginIndex;