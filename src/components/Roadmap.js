import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {GoRocket, GoBroadcast} from 'react-icons/go'
import {GrMoney} from 'react-icons/gr'

export default function Roadmap() {
  return (
    <div className="container">
      <h2 className="text-center pb-5">ROADMAP</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FFC91C', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #FFC91C' }}
          date="2011 - present"
          iconStyle={{ background: "#FFC91C", color: "#000" }}
          icon={<GoRocket />}
        >
          {/* <h3 className="vertical-timeline-element-title">PHASE I</h3> */}
          <h4 className="vertical-timeline-element-subtitle fw-bold">PHASE I</h4>
          <p>
            Research &amp; Development, Website &amp; Social Media, Deploy Smart Contract, Pancakeswap Launch, Marketing Campaign Rollout
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FFC91C', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #FFC91C' }}
          date="2010 - 2011"
          iconStyle={{ background: "#FFC91C", color: "#fff" }}
          icon={<GrMoney />}
        >
          {/* <h3 className="vertical-timeline-element-title">Art Director</h3> */}
          <h4 className="vertical-timeline-element-subtitle fw-bold">
            PHASE II
          </h4>
          <p>
            NFT Launch, Whitepaper Release, 10,000 Hodlers
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#A89359', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #A89359' }}
          date="2008 - 2010"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<GoBroadcast />}
        >
          {/* <h3 className="vertical-timeline-element-title">Web Designer</h3> */}
          <h4 className="vertical-timeline-element-subtitle">
            MARKETING PUSH
          </h4>
          {/* <p>User Experience, Visual Design</p> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
