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
	fatigue: require('file!../assets/fatigue.webm'),
	millenials: require('../assets/millenials.png'),
	jsjabber: require('../assets/js-jabber.png'),
	before1: require('../assets/app-before-1.png'),
	before2: require('../assets/app-before-2.png'),
	after1: require('../assets/app-after-1.png'),
	after2: require('../assets/app-after-2.png'),
	tweet: require('../assets/app-tweet.png'),
	troll: require('../assets/troll.png'),
	like: require('../assets/like.png'),
	flamethrower: require('../assets/new-tech.jpg'),
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

				{/* TITLE SLIDE */}
				<Slide>
					<Heading fit textColor="white" >
						React.JS:<br/>My Journey So Far
					</Heading>
					{/*style={{marginTop:'-75px'}}*/}
					{/*
					<br/>
					<Heading size={2} bold italic center lineHeight={1} textColor="white">
						Adam Tuttle
					</Heading>
					*/}
				</Slide>

				{/* 2015 JS be like */}
				<Slide>
					<Heading size={3} fit italic lineHeight={1} textColor="white">
						2015 JavaScript be like
					</Heading>
					<video src={images.fatigue} style={{ maxWidth: "100%" }} loop autoPlay></video>
				</Slide>

				{/* I heard React was good */}
				<Slide bgColor="white">
					<Image src={images.millenials} style={{ maxHeight: '100%' }} />
				</Slide>

				{/* When I say React you hear... */}
				<Slide>
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
				<Slide bgImage={images.jsjabber} bgDarken={0.7}>
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
				<Slide bgImage={images.jsjabber} bgDarken={0.7}>
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
				<Slide notes="And after I showed it to my boss, he tweeted this">
					<Image src={images.tweet} />
				</Slide>

				{/* My first impressions */}
				<Slide notes="Old design wasn't bad but it was cookie cutter Ionic. New design is custom to match our primary app.">
					<List textColor="white">
						<ListItem>Easier to stay productive</ListItem>
						<ListItem>Easier to break into components = easier to redesign</ListItem>
						<ListItem>React & community solved many bugs & problems for me!</ListItem>
					</List>
				</Slide>

				{/* Adam is a noob */}
				<Slide bgColor={pallette.brightblue} notes="My name is Adam Tuttle and I'm a nobody in the React and JS communities. And that's the point of this presentation. I'm new at this and my hope is that my perspective as a newbie will be beneficial to you as someone interested in learning it.">
					<Heading fit>@AdamTuttle</Heading>
					<Appear>
						<Heading size={2} italic>noob at React</Heading>
					</Appear>
				</Slide>

				<Slide bgColor={pallette.brightblue} transition={['zoom','fade']}
				notes="Try to keep that in mind as we spend the next 2 hours together: I'm likely to get a few things wrong, because I'm still learning.">
					<Heading fit italic>Caveat Emptor!</Heading>
				</Slide>

				{/* Goals for this session */}
				<Slide>
					<Heading>Goals</Heading>
					<List>
						<ListItem>Teach you the basics of ReactJS</ListItem>
						<ListItem>My approach to learning new tech</ListItem>
					</List>
				</Slide>

				<Slide>
					<Heading fit>Code!</Heading>
				</Slide>

				{/* first code sample */}
				<CodeSlide
					lang="html"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/barebones')}
					notes="Combined these JS files are about 30 kb minified and gzipped, roughly the same size as jQuery 3, released last week"
					ranges={[
						{ loc: [0,0], title: 'Minimum Viable App' }
						,{ loc: [2,4], note: 'Just include some React files...' }
						,{ loc: [6,10], note: '...add some script and a container and go' }
						,{ loc: [6,10], title: 'Tools fatigue my ass!' }
					]}
				/>

				<Slide notes="You can kind of think of React as just a templating library with a bunch of goodies layered on top">
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
						,{ loc: [11,12], note: 'Which React renders as this HTML' }
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
				notes="Forget Handlebars or Nunjucks... JavaScript (with some help from React) is your templating engine"
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/js-is-templating-engine')}
					ranges={[
						{ loc: [0,0], title: 'Putting it together' }
						,{ loc: [0,4], note: 'Take some data' }
						,{ loc: [5,9], note: 'Massage that data' }
						,{ loc: [10,17], note: 'Transform it into React elements' }
						,{ loc: [18,32], note: 'Build a component tree by composing elements together' }
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
				<Slide bgColor={pallette.purple} transition={["fade"]} bgImage={images.flamethrower}></Slide>

				{/* Getting excited about tech is a good thing! */}
				<Slide bgColor={pallette.purple} transition={["fade"]} bgImage={images.flamethrower} bgDarken={0.7}
					notes="The 3 days of excitement about something new is what makes the three days debugging a hard problem worth it!"
				>
					<Heading italic fit>How I Learn #1:<br/>Get excited!</Heading>
				</Slide>

				{/* Cons */}
				<Slide notes="There are some cons, like framework/addon churn, but Facebook uses the latest alpha versions in production!: require('React').version, and staying ahead of your team makes you more valuable to the team.">
					<Heading fit textColor="white">Not all flamethrowers</Heading>
					<List>
						<ListItem textSize="1.1em">React core recently considered "stable" (15.0)</ListItem>
						<ListItem textSize="1.1em">Some important community addons aren't "stable" yet</ListItem>
						<ListItem textSize="1.1em">Some frequent churn to update framework &amp; addons</ListItem>
					</List>
				</Slide>

				{/* Pros */}
				<Slide notes="Declarative code => reasoning (designing & debugging) SO MUCH EASIER. Testing components in isolation based on the props you pass them is 👌">
					<Heading fit>But it's still dope!</Heading>
					<List>
						<ListItem textSize="1.1em">Declarative &gt; Imperative</ListItem>
						<ListItem textSize="1.1em">HTML in your JS, not JS in your HTML</ListItem>
						<ListItem textSize="1.1em">Truly great web-components story</ListItem>
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
				<Slide notes="The LIKE button is a component, and I bet that came in handy when they introduced reactions. Can you imagine having to go update every possible place that had like buttons to support reactions too?">
					<Heading fit>The "like" button is a<br/>reusable component</Heading>
					<Image src={images.like} style={{marginTop: '40px'}} />
				</Slide>
				<Slide notes="React is: createElement, createClass, Component, PropTypes, Children, etc (things you need to build and compose components). ReactDOM is what connects the React component model to the browser DOM. ReactNative is the things you have or need in Native apps that don't apply in the browser.">
					<Heading fit>React Native</Heading>
					<Text>Paradigm so good, they expanded on it for true native apps</Text>
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
				<Slide notes="Until now all we've talked about is createElement, which is how you create HTML tags. CreateClass allows you to bundle some elements and logic together into a reusable component that includes everything needed for a small portion of your UI.">
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
						,{ loc: [4,9], note: '... which returns some composed tree of elements' }
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
						,{ loc: [0,9], note: 'Start with the same component' }
						,{ loc: [7,8], note: 'and replace the static label text with a variable named this.props.text' }
						,{ loc: [6,7], note: 'Props are the things in the 2nd argument; how you pass data between components' }
						,{ loc: [12,15], note: 'React allows us to enforce some rules for required and optional props and their types' }
						,{ loc: [18,22], note: 'How do you use your component? How are props passed? Via React.createElement' }
						,{ loc: [23,24], note: 'Which results in this HTML' }
					]}
				/>

				{/* React Developer Tools */}
				<Slide notes="Show audience RDT view of this presentation">
					<Heading fit>React Developer Tools</Heading>
				</Slide>

				{/* NoobTip: Keep components small */}
				<Slide bgColor={pallette.brightblue}>
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
				<Slide notes="State is how you store the data that your app cares about and the status of the user's instance of your application">
					<Heading fit>State</Heading>
					<List>
						<ListItem>Avoid it until you can't</ListItem>
						<ListItem>Can you live with props alone?</ListItem>
					</List>
				</Slide>

				<Slide notes="State makes testing harder because your tests will need a 'get it into the right state first' step; which makes them more fragile and error prone">
					<Heading fit>State makes <S type="italic">testing</S> harder</Heading>
				</Slide>

				<Slide notes="State makes reasoning harder because you constantly have to ask yourself: Has this bit been initialized? What happens if I change this bit? How many places can change this bit? Are there any race conditions? And on and on...">
					<Heading fit>State makes <S type="italic">reasoning</S> harder</Heading>
				</Slide>

				<Slide notes="So thinking about my event check in app, it's a list of events and attendees, the selected event, which way you currently want to view the data, and some information about the logged in user.">
					<Heading fit>State is the data that<br/>your app needs to run</Heading>
				</Slide>

				<Slide>
					<Heading fit>State is inevitable</Heading>
					<List>
						<ListItem style={{marginBottom:'40px'}}>Keep it as high in your component hierarchy as possible</ListItem>
						<ListItem style={{marginBottom:'40px'}}>Pass bits of state down as props</ListItem>
						<ListItem>State is easy to share down the tree, hard to share up or across.</ListItem>
					</List>
				</Slide>

				<Slide bgColor={pallette.orange}>
					<Heading fit italic>Warning</Heading>
					<Text>State makes it too easy to put business logic into the component, where it doesn't belong.</Text>
				</Slide>

				{/* homework: lifecycle methods*/}
				<CodeSlide
					notes="Roughly the same time that you start needing state, you may start to need React's LifeCycle methods... These are what the community refers to as 'escape hatches' and are a way for React to let you implement better logic than it can in a general case, or for you to be able to respond to an event that React initiates."
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/react-lifecycle')}
					ranges={[
						{ loc: [0,9], title: 'Homework: LifeCycle Methods'}
					]}
				/>

				{/* ADDING A BUILD STEP */}

				<Slide notes="Eventually you're going to want a build step, because let's face it: While you CAN write a whole react app with an inline script tag and everything inline in the page, you can only get away with that for so long. Eventually your app gets big and complex enough that the single file approach becomes painful, or when you get more than 2 people working in that file, merge conflicts become tiresome. Eventually, you'll decide it's time.">
					<Heading fit>Adding a Build Step</Heading>
					<Heading size={5}>The elephant in the room</Heading>
				</Slide>

				<Slide notes="A build step is not only a vital part of modern react, but also modern JavaScript development. JavaScript has been stagnant for years on end, and all of a sudden we've got ES2015 and ES2016 and ES2017 already being discussed and worked on. Browsers can't possibly implement everything immediately, so transpilers allow the code of the future to run in the browsers of today.">
					<Heading size={2}>Transpilers are here to stay</Heading>
					<Text>They allow the code of the future to run in the browsers of today.</Text>
				</Slide>

				<Slide notes="Hopefully the idea that build systems are compilers is comforting, not stressful">
					<Heading>Build systems are compilers</Heading>
					<Text>Code goes into one end, different code comes out the other end</Text>
				</Slide>

				<Slide notes="There are two main build systems people use with React: Browserify and Webpack. There are others but these are the ones that have decent size communities built up around them. Coverage here will be shallow because each could easily fill a deep dive session of its own.">
					<Heading>Browserify vs. Webpack</Heading>
				</Slide>

				<Slide notes="I started out using Browserify and Grunt because I already had some experience with both. They were familiar so that made it easy. Lately though, I've been looking over the fence at Webpack's lawn, and it's looking pretty green. I need to learn enough to compare them for myself.">
					<Heading fit>I already knew<br/>Browserify and Grunt</Heading>
					<Text>Node style <code style={{fontFamily: 'Operator Mono ScreenSmart'}}>require()</code> for the front-end</Text>
				</Slide>

				<Slide notes="So I'm sharing with you my Grunt config for using Browserify to compile React applications. This is not the best, most awesome setup for writing React apps, but it's small and it's simple and understandable. And it only has a few moving parts, and it works for me. ... Everyone got that URL? Great... * Just kidding.">
					<Heading fit>My Grunt+Browserify config</Heading>
					<Heading fit style={{margin: '30px 0'}}>https://gist.github.com/atuttle/e366eef4a17efd4e2677c4cffb680909</Heading>
					<Appear>
						<Heading fit>goo.gl/FTxMaB</Heading>
					</Appear>
				</Slide>

				{/* File Separation */}
				<Slide notes="There are a bunch of different reasons that could drive you into the open arms of a build system, but today we're only going to talk about two of them.">
					<Heading size={4}>Reason #1: File Separation</Heading>
					<code>MyModule = require('../lib/MyModule.js')</code>
				</Slide>

				{/* JSX! */}
				<Slide>
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
					]}
				/>

				<Slide bgColor={pallette.purple} notes="Pick something you want to do that has a pre-requisite you'll need to accomplish first. Go deep on it. When you're comfortable again, it's time to pick something else. In some ways, this is where I am now. Like I mentioned, I have more to learn about Webpack.">
					<Heading italic fit>Learning Tip #3:<br/>Go deep on one thing</Heading>
					<Text>JSX => you need a build system. Learn one or more build systems & make them your bitch.</Text>
				</Slide>

				<Slide bgColor={pallette.brightblue}>
					<Heading fit italic>Questions?</Heading>
				</Slide>

				{/* END OF HOUR ONE! */}
				<Slide>
					<Heading fit>Break time!</Heading>
					<video src={images.breaktime} autoPlay loop style={{maxWidth: '100%'}} />
				</Slide>

				<Slide>
					<Heading fit>Welcome back!</Heading>
					<Text>todo: some sort of spaceballs gif</Text>
				</Slide>

				{/* Imperative cautionary tale */}
				<Slide notes="One of the great things about React, in my opinion, is that it uses a declarative model for building your UI. * For anyone that doesn't understand the difference between declarative and imperative programming, let's walk through a true story.">
					<Heading fit>Declarative vs. Imperative</Heading>
					<Appear>
						<Text>A cautionary tale</Text>
					</Appear>
				</Slide>

				<Slide notes="This is the spec that was given to me for the first version of the mobile app I showed earlier. I took this and I built something with jQuery and no CSS framework and ... it was pretty awful. It worked, which was great because it proved the concept, but in almost every other way it was awful.">
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
					<Text style={{marginTop: "40px"}}>Jump to a letter</Text>
				</Slide>

				<Slide notes="And when you take it back, again, you get a feature request. This one requires finding all of the AJAX requests being made, triggering the display of the loading screen, and then hiding it when the AJAX requests complete. And you have to make sure you handle all possible errors so nobody gets stuck at a loading screen that won't go away.">
					<Heading fit>Feature Request!</Heading>
					<Text style={{marginTop: "40px"}}>"Loading" screen</Text>
				</Slide>

				<Slide notes="Then you get ANOTHER feature request. I implemented this as a day-glow orange bar below the letter jumper; and I wanted to hide it when not logged in and in a few other scenarios. It affects placement of letter jumper when both are visible, so every place that could have it needs to be touched to make sure it displays correctly with and without the pending action count.">
					<Heading fit>Feature Request!</Heading>
					<Text style={{marginTop: "40px"}}>Show pending request # when > 0</Text>
				</Slide>

				<Slide notes="And then you get a feature request for a whole new view! You have to consider the visibility & placement of components in the new view. Are there any other side effects?">
					<Heading fit>Feature Request!</Heading>
					<Text style={{marginTop: "40px"}}>"Undo" check in screen</Text>
				</Slide>

				<Slide notes="Feature request! Another new view! Re-sort the data, display it differently, and trigger potentially several api calls from one user action. We're really ramping up the complexity now.">
					<Heading fit>Feature Request!</Heading>
					<Text style={{marginTop: "40px"}}>Check in by party screen</Text>
				</Slide>

				<Slide notes="And then... Oh no! They tried to use our app for an event with 2,500 attendees, and it just wouldn't work. JavaScript on an iPad just couldn't keep up with rendering and then keeping track of that many DOM elements. If you've ever tried to inject a really long string of HTML into the DOM, you know this pain.">
					<Heading italic>Bug!</Heading>
					<Text style={{marginTop: "40px"}}>Large attendee lists choke JS rendering</Text>
				</Slide>

				<Slide notes="If you're like me -- the me from a year or two ago -- As I was describing those feature requests you might have been thinking of the approach you would take with jQuery to accomplish each of these tasks. The way that jQuery works is it assumes you know the current state of the DOM, and you tell it how to make some modifications to the DOM to get from point A to point B. But that assumption could be wrong. And that's when bugs happen.">
					<Heading fit>jQuery is imperative</Heading>
					<Text>Bugs occur when our assumptions about state are wrong</Text>
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
					<Text>A simplified reimagining of Flux</Text>
				</Slide>

				<Slide notes="Dan Abramov created Redux to use with React, and he was later hired by Facebook to work on React itself. His video courses on egghead are better than I could do even if we dedicated two hours just to Redux. But I'm going to try to give you the basics.">
					<Heading fit>egghead.io/search?q=redux</Heading>
					<Text>@dan_abramov</Text>
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
					<Text>to notify components when data changes</Text>
					<Text style={{marginTop: '40px'}}><code>{`store.subscribe(function(state){})`}</code></Text>
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
						,{ loc: [6,16], note: 'When we\'re refreshing the entire event list, keep the same event selected if still available, else null' }
						,{ loc: [17,18], note: 'When selecting an event, the action tells you which event is selected so just return it' }
						,{ loc: [19,22], note: 'When going back to the event list or logging out, there is no selected event, return null' }
						,{ loc: [23,24], note: 'All reducers run for all actions, so for the default case you usually return the current state' }
					]}
				/>

				<Slide notes="Now we apply the same philosophy from React of composing small independent parts to composing reducers.">
					<Heading fit>Compose reducers<br/>just like components</Heading>
				</Slide>

				<CodeSlide
					lang="javascript"
					transition={["slide","fade"]}
					code={require('raw!../assets/code/reducer-composition')}
					notes="Redux provides a method to do this for us, called combineReducers. And you can use it more than once. The userReducer might be the result of calling combineReducers on some other functions. That's what we mean by composition."
					ranges={[
						{ loc:  [0,9], title: 'Composing Reducers' }
					]}
				/>

				<Slide notes="...because if you are then you're right. This approach could potentially thrash a good bit of memory, especially on mobile devices where there is less to spare. * Unless you're using Immutable data -- or at least treating your data as if it were immutable. I know it sounds weird. How can something that's immutable be used to track data changes over time? Maybe it's just a bad name. But basically, it's just a very memory-efficient way to track data changes over time by using pointers referring to previous instances for anything that hasn't changed.">
					<Heading fit>Is anyone worried about<br/>JS memory usage or GC?</Heading>
					<Appear>
						<Text>Immutability to the rescue!<br/>(Yes, more homework)</Text>
					</Appear>
				</Slide>

				<Slide notes="For the sake of time I really have skipped a lot, but this should have given you the basic idea of what Redux does and how it works. I would love to spend another 2 hours chewing your ear off about all of these things and more, so if you want to talk more about this stuff come sit with me at lunch and we can keep the discussion going. But for now, we must move on...">
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

				<Slide notes="A personal rule of thumb I've developed so far is that you should only use component state in the root component, and everything after that should come from props. I'm sure there are logical places to break that rule, but it has been serving me well so far.">
					<Heading fit>Rule of thumb:</Heading>
					<Text>Only use component state in your root component</Text>
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
					<Text>What went well, what didn't?</Text>
					<Text>Road to v4? (versions 1, 2, 3, 3.5, 4)</Text>
				</Slide>

				<Slide bgColor={pallette.purple} notes="In my opinion, teaching is an integral part of the learning process. It helps you explore things you thought you knew but didn't. It doesn't have to be anything big like a conference presentation. Even just mentoring a coworker is really helpful. If you don't have a team, or they're not ready or willing to be taught, local meetups are usually happy to host you.">
					<Heading italic fit>Learning Tip #4:<br/>Teach Someone</Heading>
					<video src={images.inception} loop autoPlay style={{maxWidth:'100%'}} />
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
					<Text>github.com/petehunt/react-howto</Text>
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

				<Slide bgColor={pallette.brightblue}>
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
