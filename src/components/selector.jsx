import React, { Component } from 'react'
import { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';
import '@recogito/annotorious/dist/annotorious.min.css';
import * as SelectorPack from "@recogito/annotorious-selector-pack";
import * as ShapeLabelsFormatter from '@recogito/annotorious-shape-labels';
import '@popperjs/core';
import "bootstrap/dist/css/bootstrap.min.css";
import { BiShapePolygon , BiRectangle , BiCircle, BiBorderRadius} from "react-icons/bi";
import {AiOutlineSetting} from "react-icons/ai"
import {FaHandPaper} from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./anno.css";

function Selector() {

    const imgEl = useRef();
    const [anno, setAnno] = useState();
    const [tool, setTool] = useState('rect');
    const [src, selectFile] = useState(null);
    const [seed, setSeed] = useState(1);
    const [input , setInput] = useState(['Car' ,'Human' ,'Traffic-Light' ,'Bike' ,'Motor-Cycle' ,'Object']);

    const handleFileChange = (e) => {
        selectFile(URL.createObjectURL(e.target.files[0]));
    };

    const MyImportantFormatter = function(annotation) {
      const isCar = annotation.bodies.find(b => {
        return b.purpose === 'tagging' && b.value.toLowerCase() === 'Car'
      });
      
      if (isCar) {
        return 'Car';
      }

      const isBike = annotation.bodies.find(b => {
        return b.purpose === 'tagging' && b.value.toLowerCase() === 'Bike'
      });
      
      if (isBike) {
        return 'Bike';
      }

      const isHuman = annotation.bodies.find(b => {
        return b.purpose === 'tagging' && b.value.toLowerCase() === 'Human'
      });
      
      if (isHuman) {
        return 'Human';
      }

      const isTraffic = annotation.bodies.find(b => {
        return b.purpose === 'tagging' && b.value.toLowerCase() === 'Traffic-Light'
      });
      
      if (isTraffic) {
        return 'Traffic-Light';
      }

      const isMotor = annotation.bodies.find(b => {
        return b.purpose === 'tagging' && b.value.toLowerCase() === 'Motor-Cycle'
      });
      
      if (isMotor) {
        return 'Motor-Cycle';
      }

      /////////////////////////////////////////////////////////
      let vocab = document.getElementById('inputVocabulary').value;
      console.log(vocab);
      const select = annotation.bodies.find(b => {
        return b.purpose === 'tagging' && b.value.toLowerCase() === vocab
      });
      if (select) {
        return select;
      }

      let selected = document.getElementsByClassName('form-select');
      console.log(selected);
      let csssss = document.querySelector(`.a9s-annotation.${selected} .a9s-inner`);
      csssss.style.stroke = select.value;
      ////////////////////////////////////////////////

      const isObject = annotation.bodies.find(b => {
        return b.purpose === 'tagging' && b.value.toLowerCase() === 'Object'
      });
      
      if (isObject) {
        return 'Object';
      }
    }

    useEffect(() => {
      let annotorious = null;
  
      if (imgEl.current) {
        annotorious = new Annotorious({
          image: imgEl.current,
          locale:'auto',
          widgets:[
            { widget: 'TAG' , vocabulary:input}
          ],
          formatter : ShapeLabelsFormatter(annotorious,{}),
         formatters :  MyImportantFormatter,
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
    

    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
      const languageValue = e.target.value;
      i18n.changeLanguage(languageValue);
    }


    const getJSON = () => {
      const getanno = anno.getAnnotations();
      // jsonFile.add(JSON.stringify(getanno));
      //  console.log(JSON.stringify(getanno)); 

      const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(getanno)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = "data.json";
      link.click();
    }

    const getSelected = () =>{
      const selected = anno.getSelected();

      const selectText = JSON.stringify(selected);

      let paragraph = document.getElementById('paragraph');
      paragraph.textContent = selectText;

      let blur = document.getElementById('blur');
      blur.classList.toggle('active');

      let text = document.getElementById('text');
      text.classList.toggle('active');
    }

    let array = [];
    const vocabularyBox = () => {
      let blur = document.getElementById('blur');
      blur.classList.toggle('active');

      let text = document.getElementById('setting');
      text.classList.toggle('active');
    }

    const vocabularyInput = () => {
      let element = document.getElementById('inputVocabulary').value;
      if(element !== '') {
        // array.push(element);
        setInput([...input , element]);
      }
      alert(`"${element}" added in vocabulary`);
    }
    
    return(
    <>
    <h1 style={{marginBottom:'3em',textAlign:'center',color:'white',backgroundColor:'black',paddingBottom:'1.1em'}}> {t('image Selector')}</h1> 
        <div className='container' id='blur'>
          <div className="d-grid justify-content-center" style={{marginLeft:'100px'}}>
              <input type="file" accept="image/*" onChange={handleFileChange}/>
              <div className='my-4'>
              <BiRectangle color='red' onClick={toggleRect} style={{marginRight:'2em',cursor:'pointer'}} size="2em" />
              <BiShapePolygon color='black' onClick={togglePoly} size="2em" style={{marginRight:'2em',cursor:'pointer'}}/>
              <BiCircle color='blue' onClick={toggleCricle} size="2em" style={{marginRight:'2em',cursor:'pointer'}}/>
              <FaHandPaper color='green' onClick={toggleHands} size="2em" style={{marginRight:'2em',cursor:'pointer'}}/>
              <AiOutlineSetting size="2em" onClick={vocabularyBox} style={{marginRight:'30em',cursor:'pointer'}}/>
              </div>
              <img ref={imgEl} src={src} style={{height:'500px' , width:'800px'}}/>
              <button className='btn btn-danger my-3' onClick={getJSON}> {t('Download JSON')} </button>
              <button className='btn btn-primary my-2' onClick={getSelected}> {t('Get JSON')} </button>
          </div>
      </div>   
      <div id='text'>
        <p id='paragraph'></p>
        <br/>
        <a href='#' onClick={getSelected} id='close'>{t('close')} </a>
      </div>

      <div id='setting'>
        <div className="form-group mb-2">
          <label for="inputVocabulary" className='mb-2'>Vocabulary inputs :</label>
          <input type="text" className="form-control" id="inputVocabulary" placeholder="Enter Vocabulary "></input>
        </div>

        <p className='mt-1'>Color :</p>
        <select class="form-select">
          <option>red</option>
          <option>blue</option>
          <option>green</option>
          <option>yellow</option>
          <option>white</option>
          <option>black</option>
        </select> 
        <button type="submit" className="btn btn-primary mb-2 my-3" onClick={vocabularyInput}>Add</button>
        <br/> 
        <a href='#' onClick={vocabularyBox} id='close'>{t('close')} </a>
      </div>
    </>
    );
}


export default Selector;