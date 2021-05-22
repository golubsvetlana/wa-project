import React from 'react';
import './scss/Blog.scss'
import './scss/heart.scss'

import Masonry from 'react-masonry-css'

import { postArray } from './Array.jsx'
import crown from './img/icons/crown.svg'
import './scss/media-mixins.scss'
import { ScrollBtn } from './ScrollBtn.jsx'

export const Blog = () => {

    function createMarkup(i) {
            return {
                __html: `
                          
                <a class="post-item__link" href='${postArray[i].linkMain}'><img class="post-item__img" src="${postArray[i].imgUrl}" /></a>
                <div class="text-wrap">
                    <div class="author-wrap">
                        <a class="post-item__link" href='${postArray[i].linkMain}'>
                            <img class="avatar" src="${postArray[i].avatarUrl}" alt>
                        </a>
                        <div class="author-title">
                            <a href="/login" class="post-item__author">${postArray[i].author} <img class="crown-icn" src="${crown}" data-tooltip="Admin"></a>
                            <span class="post-item__datacreate">${postArray[i].dataCreated} &sdot; 1 min</span>
                        </div>
                    </div>
                    <a class="post-item__link" href='${postArray[i].linkMain}'>
                        <h2 class="post-item__title">${postArray[i].articleTitle}</h2>
                        <p class="post-item__descript">${postArray[i].shortTxt}...</p>
                    </a>
                    <hr class="horizontal_line">
                    <div class="statistic-wrap">
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
                </div>
               `};
          }
          
    function MyComponent(i) {
        
                return <div className="post-item__content" dangerouslySetInnerHTML={createMarkup(i)} />     
                        ;
    }

    const breakpointColumnsObj = {
            default: 2,
            1100: 1,
            700: 1,
            500: 1
          };

          

    return (
    <>
            {ScrollBtn()}
        <h2 className="mobile-page-header">Blog</h2>
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="post-container__wrap"
        columnClassName="my-masonry-grid_column"
            >
                
                <div className="post-item">{MyComponent(0)}
                
                </div>
            <div className="post-item">{MyComponent(1)}</div>
            <div className="post-item">{MyComponent(2)}</div>
            <div className="post-item">{MyComponent(3)}</div>
            <div className="post-item">{MyComponent(4)}</div>      
            <div className="post-item">{MyComponent(5)}</div>
      </Masonry>
     </>   
    )
}


