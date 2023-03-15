import 'bootstrap/dist/css/bootstrap.min.css';
import GetDataAdvice from '../Services/DataServices'
import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap'
import  "./Generator.css";


export default function Generator() {
    const [advice, SetAdvice] = useState('');
    const [id, SetId] = useState('')

    const RenderAdvice = async () => {
        const data = await GetDataAdvice()
        SetAdvice(data.advice);
        SetId(data.id);
        console.log(data.advice)
        console.log(data.id)
    }

    useEffect(() => {
        RenderAdvice()
    }, [])

    return (
        <Container className='container col-xs-5 col-sm-4 col-lg-4'>
            <h1 className='subtext' >Advice #{id}</h1>
            <h1 className='advice'>{advice} </h1>
            <div>
                <svg className='col-xs-5 col-sm-4 col-lg-4' width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
            </div>
            <button className='shuffle-button col-xs-5 col-sm-4 col-lg-4' onClick={() => RenderAdvice()}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg></button>
           </Container>
            
    );
}

