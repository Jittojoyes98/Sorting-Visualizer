import React, { useEffect, useState } from "react"
import './SortingVisualizer.css'
import SortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms.js'


function SortingVisualizer(){
    let [array,setArray]=useState([]);
    useEffect(()=>resetArray(),[]);
    function resetArray(){
        const arr=[]
        for(let i=0;i<310;i++){
            arr.push(randome(6,600));
        }
        setArray(arr);
        // console.log("Hii there ")
    }
    function mergeSort(){
        const result=SortingAlgorithms(array);
        
        
        for(let i=0;i<result.length;i++){
            const arrayBar=document.getElementsByClassName('array-bar');
            
            
            
            // console.log(barOneStyle,barTwoStyle)
            
            const isColor=i%3!==2
            if(isColor){
                
                const [firstIndex,secondIndex]=result[i]
                const barOneStyle = arrayBar.item(firstIndex).style;
                const barTwoStyle = arrayBar.item(secondIndex).style;

                // console.log(barOneStyle,barTwoStyle)

                const color= (i%3===0) ? "red":"aqua";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color;
                  }, i * 1);
                
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = result[i];
                    const barOneStyle = arrayBar.item(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                  }, i * 1);
            }
            

        }
        array.sort((a,b)=>a-b);
    }

    function heapSort(){

    }

    function bubbleSort(){
        const arrayBar=document.getElementsByClassName('array-bar');
        


        for(let j=0;j<array.length;j++){
            for(let i=0;i<array.length-1;i++){
                const barOneStyle = arrayBar.item(i).style;
                const barTwoStyle=arrayBar.item(i+1).style;
                async function done(){
                    const promise=new Promise((accept)=>{
                        setTimeout(()=>{
                            barOneStyle.backgroundColor="green";
                            barTwoStyle.backgroundColor="green";
                            accept();
                        },1)
                    })
                    await promise;
                }
                done();
                
                const colorChange=(array[i]>=array[i+1])?"red":"aqua";

                if(array[i]>array[i+1]){
                    async function main(){
                        const promise=new Promise((accept)=>{
                            setTimeout(()=>{
                                barOneStyle.backgroundColor=colorChange;
                                barTwoStyle.backgroundColor=colorChange;
                                const h1=barOneStyle.height;
                                const h2=barTwoStyle.height;
                                barTwoStyle.height=`${h1}`;
                                barOneStyle.height=`${h2}`;
                                accept();
                                
                            },1)
                        })
                        await promise;
                    }
                    main();
                    
                    // [array[i],array[i+1]]=[array[i+1],array[i]];
                    const a=array[i],b=array[i+1];
                    array[i]=b;
                    array[i+1]=a;
                    
                }
                async function doIt(){
                    const promise=new Promise((accept)=>{
                        setTimeout(()=>{
                            barOneStyle.backgroundColor="aqua";
                            barTwoStyle.backgroundColor="aqua";
                            accept();
                        },1)
                    })
                    await promise;
                }
                doIt();
                
            }
        }
        // setArray(array)
    }
    return(
        <>
            <div className="array-container">
                {array.map((value,index)=>
                    <div className="array-bar" key={index} style={{height:`${value}px`}}></div>
                )}
                <button onClick={()=>resetArray()} className="btn">Generate new Array</button>
                <button onClick={()=>mergeSort()} className="btn">Merge Sort</button>
                <button onClick={()=>heapSort()} className="btn">Heap sort</button>
                <button onClick={()=>bubbleSort()} className="btn">Bubble sort</button>
            </div>
            
        </>
    )
}

function randome(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

export default SortingVisualizer;