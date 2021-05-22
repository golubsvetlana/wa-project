import React, { useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './scss/media-mixins.scss'
//-------------------------------
import {LoginPage} from './SignUp.jsx'
import { postArray } from './Array.jsx'
import './scss/Article.scss'
import { FullArticleText } from './Article_text.jsx'
import { ScrollBtn } from './ScrollBtn.jsx'
import ScriptTag from 'react-script-tag';
import MuFunc from './js/Slider.js'
//import Slider from "react-slick";
//--------icons-----------------------------------
import crown from './img/icons/crown.svg'
import facebook from './img/social/facebook-grey.svg'
import twitter from './img/social/twitter-grey.svg'
import linkedin from './img/social/linkedin-grey.svg'
import linkIcon from './img/icons/link.svg'
import viewIcon from './img/icons/clarity_eye-show-line.svg'
import comment from './img/icons/fluent_comment-regular.svg'
import user from './img/icons/comm_user.svg'
//------------------------------------------------

const CancelPopup = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return (
      <div>
        <button type="button" className="button comm-btn comm-btn__cancel" onClick={() => setOpen(o => !o)}>
          Cancel
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
            <span className="close" onClick={closeModal}>
                        &times;
            </span>
            <div className="modal-content-wrap">
            <div className="modal-content modal-content__cancel-content">
            <h2 className="pop-up__title">Discard Comment?</h2>
            <span className="pop-up__subtitle" >Your comment will not be saved.</span> 
            </div>
            <div className="pop-up__btns">
                <button className="cancel-btn" onClick={closeModal}>Cancel</button>
                <button className="discard-btn" onClick={closeModal}>Discard</button>
            </div>
            </div>   
        </div>
        </Popup>
      </div>
    );
  };

  const PublishPopup = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return (
      <div>
        <button type="button" className="button comm-btn comm-btn__publish" onClick={() => setOpen(o => !o)} >
          Publish
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            <span className="close" onClick={closeModal}>
                        &times;
            </span>
                    <div className="modal-content modal-content__login-content">
                        {LoginPage()}
                    </div>
                    
               
                
        </div>
        </Popup>
      </div>
    );
  };


const indFunc = (min, max)=>{return Math.floor(Math.random() * (max - min)) + min}

    let ind1 = indFunc(postArray.length-postArray.length, postArray.length-postArray.length)
    let ind2 = indFunc(2, postArray.length-2)
    let ind3 = indFunc(postArray.length-2, postArray.length)

function createMarkup(i) {
    return {
        __html: `                  
        <div class="article-head">
            <img class="article__avatar" src="${postArray[i].avatarUrl}" alt>
            <a href="/login" class="article__author">${postArray[i].author} <img class="crown-icn" src="${crown}" data-tooltip="Admin"></a>
            <span class="article__datacreate"> &sdot; ${postArray[i].dataCreated} &sdot; 1 min</span>
        </div>
        <h2 class="article__title">${postArray[i].articleTitle}</h2>
        <p class="article__descript regular-text">${postArray[i].shortTxt}</p>
        <img class="article__img" src="${postArray[i].imgUrl}" />
        <div class = "article__full-text">${FullArticleText}</div>
        <div class="icons-block">
            <ul class="bott-list">
                <li class="bott-list__item">
                    <a class="bott-icon-link" href=""
                        ><img class="bott-list__icon" src=${facebook} alt=""
                    /></a>
                </li>
                <li class="bott-list__item">
                    <a class="bott-icon-link" href=""
                        ><img class="bott-list__icon" src=${twitter} alt=""
                    /></a>
                </li>
                <li class="bott-list__item">
                    <a class="bott-icon-link" href=""
                        ><img class="bott-list__icon" src=${linkedin} alt=""
                    /></a>
                </li>
                <li class="bott-list__item">
                    <a class="bott-icon-link" href=""
                        ><img class="bott-list__icon" src=${linkIcon} alt=""
                    /></a>
                </li>
            </ul>
        </div>
        <div class="article__statistic-wrap">
            <div class="statistic-cnt">
                <span class="views">${postArray[i].viewCnt} views</span>
                <span class="comments">0 comments</span>
            </div>
            <div class="likes-wr">
                <span id="likes_${[i]}" class="likes">${postArray[i].likeCnt}</span>
                <input id="toggle-heart_${[i]}" type="checkbox"/>
                <label for="toggle-heart_${[i]}" aria-label="like">❤</label>
            </div>
        </div>
       `};
  }
  
