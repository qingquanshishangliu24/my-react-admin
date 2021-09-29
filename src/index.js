import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { mainRoutes } from "./routes"

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */
/* class Hello extends Component{
  state={
    inputValue:'22222',
    comments:[{
      id:1,
      content:'这是第一条评论'
    },
    {
      id:2,
      content:'这是第二条评论'
    }]
  }
  handleChange=(v)=>{
    console.log(v.target.value,'打印出变化的数据')
    this.setState({
      inputValue:v.target.value
    })
  }
  add=()=>{
    let arr=this.state.comments
    let obj={}
    obj.id=this.state.comments.length
    obj.content=this.state.inputValue
    console.log(obj)
    arr.push(obj)
    this.setState({
      comments:arr
    })
  }
  delete=(ev,v)=>{
    console.log(v.id)
    let arr=this.state.comments
    arr.splice(v.id-1,1)
    this.setState({
      comments:arr
    })
  }
  render(){
    return(
      <div>
    <div> <input value={this.state.inputValue} onChange={this.handleChange}></input>
     <button onClick={this.add}>确认输入</button></div>
     <div>
       <span>显示区域</span>
       {this.state.comments.map((item,index)=><span key={index}><li>{item.content}</li> <button onClick={(ev)=>this.delete(ev,item)}>删除</button></span>)}
     </div>
     </div>
    )
  }
} */
ReactDOM.render(<Router>
  <Switch>
    {mainRoutes.map((route)=>{
      return <Route key={route.path} {...route}/>
    })}
  </Switch>
</Router>,document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
