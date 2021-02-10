import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import {PageOpenerText, PageOpenerSubText, LilyIconImg} from "@styled"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const HiLily = () => {

  return(
    <Layout>
      <SEO title="Hi, Lily" />
      <PageOpenerText>Hi, Lily</PageOpenerText>
      <PageOpenerSubText>you make me happy</PageOpenerSubText>
      <PageOpenerSubText>here's a look back on our adventure together</PageOpenerSubText>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <VerticalTimeline>
        {/* first date date */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="November 24, 2019"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">That Day It All Started</h3>
          <h4 className="vertical-timeline-element-subtitle">Onefold, Denver</h4>
          <p>
            This day started it all.
          </p>
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/s4ncc00yizhXGRQvhiMbhA/348s.jpg" width="100%"/>
          <p>
            Sorry for accidentally ghosting you....
          </p>
        </VerticalTimelineElement>

        {/* second date */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="December 8, 2019"
          // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Second Date</h3>
          <h4 className="vertical-timeline-element-subtitle">I knew you were the one</h4>
          <p>
            What a day it was. Everything we did today are things we still love doing together.
          </p>
          <img src="https://cdn3.sportngin.com/attachments/photo/4688-110225335/NHL_medium.jpg" width="100%"/>
          <p>
            FOOOOOOOOD!
          </p>
          <img src="https://www.visitaurora.com/imager/files_idss_com/C151/91bb2481-05aa-4759-b61b-454cf2a84f39/c63d5e04-b566-4901-81a6-808d6aa1160f_06c0c6a6d9234a48cbd7dc4352fe72e0.png" width="100%"/>
          <p>
            Antiquing the rare finds.
          </p>
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/1c9op3lRpwQCYQkACP1GPg/l.jpg" width="100%"/>
          <p>
            MORE FOOD AND DESSERTS
          </p>
          <img src="https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com%2F9b95aa9b-3014-493a-ae7b-e78aca73a934%2Forig.jpg&quality=85&w=500&h=0&mode=auto&format=webp&v=4" width="100%"/>
          <p>
            DIRTY SHOES OH NOOOOOOOO
          </p>
          <img src="https://www.gannett-cdn.com/-mm-/0192910cb7ed977da9378bd221c7393b3758ffc3/c=156-0-1445-725/local/-/media/2019/03/11/USATODAY/usatsports/consumer-goods-retail-barnes-and-noble-bks.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp" width="100%"/>

        </VerticalTimelineElement>
        
        {/* round one date */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="December 12, 2019"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Round 1!!!</h3>
          <h4 className="vertical-timeline-element-subtitle">and yogurt!</h4>
          <p>
            I loved that you were so good at niche arcades/games, and our first photo together!!!!
          </p>
          <img src="https://www.eastbaytimes.com/wp-content/uploads/2016/09/20160826__sjm-round1-0826-011.jpg?w=645&h=409" width="100%"/>
        </VerticalTimelineElement>

        {/* rock climbing */}
        <VerticalTimelineElement
            className="vertical-timeline-element"
            date="December 19, 2019"
            icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
          >
            <h3 className="vertical-timeline-element-title">Rock climbing, micro center, and movie!</h3>
            <h4 className="vertical-timeline-element-subtitle">so fun</h4>
            <p>
              The parking lot of the micro center, you let your heart out with a secret, I will always remember that.
            </p>
            <img src="https://www.earthtreksclimbing.com/wp-content/uploads/2017/11/ET_2016_Rock-Climbing-Indoors_Crystal-City_Jeremy-Kinney_Web_114.jpg" width="100%"/>
          </VerticalTimelineElement>

        {/* official hehe */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="December 21, 2019"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">"official"</h3>
          <h4 className="vertical-timeline-element-subtitle">and bbq</h4>
          <p>
            We officially bf and gf omg
          </p>
          <p>
            But we decided to make the official day Dec 18 otherwise it would be to close to your birthday, hehe.
          </p>
        </VerticalTimelineElement>

        {/* jeruslm and walk around denver! hehe */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="December 30, 2019"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Jerusalem and walk!</h3>
          <h4 className="vertical-timeline-element-subtitle">and herp derp</h4>
          <p>
            We walked around DU campus, and ate Jerusalem! And you love the way I eat hehe
          </p>
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/zulurWLbR04sS-gS1i7cWg/l.jpg" width="100%"/>
        </VerticalTimelineElement>

        {/* new years */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Happy New Year! 2020!"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">R u da Ubah drivah</h3>
          <h4 className="vertical-timeline-element-subtitle">You saw everyone!</h4>
          <p>
            Thanks for picking up everyone up, you are amazing as always.
          </p>
          <p>
            Can't believe we fit like 12 people in the Rav4....
          </p>
          <p>
            And first night you stayed over!!!
          </p>
        </VerticalTimelineElement>
        
        {/* birdcall */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="January 2, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Officially met Louis, Josh, and Ella!</h3>
          <h4 className="vertical-timeline-element-subtitle">"they ain't jokin about this tennesse hot chicken!"</h4>
          <p>
            You met my close friends for the first time at birdcall!!!!!!!
          </p>
        </VerticalTimelineElement>

        {/* kareoke COVID */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="January 3, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Karaoke and COVID NIGEL</h3>
          <h4 className="vertical-timeline-element-subtitle">"louis went in"</h4>
          <p>
            Fun night with everyone! But I think we all got Covid that night....
          </p>
        </VerticalTimelineElement>

        {/* video calls */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="January 7, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Video calls all day erry day</h3>
          <h4 className="vertical-timeline-element-subtitle">gat damn ABG lily</h4>
          <p>
            The days of before moving in together. Phone calls and video call every day!!
          </p>
          <img src="https://lh3.googleusercontent.com/pw/ACtC-3fEzrJx5FRlNSvjmTh8PGN4B86kDoyJKfC79C58OSylnfPbhCGAJQAUnsmeQAvSKfzB6N8k-1fmzoz7iLap0H9xbqEJaNoJ8blUKAImdZIqcuxAlskOhEZZlPKJWeV5bAApue3cNyoaixzbhd-G33_tvA=w2048-h1536-no?authuser=0" width="100%"/>
        </VerticalTimelineElement>

        {/* LA! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="February 7 - 10, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">First trip together!!!!</h3>
          <h4 className="vertical-timeline-element-subtitle">LA</h4>
          <p>
            VENICE! UNIVERSAL! ART GALLERY! SO MUCH FOOD!
          </p>
          <p>
            We travel well together!!!
          </p>
        </VerticalTimelineElement>

        {/* IKEA!! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="February 15 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">IKEA WITH JADE!!!!</h3>
          <h4 className="vertical-timeline-element-subtitle">oh Jade</h4>
          <p>
            Starting to hangout with Jade more!
          </p>
          <p>
            We also went to the mall, and I rode on a horse. And then we got KFC for the fam
          </p>
          <img src="https://lh3.googleusercontent.com/pw/ACtC-3duhih8v_qZQl3S-d8illeGxUiYcL9Jgo26C0UtCdNoLrGAnPZg6rBMJC0BqqJxF86mlwJ1Q_OkMtvg0DalmvtuMOWg9SHYBbnJgySuVpa7CgFMBpB3xQVW89qBUa7QuAVW5GaiujVorF8CcCWWy9dtAA=w2874-h2156-no?authuser=0" width="100%"/> 
        </VerticalTimelineElement>

        {/* BJJ and tire stolen */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="February 22, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">You came to my frist BJJ tourney!</h3>
          <h4 className="vertical-timeline-element-subtitle">also got my wheel stolen</h4>
          <p>
            I love every match, but was still fun! Thanks for coming!!
          </p>
          <p>
            And then we had an amazing time eating snacks and watching Love is Blind... AND THEN MY WHEEL GOT STOLEN
          </p>
        </VerticalTimelineElement>

        {/* Nuggets game! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="February 2, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Nuggets game!!</h3>
          <h4 className="vertical-timeline-element-subtitle">bappy bday bavid</h4>
          <p>
            we matched oufits! hehe
          </p>
          <img src="https://images.gametime.co/sport/nba/gametime-images/nbaden/hero@4x/denver-nuggets.jpg?auto=webp&format=pjpg&quality=50%2C35&disable=upscale&dpr=2&fit=crop&width=440&height=240" width="100%"/>
          
        </VerticalTimelineElement>

        {/* Buffalo exchange and longboarding */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="February 29, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Buffalo exchange!</h3>
          <h4 className="vertical-timeline-element-subtitle">and skating!</h4>
          <p>
            Jade and us went to Goodwill and buffalo exchange!! then we went skating and you landed your first ghost ride!!!
          </p>

        </VerticalTimelineElement>

        {/* snowboarding! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="March 6 - 8, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Snowboard trip!</h3>
          <h4 className="vertical-timeline-element-subtitle">and had our first upset moments</h4>
          <p>
            We snowboarded and also explored the small town! 
          </p>
          <p>
            And we also fell in love with wooden bears, but we didn't get it! wahh!!!
          </p>
          <p>
            This experience was big for you, and I know why, I love you!
          </p>
          <img src="https://lh3.googleusercontent.com/pw/ACtC-3cYYYlfRa5i6K3JR3oJG47df4QR89AeWU7Mswi4xL3Swy4G-6Dg9z_dThaiG38yD0nBsInDiz2fXRs0H3bMhHlAsxhxN9lL4Ob6JYNc5wSBZsD5fCUnLi8gjhkDCpWW4WxypuXiSrebI0n3XSUmG-xbMA=w2172-h2894-no?authuser=0" width="100%"/>
          
        </VerticalTimelineElement>

        {/* moved in! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="March 13, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">The day you decided to stay over</h3>
          <h4 className="vertical-timeline-element-subtitle">AND WE BASICALLY GOT MARRIED</h4>
          <img src="https://lh3.googleusercontent.com/pw/ACtC-3eJdQTsUStcTNR9UD0ImLNVCHA_MK6h-sAZvPixohCRYZc4CRMakXvmsohtuHIx7xGy_hMTxKZM8O0H9fnj11DxjQ_5RXmDX8akk8CPcN1IXx59i5RxfBEwB7Ou-7efcWAbdAci5egF7xlB53k09QDnNg=w2276-h1374-no?authuser=0" width="100%"/>
        </VerticalTimelineElement>

        {/* caprisun */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="March 18, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Capriiiii SUN!!!</h3>
          <h4 className="vertical-timeline-element-subtitle">Airdrop would have been so nice</h4>
          <img src="https://lh3.googleusercontent.com/pw/ACtC-3f9j1V19b2jFXVOAYpojO3Cs1CODhiqjyaf64RhcoRqt1JctYvfWJDvMiwKwOx0t-DbTDHULevnSjheqrz96NJJwMWFUESJxeq__QtFZ33W0nDc9k_ccflhZOeR8Oh1pXZCTC7trSLUo6WakOUrWHgYtA=w2172-h2894-no?authuser=0" width="100%"/>
        </VerticalTimelineElement>

        {/* my bday */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="April 5, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">MY BDAY!</h3>
          <h4 className="vertical-timeline-element-subtitle">yummy cake!</h4>
          <p>
            Thanks for making me feel special during lockdown!
          </p>
          <p>
            Zoom call with friends!
          </p>
          <img src="https://lh3.googleusercontent.com/OB0sp7gfAQTTZmadZktFGYYrlZfz88SkTGBhyt4HDG3M55OB43RzrWisr6rgjFwN-QKrdLBEN4rgohyEoU35ppQ9GqGeuQI062kxrj5Q0jMmdzk7x2pTpHZUZHV6vXbe2DAsaQgIa20XUfFR73DZCgzNLaHwqb_JX8vriIDBSZ5Z9vhDPvpja8h-R45xqaulN979jkwKJmAo4js502YUjm1dVG2_fUGcmdWM4k27_OROe7tYRqbr2ZsCb1w8pmJVKaKjg97Wa_gCepXQwhPQW4uONnE6x78y3jmKSqVXBxO9joR08OPQBkHjM7fp3y6iWcekoCb_6bl2C5n7K-NC78smowY4YQCh-bCRPxXtIF8xxAoQKg3i3O_yrIgTOlH9yNF8kIt0u-n9FHNoQ0g4-V6h0euOy4TJ1WBnxrpzMCl5440PevBCiQ4WXX5u2uA27RQ-8bYEFmQAu1hNE-vepogugrwe3IPUcA5CuBkBso4PafH5C9WV5SjdPljZEHfCmIN8vlAbTbbSBf_HoQBsrqelz-0yok6JVJw52nGY_WhvPN92uaslOSs3V-GwQ6c97B0raqsfXOEftaypgiG5m2wd_L-8ATkE5g8mmrIis6q9rj8dW_VzkOEb65b7edHpdTZ0j430my4mXbS5RDq3YpPd7FNcBVko2DnAcGTAf_50O0yq7x1QdnKdtIkdoA=w2172-h2894-no?authuser=1" width="100%"/>
        </VerticalTimelineElement>

        {/* lily to foco */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="April 29, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Your first time in FOCO!</h3>
          <h4 className="vertical-timeline-element-subtitle">dog mural!</h4>
          <p>
            We walked downtown, and you loved the dog mural so much!
          </p>
          <p>
            First time going to my parents place!
          </p>
          <img src="https://lh3.googleusercontent.com/yMuXBbs7RV6cCcaFgfWvX_vsThmpy-PL-kUKooA1rhx-ZXku7rauho9c4FQeY81GSjyn0AU05MTvFtEfzOCSRL4iUTXPSj9jcv9iMmiY6JMo539sMV_UH4RHLsMRL52y4zk91gTrELCE_g_bbYcSH58XbS6qDcqKOda7LZyYnKq3KvjVxmtku6PkcBb4CUtPQAuTwix_eN2zjSGzobqqJG9f4GjW4Q1v1SZ9D-oRwllPi45IRbrI0mcxwbEhCtN7V80SXk0Ma9jK_CJaNhsv4toLarNqWh1_Wu6ZxwT2iX3MjDQcFcJAus-w-v9CpSViSOxO8RQZ3IPF2PG3PVLnIXRg1ppVuYRaT5FBdR__mPc_k2Tf8npzXN5-9QEdLX3aXhhSs9__0UF8ulcTy0oxoFZN7EchzyWMudeFxxTxIJDcVzMRUlQrY2MAW8RLJrqbp6oJ5IoeLjMsDbi_SWSMyoFG36lNTmsxDNoQKtZHgCdk4n6wZ01CUXi1PHR89pTWXwNZYhk7sbLcWgAkzoihuTy6qYTPMcWvpOREiHKt4jbWrPFyhFuVaaRidWgszP4BFnVCzsXgLtRk5KiZbsYRJfs9LChgMxk-qrKmZgTmRSzWL9rvaEkxWWS057PDW2HX8y5dLWYmEOvD1EeIGpNuY_0aJYhU2V2ThMQ4Macla0Cao_g1vH7QaYOUCRESyA=w2172-h2894-no?authuser=1" width="100%"/>
        </VerticalTimelineElement>

        {/* table */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="May 2, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">You helped me stain my first table!</h3>
          <h4 className="vertical-timeline-element-subtitle">i learn so much from you!</h4>
          <img src="https://lh3.googleusercontent.com/dCXkIDLiAJnVp2qtBX7t_L3zWrx4_CKmXk61WR5Yr4mOaQkl_SN9dFWLIxCtl-fgnXaDJ4H_HqOjsuu-UyZx0eECw_zSGCuPuGodmk61XhYrcCQYMOt1P07Wkt4fb-d04V3Q265w6usOEO2JedHctgK5WAPWuGJ8PYe5sVPdohIySc3QF-sMIFOl38_Yv7PiCmiYTH42Z-LQ89trWsVic95JTMc95YfQQw1S4q0ctn2zI_Z0a_ELLh49c4A0Xx1NeDII8Ynx6jHr6EbbIp5mutmcWeql7Sgg6ktnB3ccowt17hw_bJ0ulu1LOqt5rUQn_G4FT_5bCbzyiSWaceScF8Ghy-5uVUj71p6DTrjjxlZI0P2_n9XoObA6Nu7SxJRFrO57EMU2hO_YFFrVoh7eBK1cv23mPYRkg0_aset5M_R9GxSOiOjwx-y9WK5UYKHfoL06zuqLWCKgYUsd90G9NB08A7XkzgZf6hySp-7tkc575gJKmfBZ2cCX8ndKHbbt7pYdcMRUUMXvMg1Y9LHPYaNiHDjMI5x1kKNhYgKKSgW1vT6gL9KhFA3LpmoJ5VUV5jpDcNlN-UwEVe9TPKPlORwy3gBj8tIN1EV7bsK3d8re73-KC0BX8iisHhSHTpqg2YKj15sp-6ydQly-8XFxBqXRKUbmdXGR_moTWH3j28DhlyEQEHdC8sRawC5K8w=w165-h220-no?authuser=1" width="100%"/>
        </VerticalTimelineElement>

        {/* hehe we cute */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="May, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Everday life with you is amazing</h3>
          <h4 className="vertical-timeline-element-subtitle">hehe we cute</h4>
          <img src="https://lh3.googleusercontent.com/d6s9VDb8hawIA9fwU6weCOu7aWiugtRGeOPNXk8nCSTl3S0wk6DvrgzuqL8zymoWbt-9Q3zf_ybd3TfjWfQWZsFewXfpHtG5F0HFANnm09ooXaxPfX6LxXOtdF7OmoiqIsMrTETp28qwuEnKxEm6ohe8KXON2OAg21DreCjW88vIIehajfLMLlr14X9NXHnuyAx5OGzGhAZJ5swR7v6JkSMgUSXsvxWMyuuyUWQujOOJ5QFK_x6A93kpOe_YPP-jmNIls4msALkcYQPTfYlXbLNogQh2jYZAHgJvoO5wqQLypQ_58quMXEK9Y4bM-JKNy311OXfu9K5adVOWUhGJ8QGWGI53Sn_R_XOVtp8LaogPgcSXCLrttXC1SIF_k_VENqbCz5piNU84dZ0nlX1PIOhKJAoRRmuvlKsdCXjsEwVEhN9dwOsgCRLYnFnNrGB82EqN2kOS2CIme8ZhMjA9LKzmxsoaInuCZww53BmcNg0KILSA3BDlSum7LkU0rKRQwzBW6K_z3kKKKUdrvY_X5v0lYaybf5smKLKFPLz_nTJffLZ25sW3fXa0T4CIbARVRO2y-cZuzuy-K4l3sEZdOQqePfJngMj7-4USFD7mMDvKhiyABoL8AK1gSFrS2xy3bpLh6P_2jaNuJlILg7jJI4AhqY3_o3hLryuL1YZl2nQUwXH6eo1c_BQdedJPYw=w2172-h2894-no?authuser=1" width="100%"/>
          <img src="https://lh3.googleusercontent.com/FkNdvtG8lSTixO9efgnSS41E2a8wmhusrFO_BH2dHUvvSkt7CKGnjdXraC5EaeoVnZHMsJ4n1y8TCP0xbL1aO-QPmbRDPPkGzNXpLjDNlnBTWsRj06v2itwvkFfjY90zR6yOwLkF316E67izabonkcrUSSx6gx_sl0u9pJi5tZlDtGr43l6sabsS_ez39i-E9LnuJwce1ckPQF8EaRiPP9CaIyrO1TUrwHPktOetxxLqgzcvcE8gw-1aFZ1YlzQw86EpS0MkRH28HbUMT8nxqbHpXyd6ZLLgz0C6cd-LubxLYkZYn1f0BSP1Fkpo9etx5yKG5a_A3707UzhreDvjUIpDcaawXdtIK9QIZ6XS5NaJ-N9YnGQJKd0ZDUrEE8EEjqvd7HwhSIthO_wKXUMoHa35SE7cneulJ1DZVWQ9NH1S3syer693vpFSIJUm5gvRSwUy4MVXVV8BHiGWH9KfNFIjSNcGxownaUUPk0dIKSABU7bFqyuFxRj6dXpjFtPI2tsTbx_CtVj8grE3eYUFg12lnoi4T6DXWUGvhm74MhqtwKNJON3lJbrb2gN-UUNlb1YLZjET-6Q9IyRA3gHyWoaoeAcbhZMdqFOX2hmmPdDPsD2uSA22m5VFGiv2s7-BK98dE0nYre5jTff-JaV-8kbXJduVXNLQ9alDNDAVFaFPOYjkJuIfacvd8hmjIg=w2172-h2894-no?authuser=1" width="100%"/>
          <img src="https://lh3.googleusercontent.com/3J62YR9YEwFrfnC2nC6yNf8W3pL-zM1qo0d1kq861fbJewoEDBxM6wzwCuqtNPHOHhdz1epBBSn_gmmI1URatya3kdY8SFZ400ZqSl8yTQhXfilmZ2vaQdjGx9PY4cYSp2fyRrGS0l91es6Oqqw9h8ZTV2w-EMllAiSKEMpgNvSJcMV-DhxAvxfc2jT4peJ-1-IKD-tQSjdh_YQBf0ApTfeCGUlBtfIdjzFhL2D4IZzvQzH4TgpLYmyWFkYvfZi2nRDgMSXUuB27GrXBLGy1hVcld92-o9QqKymLs5WtdM0oqLEb26wn0U8lxwg0CYj0rvfvwK6Y92uW1_uKe4-uo8BEGtZeecFAWNb9fcBoQ22t0NtcTNOKfjx2rH6uPs4KEU7apNAB_KX58Cw5GT6uCD2xbhRhczhY4NGH-Fw6xOCBb45MJnoFStvkaPgTjAEMer5XgLeLXlI8cYcnKVag-HQmxtLWom23C3OT2VmT_49nqOVzkhv2a2-fOFXCfXJWhuNErxKteRvK7GvQDw74X5YwbdQkgYjQUR0yYSfPMXt92GGRmXytSW8zgtCm35dZ4473WDF2kfTZWL8vSMmGXVYUGQNpKoogL6ZFNL4J6lgzdAl1kn2wN9Dx8a05o1CzCJq6k2tLjlCz1ZjLXXy00i0CrODpITcs27tkcVK3W_BoeGG_42HPF7lR4XYFOQ=w2172-h2894-no?authuser=1" width="100%"/>
          <img src="https://lh3.googleusercontent.com/nVW0qeDGHP2jvXnD87xFfckmQXFchdGP7RJ3wF5_mvfNP6B9_kGqfWAInzaQ2OhPQh0pIr8xjmwm4FbwgBBxI9viYkpTKSyZr3FGZuhHWOslr2n2colMjYj_M7wfiIRiWRHqy7ApVXLbHgDBRtTg2lwBIS1xnI_AwKOSAzjYBsmW4dCQnESeUAadbUasQUJSAne3ewF27KyRtZcvbLQLc9fPuUNzbr9nCGD-9ES2Ge3pbcHrAszKwV7EeRQt5BWFTrypoLPlnZ0kdzm-whIC8kqe8IbvnTg9bf6H8nlXru_3RsXmoOB81MDEgERJILB4DfxBboCmIx5EVsqTrstMy9BVeI5Bu3Tf7D69n9obemmOIKzxdV170JY5gcCCB_0dsOR_P1axKOZnQq_I6yMr_MEfQ5pkXS2mJ0_XQMJNxELNGP5mknM45X_RNSn71aq6eYhIAp8t88r_wEKOoTw-lTTXMGsfPYeCpSRqqzuaw48OFDlYkULz6Z0dSLbeBLtlzEtSvhwlZxMwU6who4CWd2kSLvn6a6s01-qzLDMrEEAqX2hT6d4Vnm6CHZXEwI-f78mvPvG8xglHuym6brbxit7dDVzsORmfRkFHZS0554nCTW-X91VEDiPBQ1e3hNinNyt_Ysm6MpPV_gL6Y8iN_GwsK5V_ndso9XUVQnzqU9BwA9PZp69pPTmeIzs4fQ=w2172-h2894-no?authuser=1" width="100%"/>

        </VerticalTimelineElement>

        {/* we bear bare movie */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="June 7, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">We watched the We Bare Bears Movie that you worked on!</h3>
          <h4 className="vertical-timeline-element-subtitle">it was so cool watching something you worked on!</h4>
          <img src="https://lh3.googleusercontent.com/l7rMubSDnynYOl0w_V4qW_xmuFwQ3FnRWosjvxlCprzn0J70IsQiDw-TANWaJs3WDztJlMP84CZc3n4bcQAP3TS-xeDoBnkujVxgPkxUhPInsdapHbjA_90y3EFFOzv5m213VinAM8ODrnyuYsUCcb0FJvc0s_n0Unc2Kb9edAGw0X_t5LrjSRSpBRhERjWTP1JR0nTwbtAYeVlXdp4s3GfeZlQnYUsB_qndlRv8olV4qqAwrhhAAY8mQA9M0Vxdapdh5ljpaihy7xs8ekmcXWbatTlmh3KIbGEJ-lWcmnQqvx-E6sMIn0ozVq61nMTTzKjVxXMZA0Oefi94WDupyNMWPVAmSlO0_ExW91nDzhcBOAbRTJXh-EEZTramWwKlbKe24joqahlCpQrhwd6rAv__7jEi4xnH35oX6wSxtVeGigtV_VwLXBvPe4f2i2VXU7bkP8-f6_IanqF1XqmvMYQmQV9R9cQvdU3IeM1o0Jif72OGN1kxBdjlsGEtnrslQZfddydNfFNyx2u_-Ik9uZ0RCMtMNhAH_Ovy4hX4inTXLvQnRdrsbKEtyrhSHbikh8k42NduCiEJDoxwEsDwyafnRH0Jr3Ggsl7FgSA2vJ6bzv-SVmc0ldl75w6dxpaX6_eXNSyQtKHn7_RGA87CECnIpF3KRhGn_fA0PG5HoNePSAoAIjlLjXo7ZnjDNA=w3822-h2868-no?authuser=1" width="100%"/>
        </VerticalTimelineElement>

        {/* mountains with jade! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="June 28 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Fishing with Jade!</h3>
          <h4 className="vertical-timeline-element-subtitle">she stood on the rock</h4>
          <img src="https://lh3.googleusercontent.com/bKlJxF03FtjICk5Z5UqnYJHFb7U2Mg5g2wFVDCzCdhDQypGvf1m0H0QWp6ilpj-pPMMGTsh7cIndxefwhaxMsK63x_VtlAhryWkZtGa4fDuBW3M6OopF7FpcYVP8nw4DNYAZY9f0TbpHH8YqWVd1LG5PrZzA_g5kWw9bXqjuvNUuEOT-yKPWpCCC9H2tgsEdm9BdQsuG4WFsOKoyp9f3VPI58ukCJm0pznF5fELAOTXPxzrzs5Wly2bJA1QWnZRVkVZT2k86EFyuTVZOa5EntUQjVT2npI6oBEK0xzG9ztr0e9Cuo_G0sALhqX4jCIdWWXTm4sobs_k9YLVhoCvx8EwRGorL1BAl2lf1N_SvClzydt8a4hA6-uOaeTJoQ77MJYejBcp8kxOC5iVfpaqZH-GncHGR3C1IxpjJ-Bzvm6lurbyRarEs8eYCvBA7A-xgpG0sCyGMe1LVIe1LUUtvtFeknFTzkuKo8y9HnOLGLgouXgKdRssH5nZ-ZLa-YJ_4fCoY30erV0WvfMFy3IiS8v3lcw-L-77GqdoWtS-vUS9cUn5LAeXJ_Uh-bMMH36D2M0qsMYhUpbebf-bnfexlva5qRHOIC6o3Pivj1vX7ZQuDyPZzYsWUQsr2FUN6z4IWNoqAJpli_tQ3L0YeqtkLid3OsGliU3RyE7bkzZqQQPs6j3e6s9hgJsrAbJF-tg=w2172-h2894-no?authuser=1" width="100%"/>
          
          <p>
            hehe and ur so cute
          </p>
          <img src="https://lh3.googleusercontent.com/-Fu9CnXQtAw2on5VZ4j10gZtt3yBbNIueW35_68r8heRTBJS00kIFWt9_7DSUfEJ9b4RWULcuU-12uNWU2-AJ_N7whHvjixw1cQ0J7FBGkAwDdtX9v47v4bqWvoz1PNOSLGdFSIhZY_-FjD28Dhp2KAn5Lnc4ZfePbR68dvzOpuedt89xomIS8m-zpF-gxyAnj65GvZHVUmugfiLS2gPtpVIO34M0xLJYmDOtNXbytYvq7b6_7z_b7niZfR1tcRoeqiP_7_IuRdtFPZ5pJOw15XPZageNYcX9XIWFnBZZ4BDeNCUzTfRQhEFfUOX-R13r8ahfKB-BhV_4JVHuEu_rXXGjWdfPrypl2ZLnuC0onEjvBdhXPHb5VeQSMtAkCzZzjZs5vx-FXivpZ5-gM_RpZT0ltdJWRC1O7FDfbagUbZH0pr44jjgEC21ZCcv4qXvVtLhWjRx9zeW8qng01VxbYl5SqVdg0tHEqBOw2Sv5mymPw47TpF9slVoaqqmXEv6LN0RFA_8IpqWW2k8hmCQawVX7sm6JuyLJA6e0nzPsw1vVU_yMhC2BDMg6e_uezDIRXnIwRAnr_yMFQSbEkgvqpBEmFpXBbIMLEfRoTszf-uU0BFXDPbl9jQ5Swo4IVVR0Y1oVMi5oRjNULbCdhkby-rP8Maje1jRjdUjHsuNr7222y9cI8t8505DrdzmKw=w2172-h2894-no?authuser=1" width="100%"/>
          
        </VerticalTimelineElement>

        {/* aquarium! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="July 2, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Drawing at the aquarium!</h3>
          <h4 className="vertical-timeline-element-subtitle">soooo fun!!!!</h4>
          <img src="https://lh3.googleusercontent.com/sk44sHHf2dvis3VuiLCdLkwCrLbix7_8yB6e4hfYDsL8nhi4GFLZl4JIH0MN58_m0uHYeJfzUlzvxXROlIq_ASynFhNekRAZiml54GsXLSnPMq28I-C-xj1wmbE4Xf0KRHMWrFIjB50x5rcO2sTM9hvVvgCZ6VgEM_5YF0uVpjV2V7fH-an61deyT4xSAPXIbYXLMIb0Hc5jh0XeT8AWCrKta9a1FxyMw9SbVI_uU4uYOWCI0HGbGP_-2fWJRcc7RN9cGMl2sJumsVdSQ-xjmlLcX2oiaIWqMt0pA5ReO9jrvzdWTXzGIjD6oEidkwFJDsiKLNmPCS8LsGr8OdVoI5OLPzhqrJ1WMmo24gDupzG7JjwAaIa3G_w3PdsC__tfaC0MEpAaSRNYExIOUkrKDNbaPDhDPsgSKV-dKzCeMGvFxOjheQggk4sOp53REIe0xkbEWCusW7mD7ePVMoh6WTtewohBaz3c2Cx3yxEc4KCqtx9Tj5ZC9IyGXGqPxyPazh-xc7UDaps9gY22e_wfnWBRKYQD8FQvnQTDSiROmlGXQgaDn643MeSxsnF3L06y2V0dflLVU1SPyM97yfQ9nsK_UMjxDMNQP-L05dZ3LRyVYXUkxK5ZvpCwXfBC7aqnWZ4KU7ZPP3ZfOc-01YsVWpACfnytgRs5VUvo7fuPrDbwOs-O1rao2y9q9S0kNQ=w2172-h2894-no?authuser=1" width="100%"/>

        </VerticalTimelineElement>

        {/* patio date */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="August 14, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">You prepared a patio date</h3>
          <h4 className="vertical-timeline-element-subtitle">it was so cute hehehehehhehee, i love u</h4>
          <img src="https://lh3.googleusercontent.com/qP_Uj7F9pnU6TOSlRnmwQ9EqIvbCHGEFGl78yz3oYkjL5B18C5-pabqkU7HeYTHEBrmv0BLqv8PxmYFVn0EtfongpsJjtT7ys3_I4XWhc_bQrXIbHqQWOIjVJ6uzM2mDJ_i2Bpx0ke1cNnu-1p8zV3GT9nlJuXcRoSJxgGgWrw3_pqNp_F5hpFCCA0mA-uGVuk5l7KBK4jDu_xORACmMKquxehW-UmyI1iahvLhHx2UcI8a5AQbA1yIFcKssx-x_bBn8S8YAbpOCmdnwXi25VDwkg6eUZ-D4318tpqqa14ToLhGIefzzLTVqeINpcbYohfFNYspO5TwVcCL8pJGoCzakiFQO5eFqYPRyPVDm-Hst5dvGidzae2-KHRSTjBrXklskfzbmT4HYwUFxBveqtjHiVyaBH9stW8TWalT2fLPrpkseDe9_G2SRn5eRFsRQNJ6QbvGquvzek-mfJBdhsbu_dY_NaOJ1_ivTRkE_N11tgDseMFhhXHxvghmNph7PsyZvKc9m7C5qSHcX5ls75Y6fWG9mbtokgcoMvK9geC4wYSH7V85XKYqIwoJz91SrqK-1Cr7bcFXha0UqgF8eP-J4xjjKMYcaU17KvwZkx4GOrWMAAvYmlPAKLNte5kCaQfpj6N9123MKXPah5Qcx9bM9Rukf4yBMgeme_CaDJPigsKaGA1QZhUDtJEi-Kw=w3822-h2868-no?authuser=1" width="100%"/>
          <img src="https://lh3.googleusercontent.com/9GXTRoFPjrYoxImJzTkn89uX9heetQs8czonZhIINY5ddI08eSNy3Plk6Ia9njbgpaeNJY9UlhvRGHldSFqqNZlEH_cgBIoNptkP8BfWdU5xMJYvqY4U-04FFGX3rSPH9z0VVh0V3_NFScVqXS9EygVRbIyfs4bdrgW3Nbk92EZ5zJjhfo0bXfVxWYPnp7N4VOQA3ZtIkXxyq6rk793hltgDt2spsgbQQep3-MEQqLPB1o6e12pkbx-Il4hGI3o-JySdIJaIAO6fBfkDWamTxS4Wsaa-_mp6n0gd_5bLPdU4OsXZPlRPxkiVjdSMOLXiFr8xR_lkBIYTK9gfTc1aSEpkS585hCxBvA-TlJs01mlcqTGOw_FavI8bmGTb9CxmoFiv3NfbYYev7i3cSlkxNZWlPUMhnNPTMRsz3Z0JFQcx7gHaWpFsfnBfxSZpqUYErYIJwt5oiYjqEMBetTvnzB2D4iavmF3wgaVpX3KkfKIjJeZzN1fQRbB1pZ1p-xX_7zR37F1j4iMkGiexZ-IiLnCjL8jSuLMhmGp9S_bSKaOdfofaseJ0zALbzr4KlLLU8SFNshVsgoWbiYbsSLXmYLbTj_RdZkhN58UeAUqtpiHsQPyDpwtLhVsKlbmqMIJIjAh8L9iIsEK9hDHWC8Fvr7W3YnKpLwKMn3BGkwcwlVLBbH--GEgDZ9CHeaH6-A=w2172-h2894-no?authuser=1" width="100%"/>

        </VerticalTimelineElement>

        {/* wtf roscoe */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="August 18, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">wtf roscoe</h3>
          <h4 className="vertical-timeline-element-subtitle">??</h4>
          <img src="https://lh3.googleusercontent.com/sYe8vJe2OYHyQq2DpvHJz_WdsqmEM6gbPtyfb1tvJg_uIzjWRlAbMtbaEwr9bL45VzHxsbaUEThLoNmxBw9nEmgofUyjA2ygXS9jkvMKJfsSbcZOvmGMPLVKICyrNBrWl9v7hHLy7QMcAhhGeEg9JLtTX2yJk26u5PbWzY57Qo03WqbpL_GCgM3XdbdZkEdqkh_JiSJg83tN20V3trFGZ0zTbPOVAsOE_SYrrVFyO9Ld2evt4KPrLAvqUw6DfkbPoZGwuuHz0AelJhp99L_z4URfjNjD8voenYx7kfew1huUQFCRb_U0eElcax98gl2i9tP12VrnzOshLfIKG7e7GcwlDPvqz2Aa3BY4yOuwrT3_sJEU_5cEnK7mIdfVIr7bQgRhJinsOQUcBs0d9zhWZL2KLqdXzb-Z6wUz3IaxbMX5UhJj9RdOR844WxcZfOXxtxb58bymV4v1h912KTVaRUwGwEBFFHxeDXwnPQqFcJE1ZFp8m5kpMEcK3bN2ziIDfVeC5CM1IfWtPbbT3DKYgbmKHf0EC6Zw6qWZZV6MpmdISwbWlympyZx69YUhmNtvrOHKWH7EjmyIvwj6X4AVctToOQo_ZqXIgb5Zp9H8CYEBV2QPtaRNgI1Xp5PLeE4fwTrwEe8HxgdqBTQYRkFwtGgiflfL7Ct6cxi0GzCduRVTjeuI-5iVs4ex4vLvAg=w2172-h2894-no?authuser=1" width="100%"/>

        </VerticalTimelineElement>

        {/* boulder! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Sept 3, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">We explored CU Boulder!!</h3>
          <h4 className="vertical-timeline-element-subtitle">fun day</h4>
          <img src="https://lh3.googleusercontent.com/oX3FFltnkFhLIsw_3w9ZM4umrr_oQH6j-FjYsDZ1oBz0zl5IfgzxbZDxgQE7gSjH2coBpSYODY_2tGxCft_IGoE0fBTem1kwJy0nW3ixN1BkwFe-H7pm5CWcTSgesg1GnJOlZ1GghKBK3AaW0-hk-M4btWDTpFwGBoD-1MADjUoKDkvcE5tEQxXy1PvbBGAeGhWiWYgEApgOVww-2qv30Z84-v1-RvuXlv1eE16a3amtRiKHDYxpG8hYmegQmwxVoyYC9VgYal4JAvOv1rYdYbVVC18QPvHLO2Yb1qt4DHNCKpaW-edvvR_w7sJbF8rQA5CWln2DmEBxHjNH5RpoTdld3k4D_9h19tL05HP4T-FtaD2C-FECB0oKCcr7iKfzYB8pcm6XYv5ZUVazmjQLxOaQV73r_fO7xop_wGU_gyxYBkv8sintTTQOk12ha29_LtzvVHY_-NEfoXU_2lr7eMBzeG3M2u_l4RTLwht7F5J0gQNA9CxEwteB4Xser6wAM7CrDYukY3i2fQmv-eJr7ZvFKl8ADpH2ejCfZY5-jNk8K9cE51gjHixmL0ZE1iGnIhQoTNekKLhod4GVC8mF1RRgaZUI7CIZTZr5ga4SQFKbAg-azMgsvhsQ5eVDIERNQKpERFYyeQ7HolxVsxtNw7BQHXDCl3i8rs9q7lnzM6aRhAoOLiu1_ZFQNtiTXw=w2172-h2894-no?authuser=1" width="100%"/>

        </VerticalTimelineElement>

        {/* "camping" */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Sept 6, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">"camping with your fam"</h3>
          <h4 className="vertical-timeline-element-subtitle">roscoe ate so much dirty water</h4>
          <p>damn ur cute</p>
          <img src="https://lh3.googleusercontent.com/MIjppGj43BKEM5buNmVLGunxT-Cn-6l4bhCZetAbXW69YG8FQBDSbzMuAeKvun_dXckhFw_R6bLNNOvYivfFnSxfZBg5nD9pl1Hu_8VE4WdOtlQ5RC5IN-cA1BdAGlBNXS0Chgf09FXckCe4uK8ft3VKXZsEPZEa4onwBJbKJSJsAXCUpqaLq9XSioeslVMI-kTb40ruHs0n0WjhH-HgLCD8Z5YO2oYsY4-QYH2mtJKZ-qTyx1nJ0_vG9cdW7Io-4j41xey9F_4Z3cSJZPhcJL7B8XP3MKykf9rhup2atdrGZFlZ6urqvp9vUmhw6KSoJIDXN5y-tNaZ3bX4BIGd9O2Y7N0fhj8vg4E64UcGEeq5JnVYIcq11YzVycviHoMfxR4OzQweeqs3O09me3QypUpDEpRM3TU0kVO61nhbZbRlDJ1PzCgMKaiYBaD8GUpY_zMH0t4u8rAs0rY-RDbPcjtLzVdSleaSyh54H28jiMZZsm5vLI240qXHwf2mwCazZvn7xP8fY_mYn_HhzBun5Y8m3ZAIglYjTVzFa77Kd7iaCGUxRpZb8p7RB3DPK8nptxQsORxDREfRB4aefy_xLxoxMPJjL4W5xaxRNS0jt7i9PrLqdHkfb_jK_avBvFLUUDHRShSRnHN2ueWUDGSOMGZtrUFBrLAHvllwahd1K1NnMKWWAW-bTt2fX12TiA=w3822-h2868-no?authuser=1" width="100%"/>

        </VerticalTimelineElement>

        {/* mountain trip! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="October 3, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">We went to the moutains together!!!</h3>
          <h4 className="vertical-timeline-element-subtitle">ramen on a trip is the way to go</h4>
          <img src="https://lh3.googleusercontent.com/PpFbB_O8KAy8316exO2jzvBD1XDM7Lc-Qwpufemo6zFcdEy6b8I1pwoztRAQvuB5_2FBJc87QRg2G77sePej1dlKZz_pSES-J8PDvvuaPBLbSgMz1a5ulM0jPWRY_pLzUW6xxq0eG-SxGt4H9KJj94pV8BXOCU2m0FAWRiC26-lbULwdzlMJDiCqc-02I0b-Bc3tMMuOB4ofkY8mB1RMW6pnTIGqiYEnnqKBG2r9aXYEOUaHtFyynX7vAs1y5iu-vmLx_ynMIdJ3KK8enzRC2CuY1iTvn8kMWsXTyTZygMKuuSiJRDQYZQ2XapbLmVdhOMhysNPeQSPVU7kMK6dPHf9zgCKc8-5GkIW9hmZMq8zjwqoWW-YbubNIc7Ly1yG8irtriE9_Q_KZIj9cPqOW9tuHT9GuDtK2Y6KA6zlHAB60AVxlPLy-1w73ohq069fSeEQDFVmcRMLYFJBlx_I46fcvmH3RCvl4Y7jJKlyZmi3lzeznnBovQYcudOujFpp9SkqmWz-qHbpY-qd6WwMbpOg9kYega3YrhPl4H1UvuPh4oMDrJn9x9b38huWAHtSoOCOf9XilDs4PE2jRstwxo87O_AINx0636y6MvLAFSaZFIaXSx445IY3C9saSi5ZcHkCIZS9z7z68UkK2r40hu_6ZInauvESXvHXSSKe1FBAKX5oc1bKrVS66n8K57Q=w2172-h2894-no?authuser=1" width="100%"/>

        </VerticalTimelineElement>

        {/* pumpkin patch! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="October 10, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">Pumpkin patch!</h3>
          <h4 className="vertical-timeline-element-subtitle">with all your highschool friends!</h4>
          <img src="https://lh3.googleusercontent.com/R3z70fs7CmbTgmf1KQu0GrUlKG66WuKHLoj3fJfEkieg9qmKpK_Agq1fJCie7galLy5PAc7y2juMie_2ywPfdyZMs3eXo54SL_DEu4XDp2LgR5Q-K7GQrc3o3RPE3SewakvoxqC-AVzR2ndJh7QaTLLk-0K-gvEqbBm6kkfNvHpnB7PkEa_cUrsSY6RsVEgC-A4qYzgfJPxth7gB-90C_CEx4tHlB0NOWBhU3YUxO2Hn7jgIsf5_vhvA0xj2XZk88p3XhUjIsvSEu9m55ArBp0AWQvsmMmsHz0eYmBinJTDUNjTDfVbnDY_j0d-V5MVAI4NYe71tfzNXRc1NDBKtE8PD6FM_JQdkZHS6PVpOM3Qehzxl_LfYMD8ror1YjcuSxL4IFY4TbwkfLKXYduF7QRnRajzUHi1KI8tOeogpREmxjFgBiRWcDKw7gXbCbdIBMPCn7Sur2ARv_iXS--TB1_lLW4wuyyL-Ch99ccyROMVbIywdPWXswrdlYsy5Ix9diVeDfIFQxlo91yO40ZxhIHOX1WHUUesvNUyAYHzyyLU2PbOzOD1GWmJ9QSTCXTM7ut4fvFvUttZ4cZLL60NVMehUqghvXkeS8Ey6CEREPQer3_cTabA2UW4uXEPnn9MkgFWXInvJMtfLM76gxP6uSn70ejGPOGklxVz0ca3ibyTEe_Eygh9UR3HFfY3WyQ=w2172-h2894-no?authuser=1" width="100%"/>

        </VerticalTimelineElement>

        {/* new place!! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="November 27, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">new place! officially moved in together!</h3>
          <h4 className="vertical-timeline-element-subtitle">i love you hehe</h4>
          <p>I love how you designed the home and all your knick knacks hehe</p>
          <img src="https://lh3.googleusercontent.com/lrIPaQnZmconLu33-hLk2BfB99AOuNniSsLKcRGiEZ2xcSmpmIvHlUxfXtvPmxmuhWswA2328kh3KnyXRNeK084UzyfvyBv6t0vndgXmGQHgT03ZVdM_go68LxoUMRx66sR0wRYOckNBw2lRE52386ngcdaCuxRLX2ee5fAtp2bKBUKDcdjMisxtDskCoc7Yz6ohhxgDWUxNFEEcFLVSjjQ3j3Hs2Wf92q579LlpEeNsQ1JMBu-ycaWZ1IcoI8XLrxV0UH17g8QYmA-0-b6ceShukyjLY_zrNFuEgy6YZ0RiyiNXD0CHfBPvqcuTs0Yx3Xhsoqhyt8THfecUhnkw1zYRWsDel2LElZuDLs4bu3WDyZBk9L3Fu6fH9MCeC2Vc-Jlo_0KNx7IWGfiBkrT-ln8ZV8ZdKNqQPlWA0bzSUvk4lr1vYCQpcPlU6LIuveh3xwmsRmUNTzuwLkHf12IE8--9Zpl_yJ-czv9WgAiHlvOgGx3UWyvMysvktwKpDeGLz4I4kie1Xz-KlG6ixURLM3IF9Yuf3W8czn9KlOHC7yv7rLvX2GXR3Jq8VzI1IyL9JqdDjcl5YcukKAH_Q3y9Tcrww_TAbdWidJ8hc9HyGEDvPX_b1PEjohrIU0rSGr5frg7-iffKrBuPnMNGA09FnQIdqQ5Y62Nb1JRMnL36IWLritTX4g2HUNLEazYzGw=s2894-no?authuser=1" width="100%"/>

        </VerticalTimelineElement>

        {/* holidays!! */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="November 27, 2020"
          icon={<LilyIconImg src="https://i.vippng.com/png/small/204-2045990_obey-heart-hearts-hearteyes-anime-animeboy-kawaii-heart.png"/>}
        >
          <h3 className="vertical-timeline-element-title">HOLIDAYS and YOUR BIRTHDAY!!</h3>
          <h4 className="vertical-timeline-element-subtitle">big family, big holidays, big gifts</h4>
          <p>My first holidays where I have a huge family to celebrate it with, and even though it was during covid, it was still so much fun! I loved it!</p>
          <img src="https://lh3.googleusercontent.com/90G4KcH-kOYfULYJEoI2Tfwwz2rGM-7YvB97I1b3ezcMHtrX0AHOwznAwSz5Ec45yEsbp-JbnvDTN2WGr1cnfySZ4ZIUURpH1IXVd8g0DYhrzw80lPkvWHmquymCm7fm6CFEPd93Aqjes059A6qcXoSfodvT1KLJ9VwPtdy0xbr9McvqyDZrm9VcSwprzmP5OTp1YHi65JDCTK8yQhShs127Uy56brUv7-zIbKT3oZp2yeXdoxaFeNYF41_hdZs0cnul91GPsw8AUjfYatLH7npBASOuhIut_tNofQSYIhrPOZEoEWuLCagnMwtyV2OF57afBiMvp0TWsG4EYadE6ck4bucUmy7xQhrg-KZ7kezIsimb5OxtGZ8yqrtgtDIrhinHizIncjw59kwN5aZhkNGV0G4-AfLFJNdj2zhRLzvcgSzqWoDjObkRjicb0xnyM2hodUDMRzyQjY5Jx1YQXL7Jtqr819TtH2pMKsD3E0P4CUc8-n4zbvnrC2Xp5UbWTD0GSUQXaftA6OcUuOYfYMa1449BVKP_Q9z6btoQ15TKUYTa0dXJoaIZhRPS8L3-gfxMaeI_odnDHkU6-UA7okDh90w99sGCJz9oQKKfOsspZO8ES5ya4K1B6_1dAga9r_AdN_8zhX3pXimLqGSAxvVLWzdb1zGPcSIdDs2gBt7yX5kUJPBAAT9WTghucA=w3822-h2868-no?authuser=1" width="100%"/>
          <img src="https://lh3.googleusercontent.com/Zj74UlsdrSYfw1nyviyriWYciY1gCgEOGWcyjhYumb4uiV_IolR5_IaodOIgK-8oa8k40GTMsQTibw0jjNXWgomBigmvCN52qYE4Xve-dJbDIrA4WPyXxFF1Bs2TtW1L6DtBfe3bk6Y-4uGci4qYrwH1KdZT2ZNm8RyI7rLjNhdBM4z1e0fObmE7sRJLKmOWEsDDsHyR3w5Q6nnov5ZmiChxB4lk-7iRoEXxPRkBOImjbmAfNha6BLoGT3Jb3d94Z_SxGiwKnvcrUQ9ORpAMwyvwstk6STqLbIv35En8pHTwdWF3R4294g8FDipPu6ig_BxfZGLK2w1qUUo_4vk3QcvBHbrpJNrddJZB10BLAC7kYx_Q1dRF1Oe9HsRjPzLo5tK9IWoDob0eTHDk6r5L9WSq-HK9Tty9Fa0wT4x1W1qVnHcZatqXDHtxdFTpqeKlX95c7VMxzEW7g2s1msxpQZDR1LCDmm-Bd04F1BaZTg3gS3aJ_Ygje0N1xFeYN4g30a-Zjh4a0vRDPStoEXyI1dAG7FCfxJxt0wqax_T9urXQUU6Jd_J4emeh575FzTqyN6OAZ3jeNQfKhA3OjeYaABnxZoHz8Ahk0Khi1QWqjD8K2jVlzVj6DdNqjS5AH0d2v8CWYW6neo-ZkNU-IZkf8MS1m6UxFmyUghzVnMX_omC5OGFt5bAiBKMoAWAfvA=w2172-h2894-no?authuser=1" width="100%"/>
          <img src="https://lh3.googleusercontent.com/HfHU1-_x4sicYdHS94Ir1gVjurkm8k5uFrJyb1mzb96APWHXBGvCG__uu3pEz1hz4UAMS49bGCmtUhmxEN6knStqY6CV4s0w0hqZLvJATMZXHmgUdoPyxtpm8ZEIzHVllNHXRs855ca6sly-Z0ttCt7mtNxFmShQx3jM8tchPNxwT-LvYfO6JGq3JcmXA-wpy4Q5eviRfwdt5njE5p60mGiOo3ORY-s0g5QlET5dRY3rOk380UiubZ-g88AniBxcB6m2q4Bydh3LwyooH7zdcVm7QFYMkoTz_hdmlLT69IgvcEk0H9T_x4ntO38kchM_7K3rNxDowJ0bwekPtNj5nKZI2c95_RlAcSkYxp3gqa4oGYuAMEhWdMJdmtpFJqSEqRz1BUH70tPpJ_fUobBpG8TlLqxqW1n1KoeG69x2uvvHaSFgXEzOeA7zP_dKWeQ40gVfujxkXX1QPaj_GDAlH5_yLWCZQkzMvIzk5N7oCyHClJ_XNSWE5VXZG4GLTPjQLp1ho-JyB2KpMWJfc-Gvsm22icE_Jml683MJ9pr118w5rzKOuFBzC0_-EO2KbuuBzw9d7TAQMphBN9rLI-GfLCJEiwCQryHXfWiF7gdAg8TdTxPzP7PiLV3HvEX1073hFKnwL_79JrlU_DsZLTTyfdRIQKv1tLGckb-jcKj6yCKCso6HC9aezknKCpNp-g=w2172-h2894-no?authuser=1" width="100%"/>
          <img src="https://lh3.googleusercontent.com/TN3fdxaRs3nn4A1ZreSmQKfjFDvuAN70N0L57eX6BfUMSELacreeRvQzGU8lAEjgiViWoIixKOJ1Y17dpqF7CQ6zz3usPgiAlyVaAYC8lJMnwd2EgQNKW2bMloIhr7FKACCNYlevftZ6IQel_BHm7ObveL2QFB9hL-y9NRc04gwH2xtJaztjmD_ChYHcPbMFtfONMaJClW8lC2Jaz9yf97aqQzVT0BcTSUawvPkQV2P1nj9QI344XWoU7rOTS1i9GeA4ZEK4Enh6cQkkTu0_UucaW0uTx_L3RIRK1fiJ8pi_XmPThAxE6-gitcptMmkz46HgQpp61Txu9gIYnOOIU7blk55vUXTcCHlWoRtFJ8nG5f-pMHHrKcqv-zKF-VeUkfaT21NO43LvHs82qXg6Mg7Sh6ZqIBVQUebQzrfA4fSzbNQ71KrLh5qcu7Hk-4Q3_d08zzO_0A60iGWBsSjRyUsmA6vgzmRXLjrZjeSoXQ_rvRm0XBJsPVrREbHo-PgJwbeImrKbIdtj_pvi7LF8jyaqjXN2VVgDAZbel2IY9-Vv0D43tk4_GRYrO7AcJO6LkTvbfwNwwsD2xcKgN8F3eHthobNwmKJRvhWU2oR2c85cJS-K0SPh1VNRFDl7eyGofiOG3EihuadKxjocjxihLx0isiT32CH9scTAgOcdTuIiSFKmOJGTa6Svoyq8FA=w3822-h2868-no?authuser=1" width="100%"/>
        </VerticalTimelineElement>




        {/* <img src="https://s3-media0.fl.yelpcdn.com/bphoto/zulurWLbR04sS-gS1i7cWg/l.jpg" width="100%"/> */}
        


        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          // icon={<StarIcon />}
        />
      </VerticalTimeline>


      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <PageOpenerSubText>life is a highway</PageOpenerSubText>
      <PageOpenerSubText>I wanna ride it all night long</PageOpenerSubText>
      <PageOpenerSubText>and, Lily, if you're going my way</PageOpenerSubText>
      <PageOpenerSubText>well, I wanna drive it all night long</PageOpenerSubText>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>



    </Layout>
  )
}

export default HiLily
