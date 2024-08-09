
# Geocaching Adventures
Geocaching Adventures is a homepage about one of Dominik Wulf's favourite hobbies. On this page, he shares some pieces of information about the activity and his adventures. The site features four pages.

The live page can be viewed here: [Link to Geocaching Adventures](https://ci-dominik.github.io/pp1-geocaching/index.html "Link to the live website")

![Mockup image of Geocaching Adventures](docs/mockup.jpg)

## **TABLE OF CONTENTS**

[**USER EXPERIENCE**](#user-experience)
  * [Target audience](#target-audience)
  * [User's journey](#users-journey)
  * [Intuitive and consistent design](#intuitive-and-consistent-design)
    
<br>

[**FEATURES**](#features)
  * [Site-wide](#site-wide)
    * [Navigation menu](#navigation-menu)
    * [Footer](#footer)
    * [Favicons](#favicons)
    * [Contact success page](#contact-success-page)
    * [404 page](#404-page)
  * [Landing page](#landing-page)
    * [Hero section](#hero-section)
    * [Benefits section](#benefits-section)
    * [Geocaching explanation](#geocaching-explanation)
  * [About page](#about-page)
    * [Author information](#author-information)
    * [Geocaching statistics](#geocaching-statistics)
    * [Fun facts](#fun-facts)
  * [Adventures page](#adventures-page)
    * [Introduction and sample adventures](#introduction-and-sample-adventures)
  * [Contact page](#contact-page)
    * [Contact text and form](#contact-text-and-form)

<br>

[**FEATURES EXPLAINED**](#features-explained)
  * [Existing](#existing)
    * [Responsive design](#responsive-design)
    * [Interactive dropdown buttons on adventure page](#interactive-dropdown-buttons-on-adventure-page)
    * [Contact form to submit a message](#contact-form-to-submit-a-message)
  * [Upcoming](#upcoming)
    * [Connection to a database](#connection-to-a-database)
    * [Auto-adjusting counter](#auto-adjusting-counters)
    
<br>

[**DESIGN**](#design)
  * [Wireframes](#wireframes)
    * [Landing page](#landing-page)
    * [Adventures page](#adventures-page-1)
    * [About page](#about-page-1)
    * [Contact page](#contact-page-1)
    
<br>

[**TECHNOLOGIES**](#technologies)
  * [HTML](#html)
  * [CSS](#css)
  * [JavaScript](#javascript)
  * [Visual Studio Code](#visual-studio-code)
  * [GitHub](#github)
  * [Adobe Photoshop](#adobe-photoshop)
  * [Fontawesome](#fontawesome)
  * [Favicon generator](#favicon-generator)
    
<br>

[**TESTING**](#testing)
  * [Responsiveness](#responsiveness)
    
<br>

[**ACCESSIBILTIY**](#accessibility)
  * [Lighthouse testing](#lighthouse-testing)
  * [WAVE extension](#wave-extension)
  * [Goal of accessibility measures](#goal-of-accessibility-measures)
    
<br>

[**FUNCTIONAL TESTING**](#functional-testing)
  * [Navigation links](#navigation-links)
  * [Contact form](#contact-form)
    
<br>

[**VALIDATOR TESTING**](#validator-testing)
  * [HTML validator](#html-validator)
  * [CSS validator](#css-validator)
    
<br>

[**DEPLOYMENT**](#deployment)
  * [Visual Studio Code connection](#visual-studio-code-connection)
  * [Deployment via Visual Studio Code](#deployment-via-visual-studio-code)
    
<br>

[**CREDITS**](#credits)
  * [PicturePeople Leverkusen](#picturepeople-leverkusen-photo-studio)
  * [Fontawesome](#fontawesome-1)
  * [YouTube](#youtube)
  * [Pixabay](#pixabay)
  * [Pexels](#pexels)

## **USER EXPERIENCE**

## Target audience
* Everyone should have the same experience when visiting the website, people who know geocaching and those who do not. The target audience is for people of all ages and ethnicities as this hobby can be picked up by anybody. But especially people who rarely visit nature should be encouraged to get outside and increase their mental and physical health.

## User's journey
* The user should be welcomed by the frontpage, directly portraying the adventures spirit and maybe even have a laugh because of the photo.
They should also directly see that there is more to the website by teasing the content below the hero image which states the advantages of geocaching.<br>
Once the user has an overview of the content, a distinctly coloured button leads them to the adventures one can go on. They should also be able to navigate
to any other part of the homepage if they have questions for the site owner or want to know more about him. 

## Intuitive and consistent design
* All pages share the same design and color scheme. In addition to that, the clear divided sections should display a shift in the content.

---

## **FEATURES**

## Site-wide

### Navigation menu
* The navigation menu was designed to attract the users to the adventures page. They should get there as soon as possible to experience the main area of the homepage. In that area, I show photos of two sample adventures and of geocaches I found along the way. There is also an indicator on which page the user is currently. The selected item is underlined.
In mobile view (width < 768px / 48rem), the menu becomes a burger menu that is collapsible to reveal the hyperlinks. It was created using a self written JavaScript file.

![Screenshot of the page's navigation menu](docs/navigation-menu.jpg)<br>
![Screenshot of the page's navigation menu in mobile view](docs/navigation-menu-mobile.jpg)

### Footer
* The footer consists of social media links to LinkedIn, Facebook, X, Instagram and Pinterest. All of those links got an aria label to increase the accessibility for impaired users. Also, every link has a rel attribute of "noopener" to prevent security problems.

![Screenshot of the page's footer](docs/footer.jpg)

### Favicons
* As a favicon, the geocaching logo was used so the user immediately gets the right impression of the content. Icons in different sizes were added to display an icon for every use case. For example as the tab's icon or when the page gets saved as a link on a mobile device.

![Screenshot of the page's favicons](docs/favicons.jpg)<br>
![Screenshot of the page's favicons](docs/favicons-code.jpg)

### Contact success page
* A page dedicated to inform the user of a successful form transmission was added. It leads the visitor back to the frontpage after a delay of five seconds.

![Screenshot of the contact success page](docs/contact-success.jpg)

### 404 page
* A 404 page was added to inform the user when a page cannot be found. It also features the navigation and footer bar to lead the user back to another page of the site.

![Screenshot of the page's 404 page](docs/404.jpg)

---

## Landing page

### Hero section
* The hero section of the homepage is meant to attract the user's attention. A picture of Dominik Wulf is shown on the right side. He is wearing a safari outfit to set the theme and mood for adventures.<br>
An additional information section describes the content the user will see on the page. A call to action button is placed to immediately lead the user to the adventures site.

![Screenshot of the landing page's hero image](docs/hero-section.jpg)

### Benefits section
* Just below the hero section lies a list of benefits geocahing provides to encourage people to also pick up the hobby and increase their health.<br>
A fracture of the content is already shown in the initial site view as a spoiler to imply that more content awaits on the frontpage.

![Screenshot of the landing page's benefits section](docs/benefits-section.jpg)

### Geocaching explanation
* In this section, the user can gather additional pieces of information about the activity. Also, they should get an insight if it is the right hobby for them as well. Some convincing facts should lead the user to starting the geocaching journey.

![Screenshot of the landing page's geocaching explanation](docs/geocaching-explanation.jpg)

---

## About page

### Author information
* A photo displaying Dominik Wulf holding a geocaching items for comedic effect and a text describing him as a person. In addition to the general geocaching infos, the user should get an impresson of the site owner's personal life to strenghten the human bond.

![Screenshot of the about page's author information](docs/author-information.jpg)

### Geocaching statistics
* An overview of Dominik Wulf's personal adventure statistics, showing the total tours, found geocaches and missed geocaches. This way, the user gets a brief overview of the scale of the hobby and time spent.

![Screenshot of the about page's geoaching statistics](docs/geocaching-statistics.jpg)

### Fun facts
* Some fun facts about the site owner as an entertaining addition.

![Screenshot of the about page's fun facts section](docs/fun-facts.jpg)

---

## Adventures page

### Introduction and sample adventures
* The user gets welcomed on the adventure page and is offered to join in on the taken adventures listed further down below. There, two sample adventures were added to give a taste of the hobby. Every dropdown menu can be expanded to reveal further details.

![Screenshot of the adventure page's introduction section](docs/adventures-page.jpg)

![Screenshot of the adventure page's sample caches](docs/adventures-caches.jpg)

---

## Contact page

### Contact text and form
* A welcoming picture and a text are placed to lead the user to getting in touch with the site owner.<br>
A form to insert some personal data is presented to each visitor.
  * First name is a required text input
  * Last name is a required text input
  * Email address is a required email input to get in touch with the user
  * The personal message is a required textarea for submitting a message
  * The send button is used to send the data to contact-success.html
    * The success page will direct the user back to the frontpage after five seconds

![Screenshot of the contact page's text and form](docs/contact-page.jpg)

---

## **FEATURES EXPLAINED**

## Existing

### Responsive design
* The homepage should behave responsive on any kind of device, ranging from smartphones to desktop browers. Everything was tested using Google Chrome's developer tools.

### Interactive dropdown buttons on adventure page
* On the adventure page, it is possible to open up dropdown menus for every found geocache. Those menus are implemented using JavaScript.

### Contact form to submit a message
* A contact form for transmitting user messages is added to let the visitor get in touch with Dominik Wulf should they have questions or suggestions for improvement.

## Upcoming

### Connection to a database
* It is planned to implement a database system to store taken adventures and found geocaches. This way, they can get extracted from the backend to dynamically display updated content on the adventure page.

### Auto-adjusting counters
* In addition to the stored data of adventures, a database should contain the amounts to found and missed geocaches and the number of adventures taken.

---

## **DESIGN**

## Wireframes

### Landing page

![Screenshot of the wireframe for the landing page](docs/wireframes/landing-mobile-wireframe.jpg)<br><br>
![Screenshot of the wireframe for the landing page](docs/wireframes/landing-wireframe.jpg)

### Adventures page

![Screenshot of the wireframe for the adventures page](docs/wireframes/adventures-mobile-wireframe.jpg)<br><br>
![Screenshot of the wireframe for the adventures page](docs/wireframes/adventures-wireframe.jpg)

### About page

![Screenshot of the wireframe for the about page](docs/wireframes/about-mobile-wireframe.jpg)<br><br>
![Screenshot of the wireframe for the about page](docs/wireframes/about-wireframe.jpg)

### Contact page

![Screenshot of the wireframe for the contact page](docs/wireframes/contact-mobile-wireframe.jpg)<br><br>
![Screenshot of the wireframe for the contact page](docs/wireframes/contact-wireframe.jpg)

---

## **TECHNOLOGIES**

### HTML
* HTML (HyperText Markup Language) was used to create the structure of the homepage.

### CSS
* All styled were applied by using and linking a CSS (Cascading Style Sheet) file.

### JavaScript
* JavaScript was used to create the navigation menu and the adventure dropdown buttons.

### Visual Studio Code
* Visual Studio Code was used to clone the GitHub repository, edit the homepage's code and commit / push the results to GitHub.

### GitHub
* GitHub was used to store the homepage's files. Everything was deployed using GitHub Pages.

### Adobe Photoshop
* Adobe Photoshop was used to create content images and wireframes.

### Fontawesome
* Fontawesome was linked in the homepage's code to include icon files.

### Favicon generator
* [Favicon Generator](https://realfavicongenerator.net/) was used to implement the page's favicon images.

---

## **TESTING**

## Responsiveness

|Testing method | Expected result | Actual result |
|:-------------:|:---------------:|:-------------:|
| Resizing the browser window    | Navigation menu should trigger and elements should shift     | Expted results were achieved   |
| Opening Google Chrome's developer tools and changing the size of the frame | The design should shift up to a width of around 250px | Expted results were achieved |
| Visiting the homepage on own smartphone | Only the mobile view should be present, in landscape and portrait mode | Expted results were achieved |
| Sending the homepage link to friends and family | The same experience should occur on any of the testing devices | Expted results were achieved |


---

## **ACCESSIBILITY**

### Lighthouse testing
* Lighthouse testing was used to determine the site's proberties regarding performance, accessibility, best practices and SEO. Special emphasis was layed on performance and accessibility to provide a great user experience for every visitor, no matter the device or conditions.<br>
The accessibility rating suffered a bit from low contrast due to color choices on the homepage. This matter will be addressed further in the [bugs](#bugs) section.

**Frontpage**

![Screenshot of the lighthouse test for the frontpage in mobile view](docs/benchmarks/frontpage-mobile.jpg)
<br><br>
![Screenshot of the lighthouse test for the frontpage in desktop view](docs/benchmarks/frontpage-desktop.jpg)

**Adventures**

![Screenshot of the lighthouse test for the adventures page in mobile view](docs/benchmarks/adventures-mobile.jpg)
<br><br>
![Screenshot of the lighthouse test for the adventures page in desktop view](docs/benchmarks/adventures-desktop.jpg)

The adventures page suffered from file sizing. This will be addressed further in the future.

**About me**

![Screenshot of the lighthouse test for the about page in mobile view](docs/benchmarks/about-mobile.jpg)
<br><br>
![Screenshot of the lighthouse test for the about page in desktop view](docs/benchmarks/about-desktop.jpg)

**Contact**

![Screenshot of the lighthouse test for the contact page in mobile view](docs/benchmarks/contact-mobile.jpg)
<br><br>
![Screenshot of the lighthouse test for the contact page in desktop view](docs/benchmarks/contact-desktop.jpg)

**Contact success**

![Screenshot of the lighthouse test for the contact success page in mobile view](docs/benchmarks/success-mobile.jpg)
<br><br>
![Screenshot of the lighthouse test for the contact success page in desktop view](docs/benchmarks/success-desktop.jpg)

**404 page**

![Screenshot of the lighthouse test for the 404 page in mobile view](docs/benchmarks/404-mobile.jpg)
<br><br>
![Screenshot of the lighthouse test for the 404 page in desktop view](docs/benchmarks/404-desktop.jpg)

### WAVE extension
* The WAVE extension in Google Chrome was used to spot errors in page design. Some of the homepage's areas suffer from low contrast. This issue will be thought about in the future to discuss a redesign of the used color palette.<br>
The only other issue was a redundant link to the frontpage in the logo and the navigation bar. As it is common practice to use this approach to web design, I did not address this issue any further.<br>
The WAVE extension correctly spotted the aria labels that were used for the footer's social media icons. The links also got the rel attribute of noopener to increase website security.

### Goal of accessibility measures

* Everyone should be able to enjoy the website content, so an alt tag was added to every picture to describe it.<br>
In addition to this, aria labels were added to social media links to describe their behaviour. It is also mentioned that those open in a new tab.<br>
This way, every screen reader should be able to pick of the provided content.

---

## **Functional testing**

### Navigation links
* The navigation menu should be visible and usable on every page on any device. I tested every part of it on multiple devices and resolutions.

|Testing method | Expected result | Actual result |
|:-------------:|:---------------:|:-------------:|
| Visit every page to see if navigation works on all of them | Navigation menu should be present on all sites, even 404 and contact success | Expted results were achieved   |
| Click on every link in the navigation menu to reach other pages | Links should be clickable and send me to the desired page | Expted results were achieved |

### Contact form
* The contact form should only be sendable once every piece of information is entered correctly. Afterwards, the user should be sent to a success page.

|Testing method | Expected result | Actual result |
|:-------------:|:---------------:|:-------------:|
| Try to submit the form without any data put in | The text fields should print an error that every one of them needs to be filled out | Expted results were achieved |
| Try to submit the form with only a text written in the email input element | An error should occur, telling that the email format needs to be used | Expted results were achieved |
| Entering data and submitting the form correctly | The user should be send to the success page | Expted results were achieved |

![Screenshot of the working text fields in the contact form](docs/contact1.jpg)

![Screenshot of the working email input field in the contact form](docs/contact2.jpg)

---

## **Validator testing**

### HTML validator
* All pages were checked for their HTML structure by the W3C Markup Validation Service. No document showed any errors.

![Screenshot of the HTML validation](docs/html-validation.jpg)

### CSS validator
* The stylesheet file was checked via the W3C CSS Validation Service. No errors were found.

![Screenshot of the CSS validation](docs/css-validation.jpg)

---

## **Deployment**

### Visual Studio Code connection
* A connection between Visual Studio Code and GitHub was established using the built-in function to include the ability to clone, stage, commit and push content directly to GitHub.

![Screenshot of the menu to connect Visual Studio Code with GitHub](docs/vscode-connection.jpg)

### Deployment via Visual Studio Code
* Visual Studio code was used to stage all changed files and commit them with an included message directly to GitHub.

![Screenshot of the menu to commit changes to GitHub](docs/vscode-commit.jpg)

---

## **Credits**

### PicturePeople Leverkusen (photo studio)
* Photos of me shot by **Daria Lipp**

### Fontawesome
* Links to several icons

### YouTube
* Several videos for learning

### Pixabay
* [Jungle photo](https://pixabay.com/de/photos/jungle-bali-wild-dschungel-natur-5046272/) (annawoodie @ Pixabay)
* [Toolbox photo](https://pixabay.com/de/photos/werkzeuge-werkzeugkasten-3411589/) (Steve Sammon @ Pixabay)

### Pexels
* [Hat photo](https://www.pexels.com/de-de/foto/stadt-mann-gebaude-muster-27065154/) (Masud Allahverdizade @ Pexels)
* [Dog photo](https://pixabay.com/de/photos/hund-haustier-tier-niedlich-1839808/) (Pexels @ Pixabay)