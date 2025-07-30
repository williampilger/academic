/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */

import './style.scss';

type loadingProps = {
    loading_text?: string,
    fail_text?: string,
    fail?: boolean,
    small?: boolean,
    className?: string,
    retryCallback?: ()=>void
}

const Loading = (props:loadingProps) => {

    return(
        <div className={`loading ${props.className}`}>
            <div className={`${props.small ? 'small' : ''}`} >
            {
                !props.fail ?
                <div className="wrapper">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                </div>
                :
                <div className={`retryItem ${(props.fail && (typeof props.retryCallback !== 'undefined') ) ? 'clicable' : ''}`}>
                    <svg version="1.1" height={50} viewBox="0 0 54.73 56.915">
                        <ellipse cx="27.365" cy="28.458" rx="24.847" ry="25.939" fill="none" stroke="#ff5f1f" stroke-linejoin="round" stroke-width="5.0365"/>
                        <g transform="matrix(1.8859 0 0 1.8859 4.5541 6.2642)" fill="none" stroke="#ff5f1f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <line className='noLoadItem' x1="18" x2="6" y1="6" y2="18"/>
                        <line className='noLoadItem' x1="6" x2="18" y1="6" y2="18"/>
                        <line className='loadItem' x1="4.2" x2="-0.42" y1="1.15" y2="1.11" style={{strokeWidth:3, strokeMiterlimit:4,strokeDasharray:"none"}} />
                        <line className='loadItem' x1="4.2" x2="4.13" y1="1.15" y2="5.6" style={{strokeWidth:3, strokeMiterlimit:4,strokeDasharray:"none"}} />
                        </g>
                    </svg>
                </div>
            }
            </div>
            {/* <img src={props.fail ? ((typeof props.retryCallback !== 'undefined') ? icon_reload : icon_fail) : icon_loading} alt={props.fail ? props.fail_text : props.loading_text} className={`${props.small ? 'small' : ''} ${(props.fail && (typeof props.retryCallback !== 'undefined') ) ? 'clicable' : ''}`} onClick={()=>{
                if(props.fail && props.retryCallback){
                    props.retryCallback();
                }
            }}/> */}
            <div className='textsarea'>
                {
                    !props.fail && props.loading_text &&
                    <span className='mm'>{props.loading_text}</span>
                }
                {
                    props.fail && props.fail_text &&
                    <span className='mm'>{props.fail_text}</span>
                }
            </div>
        </div>
    );
}
export default Loading;