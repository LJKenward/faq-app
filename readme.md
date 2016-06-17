## FAQ App

Getting Set Up
- Clone Repo
- Run App on local Server

# The Brief
*I’ve just joined a new startup that is currently receiving a lot of common enquiries by email. My first project is to design and build the front-end to a supporting FAQ app that will be a standalone instance from the current website.
The FAQ app will sit on http://faq.mystartup.com and should be structured to allow us to easily incorporate the same branding as the current website which is not yet completed.

Requirements from the Founders:

- Come up with the UX and supporting design that will allow for users to quickly find answers to their common questions.

- In the first version of the FAQ, there will only be 12 questions listed, but that will expand rapidly in the future

- Support on all devices desired (but for the sake of this exercise: MacBook Air, iPad Air, and iPhone 5s)

- No need for any back-end functionality or persistence as that will be handled by one of your colleagues

- Initialise a git repository and commit regularly*

![alt text](http://i.imgbox.com/EImPnaJK.png "Screenshot")

### UX / UI Process:

**Research**

I first looked a few high profile websites FAQ sections and evalutated the user experience.

**Soundcloud**
http://help.soundcloud.com/
A very large Help section has a lot of different sections. It has categories and then a list of questions within that category, and you then click through to the question. Three clicks to get where you want to go, if felt slow and felt very nested. Hard to scan quickly due to similar font types and sizes.  

**Vimeo**
https://vimeo.com/help/faq
Again a large set of data, displaying only topics on the home page. I felt this was a good experience as the headings stood out enough to scan, and you could click directly into the sub heading. The mistake is made though if you click on the heading itself, as it took you to a page that again only lists the sub-heading, displaying no questions. Making is a three page load process to get to the questions.

**Summary**
When I need "help" or information I want it quickly. The nature of a FAQ section is that people are after information. Beating about the bush isn't required. I decided that the less page reloads the better, the more information displayed upfront, the better. Don't annoy the user while they are having problems!  

**Stack**
Bootstrap CSS frameworks
jQuery
HTML / CSS
Javascript
JSON

**The Process**

Being in a start up environment I decided to use the Bootstrap Framework as it is good for getting something up quickly. With my colleagues in-undated with support emails I knew the sooner this was up the better. I designed the site in a way in which the main functionality of the FAQ app was contained in the middle, it would allow for the navigation, header and footer areas to be easily updated to the finalised design.

I dynamically draw the Question Lists and Question and Answer sections from the data.json file, in a manner to replicate receiving information from the backend team.

To make the FAQ app a single page application, which I had decided on to make it a more stream line process for the user, I deliberated on using Backbone and Underscore, which I have touched on in the part. Ultimately I decided to use jQuery and not use a framework. This decision came down to time, knowledge and getting a working product deployed.  

At present new questions and categories can be added via the back-end / (JSON file) and will keep the current user flow intact and operating smoothly. For more detailed tutorials, rather that the standard Q&A forward, a knowledge base or wiki layout could be considered.

I went through a few stages of code, at one point I used a ```$.each``` and was iterating through the all the data to pull out only certain sections, and then repeating the process to pull out more. I moved on to using the ```.filter``` and ```.map``` as they were more efficient. In the early stages to get it working I had hardcoded the questions into the code before refactoring to be reading the data from the JSON file. It was important for me to break down the steps and work through it, refactor, and repeat. Then comes the point of putting forth what's done to the team and getting feedback from my peers and getting it deployed.
