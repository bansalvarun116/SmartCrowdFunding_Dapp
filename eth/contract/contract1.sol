pragma solidity ^0.4.17;

contract factory{
    address[] public deployed_campaigns;
    function create_campaigns(uint min) public{
        address new_camp= new crowdfund(min, msg.sender);
        deployed_campaigns.push(new_camp);
    }
    function get_deployed_campaigns() public view returns(address[] memory){
        return deployed_campaigns;
    } 
}



contract crowdfund{
    struct request{
        string description ;
        uint value;
        address recipient;
        bool complete;
        uint count;
        mapping(address=>bool) approval;
    }
    
    address public manager;
    uint public min_contri;
   mapping(address=>bool) public approvers;
   uint public number_of_approvers;
    
    request[] public requests;
    
    modifier restricted(){
        require(msg.sender==manager);
        _;
        
    }
    
    function crowdfund(uint contri, address creator ) public{
        manager=creator;
        number_of_approvers=0;
        min_contri=contri;
        
    }
    
    function contribute() public payable{
        require(msg.value>min_contri);
        approvers[msg.sender]=true;
        number_of_approvers++;
    }
    
    function createRequest(string memory des, uint value, address recipient) public restricted{
        request memory new_request= request({ description: des, 
        value:value,
        recipient:recipient,
        complete:false,
        count:0
        });
        requests.push(new_request);
    }
    
    function approverequest(uint index) public {
        request storage request1= requests[index];
        require(approvers[msg.sender]);
        require(!request1.approval[msg.sender]);
        request1.approval[msg.sender]=true;
        request1.count++;
    }
    
    function pass_a_request(uint index) public payable restricted{
        request storage temp_request=requests[index];
        require(temp_request.count>(number_of_approvers/2));
        require(!temp_request.complete);
        temp_request.complete=true;
        temp_request.recipient.transfer(temp_request.value);
        
    }
}