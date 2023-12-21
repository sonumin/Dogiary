import React from 'react';
import styled from 'styled-components';

export function LongColoredBtn({text,onClick}){
    return(
        <LongBtnStyle className='colored' onClick={onClick}>{text}</LongBtnStyle>
    )
}
export function LongStrokedBtn({text,onClick}){
    return(
        <LongBtnStyle className='stroked' onClick={onClick}>{text}</LongBtnStyle>
    )
}

export function SmallBtn({text}){
    return(
        <SmallBtnStyle>{text}</SmallBtnStyle>
    )
}
const LongBtnStyle = styled.div`
padding: 8px 25px;
border-radius: 4px;
box-sizing: border-box;
display:flex;
justify-content:center;
align-items:center;
width: 281px;
height: 38px;


font-family: Noto Sans KR;
font-size: 100%;;
font-weight: 500;
&.colored{
    background: #BDAF74;
    color: #FFF;
}
&.stroked{
    background: #FFF;
    border: 1px solid #BDAF74;
    color: #BDAF74;
}

`
const SmallBtnStyle = styled.div`
display: flex;
width: 65px;
height: 29px;
padding: 8px 0px;
box-sizing: border-box;
justify-content: center;
align-items: center;
border-radius: 4px;
background: #BDAF74;

color:#fff;
font-family: Noto Sans KR;
font-size: 80%;;
font-weight: 500;
`