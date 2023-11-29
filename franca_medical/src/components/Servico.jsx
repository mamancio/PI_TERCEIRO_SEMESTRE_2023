import React from 'react'
import './Servico.css'
import img from '../assets/imagem2.jpg'
function Servico() {
    return (
        <>
            <div className="center_content">
                <div className="conteudo">
                    <ul id="navbar">                     
                        <li>
                            <img src={img} alt="várias pessoas"></img>                        
                        </li>
                    </ul>                             
                </div>

                <div className='card'>
                        <br />
                        <h1>SERVIÇOS</h1><br />                      
                        <h3>CARDIOLOGIA</h3><br />                        
                        <h3>CONSULTAS MÉDICAS</h3><br />
                        <h3>INSTITUTO DE PESQUISA E ENSINO - IPE HOME</h3><br />
                        <h3>LABORATÓRIO DE ANÁLISES CLÍNICAS</h3><br />
                        <h3>RADIOLOGA - HOME DIAGNÓSTICO POR IMAGEM</h3><br />
                        <h3>EMERGÊNCIA</h3><br />
                        <h3>UNIDADE DE TERAPIA INTENSIVA - UTI</h3><br />                      
                    </div>      
            </div>
        </>
        
    )
}
export default Servico