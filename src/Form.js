import React from'react'
class Form extends React.Component {

    state={
        name:"",
        number:"",
        mail:"",
        user:[],
        toggle:true
    }


    handleUpdate=(event)=>{
        this.setState({
        [event.target.name]:event.target.value
    })
    }

    handleClick=(e)=>{
        e.preventDefault()
        console.log(this.state);

        var Arr=[]
        // console.log(Arr);
        var tempObj={
        name: this.state.name,
        number: this.state.number,
        mail: this.state.mail
        }

        Arr=this.state.user
        Arr.push(tempObj)
        this.setState({user:Arr})
        this.setState({name:'',number:'',mail:''})
        // console.log(this.state.user);
    }

  render() {
    return (
      <>    

    <div className="body">
    <h1>USER FORM</h1>
        <form  onSubmit={this.handleSubmit}>
            <label>Name :</label>
            <input type="text" name="name" autoComplete='off' value={this.state.name} onChange={this.handleUpdate} /><br /><br />
            <label>Number :</label>
            <input type="text" name="number" autoComplete='off'  value={this.state.number} onChange={this.handleUpdate} /><br /><br />
            <label>mail :</label>
            <input type="text" name="mail" autoComplete='off' value={this.state.mail} onChange={this.handleUpdate} /><br /><br />
            <button className='btn' onClick={this.handleClick}>submit</button>
        </form>
        </div> 
        
           {this.state.user.map((item,index)=>{
            return(
                <div key={index}  >
                    <h2>User Data</h2>
                <pre>
                Name :{item.name} <br/>

                Number : {item.number}<br/>

                mail {item.mail}<br/>
                </pre>
               

                </div>

            )

        })}
        
       
         




      </>
    )
  }
}
export default Form