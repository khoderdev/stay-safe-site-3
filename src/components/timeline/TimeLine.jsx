import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import './TimeLine.css';

function TimeLine() {
	return (
		<VerticalTimeline className='h-[]'>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				contentStyle={{ background: 'rgb(25, 118, 210)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(25, 118, 210)' }}
				date='2011 - present'
				iconStyle={{ background: 'rgb(25, 118, 210)', color: '#fff' }}
				icon={<FaBriefcase />}
			>
				<h3 className='vertical-timeline-element-title'>Hospital Without Walls</h3>
				<p className='text-white-whites'>
				Steps toward better health and well being. "Hospital without Walls",  (14 July, 2018).
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				date='2010 - 2011'
				iconStyle={{ background: 'rgb(25, 118, 210)', color: '#fff' }}
				icon={<FaBriefcase />}
			>
				<h3 className='vertical-timeline-element-title'>Art Director</h3>
				<h4 className='vertical-timeline-element-subtitle'>
					San Francisco, CA
				</h4>
				<p>
					Creative Direction, User Experience, Visual Design, SEO, Online
					Marketing
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				date='2008 - 2010'
				iconStyle={{ background: 'rgb(25, 118, 210)', color: '#fff' }}
				icon={<FaBriefcase />}
			>
				<h3 className='vertical-timeline-element-title'>Web Designer</h3>
				<h4 className='vertical-timeline-element-subtitle'>Los Angeles, CA</h4>
				<p>User Experience, Visual Design</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				date='2006 - 2008'
				iconStyle={{ background: 'rgb(25, 118, 210)', color: '#fff' }}
				icon={<FaBriefcase />}
			>
				<h3 className='vertical-timeline-element-title'>Web Designer</h3>
				<h4 className='vertical-timeline-element-subtitle'>
					San Francisco, CA
				</h4>
				<p>User Experience, Visual Design</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				date='April 2013'
				iconStyle={{ background: 'rgb(156, 39, 176)', color: '#fff' }}
				icon={<FaGraduationCap />}
			>
				<h3 className='vertical-timeline-element-title'>
					Content Marketing for Web, Mobile and Social Media
				</h3>
				<h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
				<p>Strategy, Social Media</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				date='November 2012'
				iconStyle={{ background: 'rgb(156, 39, 176)', color: '#fff' }}
				icon={<FaGraduationCap />}
			>
				<h3 className='vertical-timeline-element-title'>
					Agile Development Scrum Master
				</h3>
				<h4 className='vertical-timeline-element-subtitle'>Certification</h4>
				<p>Creative Direction, User Experience, Visual Design</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				date='2002 - 2006'
				iconStyle={{ background: 'rgb(156, 39, 176)', color: '#fff' }}
				icon={<FaGraduationCap />}
			>
				<h3 className='vertical-timeline-element-title'>
					Bachelor of Science in Interactive Digital Media Visual Imaging
				</h3>
				<h4 className='vertical-timeline-element-subtitle'>Bachelor Degree</h4>
				<p>Creative Direction, Visual Design</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
				icon={<FaStar />}
			/>
		</VerticalTimeline>
	);
}

export default TimeLine;
