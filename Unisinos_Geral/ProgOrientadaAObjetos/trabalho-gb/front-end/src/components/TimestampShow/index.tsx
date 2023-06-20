
export const TimestampShow = (props : {timestamp: number, className?:string}) => {

    let d = new Date(props.timestamp*1000);
    let datetime = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth()+1).padStart(2, '0')}/${d.getFullYear()} - ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`

    return (
        <>
            {
                datetime &&
                <span className={props.className}>{datetime}</span>
            }
        </>
    );
}