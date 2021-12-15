import { useState } from "react";
import "./style/SkinComponent.css"
function SkinComponent(props) {
    const [loaded, setLoaded] = useState(false);
    return (
        <div 
            className="SkinComponent" 
            onClick={() => window.open(props.data.download, "_self")}
            >
            <div className="SkinHeader"> 
                <div className="SkinName">{props.data.name}</div>
                <div className="SkinVersion">{props.data.ver}</div>
                <div className="SkinYear">{props.data.year}</div>
            </div>

            <img 
                className="SkinPreview" 
                style={loaded ? {opacity: 1} : {opacity: 0}}
                src={props.data.preview} 
                alt={props.data.name}
                onLoad={() => setLoaded(true)}/> 
        </div>
    )
}

export default SkinComponent;