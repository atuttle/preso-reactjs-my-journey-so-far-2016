// Import React
import React from "react";
import moment from "moment";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout,
  Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text, S
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
// require("normalize.css");
require("spectacle/lib/themes/default/index.css");


let images = {
	// ready: require('file!../assets/ready.webm'),
	react: require('../assets/react_transparent.png'),
	fatigue: require('file!../assets/fatigue.webm'),
	millenials: require('../assets/millenials.png'),
	interest: require('../assets/interest_over_time.png'),
	jsjabber: require('../assets/js-jabber.png'),
	before1: require('../assets/app-before-1.png'),
	before2: require('../assets/app-before-2.png'),
	after1: require('../assets/app-after-1.png'),
	after2: require('../assets/app-after-2.png'),
	tweet: require('../assets/app-tweet.png'),
	troll: require('../assets/troll.png'),
	like: require('../assets/like.png'),
	flamethrower: require('../assets/new-tech.jpg'),
	holy_shit: require('file!../assets/holy_shit.webm'),
	welcome_back: require('file!../assets/welcome_back.webm'),
	dangerous_alone: require('../assets/dangerous_alone.jpg'),
	speaker: require('../assets/speaker.png'),
	breaktime: require('file!../assets/alien_dance.webm'),
	inception: require('file!../assets/inception.webm'),
	fin: require('file!../assets/fin.webm')
};

let pallette = {
	brightblue: '#04a2ff'
	,purple: 'rebeccapurple'
	,orange: '#eb8200'
}

Object.keys(images).forEach(i => { images[i] = images[i].replace("/", "") })

preloader(images);

const theme = createTheme({
  primary: "#4F4E54"
  ,secondary: "white"
  ,tertiary: "white"
},{
  primary: "Operator ScreenSmart"
  ,secondary: "Operator ScreenSmart"
  ,tertiary: "Operator ScreenSmart"
});

