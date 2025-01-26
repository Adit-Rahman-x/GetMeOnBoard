import React from 'react'
import { useState } from 'react';
import VidTimeStamp from './VidTimeStamp';
const StepbyStep = () => {
    const [mainPoints, setMainPoints] = useState([]); // store number of main points dynamically
    const [inputValue, setInputValue] = useState(""); // State for user input
    const [timeStamp, setTimeStamp] = useState(0); // State for time stamp to video
    const [showControls, setShowControls] = useState("False") 
    const [vidRef, setVidRef] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ&")
    const addPoint = () => {
        if (inputValue.trim()){

            setMainPoints([...mainPoints,[inputValue,timeStamp]])
            setInputValue("")
            setTimeStamp(0)
        }
    }
    const removePoint = () => {
        setMainPoints(mainPoints.slice(0,-1))
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Update the input value
      };
      const handleTimeChange = (e) => {
        setTimeStamp(e.target.value); // Update the input value
      };
      const toggleEditing = () => {
        setShowControls(!showControls);
      }
    
  return (
    <>
    <div style={styles.div}>
        <button style={styles.edit}
                onClick={toggleEditing}> 
        {showControls ? "Edit" : "Save"}
        </button>
        Title: <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Title"
            style={styles.input}
          />
            TimeStamp: <input
            type="number"
            value={timeStamp}
            onChange={handleTimeChange}
            placeholder="Enter TimeStamp in Seconds"
            style={styles.input}
          />
          
          {!showControls &&(<div style={styles.inputContainer}>
          
          
          <button onClick={addPoint} style={styles.button}>
            Add Point
          </button>
          <button
            onClick={removePoint}
            style={styles.button}
            disabled={mainPoints.length === 0}
          >
            Remove Point
          </button>
        </div>)}
          {mainPoints.map((point, index) =>(
            <VidTimeStamp key={index}
            title={point[0]}
            vidLink={vidRef+ "t" + String(timeStamp) + "s"}>
                
            </VidTimeStamp>
          ))}
    </div>
    </>
  )
}
const styles = {
    edit : {
      position: "relative",
      float: "right",
      backgroundColor: "white",
      color: "black",
      borderRadius: 10,
      padding: "10px",
    },
    wrapper: {
      position: "relative",
      height: "100vh",
      margin: "0",
      padding: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    div: {
      width: "50%",
      backgroundColor: "beige",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    link: {
      color: "blue",
      textDecoration: "underline",
    },
    inputContainer: {
      display: "flex",
      gap: "10px",
      margin: "10px 0",
    },
    input: {
      flex: "1",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "lightgreen",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

export default StepbyStep