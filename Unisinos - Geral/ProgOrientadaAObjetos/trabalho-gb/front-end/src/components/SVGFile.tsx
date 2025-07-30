import react from 'react';

const SVGFile = (props:{content: string, className?: string}) => {
    
    let blob = new Blob([props.content], {type: 'image/svg+xml'});
    let url = URL.createObjectURL(blob);

    return(
        <img src={url} className={props.className} />
    )
}
export default SVGFile;