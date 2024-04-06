import React from 'react'
import { useEffect } from 'react';



export default function Axios() {
useEffect(()=>{

Axios.get("http://localhost:3500/")
try{
    (response)=>{
        console.log(response.data.message)
        setdata (response.data.message)
    }
}catch{
    response.status(500).send({
        message:"internal server error",
        error:error.message,
    });
}
return(
data.map(()=>{
    data.map((menudata)=>{
        return(
            <div>
                <p>{menudata.Dishname}</p>
                <p>{menudata.Method}</p>
            </div>
        )
    })
})
)

})

}