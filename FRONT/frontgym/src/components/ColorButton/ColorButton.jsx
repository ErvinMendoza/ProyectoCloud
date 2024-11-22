import StyleButton from "./componets/StyleButton";
import * as React from 'react';

export default function ColorButton ({text,hcolor,pcolor,mt,mb,functionality}){
    return (
        <StyleButton
            variant="contained"
            sx={{ marginTop: mt, borderRadius: 100, marginBottom: mb}}
            type='submit'
            hovercolor='#2A8C79'
            primarycolor='#2DBFA3 '
        >
            {text}
        </StyleButton>
    );
}