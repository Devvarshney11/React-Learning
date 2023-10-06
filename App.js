import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement('h1', {
    id : "tittle1"
}, 'Ram Ram Ji Saryane');
const root = ReactDOM.createRoot(document.getElementById('root'));
const heading2 = React.createElement('h2', {
    id : "tittle2"
},"To aaj hai humara react seekhne ka phela din")
const container = React.createElement('div',{
    id:"container"
},[heading1,heading2])
root.render(container);
