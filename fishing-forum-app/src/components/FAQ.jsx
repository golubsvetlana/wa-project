import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import '../components/scss/FAQ-collapse.scss'
import '../components/scss/FAQ.scss'
import image from './img/faq/82fcd3_b3834ff06ebd495480063803b859d714_mv2_d_2848_4288_s_4_2.webp'
import './scss/media-mixins.scss'
import {ScrollBtn} from './ScrollBtn.jsx'
export const FaqPage = () => {
    
    return (
        <>
        {ScrollBtn()}
        <div className="faq-content">
                <img className="faq-content_img" src={image} alt="" />
                <div className="faq-content_text">
                    <h2 className="faq-content_text-title">Site Rules</h2> 
                    <ul className="faq-content_text-list">
                        <li className="faq-content_text-list-item">No offensive content</li>
                        <li className="faq-content_text-list-item">-</li>
                        <li className="faq-content_text-list-item">No spreading of any copyrighted material</li>
                        <li className="faq-content_text-list-item">-</li>
                        <li className="faq-content_text-list-item">No spamming or advertising</li>
                        <li className="faq-content_text-list-item">-</li>
                        <li className="faq-content_text-list-item">Admin decisions are final</li>
                        <li className="faq-content_text-list-item">-</li>
                        <li className="faq-content_text-list-item">Please be nice</li>
                        <li className="faq-content_text-list-item">-</li>
                    </ul>
                </div>
        </div>
            <div id="faq_coll" className="faq-collapse-wrap">
                <h2 className="faq-collapse-head">FAQ</h2>
                <h3 className="faq-collapse-title">Frequently asked questions</h3>
           <Collapse accordion={true}>
            <Panel showArrow="true" header="How do I add a new question?" headerClass="my-header-class">
                    To add a new question go to app settings and press "Manage Questions" button.
            </Panel>
            <Panel showArrow="true" header="Can I insert pictures in my FAQ?" headerClass="my-header-class">
                        Yes! To add a picture follow these simple steps:
                   <ol>
                           <li>Enter App Settings</li> 
                           <li>Click the "Manage Questions" button</li> 
                           <li>Click on the question you would like to attach a picture to</li> 
                           <li>When editing your answer, click on the picture icon and then add an image from your library</li> 
                    </ol> 
            </Panel>
            <Panel  header="Can I insert a video in my FAQ?" headerClass="my-header-class" showArrow="true">
                        Yes! Users can add video from YouTube or Vimeo with ease:
                         <ol>
                             <li>Enter App Settings</li>
                             <li>Click the "Manage Questions" button</li>
                             <li>Click on the question you would like to attach a video to</li>
                             <li>When editing your answer, click on the video icon and then paste the YouTube or Vimeo video URL</li>
                             <li>That's it! A thumbnail of your video will appear in answer text box</li>
                         </ol>                         
            </Panel>
            <Panel showArrow="true" header="How do I edit or remove the &#34;FAQ title&#34; ?" headerClass="my-header-class">
                The FAQ title can be adjusted in the settings tab of the App Settings. You can also remove the title by unchecking its checkbox in the settings tab.
            </Panel>              
        </Collapse>
    </div>
    
        </>
    );
}