export default class Presentation extends React.Component {
  render() {
	 return (
		<Spectacle theme={theme}>
			<Deck transition={["slide"]} transitionDuration={500}>

				<Slide>
					<Heading italic>Prep tabs:</Heading>
					<List>
						<ListItem>Audience view</ListItem>
						<ListItem>Facebook w/ console for React version</ListItem>
						<ListItem>Remote Check In for demo</ListItem>
					</List>
				</Slide>

				{/* TITLE SLIDE */}
				<Slide notes="I'll tweet a link to my slides after I'm done">
					<Heading fit textColor="white" >
						React.JS:<br/>My Journey So Far
					</Heading>
					<Image src={images.react} style={{position:'fixed', maxWidth: '150%', width: '150%', top: '-42vh', left: '20vw', zIndex: -999, opacity: 0.3}} />
					{/*style={{marginTop:'-75px'}}*/}
					{/*
					<br/>
					<Heading size={2} bold italic center lineHeight={1} textColor="white">
						Adam Tuttle
					</Heading>
					*/}
				</Slide>

				{/* 2015 JS be like */}
				<Slide notes="So how about last year, right? JavaScript had a hell of a year. The phrase 'tools fatigue' was even coined to explain how so many people were feeling. And there's an element of truth there. JavaScript has been basically stagnant since 2009, which for some people in this room could be your entire career -- and before that, 1999 was the last release. So it makes perfect sense that people are getting fatigued by the new pace of JavaScript. But I think that's ok. There's a lot happening. They're planning to release a few new features every year for at least the next few years, but you have to remember that it's all opt-in. For the most part you can pick and choose what you are going to learn and adopt.">
					<Heading size={3} fit italic lineHeight={1} textColor="white">
						2015 JavaScript be like
					</Heading>
					<video src={images.fatigue} style={{ maxWidth: "100%" }} loop autoPlay></video>
				</Slide>

				{/* I heard React was good */}
				<Slide bgColor="white" notes="And you know... I heard React was good.">
					<Image src={images.millenials} style={{ maxHeight: '100%' }} />
				</Slide>

				<Slide notes="If you hadn't heard of React before last year, chances are good you heard about it in 2015.">
					<Image src={images.interest} style={{maxWidth: '100%'}} />
				</Slide>

				{/* When I say React you hear... */}
				<Slide notes="But I know first hand how daunting it can be to try and learn React today. React has a huge community and ecosystem surrounding it, so it's really easy to fall into the trap of thinking that to use React you have to also learn about and use a bunch of other stuff. The truth is that some of the things on this list aren't really related at all, you just hear the same people raving about them. A few of them you're going to want to use sooner rather than later, but you can get away with ignoring most of these (and a bunch I didn't list here), for quite a long time.">
					<Heading caps fit italic>When I say React</Heading>
					<Heading caps fit italic margin={10}>you hear</Heading>
					<Layout>
						<Fill>
							<Text size={2} textColor="white" margin={10}>npm</Text>
							<Text size={2} textColor="white" margin={10}>jsx</Text>
							<Text size={2} textColor="white" margin={10}>Flux</Text>
							<Text size={2} textColor="white" margin={10}>Redux</Text>
							<Text size={2} textColor="white" margin={10}>ES6</Text>
						</Fill>
						<Fill>
							<Text size={2} textColor="white" margin={10}>Webpack</Text>
							<Text size={2} textColor="white" margin={10}>Browserify</Text>
							<Text size={2} textColor="white" margin={10}>Isomorphic</Text>
							<Text size={2} textColor="white" margin={10}>GraphQL</Text>
							<Text size={2} textColor="white" margin={10}>Babel</Text>
						</Fill>
					</Layout>
				</Slide>

				{/* You don't need to know this to have a career */}
				<Slide bgImage={images.jsjabber} bgDarken={0.7} notes="Let's talk about that for a second. Like I said: all of this stuff is opt-in. Even learning React itself. And I was listening to the JavaScript Jabber podcast around the time that I proposed this presentation, and they had a great discussion on exactly this topic, so I thought I would repeat some of the highlights of that conversation for you.">
					<Text lineHeight={1.3} textColor="white" margin="1.3em 0">
						"There are thousands of JavaScript developers that don’t know the first thing about
						React or modules or ES6 or immutability or bundlers or…
					</Text>
					<Text lineHeight={1.3} textColor="white" margin="1.3em 0">
						…And they all earn a living"
					</Text>
					<Heading italic fit>JavaScript Jabber Podcast #194</Heading>
				</Slide>

				{/* Use things when they solve a problem for you */}
				<Slide bgImage={images.jsjabber} bgDarken={0.7}>
					<Text lineHeight={1.3} textColor="white" margin="1.3em 0">
						"You don't need Babel in your first JavaScript project. Just use a script tag and start there.
					</Text>
					<Text lineHeight={1.3} textColor="white" margin="1.3em 0">
						Use things when they solve a problem for you, not because they're fashionable."
					</Text>
					<Heading italic fit>JavaScript Jabber Podcast #194</Heading>
				</Slide>

				{/* But abstractions are valuable */}
				<Slide bgImage={images.jsjabber} bgDarken={0.7} notes=".......... Things like React exist because they solve a problem. React is popular because it solves a bunch of problems in a really compelling way.">
					<Text lineHeight={1.3} textColor="white" margin="1.3em 0">
						"But remember that abstractions are valuable: We didn't all start out learning Assembly so
						that we could appreciate C, so that we could appreciate […]
					</Text>
					<Text lineHeight={1.3} textColor="white" margin="1.3em 0">
						…so that we could appreciate JavaScript."
					</Text>
					<Heading italic fit>JavaScript Jabber Podcast #194</Heading>
				</Slide>

				{/* App screen shots */}
				<Slide notes="Recently I rewrote this app from Angular and Ionic to React">
					<Image src={images.before1} style={{ maxHeight: '700px', position: 'absolute', top: '-360px', left: 0 }} />
					<Image src={images.before2} style={{ maxHeight: '700px', position: 'absolute', top: '-260px', left: '100px' }} />
					<Image src={images.after1}  style={{ maxHeight: '700px', position: 'absolute', top: '-360px', left: '700px' }} />
					<Image src={images.after2}  style={{ maxHeight: '700px', position: 'absolute', top: '-260px', left: '800px' }} />
				</Slide>

				{/* Steve's tweet */}
				<Slide notes="And after I showed it to my boss, and he played with it for a little bit, he tweeted this:">
					<Image src={images.tweet} />
				</Slide>

				{/* My first impressions */}
				<Slide notes="Old design wasn't bad but it was cookie cutter Ionic and it had some issues. I wrote this mobile app to compliment our event registration platform, and the new design is custom to compliment the design of that platform. But what we're most happy with is not the visual design. It's productivity, and maintainability, and the ability to stand on the shoulders of the giants in the React community. I'll get into some of the details of that later.">
					<List textColor="white">
						<ListItem>Easier to stay productive</ListItem>
						<ListItem>Easier to break into components = easier to redesign</ListItem>
						<ListItem>React & community solved many bugs & problems for me!</ListItem>
					</List>
				</Slide>

				{/* Adam is a noob */}
				<Slide bgColor={pallette.brightblue} notes="By the way, my name is Adam Tuttle * and I'm a nobody in the React and JS communities. And that's the point of this presentation. I'm new at this and my hope is that my perspective as a newbie will be beneficial to you as someone interested in learning React.">
					<Heading fit>@AdamTuttle</Heading>
					<Appear>
						<Heading size={2} italic>noob at React</Heading>
					</Appear>
				</Slide>

				<Slide bgColor={pallette.brightblue} transition={['zoom','fade']}
				notes="But keep that in mind as we spend the next 2 hours together: I'm likely to get a few things wrong, because I'm still learning. I do have a couple of friends that are mentoring me through this process, so it's not just a bunch of wild guesses, but that doesn't make everything I'm going to show you a best practice, either.">
					<Heading fit italic>Caveat Emptor!</Heading>
				</Slide>

				{/* Goals for this session */}
				<Slide notes="I have two goals for this presentation: (1) Teach you the basics of React and Redux, and (2) To weave in some tips from my personal process for learning new tech.">
					<Heading>Goals</Heading>
					<List>
						<ListItem>Teach you the basics of ReactJS</ListItem>
						<ListItem>My approach to learning new tech</ListItem>
					</List>
				</Slide>

				<Slide notes="Enough disclaimers, let's get to the code!">
					<Heading fit>Code!</Heading>
				</Slide>

				{/* first code sample */}
				<CodeSlide
					lang="html"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/barebones')}
					notes="What ACTUALLY is the minimum that you need to be able to do React?"
					ranges={[
						{ loc: [0,0], title: 'Minimum Viable App' }
						,{ loc: [2,4], note: 'Include some React files... (~30kb min+gzip, same as jQuery 3)' }
						,{ loc: [6,10], note: '...add a container div and a script block and go!' }
						,{ loc: [6,10], title: 'Tools fatigue my ass!' }
					]}
				/>

				<Slide notes="You can kind of think of React as just a templating library with a bunch of goodies added to it">
					<Heading fit>React is for designing your UI</Heading>
				</Slide>

				{/* Templating with raw React */}
				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/templating-basics')}
					ranges={[
						{ loc: [0,0], title: 'Crawl before you walk' }
						,{ loc: [0,5], note: 'Create an element' }
						,{ loc: [6,10], note: 'Render it to the screen' }
					]}
					notes="The goal of any templating library is to get content onto the screen"
				/>

				{/* Templating with raw React */}
				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/templating-concrete')}
					ranges={[
						{ loc: [0,2], note: 'Create a div tag' }
						,{ loc: [2,3], note: 'With class "error-message"' }
						,{ loc: [3,4], note: 'Containing some text' }
						,{ loc: [6,10], note: 'And render it to the container' }
						,{ loc: [11,14], note: 'Which React renders as this HTML' }
						,{ loc: [2,3], note: 'What\'s wrong with this line?' }
					]}
					notes="So let's take that same example and write some concrete code"
				/>

				{/* Nesting components */}
				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/templating-nesting')}
					ranges={[
						{ loc: [0,5], title: 'Walk before you run' }
						,{ loc: [6,11] }
					]}
				/>

				{/* Putting these parts together */}
				<CodeSlide
				notes="The thing about React is that, aside from any components you might choose to pull in from the community, you don't really need any libraries. No jQuery. No handlebars or Jade or Nunjucks. So let's look at how you can take some JavaScript data and render it to HTML."
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/js-is-templating-engine')}
					ranges={[
						{ loc: [0,0], title: 'Putting it together' }
						,{ loc: [0,4], note: 'Take some data' }
						,{ loc: [5,9], note: 'Massage that data' }
						,{ loc: [10,17], note: 'Transform it into an array of React elements' }
						,{ loc: [18,32], note: 'Build an element tree by composing elements together' }
						,{ loc: [33,37], note: 'Render it to the screen' }
					]}
				/>

				{/* Results */}
				<Slide>
					<Heading lineHeight={1} size={2} textColor="white">IPA Drinkers</Heading>
					<List textColor="white">
						<ListItem textAlign="center">Tuttle</ListItem>
					</List>
				</Slide>

				{/* If only we had JSX... */}
				<Slide>
					<Text lineHeight={1.5} textColor="white">Calling React.createElement() a lot!</Text>
					<Text lineHeight={1.5} textColor="white"><br/>Shorthand?</Text>
					<Image src={images.troll} style={{maxWidth: '200px'}} />
				</Slide>

				{/* Spaceballs, the presentation */}
				<Slide
					notes="Anyway... This brings me to the first step in my learning process."
					bgColor={pallette.purple} transition={["fade"]} bgImage={images.flamethrower}></Slide>

				{/* Getting excited about tech is a good thing! */}
				<Slide bgColor={pallette.purple} transition={["fade"]} bgImage={images.flamethrower} bgDarken={0.7}
					notes="Get excited! The 3 days of excitement about something new is what makes the three days debugging a hard problem worth it! If you're not allowing yourself to get excited then you're basically just punishing yourself for a living."
				>
					<Heading italic fit>How I Learn #1:<br/>Get excited!</Heading>
				</Slide>

				{/* Cons */}
				<Slide notes="There are some cons. The framework does churn a little bit because it's still pretty young. But Facebook uses the latest alpha versions in production! require('React').version. In particular, when I was rewriting that app, react-router was going through a period of high churn, which cost me a couple of days of frustration trying to get it to bend to my will. I'll talk more about that later.">
					<Heading fit textColor="white">Not all flamethrowers</Heading>
					<List>
						<ListItem textSize="1.1em">Some churn to update React &amp; addons</ListItem>
						<ListItem textSize="1.1em">React core recently considered "stable" (15.0)</ListItem>
						<ListItem textSize="1.1em">Some important community addons aren't "stable" yet</ListItem>
					</List>
				</Slide>

				{/* Pros */}
				<Slide notes="But that said, I wouldn't let those problems hold me back from learning React, if I were you. For one, writing declarative code makese reasoning about that code (designing & debugging) SO MUCH EASIER.">
					<Heading fit>But it's still dope!</Heading>
					<List>
						<ListItem textSize="1.1em">Declarative &gt; Imperative</ListItem>
						<ListItem textSize="1.1em">HTML in your JS, not JS in your HTML</ListItem>
						<ListItem textSize="1.1em">Truly great web-components story</ListItem>
						<ListItem textSize="1.1em">Huge community of components to draw from</ListItem>
						<ListItem textSize="1.1em">Testability*</ListItem>
						<ListItem textSize="1.1em">Universal / Isomorphic option*</ListItem>
					</List>
				</Slide>

				{/* History of React in ~5min */}
				<Slide notes="* * Typeahead: Queries multiple data types & sources as you type; each returning at different, unpredictable times. Each response type potentially rendered slightly differently. Potential race conditions. Cursor management: Which list item was selected before more results came back and what does that mean for the re-render with the new results? And on and on... * At least according to Lee's interview on the React Podcast. * Lee agrees so that he'll be able to speak concretely about why it's a bad idea. * Thinks it's awesome and encourages Jordan to keep working on it. *">
					<Heading fit>React's Origin Story</Heading>
					<List>
						<Appear><ListItem>Jordan Walke (@jordwalke): FB ad campaign creation form</ListItem></Appear>
						<Appear><ListItem>Typeahead for searching different data sources</ListItem></Appear>
						<Appear><ListItem>Lee Byron (@leeb) tasked with asking Jordan to stop</ListItem></Appear>
						<Appear><ListItem>Jordan talks Lee into trying it</ListItem></Appear>
						<Appear><ListItem>Lee (correctly) thought it was awesome</ListItem></Appear>
						<Appear><ListItem>Today most of FB is built with React</ListItem></Appear>
					</List>
				</Slide>
				<Slide notes="The LIKE button is its own component, and I bet that came in handy when they introduced reactions. Can you imagine having to go update every possible place that had like buttons to support reactions too? Because it was a component, they only had to update it once and it was done everywhere.">
					<Heading fit>The "like" button is a<br/>reusable component</Heading>
					<Image src={images.like} style={{marginTop: '40px'}} />
				</Slide>
				<Slide notes="Let's talk about those two JavaScript includes I showed you, and why they aren't just one. React is: createElement, createClass, Component, PropTypes, Children, etc (things you need to build and compose components). ReactDOM is what connects the React component model to the browser DOM. ReactNative does the same job as ReactDOM, but for true native apps. Originally ReactDOM's functionality was just part of React, but when they realized that React's approach to components would be just as awesome even without browsers, they refactored it into these two pieces.">
					<Heading fit>React Native</Heading>
					<Text style={{ color: 'white' }}>Paradigm so good, they expanded on it for true native apps</Text>
				</Slide>

				{/* More on learning */}
				<Slide bgColor={pallette.purple} notes="* * * Then go nuts. Read, watch, or listen to everything you have time for. You won't understand it all right away, but there will come a time when you need something, and it will trigger a memory, and you'll be able to go back and find that podcast episode where they discussed exactly what you need. * At the end of this presentation I'll provide a list of resources">
					<Heading italic fit>How I Learn #2:<br/>Develop the vocab</Heading>
					<List>
						<ListItem>Get the basics from guides or tutorials or conference presentations 😉</ListItem>
						<Appear><ListItem>... which helps you pick up the lingo</ListItem></Appear>
						<Appear><ListItem>Comsume en-masse: blog posts, podcasts, videos, tutorials, etc. Shallow but broad.</ListItem></Appear>
						<Appear><ListItem>Good starting points at the end</ListItem></Appear>
					</List>
				</Slide>

				{/* Components, Bundlers, JSX, Oh my! */}
				<Slide>
					<Heading fit>Taking the Next Steps:</Heading>
					<Heading fit>Components, Bundlers, JSX... Oh my!</Heading>
				</Slide>

				{/* Introduction to React.createClass */}
				<Slide notes="Until now all we've talked about is createElement, which allows you to create HTML tags. CreateClass allows you to bundle some elements together with render logic into a reusable component. In essence, this is where the magic happens.">
					<Heading fit textFont="Operator Mono ScreenSmart">React.createClass()</Heading>
				</Slide>

				{/* React.createClass template */}
				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/createClass-template')}
					ranges={[
						{ loc: [0,0], title: 'Our first component' }
						,{ loc: [0,1], note: 'Declare your component with React.createClass, pass it an Object {}' }
						,{ loc: [2,11], note: 'React will call the render method to compose your DOM' }
						,{ loc: [4,9], note: 'Your render logic defines what you want rendered' }
					]}
				/>

				{/* Props */}
				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/createClass-props')}
					notes="It's possible to set default prop values, but that's left as homework for the audience"
					ranges={[
						{ loc: [0,0], title: 'Let\'s make it reusable'  }
						,{ loc: [0,4], note: 'Instantiate custom Components with createElement' }
						,{ loc: [5,16], note: 'Start with the same component' }
						,{ loc: [12,13], note: 'But replace the static label text with a variable named this.props.text' }
						,{ loc: [2,3], note: 'Props are the things in the 2nd argument; how you pass data to child components' }
						,{ loc: [17,20], note: 'React allows us to define some rules for required/optional props and their types' }
						,{ loc: [23,24], note: 'Above code results in this HTML' }
					]}
				/>

				<Slide notes="If you were to try and simplify React's approach to rendering and updating your UI over time, to as simple as possible without being incomprehensible, this is what you would get. In addition to the actual DOM that the browser manages, React keeps a virtual copy in memory and as you make changes, only the virtual DOM is updated. After all of your changes are done, the virtual dom is compared against the browser dom, and only the differences are applied.">
					<Heading fit>VirtualDOM & Diffing</Heading>
				</Slide>

				{/* React Developer Tools */}
				<Slide notes="Show audience RDT view of this presentation">
					<Heading fit>React Developer Tools</Heading>
				</Slide>

				{/* NoobTip: Keep components small */}
				<Slide bgColor={pallette.brightblue}
				notes="When you start to feel like you need to add logic to handle different display options, that's usually a good time to split your component into some new smaller chunks and reuse those, rather than complicating the component you're working on.">
					<Heading italic>Noob tip:</Heading>
					<Heading fit>Keep components small</Heading>
					<List>
						<ListItem>Easier to understand</ListItem>
						<ListItem>Easier to compose</ListItem>
						<ListItem>Easier to test</ListItem>
						<ListItem>Easier to maintain</ListItem>
					</List>
				</Slide>

				{/* STATE */}
				<Slide notes="React components have access to two types of data: Props and State. Props are what a parent component provides to a child component. State is sort of a little in-memory database built into your components, and you use it for data that changes over time. I like to think of State as how you store the data that your app cares about and the status of the user's instance of your application. And the thing about State is that the less of it you use, the more you'll enjoy your life choices. In simpler apps, you may not need state at all.">
					<Heading fit>State</Heading>
					<List>
						<ListItem>Avoid it until you can't</ListItem>
						<ListItem>Can you live with props alone?</ListItem>
					</List>
				</Slide>

				<Slide notes="State makes testing harder because your tests will need a 'get it into the right state first' step; which makes them more fragile and error prone">
					<Heading fit>State makes <S type="italic">testing</S> harder</Heading>
				</Slide>

				<Slide notes="State makes reasoning harder because you constantly have to ask yourself: Has this bit been initialized? What happens if I change this bit? How many places can change this bit? Are there any race conditions?">
					<Heading fit>State makes <S type="italic">reasoning</S> harder</Heading>
				</Slide>

				<Slide notes="So thinking about my event check in app again, it's a list of events and attendees, the selected event, which way you want to look at the data (by party, alphabetically), and some information about the logged in user.">
					<Heading fit>State is the data that<br/>your app needs to run</Heading>
				</Slide>

				<Slide notes="The truth is that State is inevitable, so here are some coping mechanisms.">
					<Heading fit>State is inevitable</Heading>
					<List>
						<ListItem style={{marginBottom:'40px'}}>Keep it as high in your component hierarchy as possible</ListItem>
						<ListItem style={{marginBottom:'40px'}}>Pass bits of state down as props</ListItem>
						<ListItem>State is easy to share down the tree, hard to share up or across.</ListItem>
					</List>
				</Slide>

				<Slide notes="Using state is fairly easy: You set it into your component with this.setState, and you read it out with this.getState. The tricky part is combining those with React's LifeCycle methods to achieve the desired data changes and UI repaints.">
					<Heading fit>
						<code>this.setState(/* your state */)</code>
						<br/><code>this.getState() //=> your state</code>
					</Heading>
				</Slide>

				<Slide bgColor={pallette.orange} notes=".... As you all know, business logic belongs somewhere over with the data, not in the view layer.">
					<Heading fit italic>Warning</Heading>
					<Text>State makes it too easy to put business logic into the component, where it doesn't belong.</Text>
				</Slide>

				{/* homework: lifecycle methods*/}
				<CodeSlide
					notes="When you start using State, you will start to need React's LifeCycle methods... These are what React informally refers to as 'escape hatches' and are a way for React to let you implement better logic than it can for deciding when to re-render your components."
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/react-lifecycle')}
					ranges={[
						{ loc: [0,9], title: 'HW: LifeCycle Methods'}
					]}
				/>

				{/* ADDING A BUILD STEP */}

				<Slide notes="You CAN write a whole React app, even a huge one, inside a single script tag inline right in your page. But hopefully you'll agree that eventually that's going to become a nightmare to work on. Sooner or later you're going to want to use a build step so that you can split your app up into multiple files.">
					<Heading fit>Adding a Build Step</Heading>
					<Heading style={{color:'white'}} size={5}>The elephant in the room</Heading>
				</Slide>

				<Slide notes="What we commonly refer to as a Build Step is usually a transpiler. And build steps, or transpilers, are not only a vital part of writing modern react, but they are also becoming a vital part of writing modern vanilla JavaScript code. JavaScript has been stagnant for decades at a time, and all of a sudden we've got ES2015 and ES2016 and ES2017 already being discussed and worked on. Browsers can't possibly implement everything immediately, so transpilers allow the code of the future to run in the browsers of today. They're super important because they allow implementers and early adopters to base their feedback on direct experience rather than just thinking really hard about what it might be like to use a new feature. You can also think of them as being similar to polyfills that you might use in your code today, except that instead of defining missing functionality, they're just compiling the nice new syntax to a compatible implementation with older syntax.">
					<Heading size={2}>Transpilers are here to stay</Heading>
					<Text style={{color:'white'}}>They allow the code of the future to run in the browsers of today</Text>
				</Slide>

				<Slide notes="Hopefully the idea that build systems are compilers is comforting, not stressful. Compilers are something we all use every day, even for dynamic scripting languages. Even vanilla JavaScript is compiled; it's just done by the browser.">
					<Heading>Build systems are compilers</Heading>
					<Text style={{color:'white'}}>Code goes into one end, different code comes out the other end</Text>
				</Slide>

				<Slide notes="There are two main build systems people use with React: Browserify and Webpack. There are others but these are the ones that have decent size communities built up around them. Coverage here will be shallow because each could easily fill a deep dive session of its own.">
					<Heading>Browserify vs. Webpack</Heading>
				</Slide>

				<Slide notes="I started out using Browserify and Grunt because I already had some experience with both. They were familiar so that made it easy. Lately though, I've been looking over the fence at Webpack's lawn, and it's looking pretty green. I need to carve out some time to learn it well enough to decide if I should switch.">
					<Heading fit>I already knew<br/>Browserify and Grunt</Heading>
					<Text style={{color:'white'}}>Node style <code style={{fontFamily: 'Operator Mono ScreenSmart'}}>require()</code> for the front-end</Text>
				</Slide>

				<Slide notes="Here's a link to my starter Grunt config for using Browserify to compile React applications. This is not the best, most awesome setup for writing React apps, but it's small and it's simple and understandable. It only has a few moving parts, and it works for me. ... Everyone got that URL? Great... * Just kidding. If you want to go deep on build tools, come back to this room after lunch. Jessica Kennedy is doing a 2 hour deep dive on them. I don't know if she's covering JavaScript transpilers, but if you're a build-step virgin, her session would be a great place to start.">
					<Heading fit>My Grunt+Browserify config</Heading>
					<Heading fit style={{margin: '30px 0'}}>https://gist.github.com/atuttle/e366eef4a17efd4e2677c4cffb680909</Heading>
					<Appear>
						<Heading fit>goo.gl/FTxMaB</Heading>
					</Appear>
				</Slide>

				{/* File Separation */}
				<Slide notes="There are a bunch of different reasons that could drive you into the arms of a build system, but today we're only going to talk about two of them.">
					<Heading fit>Reason #1: File Separation</Heading>
					<Text style={{marginTop: '40px'}}><code style={{color:'white'}}>MyModule = require('../lib/MyModule.js')</code></Text>
				</Slide>

				{/* JSX! */}
				<Slide notes="JSX is kind of weird and shocking the first time you see it, but if you give it a fair chance I think you're going to like it. Basically, it looks like you're writing HTML in your JavaScript without any window-dressing at all.">
					<Heading fit>Reason #2:</Heading>
					<Heading fit>JSX!</Heading>
				</Slide>

				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/jsx-explanation')}
					notes=""
					ranges={[
						{ loc: [0,0], title: 'The Genesis of JSX'  }
						,{ loc: [0,0], note: 'We\'ve accepted that we\'re going to use a transpiler, so...' }
						,{ loc: [0,4], note: 'What if we wrote a DSL that looked like this' }
						,{ loc: [7,15], note: '...that compiled to this' }
						,{ loc: [18,22], note: '...which React renders to this' }
						,{ loc: [25,28], note: 'Because it is JS, you can intermingle JS (in curly braces)' }
						,{ loc: [31,35], note: 'Then you could combine it with FP concepts for terse layout building' }
						,{ loc: [38,43], note: 'Multi-line statements should be ( wrapped in parenthesis )' }
						,{ loc: [39,40], note: 'camelCased props will become hyphenated HTML attributes' }
						,{ loc: [46,47], note: 'One set of curly braces to indicate JS, another set to create an object literal' }
					]}
				/>

				{/* Holy shit */}
				<Slide notes="Holy shit, right?">
					<video src={images.holy_shit} style={{ maxWidth: '100%' }} controls loop />
				</Slide>

				<Slide bgColor={pallette.purple} notes="Pick something you want to do that has a pre-requisite you'll need to accomplish first. Go deep on it. When you're comfortable again, it's time to pick something else. In some ways, this is where I am now. Like I mentioned, I have more to learn about Webpack. But the key is that it's totally fine to intentionally do things the old way, or the hard way, for a while, to avoid having to learn something that seems daunting or complex. You'll get to it, but spending some time feeling the pain of the method that you at least understand will improve your understanding and appreciation for the new way when you get to it.">
					<Heading italic fit>How I Learn #3:<br/>Go deep on one thing<br/>at a time</Heading>
					<Text style={{color:'white'}}>JSX => you need a build system. Learn one or more build systems & make them your bitch.</Text>
				</Slide>

				<Slide bgColor={pallette.brightblue} notes="We're just about to a good stopping point, so before we take a break, does anyone have any questions?">
					<Heading fit italic>Questions?</Heading>
				</Slide>

				{/* END OF HOUR ONE! */}
				<Slide>
					<Heading fit>Break time!</Heading>
					<video src={images.breaktime} controls autoPlay loop style={{maxWidth: '100%'}} />
				</Slide>

				<Slide>
					<Heading fit>Welcome back!</Heading>
					<video src={images.welcome_back} controls autoPlay loop style={{maxWidth: '100%'}} />
				</Slide>

				{/* Imperative cautionary tale */}
				<Slide notes="One of the great things about React, in my opinion, is that it uses a declarative model for building your UI. * For anyone that doesn't understand the difference between declarative and imperative programming, let's walk through a true story.">
					<Heading fit>Declarative vs. Imperative</Heading>
					<Appear style={{color:'white'}}>
						<Text style={{color:'white'}}>A cautionary tale</Text>
					</Appear>
				</Slide>

				<Slide notes="This is the spec that was given to me for the first version of the mobile app I showed earlier. I took this and I built something with jQuery and no CSS framework and ... it was pretty awful. It worked, which was great because it validated the idea, but in almost every other way it was awful.">
					<Heading fit>Mobile web app</Heading>
					<List>
						<ListItem>List events, sorted chronologically</ListItem>
						<ListItem>List attendees, sorted alphabetically</ListItem>
						<ListItem>"Check in" action</ListItem>
						<ListItem>Offline friendly</ListItem>
					</List>
				</Slide>

				<Slide notes="So you've got something that's barely passable as a useful tool, and you show it to your boss, and what's her first reaction? Feature request! So you add this feature and then go and update every possible state/view of the app to toggle it on/off appropriately.">
					<Heading fit>Feature Request!</Heading>
					<Text style={{marginTop: "40px", color: 'white' }}>Jump to a letter</Text>
				</Slide>

				<Slide notes="And when you take it back, again, you get a feature request. This one requires finding all of the AJAX requests being made, triggering the display of the loading screen, and then hiding it when the AJAX requests complete. And you have to make sure you handle all possible errors so nobody gets stuck at a loading screen that won't go away.">
					<Heading fit>Feature Request!</Heading>
					<Text style={{marginTop: "40px", color: 'white' }}>"Loading" screen</Text>
				</Slide>

				<Slide notes="Then you get ANOTHER feature request. I implemented this as a day-glow orange bar below the letter jumper; and I wanted to hide it when not logged in and in a few other scenarios. It affects placement of letter jumper when both are visible, so every place that could have it needs to be touched to make sure it displays correctly with and without the pending action count.">
					<Heading fit>Feature Request!</Heading>
					<Text style={{marginTop: "40px", color: 'white' }}>Show pending request # when > 0</Text>
				</Slide>

				<Slide notes="And then you get a feature request for a whole new view! You have to consider the visibility & placement of components in the new view. Are there any other side effects?">
					<Heading fit>Feature Request!</Heading>
					<Text style={{marginTop: "40px", color: 'white' }}>"Undo" check in screen</Text>
				</Slide>

				<Slide notes="Feature request! Another new view! Re-sort the data, display it differently, and trigger potentially several api calls from one user action. We're really ramping up the complexity now.">
					<Heading fit>Feature Request!</Heading>
					<Text style={{marginTop: "40px", color: 'white' }}>Check in by party screen</Text>
				</Slide>

				<Slide notes="And then... Oh no! They tried to use our app for an event with 2,500 attendees, and it just wouldn't work. JavaScript on an iPad just couldn't keep up with rendering and then keeping track of that many DOM elements. If you've ever tried to inject a really long string of HTML into the DOM, you know this pain.">
					<Heading italic>Bug!</Heading>
					<Text style={{marginTop: "40px", color: 'white' }}>Large attendee lists choke JS rendering</Text>
				</Slide>

				<Slide notes="If you're like me -- the me from a year or two ago -- As I was describing those feature requests you might have been thinking of the approach you would take with jQuery to accomplish each of these tasks. The way that jQuery works is it assumes you know the current state of the DOM, and you tell it how to make some modifications to the DOM to get from point A to point B. But that assumption could be wrong. And that's when bugs happen.">
					<Heading fit>jQuery is imperative</Heading>
					<Text style={{marginTop: '40px', color: 'white' }}>Bugs occur when our assumptions about state are wrong</Text>
				</Slide>

				<Slide notes="The problem with imperative programming is that it is too easy to embed crucial context in places it doesn't belong, like the DOM, rather than in your application's state.">
					<Heading fit>Declarative programming<br/>to the rescue!</Heading>
				</Slide>

				<Slide notes="Among other good things, Declarative programming is Deterministic. Which means that the output is pre-determined by the inputs. 2 + 2 always equals 4.">
					<Heading fit>Declarative =<br/>Deterministic</Heading>
				</Slide>

				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/deterministic-render')}
					notes="The contents of the DOM will be the result of running the current state of your application data through a function that translates it into DOM elements. Everything needed to build that DOM tree is contained within the state data. And if you compose one render function out of calls to many others, then you have the basic approach of React"
					ranges={[
						{ loc: [0,1] }
					]}
				/>

				{/* Begin Redux */}
				<Slide notes="So as we discussed, you can only avoid state for so long. When you do finally bite the bullet, my recommendation is that you go straight to...">
					<Heading fit>You can only avoid state for so long...</Heading>
				</Slide>

				<Slide notes="Because Redux is awesome.">
					<Heading fit italic>Redux!</Heading>
				</Slide>

				<Slide notes="Flux takes React's philosophy of composing simple parts and only having one way to do things, and applies that to the idea of your application state over time. Redux is one of the most popular implementations of this philosophy because of its sheer simplicity.">
					<Text style={{ color: 'white' }}>A simplified reimagining of Flux</Text>
				</Slide>

				<Slide notes="Dan Abramov created Redux to use with React, and he was later hired by Facebook to work on React itself. His video courses on egghead are better than I could do even if we dedicated two hours just to Redux. But I'm going to try to give you the basics.">
					<Heading fit>egghead.io/search?q=redux</Heading>
					<Text style={{ color: 'white' }}>@dan_abramov</Text>
				</Slide>

				<Slide notes="Redux has three basic principles: (1) All of your application data is represented by a single plain JavaScript object, which is saved in what Redux calls a Store. (2) Instead of just changing the data, you create Actions that describe changes to your data, and give those to Redux. And (3) You write functions called reducers that apply the changes from your actions to the data in the store. Combined, these 3 principles create a deterministic approach to your data, with perfect predictability.">
					<Heading>Redux Basics</Heading>
					<List>
						<ListItem>All app data: single JS object saved in a Store</ListItem>
						<ListItem>Actions describe changes to store data</ListItem>
						<ListItem>Reducers apply Actions to update the Store</ListItem>
					</List>
				</Slide>

				<Slide notes="Reducers work like this: The state of your app at any given time is the result of a series of actions performed against the base state. * A user logs in, so you save that login state. * They need the list of events, so you go get it, and now the state is a logged in user with a list of events; AND YOU RENDER THIS NEW STATE. * They select an event. The new state is that one of the events is selected. * This triggers loading the list of attendees, so the state now has a list of attendees for the selected event; AND YOU RENDER THIS NEW STATE. And you just keep repeating this, over and over.">
					<Heading>Reducers</Heading>
					<Appear><Heading fit>Next State = Current State + Action</Heading></Appear>
					<Appear><Heading fit>Next State = Current State + Action</Heading></Appear>
					<Appear><Heading fit>Next State = Current State + Action</Heading></Appear>
					<Appear><Heading fit>Next State = Current State + Action</Heading></Appear>
				</Slide>

				<Slide notes="A reducer is a pure function that satisfies ^this^ spec. A pure function is just a function that doesn't depend on anything other than its input arguments, and doesn't have any side effects. So if it reads or writes global variables, it's not a pure function. The only thing it can do is return a value.">
					<Heading>Reducers</Heading>
					<Heading fit><code>nextState = getNextState(state, action)</code></Heading>
				</Slide>

				<Slide notes="If you combine the idea of reducers with the concept of Event Emitters from node, you get Redux.">
					<Heading fit>... plus an Event Emitter</Heading>
					<Text style={{ color: 'white' }}>to notify components when data changes</Text>
					<Text style={{marginTop: '40px', color: 'white'}}><code>{`store.subscribe(function(state){})`}</code></Text>
				</Slide>

				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/node-event-emitters')}
					notes="Let's talk about Node's Event Emitters"
					ranges={[
						{ loc:  [0,0], title: 'Node.js Event Emitters' }
						,{ loc: [0,2], note: 'Create an event emitter instance' }
						,{ loc: [3,6], note: 'Create a handler function and subscribe it to the desired event type' }
						,{ loc: [7,8], note: 'When something emits that event' }
						,{ loc: [9,10], note: 'Your handler is called' }
					]}
				/>

				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/selected-event-reducer')}
					notes="Here's one of my reducers from the app I showed earlier. Remember that a bunch of reducers get composed to create the updated application state -- one for each discrete piece of state. This is my reducer for handling changes to the selected event of my app."
					ranges={[
						{ loc:  [0,0], title: 'Selected Event Reducer' }
						,{ loc: [0,1], note: 'Satisfies the next_state = state + action spec' }
						,{ loc: [1,4], note: 'Defaulting argument values (the ES5 way)' }
						,{ loc: [4,5], note: 'Most reducers are just a switch statement that handles all applicable action types' }
						,{ loc: [6,7], note: 'One potential action is refreshing the list of events after one has been selected' }
						,{ loc: [6,15], note: 'When we\'re refreshing the entire event list, keep the same event selected if still available, else null' }
						,{ loc: [16,17], note: 'When selecting an event, the action tells you which event is selected so just return it' }
						,{ loc: [18,21], note: 'When going back to the event list or logging out, there is no selected event, return null' }
						,{ loc: [22,23], note: 'All reducers run for all actions, so for the default case you usually return the current state' }
					]}
				/>

				<Slide notes="Now we apply the same philosophy from React of composing small independent parts to composing reducers.">
					<Heading fit>Compose reducers<br/>just like components</Heading>
				</Slide>

				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/reducer-composition')}
					notes="Redux provides a method to do this for us, called combineReducers. And you can use it more than once. The userReducer could be the result of calling combineReducers on some other reducer functions. That's what we mean by composition."
					ranges={[
						{ loc:  [0,9], title: 'Composing Reducers' }
					]}
				/>

				<Slide notes="When we talk about Reducers creating lots of new javascript objects to overwrite the state, is anyone worried about memory consumption or garbage collection? Because if you are then you're right. This approach could potentially thrash a good bit of memory, especially on mobile devices where there is less to spare. * Unless you're using Immutable data -- or at least treating your data as if it were immutable. I know it sounds weird. How can something that's immutable be used to track data changes over time? Maybe it's just a bad name. But basically, it's just a very memory-efficient way to track data changes over time by using pointers referring to previous instances for anything that hasn't changed. So for more homework, I suggest you look into ImmutableJS. Dan gives a really great primer on how immutability works in his Getting Started with Redux course on egghead, so even just watching that will teach you enough to decide if you want to know more.">
					<Heading fit>Is anyone worried about<br/>JS memory usage or GC?</Heading>
					<Appear style={{ marginTop: '40px', color: 'white' }}>
						<Text>Immutability to the rescue!<br/>(Yes, more homework)</Text>
					</Appear>
				</Slide>

				<Slide notes="For the sake of time I didn't go very deep on anything, but this should have given you the basic idea of what Redux does and how it works. I would love to spend another 2 hours chewing your ear off about all of these things, so if you want to talk more about it come sit with me at lunch and we can keep the discussion going. But for now, we must move on...">
					<Heading fit>* Hand-waving intensifies *</Heading>
				</Slide>
				{/* End Redux */}


				{/* Combining Redux and React */}
				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/combining-redux-react')}
					notes="So we have React which is great, and Redux which is great. How do we make them play nice together? This is what I did in my app. It's not the ordained way, but it worked for me. I'm sure I'll refactor it over time to do things right, but when deadlines are looming working is more important than right, and that's how this app got to where it is."
					ranges={[
						{ loc:  [0,0], title: 'Combining Redux & React' }
						,{ loc: [1,2], note: 'Create your Redux store as a JS module, and import it' }
						,{ loc: [6,7], note: 'Create a root component for your application' }
						,{ loc: [7,8], note: 'When React decides it will be rendering your app...' }
						,{ loc: [7,10], note: 'Load the Redux state into the App component state' }
						,{ loc: [10,11], note: 'After rendering is complete...' }
						,{ loc: [10,16], note: 'Subscribe so that future store udpates flow into App state' }
						,{ loc: [16,27], note: 'Render the app from state data, passing props' }
					]}
				/>

				<Slide notes="A personal rule of thumb I've been using so far is that you should only use component state in your root component, and everything else should be passed down from that root component as props. I'm sure there are logical places to break that rule, but it has been serving me well so far.">
					<Heading fit>Rule of thumb:</Heading>
					<Text style={{ marginTop: '40px', color: 'white' }}>Only use component state in your root component</Text>
				</Slide>

				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/redux-dispatch')}
					notes="So now that we've got our app rendering from the state data saved in Redux, how do we trigger actions that update that data?"
					ranges={[
						{ loc: [0,0], title: 'Dispatching Actions', note: 'In some random file in our application...' }
						,{ loc: [1,2], note: 'Access your Redux store from its module' }
						,{ loc: [18,19], note: 'From some UI component...' }
						,{ loc: [19,29], note: 'Declare some UI elements that will be interacted with' }
						,{ loc: [10,17], note: 'In this case, buttons that call filterLink() when clicked' }
						,{ loc: [3,9], note: 'Which dispatches our new action, causing any necessary re-rendering' }
					]}
				/>

				<Slide>
					<Heading>Redux Devtools</Heading>
				</Slide>

				<Slide notes="v1 was proof of concept. v2 built with Ionic and Angular. Cookie cutter Ionic, but it mostly got the job done. v3 was my first attempt with React, it showed promise but I made several poor choices. Instead of deleting everything and starting over, I would leave these attempts behind as gravestones, to be examined any time I was unsure about some decision but knew I had seen it before. v3.5 I tried to correct my mistakes after taking a React training course, but got too caught up in trying to make React Router work how I wanted it to. v4 I gave up on routes (irrelevant) and went back to basics. After ignoring routes I really hit my stride. I found react-virtualized which solved the 'rendering thousands of list items' issue, and all of the complexity of the app was easier to manage.">
					<Heading fit>App rebuilt<br/>with React & Redux</Heading>
					<Text style={{ marginTop: '40px', color: 'white' }}>What went well, what didn't?</Text>
					<Text style={{ color: 'white' }}>Road to v4? (versions 1, 2, 3, 3.5, 4)</Text>
				</Slide>

				<Slide bgColor={pallette.purple} notes="In my opinion, teaching is an integral part of the learning process. It helps you explore things you thought you knew but didn't. It doesn't have to be anything big like a conference presentation. Even just mentoring a coworker is really helpful. If you don't have a team, or they're not ready or willing to be taught, local meetups are usually happy to host you.">
					<Heading italic fit>Learning Tip #4:<br/>Teach Someone</Heading>
					<video src={images.inception} loop autoPlay controls style={{maxWidth:'100%'}} />
				</Slide>

				<Slide notes="What's next for me? Testing is going to be a big focus. I'm told that React really improves testability, so I'm hoping to make that a big focus in the near future. Immutability: Either confirming via tests as Dan does in some of his videos, or using a library called ImmutableJS. Probably ImmutableJS because it sounds interesting. Webpack is continuing to gain in popularity, and it seems to have some tricks that Browserify doesn't, so I'm really curious about it. React Router went through a rough patch, but it's supposed to be much better now. My understanding of the helpers that abstract away boilerplate for Redux is limited at best, so I have a lot to learn there. Inline CSS is an intriguing phenomenon but I don't know enough about it yet. Isomorphic sounds awesome after we get our app converted to Node.">
					<Heading fit>What's next for me?</Heading>
					<List>
						<ListItem>Testing my React components</ListItem>
						<ListItem>Immutability</ListItem>
						<ListItem>Webpack</ListItem>
						<ListItem>React Router</ListItem>
						<ListItem>Redux++</ListItem>
						<ListItem>Inline CSS</ListItem>
						<ListItem>Universal/Isomorphic</ListItem>
					</List>
				</Slide>

				<Slide bgImage={images.dangerous_alone}
				notes="And that brings us to Resources! Stuff to help you on your journey...">
				</Slide>

				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/dump')}
					notes="Are there any CFML developers in the room? We didn't cover it here but you can write components that are literally just a function if all you need is the render method, and I ran across this on twitter one day a while back and found it amusing how much it resembles CFDump."
					ranges={[
						{ loc: [0,7], note: '<Dump data={someVar} />' }
					]}
				/>

				<Slide notes="This presentation was not meant to be a full-on training, more of just a primer. This github repository is an amazing document that describes the list of topics you should consider studying and what problems they solve, and the best order to tackle them. It also provides some links to resources for learning them.">
					<Heading fit>Unofficial Syllabus</Heading>
					<Text style={{ marginTop: '40px', color: 'white' }}>github.com/petehunt/react-howto</Text>
				</Slide>

				<Slide notes="RFB: I bought a team license for this for my team, and we liked it. It goes pretty in depth, and covers some ES6 too, in case you need that. Dan's videos on Egghead are objectively awesome. He's recently released a 2nd course, but it picks up right where the first one leaves off. Nodeschool has two different courses that might be useful: LearnYouReact and Thinking In React. ReactJSProgram is one I've seen but not used. That one also is not free.">
					<Heading fit>Online Trainings</Heading>
					<List>
						<ListItem>ReactforBeginners.com 💰</ListItem>
						<ListItem>egghead.io/search?q=redux</ListItem>
						<ListItem>Nodeschool</ListItem>
						<ListItem>ReactJsProgram.com 💰</ListItem>
					</List>
				</Slide>

				<Slide notes="Podcasts are awesome. I listen to them whenever I'm in the car by myself, and in the shower, and while I cut my grass, and pretty much any time I'm alone.">
					<Heading>Podcasts</Heading>
					<Image style={{float: 'right', maxWidth: '30%'}} src={images.speaker}></Image>
					<List>
						<ListItem>React Podcast</ListItem>
						<ListItem>JavaScript Jabber</ListItem>
						<ListItem>JavaScript Air</ListItem>
						<ListItem>React30</ListItem>
					</List>
				</Slide>

				<Slide>
					<Heading>Misc</Heading>
					<List>
						<ListItem>ReactJsNewsletter.com</ListItem>
						<ListItem>Discord (like slack) reactiflux.com</ListItem>
						<ListItem>js.coach: searchable curated community projects</ListItem>
						<ListItem>reddit.com/r/reactjs</ListItem>
					</List>
				</Slide>

				<Slide bgColor={pallette.brightblue} notes="IDEA: show react-virtualized for virtual scrolling">
					<Heading fit italic>Questions?</Heading>
				</Slide>

				<Slide bgColor="black">
					<video src={images.fin} style={{ maxWidth: "100%" }} controls></video>
				</Slide>
			</Deck>
		</Spectacle>
	 );
  }
}
