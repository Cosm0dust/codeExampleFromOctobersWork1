import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import classnames from 'classnames';

import useWindowSize from '@/hooks/useWindowResize.js';

import ItemImg from './ItemImg';

const Desktop = ({ extensionsList }) => {
  const { width } = useWindowSize();
  const refAnim = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const refAnim1 = useRef(null)
  const refAnim2 = useRef(null)
  const refAnim3 = useRef(null)
  const refAnim4 = useRef(null)
  const refAnim5 = useRef(null)


  const updatePaginator = useCallback((progress) => {
    if (!extensionsList) return;

    const slidesEl = extensionsList.length;

    const activeSlideCalc = Math.min(Math.floor(slidesEl * progress), slidesEl - 1);

    setActiveSlide(activeSlideCalc);
  }, [setActiveSlide, extensionsList]);

  useEffect(() => {
    if (!refAnim) return;

    const q1 = gsap.utils.selector(refAnim1);
    const q2 = gsap.utils.selector(refAnim2);
    const q3 = gsap.utils.selector(refAnim3);
    const q4 = gsap.utils.selector(refAnim4);
    const q5 = gsap.utils.selector(refAnim5);

    const section = refAnim.current;
    const slidesWrapper = section.querySelector('#extension-slides');
    const slides = [...slidesWrapper.children];

    const fullWidth = section.scrollWidth;
    const scrollWidth = section.scrollWidth - slides[slides.length - 1].offsetWidth;



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: `bottom bottom`,
        end: () => "+=" + fullWidth,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          /*console.log(self);*/
          updatePaginator(self.progress);
        },
      },

      defaults: { ease: "none" }
    });

    q1('.transform').forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: refAnim1.current,
          start: 'top 10%',
          end: 'left -200px',
          duration: 100,
          scrub: 3,
          markers: true,
          containerAnimation: tl,
        },
        translateX: 0,
        duration: 100,
        lazy: false,

      });
    })

    q2('.transform').forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: refAnim2.current,
          start: 'left 60%',
          end: 'right right',
          scrub: 5,
          markers: true,
          containerAnimation: tl,

        },
        translateX: 0,
        duration: 20,
        lazy: false,


      });
    })

    q3('.transform').forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: refAnim3.current,
          start: 'left 60%',
          end: 'right right',
          scrub: 5,
          markers: true,
          containerAnimation: tl,

        },
        translateX: 0,
        duration: 20,
        lazy: false,

      });
    })

    q4('.transform').forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: refAnim4.current,
          start: 'left 60%',
          end: 'right right',
          scrub: 5,
          markers: true,
          containerAnimation: tl,

        },
        translateX: 0,
        duration: 20,
        lazy: false,

      });
    })

    q5('.transform').forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: refAnim5.current,
          start: 'left 60%',
          end: 'right right',
          scrub: 5,
          markers: true,
          containerAnimation: tl,
        },
        translateX: 0,
        duration: 20,
        lazy: false,

      });
    })









    /*gsap.set(".item-extension-img", { transformOrigin: "right 120%", force3D: true });*/

    tl
      .fromTo(slidesWrapper, { x: 0 }, { x: -scrollWidth });

    return () => {
      tl.kill();
    }
  }, [refAnim, updatePaginator, width]);


  return <div className={classnames('relative pt-52 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-80 after:bg-gradient-to-b after:from-white/0 after:to-white/100 after:-z-1 overflow-hidden')}>

    <div className="fluid-container" ref={refAnim}>
      <h2 className='font-bold text-8xl leading-[1em]'>Extension</h2>

      <div className="mt-4 xtall:mt-6">
        <div className="mr-auto flex w-fit flex-row-reverse space-x-reverse space-x-3 mb-10">
          {
            [...Array(extensionsList.length).keys()].map((i, index) => (
              <span
                key={index}
                className={classnames(
                  'h-2 rounded-full bg-black transition-[width] duration-200 ease-linear',
                  activeSlide === (extensionsList.length - index - 1) ? 'w-[124px] opacity-100' : 'w-2  opacity-20'
                )}
              ></span>
            ))
          }
        </div>

        <ul className={classnames(
          'flex space-x-20 2xl:space-x-80 h-[550px] tall:h-[700px] xtall:h-[78vh] max-h-[900px]',
        )}
          id="extension-slides"
        >
          <li id='animate1' ref={refAnim1} className='flex flex-none h-full pt-20 2xtall:pt-[132px] max-w-full'>
            <div className="flex-none relative h-full aspect-[4/3] mr-20">
              <div className="absolute left-0 top-0 bottom-0 w-full">
                <ItemImg
                  className={'absolute left-[44%] -bottom-[10%] w-[69%] transform transform translate-x-60'} img={extensionsList[0].img_1} />

                <ItemImg className={'absolute left-0 bottom-8 w-[69%] transform translate-x-14'} img={extensionsList[0].img_2} />
              </div>
            </div>

            <h2 id='mine' className='text-3xl font-bold transform translate-x-96'>Highlights scams and suspicious Twitter posts</h2>
          </li>

          <li id='animate2' ref={refAnim2} className='flex flex-none h-full pt-20 2xtall:pt-[132px] max-w-full '>
            <div className="flex-none relative h-full ml-40 aspect-[0.94/1]">
              <div className="absolute left-0 top-0 bottom-0 w-full">
                <ItemImg className={'absolute left-0 bottom-[20%] 2xl:bottom-54 w-[89%] transform translate-x-14'} img={extensionsList[1].img_1} />

                <ItemImg className={'absolute left-[67%] bottom-20 w-[46%] transform translate-x-60'} img={extensionsList[1].img_2} />
              </div>
            </div>

            <h2 id='mine' className='mt-44 mr-40 text-3xl font-bold transform translate-x-96'>Highlights verified accounts and posts in the Twitter feed</h2>
          </li>

          <li ref={refAnim3} id='animate3' className='flex flex-none h-full pt-20 2xtall:pt-[132px] max-w-full ' >
            <div className="flex-none relative h-full ml-40 aspect-[1.06/1]">
              <div className="absolute left-0 top-0 bottom-0 w-full">
                <ItemImg className={'absolute left-0 bottom-0 w-[87%] transform translate-x-14'} img={extensionsList[2].img_1} />

                <ItemImg className={'absolute left-[42%] bottom-[32%] w-[47%] transform translate-x-60'} img={extensionsList[2].img_2} />
              </div>
            </div>

            <h2 id='mine' className='mt-20 mr-20 text-3xl font-bold transform translate-x-96'>Send strikes to scam posts from the native tweet menu</h2>
          </li>

          <li ref={refAnim4} id='animate4' className='relative flex flex-none h-full pt-20 2xtall:pt-[132px] w-full max-w-full' >
            <div className="flex-none relative h-full aspect-[1.82/1]">
              <div className="absolute left-0 top-0 bottom-0 w-full">
                <ItemImg className={'absolute left-[25%] bottom-0 w-[71%] transform translate-x-44'} img={extensionsList[3].img_1} />

                <ItemImg className={'absolute left-[10%] bottom-0 w-[71%] transform translate-x-95'} img={extensionsList[3].img_2} />
              </div>
            </div>

            <h2 id='mine' className='absolute left-[60%] top-40 w-80 text-3xl font-bold transform translate-x-96'>Highlights verified and scam projects on opensea</h2>
          </li>

          <li ref={refAnim5} id='animate5' className='relative flex flex-none h-full w-full max-w-full pt-20 2xtall:pt-[132px] '>
            <div className="flex-none relative h-full aspect-[1.3/1]">
              <div className="absolute left-0 top-0 bottom-0 w-full">
                <ItemImg className={'absolute -left-[4%] bottom-0 w-[85%] transform translate-x-14'} img={extensionsList[4].img_1} />

                <ItemImg className={'absolute left-[63%] top-0 w-[36%] transform translate-x-60'} img={extensionsList[4].img_2} />
              </div>

            </div>

            <h2 id='mine' className='ml-10 mt-20 text-3xl font-bold transform translate-x-96'>Evaluates<br /> the project site:<br /> veridied/scam/hacked</h2>
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default Desktop;