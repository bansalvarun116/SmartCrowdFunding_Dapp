import React, {Component} from 'react'
import {Form, Button, Input, Message} from 'semantic-ui-react'
import Layout from '../../components/layout'
import factory from '../../eth/factory';
import web3 from '../../eth/web3';
import {Router} from '../../routes';

class campaignnew extends Component{
    state={
        mincontri:'',
        error:'',
        loading:false
    };
    onSubmit=async (event)=>{
        event.preventDefault();
        this.setState({loading:true});
        try{

        const accounts=await web3.eth.getAccounts();
        await factory.methods
        .create_campaigns(this.state.mincontri)
        .send({from: accounts[0]});

        Router.pushRoute('/');
        }
        catch(error){
            this.setState({error:error.message});
        }
        this.setState({loading:false});

    };
    
    
    render(){
        return (
            <Layout>
            <h3>create a campaign</h3>

            <Form onSubmit={this.onSubmit} error={this.state.errorMessage}>
            <Form.Field>
                <label> Min contri </label>
                <Input label="wei" labelPosition="right"
                value= {this.state.mincontri}
                onChange={event => this.setState({mincontri:event.target.value})}
                />
            </Form.Field>
            <Message error header='oops!!' content={this.state.error}/>
            <Button loading={this.state.loading} primary>CREATE!!!</Button>
            </Form>
            </Layout>
        );
    }
}

export default campaignnew;