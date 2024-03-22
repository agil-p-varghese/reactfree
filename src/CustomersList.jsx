import React,{Component} from "react";

export default class CustomersList extends Component{

    state={
        pageTitle:"Customers",
         customerCount:5,
        customers:[
            {
                id:1,nam:"scott",phone:"123456",address:{city:"delhi"},
                photo:"https://picsum.photos/id/1010/60"
            },
            {
                id:2,nam:"john",phone:null,address:{city:"london"},
                photo:"https://picsum.photos/id/1011/60"
            },
            {
                id:3,nam:"allen",phone:"388477",address:{city:"tsrissur"},
                photo:"https://picsum.photos/id/1012/60"
            },
            {
                id:4,nam:"james",phone:null,address:{city:"goa"},
                photo:"https://picsum.photos/id/1013/60"
            },
            {
                id:5,nam:"kille",phone:"19486",address:{city:"maldives"},
                photo:"https://picsum.photos/id/1014/60"
            }
        ],
        
        };

         
    render(){
        return(
            <div>
                <h4 className="m-1 p-1">{this.state.pageTitle}
                
                <span className="badge badge-secondary m-2">{this.state.customerCount}</span>
                 <button className="btn btn-info" onClick={this.onRefreshClick}>refresh</button>
                </h4>

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>photo</th>
                            <th>Customer Name</th>
                            <th>phone</th>
                            <th>city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
                    </tbody>
                </table>
            </div>
        );
    }

    //refresh button
    onRefreshClick=()=>{
        this.setState({
            customerCount:7
        });
    }
    getPhoneToRender=(phone)=>{
       if(phone) return phone;
       else{
        return <div className="bg-warning p-2 text-center">No Phone</div>
       }
    }
    getCustomerRow=()=>{
        return this.state.customers.map((cust,index) => {
            return(
                <tr key={cust.id}>
                     <td> 
                        <img src={cust.photo} alt="custoer"/>
                        <div>
                            <button className="btn btn-sm btn-secondary"onClick={()=>{this.onChangePictureClick(cust,index);}}>change picture</button>
                        </div>
                    </td>
                    <td>{cust.id}</td>
                    <td style={{backgroundColor:(cust.nam.startsWith('s'))?'green':'red'}}>{cust.nam}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                   
                </tr>
            );
        })
    }
    onChangePictureClick=(cust,index)=>{
        //console.log(cust);
        //console.log(index);
        var custArr=this.state.customers;
        custArr[index].photo="https://picsum.photos/id/104/60"; 
        this.setState({customers: custArr });

    };

}