import React from 'react'
import style from './style.module.css'


export default function Portfolio() {
  return (
    <>
   
    <div className='  pt-5'>
      <div className='container'>
        <div className='pt-5 text-center'>
          <h2 className='fontport'>PORTFOLIO COMPONENT</h2>
        </div>
      <div className="row pt-5 justify-content-center">
        <div className= " col-md-4  d-flex align-item-center justify-content-center ">
        <div className={style.over}>
        <img src={require("../imges/poert1.png")} alt="logo" /> 
        <div className={style.decortion}>
          <i className="fa-solid fa-plus"></i>
        </div>
        </div>
        </div>

        <div className="col-md-4 d-flex align-item-center justify-content-center  ">
          <div className={style.over}>
        <img src={require("../imges/port2.png")} alt="logo" /> 
        <div className={style.decortion}>
          <i className="fa-solid fa-plus"></i>
        </div>
        </div>
        </div>


        <div className="col-md-4 d-flex align-item-center justify-content-center">
          <div className={style.over}>
        <img src={require("../imges/port3.png")} alt="logo" /> 
        <div className={style.decortion}>
          <i className="fa-solid fa-plus"></i>
        </div>
        </div>
        </div>
      </div>

      <div className="row pt-5 justify-content-center pb-3">
        <div className= "col-md-4 d-flex align-item-center justify-content-center ">
          <div className={style.over}>
        <img src={require("../imges/poert1.png")} alt="logo" /> 
        <div className={style.decortion}>
          <i className="fa-solid fa-plus"></i>
        </div>
        </div>
        </div>
        <div className="col-md-4 d-flex align-item-center justify-content-center">
        <div className={style.over}>
        <img src={require("../imges/port2.png")} alt="logo" /> 
        <div className={style.decortion}>
          <i className="fa-solid fa-plus"></i>
        </div>
        </div>
        </div>
        <div className="col-md-4 d-flex align-item-center justify-content-center">
          <div className={style.over}>
        <img src={require("../imges/port3.png")} alt="logo" /> 
        <div className={style.decortion}>
          <i className="fa-solid fa-plus"></i>
        </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    
    
    </>
  )
}
