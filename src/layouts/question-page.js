import './checkbox.css';
import './calculator.css';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import { zoomIn } from 'react-animations';
import { fadeInDownBig } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import img1 from '../Img/img-1.png';
import img2 from '../Img/img-2.png';
import img3 from '../Img/img-3.png';

export default function QuestionPage() {
	const[tWeight, settWeight] = useState(0)
	const [ question, setQuestion ] = useState([
		{	
		
			que: 'Where do you live',
			img: 'https://footprint.wwf.org.uk/images/food-section.png',
			title:"YOUR DIET IS AN IMPORTANT PART OF YOUR CARBON FOOTPRINT.",
			greentext:"Did you know?",
			text:"A large proportion of greenhouse gas emissions comes from food production, and meat and dairy are associated with much higher carbon emissions than plant-based food.",
			options: [
				{ label: 'Spain',value:false, weight: 20 },
				{ label: 'Uk',value:false, weight: 20 },
				{ label: 'USA',value:false, weight: 20 },
				{ label: 'Canada',value:false, weight: 20 }
			]
		},
		{
			que: 'Home type',
			img: 'https://footprint.wwf.org.uk/images/food-section.png',
			title:"YOUR DIET IS AN IMPORTANT PART OF YOUR CARBON FOOTPRINT.",
			greentext:"Did you know?",
			text:"A large proportion of greenhouse gas emissions comes from food production, and meat and dairy are associated with much higher carbon emissions than plant-based food.",
			options: [
				{ label: 'Villa',value:false, weight: 20 },
				{ label: 'Appartment',value:false, weight: 20 },
				{ label: 'Bungalow',value:false, weight: 20 },
				{ label: 'Townhome',value:false, weight: 20 }
			]
		},
		{
			que: 'How many people live with you',
			img: 'https://footprint.wwf.org.uk/images/food-section.png',
			title:"YOUR DIET IS AN IMPORTANT PART OF YOUR CARBON FOOTPRINT.",
			greentext:"Did you know?",
			text:"A large proportion of greenhouse gas emissions comes from food production, and meat and dairy are associated with much higher carbon emissions than plant-based food.",
			options: [
				{ label: '1-2',value:false, weight: 20 },
				{ label: '3-4',value:false, weight: 20 },
				{ label: '5-6',value:false, weight: 20 },
				{ label: 'more than 6',value:false, weight: 20 }
			]
		},
		{
			que: 'Home heating/ cooling',
			img: 'https://footprint.wwf.org.uk/images/food-section.png',
			title:"YOUR DIET IS AN IMPORTANT PART OF YOUR CARBON FOOTPRINT.",
			greentext:"Did you know?",
			text:"A large proportion of greenhouse gas emissions comes from food production, and meat and dairy are associated with much higher carbon emissions than plant-based food.",
			options: [
				{ label: 'Electric',value:false, weight: 20 },
				{ label: 'Gass',value:false, weight: 20 },
				{ label: 'Oil',value:false, weight: 20 },
				{ label: 'LPG',value:false, weight: 20 }
			]
		},
		{
			que: 'How much of your home electricity is From renewable source',
			img: 'https://footprint.wwf.org.uk/images/food-section.png',
			title:"YOUR DIET IS AN IMPORTANT PART OF YOUR CARBON FOOTPRINT.",
			greentext:"Did you know?",
			text:"A large proportion of greenhouse gas emissions comes from food production, and meat and dairy are associated with much higher carbon emissions than plant-based food.",
			options: [
				{ label: '20%',value:false, weight: 20 },
				{ label: '30%',value:false, weight: 20 },
				{ label: '40%',value:false, weight: 20 },
				{ label: 'More than 50%',value:false, weight: 20 }
			]
		},
		{
			que: 'Home Solar power',
			img: img1,
			title:"OFFSETING YOUR FLIGHTS.",
			greentext:"Hint:",
			text:"After first cutting your emissions, for example by using a different mode of transport, you could offset the emissions that you are unable to reduce using transparent and recognized certified carbon offsets. Search for Gold Standard offsets.",
			options: [
				{ label: 'Yes',value:false, weight: 20 },
				{ label: 'No',value:false, weight: 20 }
				
			]
		},
		{
			que: 'If you have Home Solar Power than how much KWH',
			img: img1,
			title:"OFFSETING YOUR FLIGHTS.",
			greentext:"Hint:",
			text:"After first cutting your emissions, for example by using a different mode of transport, you could offset the emissions that you are unable to reduce using transparent and recognized certified carbon offsets. Search for Gold Standard offsets.",
			options: [
				{ label: '30 KWH',value:false, weight: 20 },
				{ label: '40 KWH',value:false, weight: 20 },
				{ label: '50 KWH',value:false, weight: 20 },
				{ label: 'More than 50 KWH',value:false, weight: 20 }
			]
		},
		{
			que: 'Any other home renewable energy',
			img: img1,
			title:"OFFSETING YOUR FLIGHTS.",
			greentext:"Hint:",
			text:"After first cutting your emissions, for example by using a different mode of transport, you could offset the emissions that you are unable to reduce using transparent and recognized certified carbon offsets. Search for Gold Standard offsets.",
			options: [
				{ label: 'Geothermal',value:false, weight: 20 },
				{ label: 'Biomass',value:false, weight: 20 },
				{ label: 'Hydroelectric',value:false, weight: 20 },
				{ label: 'Hydrogen Cells',value:false, weight: 20 }
			]
		},
		{
			que: 'How many cars do you own ',
			img: img1,
			title:"OFFSETING YOUR FLIGHTS.",
			greentext:"Hint:",
			text:"After first cutting your emissions, for example by using a different mode of transport, you could offset the emissions that you are unable to reduce using transparent and recognized certified carbon offsets. Search for Gold Standard offsets.",
			options: [
				{ label: 'None',value:false, weight: 20 },
				{ label: '1',value:false, weight: 20 },
				{ label: '2',value:false, weight: 20 },
				{ label: 'More than 2',value:false, weight: 20 }
			]
		},
		{
			que: 'Fuel type',
			img: img1,
			title:"OFFSETING YOUR FLIGHTS.",
			greentext:"Hint:",
			text:"After first cutting your emissions, for example by using a different mode of transport, you could offset the emissions that you are unable to reduce using transparent and recognized certified carbon offsets. Search for Gold Standard offsets.",
			options: [
				{ label: 'Petroleum',value:false, weight: 20 },
				{ label: 'LPG',value:false, weight: 20 },
				{ label: 'Semi Electric/ Hybrid',value:false, weight: 20 },
				{ label: 'Electric',value:false, weight: 20 }
			]
		},
		{
			que: 'Mileage per year',
			img: img2,
			title:"THE PRODUCTION PROCESS REQUIRES MASSIVE AMOUNTS OF ENERGY.",
			greentext:"Hint:",
			text:"These should all be broken down on your bills…",
			options: [
				{ label: '20000',value:false, weight: 20 },
				{ label: '30000',value:false, weight: 20 },
				{ label: '40000',value:false, weight: 20 },
				{ label: 'More than 40000',value:false, weight: 20 }
			]
		},
		{
			que: 'Public transport ',
			img: img2,
			title:"THE PRODUCTION PROCESS REQUIRES MASSIVE AMOUNTS OF ENERGY.",
			greentext:"Hint:",
			text:"These should all be broken down on your bills…",
			options: [
				{ label: 'Yes',value:false, weight: 20 },
				{ label: 'No',value:false, weight: 20 }
				
			]
		},
		{
			que: 'Double Glazing',
			img: img2,
			title:"THE PRODUCTION PROCESS REQUIRES MASSIVE AMOUNTS OF ENERGY.",
			greentext:"Hint:",
			text:"These should all be broken down on your bills…",
			options: [
				{ label: 'Yes',value:false, weight: 20 },
				{ label: 'No',value:false, weight: 20 }

			]
		},
		{
			que: 'Roof Type',
			img: img2,
			title:"THE PRODUCTION PROCESS REQUIRES MASSIVE AMOUNTS OF ENERGY.",
			greentext:"Hint:",
			text:"These should all be broken down on your bills…",
			options: [
				{ label: 'Flat',value:false, weight: 20 },
				{ label: 'Peaked',value:false, weight: 20 },
				{ label: 'Glazed',value:false, weight: 20 },
				{ label: 'Other',value:false, weight: 20 }
			]
		},
		{
			que: 'Roof insulation',
			img: img2,
			title:"THE PRODUCTION PROCESS REQUIRES MASSIVE AMOUNTS OF ENERGY.",
			greentext:"Hint:",
			text:"These should all be broken down on your bills…",
			options: [
				{ label: 'Yes',value:false, weight: 20 },
				{ label: 'No',value:false, weight: 20 }
				
			]
		},
		{
			que: 'Roof or wall coating',
			img: img3,
			title:"HOW YOU USE ENERGY AT HOME PLAYS A BIG PART IN YOUR CARBON IMPACT ON THE WORLD.",
			greentext:"Hint:",
			text:"Please indicate the primary fuel source that is used. Your energy bill will tell you this.",
			options: [
				{ label: 'Yes',value:false, weight: 20 },
				{ label: 'No',value:false, weight: 20 }
				
			]
		},
		{
			que: 'Cavity wall insulation',
			img: img3,
			title:"HOW YOU USE ENERGY AT HOME PLAYS A BIG PART IN YOUR CARBON IMPACT ON THE WORLD.",
			greentext:"Hint:",
			text:"Please indicate the primary fuel source that is used. Your energy bill will tell you this.",
			options: [
				{ label: 'Yes',value:false, weight: 20 },
				{ label: 'No',value:false, weight: 20 }
			]
		},
		{
			que: 'Holidays per year',
			img: img3,
			title:"HOW YOU USE ENERGY AT HOME PLAYS A BIG PART IN YOUR CARBON IMPACT ON THE WORLD.",
			greentext:"Hint:",
			text:"Please indicate the primary fuel source that is used. Your energy bill will tell you this.",
			options: [
				{ label: '20 Days',value:false, weight: 20 },
				{ label: '30 Days',value:false, weight: 20 },
				{ label: '40 Days',value:false, weight: 20 },
				{ label: 'More than 40 Days',value:false, weight: 20 }
			]
		},
		{
			que: 'Flight hours per year',
			img: img3,
			title:"HOW YOU USE ENERGY AT HOME PLAYS A BIG PART IN YOUR CARBON IMPACT ON THE WORLD.",
			greentext:"Hint:",
			text:"Please indicate the primary fuel source that is used. Your energy bill will tell you this.",
			options: [
				{ label: 'None',value:false, weight: 20 },
				{ label: '1',value:false, weight: 20 },
				{ label: '2',value:false, weight: 20 },
				{ label: 'More than 2',value:false, weight: 20 }
			]
		}




	]);

	const[index, setIndex] = useState(0)

	const handleCheckClick = (index,option) => {

		question.find((que,idx) => 
		idx === index ? que.options.map(option => setQuestion([...question,option.value=false])): ''
	)
	settWeight(tWeight => tWeight + option.weight)
	console.log(tWeight)
		setTimeout(() => {
			while(index <= 17)
		{
			setIndex(index => index+1)
			console.log(option)
			question.find((que,idx) => 
				idx === index ? que.options.find(opt => opt.label === option.label ? setQuestion([...question,opt.value=true]): ''  ) : ''
			)
	
			break
			
		}
		}, 1000);
		
	}

	const goBack = () => setIndex(index => index -1)
	const goForward = () => setIndex(index => index +1)

	

	return (
		<StyleRoot>
			<Container fluid className="homeTimeline">
				<Row className="vh-100 overflow-auto">
					<div className="col-md-6 col-xl-7 bg-black bg-hide py-4 py-xl-2">
						<Navbar className="flex-column flex-xl-row justify-content-between mb-5 pb-3 pb-xl-5">
							<Navbar.Brand className="mr-0" href="/">
								<img
									src="https://footprint.wwf.org.uk/images/new/wwf-logo3.jpg"
									width="200px"
									height="100px"
									className="d-inline-block align-top"
									alt="React Bootstrap logo"
								/>
							</Navbar.Brand>
							<Calculator title="footprint calculator" greentext="Food:" text= {`Question ${index + 1} of 19`}  />
						</Navbar>

						<Col lg={9} xl={7} className="mx-md-auto text-white">
						
								<>
								<h3 className="question-title" style={styles.zoomIn}>
									{question[index].que}
								</h3>
								
								{question[index].options.map(option => (
									
									<div key={option.label}>
										
									<ul className="flex-column nav">
										<CheckBoxList text={option.label} 
										handleClick={()=>handleCheckClick(index,option)} 
										options={option} 
										allOptions={question[index].options} 
										/>
									</ul>
								</div>
								))}
								</>
					
							<div className="row d-flex">
							<div style={styles.zoomIn3} className="col-4  px-0">
							{index !== 0 ? <Button onClick={()=>{goBack()}} variant="link">
									Previous Question
								</Button> : null   }
								
							</div>
							<div style={styles.zoomIn3} className="col-4  px-0">
							{index === 18 ? <Link to='/results'>
							<Button block size="lg"  variant="orange">
									Find Result
								</Button>
								</Link>
								: <Button onClick={()=>{goForward()}} variant="link">
									Next Question
								</Button>   }
								
							</div>
							</div>
						</Col>
					</div>
					<Col className="d-flex align-items-center bg-white py-4">
						<ViewHint
							src={question[index].img}
							title={question[index].title}
							greentext={question[index].greentext}
							text={question[index].text}
						/>
					</Col>
				</Row>
			</Container>
		</StyleRoot>
	);
}


