import React, { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { Sound, useSound } from "../../context/Sound"
import { getSoundInstance, playSound } from "../../utils/sound"
import { doPostAction, getPostData } from "../../utils/api"

const upvoteCounter = css`
  cursor: pointer;
`
const FireCSSByClickCount = [
  css`
    #upvoteColor1 {
      fill: var(--fire01);
    }

    #upvoteColor2 {
      fill: var(--fire02);
    }

    #upvoteColor3 {
      fill: var(--fire02);
    }
    #upvoteColor4 {
      fill: var(--fire03);
    }
  `,
  css`
    #upvoteColor1 {
      fill: var(--fire11);
    }

    #upvoteColor2,
    #upvoteColor3 {
      fill: var(--fire12);
    }

    #upvoteColor4 {
      fill: var(--fire12);
    }
  `,
  css`
    #upvoteColor1 {
      fill: var(--fire21);
    }

    #upvoteColor2,
    #upvoteColor3 {
      fill: var(--fire22);
    }

    #upvoteColor4 {
      fill: var(--fire33);
    }
  `,
  css`
    #upvoteColor1 {
      fill: var(--fire31);
    }

    #upvoteColor2,
    #upvoteColor3 {
      fill: var(--fire32);
    }

    #upvoteColor4 {
      fill: var(--fire33);
    }
  `,
]

export function UpvoteIndicator({ upvotes }) {
  const [clickCount, setClickCOunt] = useState(0)
  const handleClick = () => {
    clickCount < 3 && setClickCOunt(clickCount + 1)
  }
  return (
    <div css={articleUpvotes} onClick={handleClick}>
      <FireSVG height={24} clickCount={clickCount} />
      <span>{upvotes}</span>
    </div>
  )
}

export function UpvoteIndicatorVertical({ slug }) {
  const [clickCount, setClickCount] = useState(0)
  const [upvotes,setUpvotes] = useState(0)
  const { sound } = useSound()

  const soundInstance = getSoundInstance("/sound/upvote.m4a")

  const upvoteComplete = getSoundInstance("/sound/upvote_complete.m4a")
  const handleClick = () => {

      if (clickCount >= 3) {
        sound == Sound.On && playSound(upvoteComplete)
      } else {
        sound == Sound.On && playSound(soundInstance)
        setClickCount(clickCount + 1)
        doPostAction(slug, 'upvote')
      }
  }

  useEffect(()=>{
    getPostData().then((res)=>{
      setUpvotes(res.data[slug.substr(1,Infinity)]?.upvote || 0)
    })
  },[])
  return upvotes ? (
    <div css={articleUpvotesVertical} onClick={handleClick}>
      <FireSVG height={36} clickCount={clickCount} />
      <div>{ upvotes + clickCount}</div>
    </div>
  ) : null
}

const FireSVG = (props: any) => {
  return (
    <svg
      height={16}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      css={FireCSSByClickCount[props.clickCount]}
    >
      <path
        d="M7.99.073c1.49 1.056 5.172 4.332 4.313 10.44 0 0 .96-.513 1.813-1.461.197-.22.593-.135.66.14.148.61.328 1.588.357 2.826.09 3.738-3.202 6.946-7.378 6.952-4.05.007-7.356-2.957-7.356-6.597 0-3.153 1.706-4.8 2.362-7.512.054-.224.341-.33.56-.214.499.265 1.287.762 1.802 1.468 0 0 2.096-2.377 2.26-5.787.013-.276.366-.427.608-.255z"
        fill="#35414E"
        id="upvoteColor1"
      />
      <path
        d="M11.746 12.342c-.588.79-1.333.97-1.333.97a9.94 9.94 0 00-1.654-6.448c-.08-.117-.281-.086-.314.048-.521 2.166-1.921 3.369-1.921 3.369-.456-.476-.89-.67-1.115-.746a.174.174 0 00-.216.093c-.575 1.381-1.662 2.447-1.91 4.035-.363 2.336 1.532 4.55 4.16 4.713 2.652.165 4.86-1.712 4.86-4.05 0-.94-.14-1.586-.247-1.942-.039-.129-.227-.153-.31-.042z"
        fill="#18222D"
        id="upvoteColor2"
      />
      <path
        d="M7.876 11.982c-.054-.123-.229-.157-.328-.06-.594.585-2.192 2.295-2.192 3.801 0 1.192 1.08 2.158 2.411 2.158 1.332 0 2.412-.966 2.412-2.158 0-1.133-1.557-2.063-2.303-3.741z"
        fill="#090C0F"
        id="upvoteColor3"
      />
      <path
        d="M7.69 18.967c-.785-.053-7.544-1.18-5.213-8.793a26.02 26.02 0 001.022-5.428 7.692 7.692 0 00-.178-.099c-.22-.117-.507-.01-.56.214C2.103 7.573.397 9.22.397 12.373c0 3.62 3.259 6.557 7.293 6.594z"
        fill="#182431"
        id="upvoteColor4"
      />
    </svg>
  )
}

const articleUpvotesVertical = css`
  cursor: pointer;
  padding-top: 10rem;
  color: var(--mainTextColor);

  > div {
    margin-top: 3rem;
    line-height: 1;
    text-align: center;
    font-family: Cera Pro;

    font-style: normal;
    font-weight: bold;
    font-size: 16rem;
  }
`
const articleUpvotes = css`
  margin-left: auto;
  display: flex;
  align-items: end;
  span {
    margin-left: 8rem;
  }
`
