
# Geocaching Adventures

Geocaching Adventures is a homepage about one of Dominik Wulf's favourite hobbies. On this page, he shares some XXXXXX pieces of information about the activity and his adventures. The site features four pages.

The live page can be viewed here: [Link to Geocaching Adventures](https://ci-dominik.github.io/pp1-geocaching/index.html "Test")

![Mockup image of Geocaching Adventures](docs/mockup.jpg)

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx [INHALTSVERZEICHNIS] xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

## **USER EXPERIENCE**

## Target audience
* DESCRIPTION

## User's journey
* DESCRIPTION

## Intuitive and consistent design
* DESCRIPTION

---

## **FEATURES**

## Site-wide

### Navigation menu
* The navigation menu was designed to attract the users to the adventures page. They should get there as soon as possible to experience the main area of the homepage. In that area, I show photos of two sample adventures and of geocaches I found along the way.
<br>
There is also an indicator on which page the user is currently. The selected item is underlined.
<br>
In mobile view (width < 768px / 48rem), the menu becomes a burger menu that is collapsible to reveal the hyperlinks. It was created using a self written JavaScript file.

![Screenshot of the page's navigation menu](docs/navigation-menu.jpg)
![Screenshot of the page's navigation menu in mobile view](docs/navigation-menu-mobile.jpg)

### Footer
* The footer consists of social media links to LinkedIn, Facebook, X, Instagram and Pinterest. All of those links got an aria label to increase the accessibility for impaired users. Also, every link has a rel attribute of "noopener" to prevent security problems.

![Screenshot of the page's footer](docs/footer.jpg)

### Favicons
* As a favicon, the geocaching logo was used so the user immediately gets the right impression of the content. Icons in different sizes were added to display an icon for every use case. For example as the tab's icon or when the page gets saved as a link on a mobile device.

![Screenshot of the page's favicons](docs/favicons.jpg)<br>
![Screenshot of the page's favicons](docs/favicons-code.jpg)

### Contact success page
* DESCRIPTION

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

### Introduction to adventures
* The user gets welcomed on the adventure page and is offered to join in on the taken adventures listed further down below.

![Screenshot of the adventure page's introduction section](docs/adventures-introduction.jpg)

### Sample adventures
* Two sample adventures of Dominik Wulf. Each section starts with a header picture of the trip and several small photos for each found geocache. In addition, a block of information is presented for each cache.

![Screenshot of the adventure page's sample adventures section](docs/adventures-sample.jpg)

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
* The homepage is fully responsive on any 

### Interactive dropdown buttons on adventure page
* DESCRIPTION

### Contact form
* DESCRIPTION

## Upcoming

### Connection to a database to pull adventures and images from
* DESCRIPTION

### Auto-adjusting counter for geocaching tours, found geocaches and missed geocaches
* DESCRIPTION

---

## **DESIGN**

## Wireframes

### Landing page

![Screenshot of the wireframe for the landing page](docs/landing-wireframe.jpg)

### Adventures page

![Screenshot of the wireframe for the adventures page](docs/adventures-wireframe.jpg)

### About page

![Screenshot of the wireframe for the about page](docs/about-wireframe.jpg)

### Contact page

![Screenshot of the wireframe for the contact page](docs/contact-wireframe.jpg)

---

## **TECHNOLOGIES**

### HTML
* DESCRIPTION

### CSS
* DESCRIPTION

### JavaScript
* DESCRIPTION

### Visual Studio Code
* DESCRIPTION

### GitHub
* DESCRIPTION

### Adobe Photoshop
* DESCRIPTION

### Fontawesome
* DESCRIPTION

### Favicon generator
* DESCRIPTION

---

## **TESTING**

## Responsiveness

### Steps
* DESCRIPTION

|Testing method | Expected result | Actual result |
|:-------------:|:---------------:|:-------------:|
|PLACEHOLDER    | PLACEHOLDER     | PLACEHOLDER   |


---

## **Accessibility**

### Lighthouse testing
* Lighthouse testing was used to determine the site's proberties regarding performance, accessibility, best practices and SEO. Special emphasis was layed on performance and accessibility to provide a great user experience for every visitor, no matter the device or conditions.<br>
The accessibility rating suffered a bit from low contrast due to color choices on the homepage. This matter will be addressed further in the [bugs](#bugs) section.

**Frontpage**

![Screenshot of the lighthouse test for the frontpage in mobile view](docs/benchmarks/benchmark_frontpage_mobile.jpg)
<br><br>
![Screenshot of the lighthouse test for the frontpage in desktop view](docs/benchmarks/benchmark_frontpage_desktop.jpg)

**Adventures**

![Screenshot of the lighthouse test for the adventures page in mobile view](docs/benchmarks/benchmark_adventures_mobile.jpg)
<br><br>
![Screenshot of the lighthouse test for the adventures page in desktop view](docs/benchmarks/benchmark_adventures_desktop.jpg)

The adventures page suffered from file sizing. This will be addressed in the [bugs](#bugs) section.

**About me**

![Screenshot of the lighthouse test for the about page in mobile view](docs/benchmarks/benchmark_about_mobile.jpg)
<br><br>
![Screenshot of the lighthouse test for the about page in desktop view](docs/benchmarks/benchmark_about_desktop.jpg)

**Contact**

![Screenshot of the lighthouse test for the contact page in mobile view](docs/benchmarks/benchmark_contact_mobile.jpg)
<br><br>
![Screenshot of the lighthouse test for the contact page in desktop view](docs/benchmarks/benchmark_contact_desktop.jpg)

### WAVE extension (Google Chrome)
* The WAVE extension in Google Chrome was used to spot errors in page design. Some of the homepage's areas suffer from low contrast. This issue will be thought about in the future to discuss a redesign of the used color palette.<br>
The only other issue was a redundant link to the frontpage in the logo and the navigation bar. As it is common practice to use this approach to web design, I did not address this issue any further.<br>
The WAVE extension correctly spotted the aria labels that were used for the footer's social media icons. The links also got the rel attribute of noopener to increase website security.


### Manual testing
* DESCRIPTION

|Testing method | Expected result | Actual result |
|:-------------:|:---------------:|:-------------:|
|PLACEHOLDER    | PLACEHOLDER     | PLACEHOLDER   |

---

## **Functional testing**

### Navigation links
* DESCRIPTION

|Testing method | Expected result | Actual result |
|:-------------:|:---------------:|:-------------:|
|PLACEHOLDER    | PLACEHOLDER     | PLACEHOLDER   |

### Contact form
* DESCRIPTION

|Testing method | Expected result | Actual result |
|:-------------:|:---------------:|:-------------:|
|PLACEHOLDER    | PLACEHOLDER     | PLACEHOLDER   |

---

## **Validator testing**

### HTML validator
* All pages were checked for their HTML structure by the W3C Markup Validation Service. No document showed any errors.

![Screenshot of the HTML validation](docs/html-validation.jpg)

### CSS validator
* The stylesheet file was checked via the W3C CSS Validation Service. No errors were found.

![Screenshot of the CSS validation](docs/css-validation.jpg)

---

## **Unfixed bugs**

### Bugs
* DESCRIPTION

### Potential fix
* DESCRIPTION

---

## **Deployment**

### Visual Studio Code connection
* DESCRIPTION

### Deployment via Visual Studio Code
* DESCRIPTION

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