const CheckBoxList = ({ text, handleClick, options,allOptions }) => {
	
	return (
		<StyleRoot>
			<li style={styles.zoomIn2} class="d-flex nav-item item">
			
				<div class="custom-checkbox" >
					<input type="checkbox"  onClick={
						handleClick
					} value={options.value}  defaultChecked={options.value} />
					<svg viewBox="0 0 35.6 35.6">
						<circle class="background" cx="12.8" cy="12.8" r="12.8" />
						<circle class="stroke" cx="12.8" cy="12.8" r="10.37" />
						<polyline class="check" points="5.78 13.12 9.55 16.23 19.17 9.87" />
					</svg> 
				 </div>
				<p class="ml-1 text">{text}</p>
			</li>
		</StyleRoot>
	);
};



const Calculator = ({ title, greentext, text }) => {
	return (
		<StyleRoot>
			<div style={styles.fadeInDownBig} className="text-white mt-3">
				<h4 className="text-uppercase mb-3">{title}</h4>
				<div className="d-flex mb-1">
					<span className="fw-box fw-box-color active mr-2" />
					<span className="fw-box fw-box-color mr-2" />
					<span className="fw-box fw-box-color mr-2" />
					<span className="fw-box fw-box-color" />
				</div>
				<p>
					<span className="text-success">{greentext}</span> {text}
				</p>
			</div>
		</StyleRoot>
	);
};


const ViewHint = (src) => {
	console.log(src)
	return (
		<Figure className="col-lg-10 mx-md-auto px-0">
			<Figure.Image
				width="100%"
				className="mb-4"
				alt="Food Section"
				src={src.src}
			/>
			<h3>{src.title}</h3>
			<p>
	<span className="text-success mr-2">{src.greentext}</span>
				<span>
					{src.text}
				</span>
			</p>
		</Figure>
	);
};



const styles = {
	fadeInDownBig: {
		animation: 'x 2s',
		animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
	},
	zoomIn: {
		animation: 'x 1s',
		animationName: Radium.keyframes(zoomIn, 'zoomIn')
	},
	zoomIn2: {
		animation: 'x 1.3s',
		animationName: Radium.keyframes(zoomIn, 'zoomIn')
	},
	zoomIn3: {
		animation: 'x 1.5s',
		animationName: Radium.keyframes(zoomIn, 'zoomIn')
	}
};