function MyComponent(i) {

    return (
        <>
            {ScrollBtn()}
            <h2 className="mobile-page-header">Post</h2>
            <div className="page-content-wrap">
                <div className="page-head"><a className="page-head__link" href="/blog">All Posts</a></div>
                <div className="article-content-wrap" dangerouslySetInnerHTML={createMarkup(i)} />
            </div>
            
            <div className="recent-wrap">
                <div className="titles-wrap">
                    <h3 className="recent__title">Recent Posts</h3>
                    <a className="recent__title-link" href="/blog">See All</a>
                </div>
                
                <div className="recent-posts">
                    <div className="rec-post rec-post__active rec-post__item1">
                        <div className="rec-post__img rec-post__img-item1" style={{ backgroundImage: 'url(' + postArray[ind1].imgUrl + ')'}} />
                        <div className="rec-text-wrap">
                            <h3 className="rec-text__title">{postArray[ind1].articleTitle}</h3>
                            <hr className="horizontal_line"/>
                        </div>
                        <div className="rec-article-stat-wrap">
                        <div className="rec-article-stat__icons">
                            <span className="rec-article-stat__view-text"><img className="stat__view-icon" src={viewIcon} alt="" /> {postArray[ind1].viewCnt}</span>
                            <span className="rec-article-stat__comment-text"><img className="stat__comm-icon" src={comment} alt=""/>0</span>
                        </div>
                        <div className="likes-wr">
                            <span id={"likes_"+ind1} className="likes">{postArray[ind1].likeCnt}</span>
                            <input id={"toggle-heart_"+ind1} type="checkbox"/>
                            <label htmlFor={"toggle-heart_"+ind1} aria-label="like">❤</label>
                        </div>
                        </div>
                    </div>
                    <div className="rec-post rec-post__item2">
                        <div className="rec-post__img rec-post__img-item2" style={{ backgroundImage: 'url(' + postArray[ind2].imgUrl + ')'}} />
                        <div className="rec-text-wrap">
                            <h3 className="rec-text__title">{postArray[ind2].articleTitle}</h3>
                            <hr className="horizontal_line"/>
                        </div>
                        <div className="rec-article-stat-wrap">
                        <div className="rec-article-stat__icons">
                            <span className="rec-article-stat__view-text"><img className="stat__view-icon" src={viewIcon} alt="" /> {postArray[ind2].viewCnt}</span>
                            <span className="rec-article-stat__comment-text"><img className="stat__comm-icon" src={comment} alt=""/>0</span>
                        </div>
                        <div className="likes-wr">
                            <span id={"likes_"+ind2} className="likes">{postArray[ind2].likeCnt}</span>
                            <input id={"toggle-heart_"+ind2} type="checkbox"/>
                            <label htmlFor={"toggle-heart_"+ind2} aria-label="like">❤</label>
                        </div>
                        </div>
                    </div>
                    <div className="rec-post rec-post__item3">
                        <div className="rec-post__img rec-post__img-item3" style={{ backgroundImage: 'url(' + postArray[ind3].imgUrl + ')'}} />
                        <div className="rec-text-wrap">
                            <h3 className="rec-text__title">{postArray[ind3].articleTitle}</h3>
                            <hr className="horizontal_line" />
                        </div>
                        <div className="rec-article-stat-wrap">
                        <div className="rec-article-stat__icons">
                            <span className="rec-article-stat__view-text"><img className="stat__view-icon" src={viewIcon} alt="" /> {postArray[ind3].viewCnt}</span>
                            <span className="rec-article-stat__comment-text"><img className="stat__comm-icon" src={comment} alt=""/>0</span>
                        </div>
                        <div className="likes-wr">
                            <span id={"likes_"+ind3} className="likes">{postArray[ind3].likeCnt}</span>
                            <input id={"toggle-heart_"+ind3} type="checkbox"/>
                            <label htmlFor={"toggle-heart_"+ind3} aria-label="like">❤</label>
                        </div>
                        </div>
                    </div>
                    </div>
                <div className="btns-wrap">
                    <button className="pager"></button>
                    <button className="pager"></button>
                    <button className="pager"></button>
                    
                </div>
                <ScriptTag isHydrating={false} type="text/javascript" src={MuFunc} />
            </div>
            
            <form className="add-comment-form" action="POST">
                <div className="title-wrap">
                    <h2 className="form-title">Comment</h2>
                    <div className="form-select">
                      <label htmlFor="sort">Sort by:</label>
                        <select className="select-sort" name="sort" id="sort">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>  
                    </div>            
                </div>
                <hr className="horizontal_line" />
                <div className="comment-block-wrap">
                    <img src={user} alt="" />
                <div className="comment-wrap">
                        <textarea placeholder="Write a comment..." onClick={() => {
                            document.querySelector('.buttons-wrap').classList.add('buttons-wrap-active')
                            document.querySelector('.add_comm-input').classList.add('add_comm-input-active')
                        }}
                        className="add_comm-input" name="add_comm" cols="30" rows="10"></textarea>
                    <div className="buttons-wrap">
                            {CancelPopup()}
                            {PublishPopup()}
                    </div>   
                </div>

                </div>
            </form>
            
        </>
    
    
    )
                ;
  }

//-----separate pages for articles--------------
export const Article0 = () => {
    return (
        <>
           {MyComponent(0)}
        </>
    )
}

export const Article1 = () => {
    return (
        MyComponent(1)
    )
}

export const Article2 = () => {
    return (
        MyComponent(2)
    )
}

export const Article3 = () => {
    return (
        MyComponent(3)
    )
}

export const Article4 = () => {
    return (
        MyComponent(4)
    )
}

export const Article5 = () => {
    return (
        MyComponent(5)
    )
}