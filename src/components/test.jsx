import { useState } from "react";

export default function Test() {

   const[count,setCount]= useState(0) //whatever value we place inside useState() is the beginning value of the first value variable
   const[status, setStatus]=useState("🌞") //first value given as status variable and second value as setStatus function that has sun emoji showing on
//    we get an array containing two things from a useState hook , in this case a and b

//first value is a variable and second is a function as follows


    return(

        <div className="w-full h-full flex flex-col justify-center items-center ">
        <div className="w-[400px] h-[300px] shadow-2xl flex justify-center items-center">

            <button className="w-[100px] h-[50px] bg-red-600 text-white" onClick={()=>{
                // console.log("decrement")
                // count=count-1
                // console.log(count)

                setCount(count-1) //whatever value we give to this function here is provided to the variable
                //  created in the useState hook 
                // next the function in this component is given a refresh/rerun due to this
            }}>

                Decrement
            </button> 

            <h1 className="w-[100px] h-[50px] text-[30px] text-center">{count}</h1>

            <button  onClick={()=>{

                //   console.log("Increment")
                //   count=count+1
                //   console.log(count)

                setCount(count+1)
            }}className="w-[100px] h-[50px] bg-blue-600 text-white">
                Increment
            </button>

        </div>

<div className="w-[400px] h-[300px] shadow-2xl flex flex-col justify-center items-center">
<span className="h-[30px] font-bold text-2xl">
{status}
</span>

<div className="w-full h-[50px] flex justify-center">

<button className="w-[100px] text-white h-full bg-red-600" onClick={

    ()=>{
        setStatus("🌚")
    }
}>Off</button>

<button className="w-[100px] text-white h-full bg-green-600" onClick={

    ()=>{
        setStatus("🌞")
    }
}>On</button>

</div>

        </div>

</div>

        //text:center is used to center the text in a tag

        //the function by onlick is represented as follows in {} because we are addding javascript in html

        //if a variable keeps on changing in a component, it is called an attribute
    )
}