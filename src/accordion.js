import React,{useState} from 'react';
import data from './Data';

function Accordion() {
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
     if (selected === i) {
     	return setSelected(null);
     }
     setSelected(i);
	}
	return(
             <div className="accordio_box">
             <h2 className="headin_">Accordion</h2>
                   <div className="boxxxx">
                      {data.map((item,i) => {
                  return(
                     <>
                        
                        <div className="accordion_">
                           <div className="title" onClick={() => toggle(i)}>
                               <h2>{item.question}</h2>
                               <span>{selected === i? "-":"+" }</span>
                           </div>
                           <div className={selected === i ? "content_ show":"content_"}>
                              <p>{item.answer}</p>
                           </div>
                        </div>

                     </>
                     
                  	)
                })}
                   </div>
             </div>
		);
}



export default Accordion;