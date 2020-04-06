import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Born and raised in Mountain View, CA (Before google took over the town), I went to
                html summer camps at Stanford as a kid and I have always been messing around on
                computers. I attended college in San Francisco, and then after college I moved to
                NYC to be closer to family. I soon found a job with a design firm and absorbed more
                and more of their IT and accounting workload, enabling the firm to let go of IT
                contracts and consolidate the firm's backend needs.
              </p>
              <p>
                In 2015, I was getting tired of consuming so many faulty websites and apps and kept
                seeing the limitations of the app or places where I wanted to tweak the app. Some
                times a small part of the design or other times want to add more robust features or
                want to even totally redo the app entirely. I wanted to really start creating and
                contributing, so I started to take MOOC's and follow various tutorials working
                mainly with Python and Ruby, building various projects, a sandwich tracker and some
                other small projects, but the magic was hidden behind gems and I wanted to really
                get into the nitty gritty, end of 2016 decided to take a bigger step, kick this
                thing into gear for real.
              </p>
              <p>
                I enrolled and worked through a javascript bootcamp program where I was paired with
                a senior developer(10+years experience) as a mentor to work on the MERN stack. After
                completing the curriculum I have built a half dozen SPA platforms that are currently
                in production. And joined some like minded folks as a technical cofounder of a
                sustainabilty focused investing app which we took through Startup School at Y
                Combinator.
              </p>
              <p>
                When I'm not javascripting away or expanding my knowledge of Golang, you can find me
                rescuing animals with Unwanted NYC Pets, and cycling or running around NYC. To be
                honest I don't particularly enjoy writing own bios much. If you got this far I'll
                take you out for Banh Mi or a beer or who knows, heck I'll even help you move
                apartments if you need it. Hit me up !
              </p>
              <br />
              Projects:{' '}
              <a href="https://nickis.online/" target="_blank" rel="noopener noreferrer">
                https://nickis.online/
              </a>
              <br />
              Blogging with my Cousins:{' '}
              <a href="https://foden.dev/" target="_blank" rel="noopener noreferrer">
                https://foden.dev/
              </a>
              <br />
              Sailing Blog:{' '}
              <a href="https://kirieelite32.com/" target="_blank" rel="noopener noreferrer">
                https://kirieelite32.com/
              </a>
              <br />
              <br />
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
