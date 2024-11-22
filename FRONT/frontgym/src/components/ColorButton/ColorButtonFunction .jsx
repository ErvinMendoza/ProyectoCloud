import StyleButton from "./components/StyleButton";
import * as React from 'react';

export default function ColorButtonFunction ({text,hcolor,pcolor,mt,mb,functionality}){
    return (
        <StyleButton
            variant="contained"
            sx={{ marginTop: mt, borderRadius: 100, marginBottom: mb}}
            onClick={()=>{functionality()}}
            hovercolor={hcolor}
            primarycolor={pcolor}
        >
            {text}
        </StyleButton>
    );
}