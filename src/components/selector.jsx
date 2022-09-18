import React, { Component } from 'react'
import { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';
import '@recogito/annotorious/dist/annotorious.min.css';
import * as SelectorPack from "@recogito/annotorious-selector-pack";
import { BiShapePolygon , BiRectangle , BiCircle, BiBorderRadius} from "react-icons/bi";
import {FaHandPaper} from "react-icons/fa"
function Selector() {

    const imgEl = useRef();
    const [ anno, setAnno ] = useState();
    const [ tool, setTool ] = useState('rect');
    const [src, selectFile] = useState(null);

    const handleFileChange = (e) => {
        selectFile(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
      let annotorious = null;
  
      if (imgEl.current) {
        annotorious = new Annotorious({
          image: imgEl.current
        });
      }

      SelectorPack(annotorious, {});
      annotorious.setDrawingTool('rect');
      setAnno(annotorious);

      return () => {  
        annotorious.destroy();
      };
    }, []);

    const toggleRect = () => {
        setTool('rect');
        anno.setDrawingTool('rect');
    }

    const togglePoly = () => {
        setTool('polygon');
        anno.setDrawingTool('polygon');
    }

    const toggleCricle = () => {
        setTool('circle');
        anno.setDrawingTool('circle');
    }

    const toggleHands = () => {
        setTool('freehand');
        anno.setDrawingTool('freehand');
    }
    
    return(
    <>
        <h1 style={{marginBottom:'3em',textAlign:'center',color:'black'}}> Image Selector</h1> 
        <div className="d-grid justify-content-center" style={{marginLeft:'100px'}}>
            <input type="file" accept="image/*" onChange={handleFileChange}/>
            <div className='my-4'>
            <BiRectangle color='red' onClick={toggleRect} style={{marginRight:'2em'}} size="2em" />
            <BiShapePolygon color='black' onClick={togglePoly} size="2em" style={{marginRight:'2em'}}/>
            <BiCircle color='blue' onClick={toggleCricle} size="2em" style={{marginRight:'2em'}}/>
            <FaHandPaper color='green' onClick={toggleHands} size="2em"/>
            </div>
            <img ref={imgEl} src={src} style={{height:'500px' , width:'800px'}}/>
        </div>   
    </>
    );
}


export default Selector;