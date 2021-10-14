import './app.scss';
import { Row, Col} from "react-bootstrap";
import personal_photo from "./assets/personal_image.png";
import git_logo from "./assets/git_logo.png";
import linkedin_logo from "./assets/linkedin-logo.png";
import greads_logo from "./assets/greads-logo.png";
import spotify_logo from "./assets/spotify_logo.png";
import c_logo from "./assets/c-language.png";
import java_logo from "./assets/java_icon.jpg";
import python_logo from "./assets/python-logo.png";
import React from "react";
import { Fetch } from "./Fetch";
import Repos from "./Repos";

function UserDisplay({ data }) {
    return (
        <div className="githubUser"> 
            <div> 
                <h1>{data.login}</h1>
                {data.name &&  <p>{data.name}</p>}
            </div>
            <Repos
                login={data.login}
                onSelect={repoName => console.log(`${repoName} selected`)}
            />
        </div>
    )
}

function User({ login }) {
    return (
        <Fetch 
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDisplay}
        />
    )
}



const icons = [
	{
		icon_image: git_logo,
		url: "https://github.com/luismomm2110",
		description: "github"
	},
	{
		icon_image: linkedin_logo,
		url: "https://www.linkedin.com/in/luis-antonio-momm-duarte-25224915a/",
		description: "linkedin"
	},
	{
		icon_image: spotify_logo, 
		url: "https://open.spotify.com/user/luismomm",
		description: "spotfy"
	},
	{
		icon_image: greads_logo, 
		url: "https://www.goodreads.com/user/show/64864252-luis-antonio-momm-duarte",
		description: "goodreads"
	} 
];


const projects = [
	{
		title: "My own Shell",
		url: "https://github.com/luismomm2110/ostep-projects/tree/master/processes-shell",
		description: "An implementation of a UNIX Shell, part of an Operating System Class by University of Washington",
		language: c_logo
	}, 
	{
		title: "VM interpreter",
		url: "https://github.com/luismomm2110/nand2tetris.part2/tree/main/projects/07/src",
		description: "An interpreter of bytecode Jack (a pedagogic programming language) file to assembly",
		language: java_logo
	},
	{
		title: "Karger's algorithm",
		url: "https://github.com/luismomm2110/algorithms-stanford/tree/main/PARTA/week4",
		description: "An implementation of the Karger's Algorithm, a randomized algorithm to compute a min cut of a connected graph",
		language: python_logo 
	}
]

function Intro() { 
	return (
		<React.Fragment>
			<div style={{"display" : "flex", "flexWrap" : "wrap"}}>
				<div class={"flex-name"}> 
					Luis Antonio Momm Duarte 
				</div>
			    <div class={"flex-email"}> 
					luismomm@gmail.com
				</div>
			</div>
			<hr className="horizontal-line"></hr>
			<p className="main-text"> 
				Hi! I am a brazilian student and technology worker. I currently work at <a href="https://www.softexpert.com/company/"> SoftExpert </a>, 
				a brazilian company market leader in software for bussiness compliance, 
				where I work with data integration (mainly using pandas)
				and creation of SQL Scripts for BI panels for the company's customers.
			</p>
			<p className="main-text"> 
				My main professional interests are data, operating systems, functional programming
				and many other fields.
			</p>
		</React.Fragment>
	)
}

function VolunteerWork() {
		return ( 
			<React.Fragment>
				<h4 className="header" style={{"fontSize" : "120%"}}>Volunteer Work</h4>
				<p className="main-text"> 
					With the closing of schools due to the COVID-19 pandemic,
					 refugee students in Brazil have had a lot of difficulties due to the change in education. 
					 So I participated in a project in my city called "Abraços Abertos" (Open Hugs), where I volunteer classes for Haitian refugees, especially math and physics, through cell phone calls and Skype.
				</p>
			</React.Fragment>
		)
}

function SelectedProjects({projects}) { 
	let project_class = "division-column"; 

	return (
		<React.Fragment> 
			<div className="projects-box"> 
				{projects.map((project, i) => (
				<div key={i} className={project_class.concat(i+1)}> 
						<a href={project.url}>{project.title}</a>
						<p className="project-description">{project.description}</p>
						<img alt="programing-language" className="image-language" src={project.language}></img>
				</div>
				))}
			</div>
			<hr className="horizontal-line"></hr>
		</React.Fragment>
	)
}

function PersonalLife() {
	return ( 
		<React.Fragment>
		<h4 className="header" style={{"fontSize" : "120%"}}>Personal Life</h4>
		<p className="main-text"> In my spare time, I enjoy cooking, reading (contemporary and modern fiction, economics as an academic field, philosophy, especially epistemology), weightlifting,
			cycling and discovering new music (mostly krautrock and post-punk)
		</p>
		</React.Fragment>
	)	
}

function Education() {
	return (
		<React.Fragment>
			<h4 className="header" style={{"fontSize" : "120%"}}>Education</h4>
			<hr className="horizontal-line"></hr>
			<p className="main-text"> 
				As an advocate of open-source education as a tool to provide anyone anywhere the chance to better themselves, 
				most of my technology education is through the <a href="https://github.com/ossu/computer-science"> 
				 Open Source Society University (OSSU) curriculum for Computer Science</a>. At the same time, I also study Software Engineering at University Católica de Santa Catarina. 
			</p> 
			<p className="main-text">	
				Before that, I was accepted to study Medicine at Federal University of Santa Catarina, in which I got the nineteenth position out of more than 8000 candidates (top 0.3%). For brazilian equivalent of the MCATS necessary to entry, I also obtained a performance above 90% in the math section, which was achieved by only 23 candidates among more than 31000 (top 0.08%).
			</p>
			<h5 className="header" style={{"fontSize" : "80%"}}>Selected Projects</h5>
			<hr  className="horizontal-line"></hr>
		</React.Fragment>
	)
}

function Photo() {
    return (
        <React.Fragment>
            <div className={"photo-box"}>
				<img className={"personal-photo"} alt="Hello, I'm Luis" src={personal_photo}></img>
            </div>
        </React.Fragment>
    )
}

function Icons({icons}) {
	return (
		<React.Fragment>
			<div className="icon-row" > 
				{icons.map((icon) => (
					<a href={icon.url}><img className={"icon-image"} src={icon.icon_image} alt={icon.description} ></img></a>
				))
				}
			</div>
		</React.Fragment>
	)
}

function App() {
  return (
		<div className={"container-main"} fluid>  
			<Row> 
				<Col className={"side-box"} lg={3} xs={1}>
				</Col>
				<Col className={"center-box"}  lg={6} xs={10}>
					<Photo />
					<Icons  icons={icons} />
					<Intro style={{"margin-bottom" : "100%"}} />
					<Education />
					<SelectedProjects projects={projects} />
					<VolunteerWork />
					<PersonalLife />
				</ Col> 
				<Col className={"side-box"} lg={3} xs={1}>
				</Col>
				<User login="luismomm2110" />;
		</Row>
	</div>
  );
}

export default App;
