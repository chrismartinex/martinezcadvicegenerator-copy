import React from "react";

export default async function GetDataAdvice(){
    const response = await fetch ("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data)
    return data.slip;
}
