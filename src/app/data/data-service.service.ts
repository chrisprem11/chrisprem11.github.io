import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private locations: any;
  private baseUrl = "http://192.168.2.10:29111/SpringBootOauth2/";
  public clientId = "my-client";
  public clientSecret = "secret";

  constructor(private http: HttpClient) {
    this.locations = [
      {
        "id": 1,
        "country": "India",
        "offices": [
          {
            "id": 1,
            "workplace": "Bangalore"
          }
        ]
      }
      // ,
      // {
      //   "id": 2,
      //   "country": "Thailand",
      //   "offices": [
      //     {
      //       "id": 1,
      //       "workplace": "Bangkok"
      //     },
      //     {
      //       "id": 2,
      //       "workplace": "Pattaya"
      //     }
      //   ]
      // }
    ];
  }

  getLocations(): any {
    return this.locations;
  }

  fetchUsers() {
    return this.http.get(this.baseUrl + "all/users/", {});
  }

  sendEmail(contactDTO) {
    return this.http.post(this.baseUrl + "sendEmail", contactDTO, { responseType: 'text' });
  }

  //page component variables
  private pageContents: any = [
    {
      name: "home",
      pageContents: {
        navBar : {
          navBarLogoName: "URS Systems",
          navBarLocationLabel: "Locations",
          navBarPlansLabel:"Plans",
          navBarMissionLabel:"Mission",
          navBarEnterpriseLabel:"Enterprise",
          navBarLabsLabel: "Labs",
          navBarContactUsLabel:"ContactUs"
        },
        carouselImages : [
          { url: 'assets/images/image1.jpg' },
          { url: 'assets/images/image2.jpg' },
          { url: 'assets/images/image3.jpg' },
          { url: 'assets/images/image4.jpg' }
        ],
        whereBusinessesThrive: {
          whereBusinessesThriveLabel: "WHERE BUSINESSES THRIVE",
          whereBusinessesThriveDescription: "Whether you need a desk, office suite, or entire HQ, we create environments that increase productivity, innovation, and collaboration.",
          whereBusinessesThriveHeading1: "Where you'd like space",
          whereBusinessesThriveOptions: ["Bangalore", "Mumbai", "Pune", "Indore", "Dehli", "Bhopal"],
          whereBusinessesThriveHeading2: "How many employees are in your company",
          whereBusinessesThriveHeadingEmployeesRange: ["1-20", "20-100", "100-1,000", "1,000+"],
          whereBusinessesThriveButtonLabel: "Start",
          whereBusinessesThriveImageUrl: "assets/images/image1.jpg"
        },
        welcomeUrsSystem: {
          welcomeUrsSystemLabel: "Welcome to URS Systems",
          welcomeUrsSystemNote: "Why do you do what you do?",
          welcomeUrsSystemHeading: "Make a life, not just a living.",
          welcomeUrsSystemDescription: "WeWork is a global network of workspaces where companies and people grow together. We transform buildings into dynamic environments for creativity, focus, and connection. More than just the best place to work, though, this is a movement toward humanizing work. We believe that CEOs can help each other, offices can use the comforts of home, and we can all look forward to Monday if we find real meaning in what we do.",
          welcomeUrsSystemImageUrl: "assets/images/image2.jpg"
        },
        spaceAsAnExperience: {
          spaceAsAnExperienceLabel: "Space as an Experience",
          spaceAsAnExperienceDescription: "he nature of work is changing. Recruitment, retention, innovation, and productivity now require not just coffee, but also yoga, not just printers, but also art installations. WeWork offers companies of all sizes the opportunity to reimagine employees’ days through refreshing design, engaging community, and benefits for all.",
          spaceAsAnExperienceWhyURSSystem: "Why URS Systems",
          spaceAsAnExperienceImageUrl: "assets/images/image3.jpg"
        },
        workspaceIsOurCraft: {
          workspaceIsOurCraftLabel: "Workspace Is Our Craft",
          workspaceIsOurCraftDescription: "eams of artists, designers, and engineers custom build every space, prioritizing natural light, comfort, and inspiration.",
          workspaceIsOurCraftImageUrl: "assets/images/image4.jpg"
        },
        practiceMakesPerfect: {
          practiceMakesPerfectLabel: "Practice Makes Perfect",
          practiceMakesPerfectDescription: "We’ve become experts in what you need to get work done happily—from brainstorming rooms to phone booths and terraces."
        },
        letUsHandleThat: {
          letUsHandleThatLabel: "Let Us Handle That",
          letUsHandleThatDescription: "You focus on your to-do’s, we take care of the rest. Enjoy included front-desk service, utilities, refreshments, and more.",
          letUsHandleThatImageUrl: "assets/images/image5.jpg"
        },
        theGlobalNetwork: {
          theGlobalNetworkLabel: "The Global Network",
          theGlobalNetworkDescription: "We’ve become experts in what you need to get work done happily—from brainstorming rooms to phone booths and terraces."
        },
        weeklyEvents: {
          weeklyEventsLabel: "Weekly Events",
          weeklyEventsDescription: "From thought-leader panels to cheese tastings, our in-house events help you nurture a strong team culture.",
          weeklyEventsImageUrl: "assets/images/image5.jpg"
        },
        conferenceRooms: {
          conferenceRoomsLabel: "Conference Rooms",
          conferenceRoomsDescription: "For groups of two or 25, meeting spaces include A/V gear and delightful details like custom wallpaper and marble tables."
        },
        spaceThatWorksforYou: {
          spaceThatWorksforYouLabel: "Space That Works for You",
          spaces: [
            { heading: "Flexible Plans", buttonLabel: "See our plans", imageUrl: "assets/images/image1.jpg", description: "Grow your office as your team grows, or start with a desk and see where it takes you." },
            { heading: "Just-Right Locations", buttonLabel: "See our locations", imageUrl: "assets/images/image2.jpg", description: "Find your ideal neighborhood, building features, and coworking scene. bangalore Ka" },
            { heading: "Room to Host Events", buttonLabel: "See our venues", imageUrl: "assets/images/image3.jpg", description: "Discover versatile spaces for hosting your product launch, workshop, or presentation." }
          ]
        },
        ourClientsTell: {
          ourClientsTellLabel: "Our clients Tell It Like It Is",
          clients: [
            { name: "Ram Kumar", profession: "entrepreneur", image: "assets/images/image5.jpg", comments: "\"Grow your office as your team grows, or start with a desk and see where it takes you. \"" },
            { name: "Ravi Sony", profession: "Founder Of world", image: "assets/images/image6.jpg", comments: "\"Grow your office as your team grows, or start with a desk and see where it takes you. \"" },
            { name: "Kailash Sharma", profession: "entrepreneur", image: "assets/images/image7.jpg", comments: "\"Grow your office as your team grows, or start with a desk and see where it takes you. \"" },
            { name: "Vikas Kushwah", profession: "Tata Moters", image: "assets/images/image1.jpg", comments: "\"Grow your office as your team grows, or start with a desk and see where it takes you. \"" }
          ]
        },
        enterpriseMembers: {
          enterpriseMembersLabel: "Enterprise Members",
          members: [
            { "imageUrl": "assets/images/image8.jpg" },
            { "imageUrl": "assets/images/image8.jpg" },
            { "imageUrl": "assets/images/image8.jpg" },
            { "imageUrl": "assets/images/image8.jpg" },
            { "imageUrl": "assets/images/image8.jpg" },
            { "imageUrl": "assets/images/image8.jpg" },
            { "imageUrl": "assets/images/image8.jpg" },
            { "imageUrl": "assets/images/image8.jpg" }
          ]
        },
        ourServices: {
          ourServicesLabel: "Ous Services",
          location1Label: "Location 1",
          location2Label: "Location 2",
          location3Label: "Location 3",
          location4Label: "Location 4",
          location5Label: "Location 5",
          service1Label: "Service 1",
          service2Label: "Service 2",
          Service3Label: "Service 3",
          service4Label: "Service 4",
          service5Label: "Service 5",
          work1Label: "Work 1",
          work2Label: "Work 2",
          work3Label: "Work 3",
          work4Label: "Work 4",
          work5Label: "Work 5",
        },
        yourSite: {
          yourSiteLabel: "URS Systems 2018"
        }
      }
    },
    {
      "name": "selectedLocation",
      "pageContents":
        {
          "firstInputLabel": `How many people need workspace?`,
          "secondInputLabel": `When would you like to move in?`,
          "workSpaceLabel": `Viewing Workspace buildings in`,
          "workSpaceContent": [
            { name: "Shine City", address: "#49, Electronic City, KA- 560102", image: "assets/images/workspace1.jpg" },
            { name: "Office Space", address: "#67, Electronic City, KA- 560102", image: "assets/images/workspace2.jpg" },
            { name: "Work Env", address: "#77, Electronic City, KA- 560102", image: "assets/images/workspace3.jpg" },
            { name: "New Land", address: "#90, Electronic City, KA- 560102", image: "assets/images/workspace4.jpg" },
          ],
          "workSpaceRentals": {
            "startingPriceLabel": "Starting Prices : ",
            "firstItem": "Private Office", "firstItemPrice": "₹ 45,300/mo",
            "secondItem": "Deicated Desk", "secondItemPrice": "₹ 35,700/mo",
            "thirdItem": "Hot Desk", "thirdItemPrice": "₹ 25,600/mo"
          },
          "amenitiesLabel": `Amenities Around the Clock`,
          "amenitiesContent": `From front-desk service to fresh fruit water, utilities & security to employee events, our spaces include all-inclusive amenities that are cost-effective—and meaningful.`,
          "amenitiesIcons": [
            { name: "Internet", icon: "fa fa-wifi" },
            { name: "Office Supplies", icon: "fa fa-briefcase" },
            { name: "Phone Booths", icon: "fa fa-phone" },
            { name: "Bike Storage", icon: "fa fa-motorcycle" },
            { name: "IT Support", icon: "fa fa-question-circle" },
            { name: "24/7 Building Access", icon: "fa fa-building" }
          ],
          "officeSpaceLabel": `Coworking Office Spaces.`,
          "officeSpaceContent": `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
          "copyrightLabel": `Copyright text. All rights reserved.`,
          "footerIcons": [
            { icon: "fa fa-facebook" },
            { icon: "fa fa-linkedin" },
            { icon: "fa fa-twitter" },
            { icon: "fa fa-instagram" }
          ]
        }
    },
    {
      "name": "contactUs",
      "pageContents":
        {
          "contactUsLabel": `Contact Us`,
          "contactUsContent": `One of our workspace experts will reach out to you, based on your communication preferences.`,
          "formNameLabel": "Full name*",
          "formCompanyNameLabel": "Company name*",
          "formEmailLabel": "Email Address*",
          "formContactNumberLabel": "Contact Number*",
          "formLookingForLabel": "I'm Interested In*",
          "formLookingForOptions": [
            { value: "First Option" },
            { value: "2nd Option" },
            { value: "3rd Option" }
          ],
          "formNotesLabel": "Notes*",
          "policyAgreementlabel_1": "By clicking submit you agree to our",
          "policyAgreementlabel_2": "and have read and understood our",
          "termsAndServiceLabel": `Terms of Service`,
          "termsAndServiceLink": "#",
          "privacyPolicyLabel": "Privacy Policy",
          "privacyPolicyLink": "#",
          "callUsLabel": "Call Us",
          "callUsContent": "Questions about plans, pricing, or availability? Just have your people call our people.",
          "contactUsPhoneIcon": "fa fa-phone",
          "contactNumber": "1800 xxx 787 x01 003",
          "helpCenterContent": `Not quite ready to talk to someone? Check out our comprehensive`,
          "helpCenterLink": "#",
          "helpCenterLinkLabel": " Help Center & FAQ"
        }
    },
    {
      "name": "enterprise",
      "pageContents":
        {
          "enterpriseLabel": `THE NEW ENTERPRISE`,
          "enterpriseContent": `Empower your workforce to do what they love. We’re redefining the work experience by homing in on the heart of every business: people. Our team of real estate, design, construction, architecture and operations experts are creating environments that increase productivity, spur innovation, and encourage collaboration. Our suite of enterprise solutions has your workspace needs covered`,
          "workSpaceContent": [
            {
              title: "Global Access",
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
              image: "assets/images/workspace1.jpg", button: "Learn More"
            },
            {
              title: "Swing Space",
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
              image: "assets/images/workspace2.jpg", button: "Learn More"
            },
            {
              title: "Satellite Offices",
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
              image: "assets/images/workspace3.jpg", button: "Learn More"
            },
            {
              title: "Powered by We",
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
              image: "assets/images/workspace4.jpg", button: "Learn More"
            }
          ],
          "spaceAsaServiceLabel": "Space as a Service",
          "spaceAsaServiceContent": `Today, large-scale corporations are leveraging an array of WeWork enterprise solutions. We provide a full-stack offering, from sourcing your real estate, to designing and building your workspace, and ultimately operating your office.`,
          "services": [
            {
              title: "Flex",
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
              image: "assets/images/cube1.jpg", button: "Learn More"
            },
            {
              title: "Office",
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
              image: "assets/images/cube1.jpg", button: "Learn More"
            },
            {
              title: "Floor",
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
              image: "assets/images/cube1.jpg", button: "Learn More"
            },
            {
              title: "Building",
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
              image: "assets/images/cube1.jpg", button: "Learn More"
            }
          ],
          "customAndStandardLabel": "Custom and Standard",
          "customAndStandardContent": `Whether you’re looking for move-in ready offices or fully tailored spaces that embody your brand, our standard and custom solutions will take your workspace to the next level.`,
          "standardLabel": "Standard. ",
          "standardContent": `A quick, move-in ready workspace that’s good to go from day one. Your teams will enjoy all of WeWork’s signature designs and amenities—ideal for swing spaces or satellite offices.`,
          "customLabel": "Custom. ",
          "customContent": `A hands-on approach in creating a space that meets your specific business needs. From a dynamic “thinklab” for client brainstorms to a floor of production studios, our in-house teams of architects and designers will work with you for a one-of-a-kind layout.`,
          "officeArtImage": "assets/images/office-art.jpg",
          "officeArtLabel": "Caption of the image.",
          "enterprisePartnerLabel": "Enterprise Partners",
          "enterpriseLogos": [
            { icon: "assets/images/enterprise-logo.png" },
            { icon: "assets/images/enterprise-logo.png" },
            { icon: "assets/images/enterprise-logo.png" },
            { icon: "assets/images/enterprise-logo.png" },
            { icon: "assets/images/enterprise-logo.png" },
            { icon: "assets/images/enterprise-logo.png" },
          ],
          "enterpriseFormContent": {
            "formHeadingLabel": "Interested?",
            "formHeadingContent": "Fill out the form below and our team will contact you directly.",
            "formNameLabel": "Name*",
            "formCompanyNameLabel": "Company*", "formCompanyLocationLabel": "Location*",
            "formEmailLabel": "Email*",
            "formPhoneLabel": "Phone", "formMoveInDateLabel": "Move in date*",
            "jobTitleLabel": "Job Title", "numberOfPeopleLabel": "Number of people*",
            "addtionalNoteLabel": "Additional notes",
            "formMoveInDateContent": [
              { "date": "July 2018" },
              { "date": "August 2018" },
              { "date": "September 2018" }
            ],
            "numberOfPeopleContent": [
              { "people": "10 people" },
              { "people": "20 people" },
              { "people": "30 people" }
            ]
          },
          "copyrightLabel": `Copyright text. All rights reserved.`,
          "footerIcons": [
            { icon: "fa fa-facebook" },
            { icon: "fa fa-linkedin" },
            { icon: "fa fa-twitter" },
            { icon: "fa fa-instagram" }
          ],
          "policyAgreementlabel_1": "By clicking submit you agree to our",
          "policyAgreementlabel_2": "and have read and understood our",
          "termsAndServiceLabel": `Terms of Service`,
          "termsAndServiceLink": "#",
          "privacyPolicyLabel": "Privacy Policy",
          "privacyPolicyLink": "#"
        }
    },
    {
      "name": "labs",
      "pageContents":
        {
          "labLabel": `Our Labs`,
          "labContent": `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
          "philosophyLabel": "Our Philosophy",
          "philosophyContent": `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
          "locationsAndPricesLabel": "Our Locations and Prices",
          "locationsAndPricesContent": "We’re constantly expanding our global footprint. Here are a few locations you can apply to today.",
          "labFormContent": {
            "formHeadingLabel": "Our Labs",
            "formHeadingContent": "Fill out the form below and our team will contact you directly.",
            "formNameLabel": "Name*",
            "formCompanyNameLabel": "Company*", "formCompanyLocationLabel": "Labs Location*",
            "formEmailLabel": "Email*",
            "formPhoneLabel": "Phone",
            "addtionalNoteLabel": "Additional notes",
            "formCompanyLocationContent": [
              { "location": "Bangalore" },
              { "location": "Pune" },
              { "location": "Mumbai" }
            ]
          },
          "policyAgreementlabel_1": "By clicking submit you agree to our",
          "policyAgreementlabel_2": "and have read and understood our",
          "termsAndServiceLabel": `Terms of Service`,
          "termsAndServiceLink": "#",
          "privacyPolicyLabel": "Privacy Policy",
          "privacyPolicyLink": "#",
          "incubatorsAndAcceleratorsLabel": "Incubators and Accelerators",
          "incubatorsAndAcceleratorsContent": `We welcome incubators and accelerators to partner with us. Today WeWork hosts tens of such amazing organizations within our spaces. Interested in joining?`,
          "incubatorsAndAcceleratorsLink": "#",
          "joinUsLabel": `Join WeWork Labs as a Mentor!`,
          "joinUsContent": `We welcome you to share your knowledge and experience with our community of early-stage entrepreneurs.`,
          "joinUsLink": "#",
          "corporatePartnerLabel": `Corporate Partners, Innovate with Us!`,
          "corporatePartnerContent": `Interested in engaging with our startup community? Let us help you develop a strategy to maximize your outreach and exposure to our innovation ecosystem.`,
          "corporatePartnerLink": "#",
          "alumniMembersLabel": "Select Alumni Members",
          "alumniMembers": [
            { icon: "assets/images/enterprise-logo.png", link: "#" },
            { icon: "assets/images/enterprise-logo.png", link: "#" },
            { icon: "assets/images/enterprise-logo.png", link: "#" },
            { icon: "assets/images/enterprise-logo.png", link: "#" },
            { icon: "assets/images/enterprise-logo.png", link: "#" },
            { icon: "assets/images/enterprise-logo.png", link: "#" },
          ],
          "featuresLabel": "Features",
          "featuresContent": [
            { icon: "fa fa-check", name: "Program Managers" },
            { icon: "fa fa-check", name: "Weekly Events" },
            { icon: "fa fa-check", name: "Pitch Nights" },
            { icon: "fa fa-check", name: "Targeted Perks and Benefits" },
            { icon: "fa fa-check", name: "Community of Startups" },
            { icon: "fa fa-check", name: "Investor Introductions" },
            { icon: "fa fa-check", name: "No Equity" },
            { icon: "fa fa-check", name: "Mentorship" },
            { icon: "fa fa-check", name: "Workshops" },
            { icon: "fa fa-check", name: "Workshops" }
          ],
          "copyrightLabel": `Copyright text. All rights reserved.`,
          "footerIcons": [
            { icon: "fa fa-facebook" },
            { icon: "fa fa-linkedin" },
            { icon: "fa fa-twitter" },
            { icon: "fa fa-instagram" }
          ]
        }
    },
    {
      name: "mission",
      pageContents: {
        ourMission: {
          ourMissionLabel: "OUR MISSION",
          ourMissionBackgroundImageURL: "assets/images/image1.jpg",
          ourMissionDescription: "Create a world where people work to make a life, not just a living."
        },
        ourStory: {
          ourStoryLabel: "Our Story",
          ourStoryDescription: "When we started WeWork in 2010, we wanted to build more than beautiful, shared office spaces.We wanted to build a community.A place you join as an individual, 'me', but where you become part of a greater 'we'.A place where we’re redefining success measured by personal fulfillment, not just the bottom line.Community is our catalyst."
        },
        createYourLife: {
          createYourLifeLabel: "CREATE YOUR LIFE'S WORK",
          createYourLifeBackgroundImageURL: "/assets/images/image3.jpg"
        },
        ourValues: {
          ourValuesLabel: "Our Values",
          values: [
            { name: "Inspired", description: "We do what we love and are connected to something greater than ourselves." },
            { name: "Entrepreneurial", description: "We are creators, leaders, and self-starters. We try new things, we challenge convention, and we’re not afraid to fail." },
            { name: "Authentic", description: "We are genuine to our brand, mission, and values. We're not perfect, and we don't pretend to be. We are always honest and as transparent as we can be." },
            { name: "Tenacious", description: "We never settle. We get shit done and we get it done well. Be persistent and knock down walls–literally if you have to. You have our permission." },
            { name: "Grateful", description: "We are grateful for each other, our members, and to be part of this movement. We don't take success for granted. We’re happy to be alive." },
            { name: "Together", description: "We are in this together. This is a team effort. We always look out for one another. We have empathy, we know we're all human, and know we can’t do any of this alone." }
          ]
        },
        ourTeam: {
          ourTeamLabel: "Our Team",
          ourTeamJoinTheTeamButtonLabel: "Join the Team",
          ourTeamImageUrl: "assets/images/image2.jpg",
          ourTeamDescription: "Our mission doesn’t end with the small businesses and entrepreneurs that call us home. We believe in empowering our team to create their own life's work. We move fast and we challenge each other, but we look after each other and care about our culture, which makes working here extremely rewarding. There's a lot of work left for us to do, and we couldn't do it without a single member of our team."
        },
        whyURSSystems: {
          whyURSSystemsLabel: "Why URS Systems",
          whyURSSystemsOurBlogLabel: "Our Blog",
          whyURSSystemsBackgroundImageURL: "/assets/images/image4.jpg"
        },
        ourServices: {
          ourServicesLabel: "Ous Services",
          location1Label: "Location 1",
          location2Label: "Location 2",
          location3Label: "Location 3",
          location4Label: "Location 4",
          location5Label: "Location 5",
          service1Label: "Service 1",
          service2Label: "Service 2",
          Service3Label: "Service 3",
          service4Label: "Service 4",
          service5Label: "Service 5",
          work1Label: "Work 1",
          work2Label: "Work 2",
          work3Label: "Work 3",
          work4Label: "Work 4",
          work5Label: "Work 5",
        },
        yourSite: {
          yourSiteLabel: "URS Systems 2018"
        }
      }
    },
    {
      name: "plans",
      pageContents: {
        plansPricing: {
          plansPricingLabel: "Plans & Pricing"
        },
        membershipOptions: {
          membershipOptionsLabel: "Membership Options",
          membershipOptionsDescription: "Short-term agreements keep things flexible.",
          membershipOptionsplansAndPricing: [
            { name: "Custom Buildout", pricing: "Pricing Varies", buttonLabel: "Learn More", image: "assets/images/workspace1.jpg", bestFor: ["Companies of 50-500+", "Unique functionalities", "Unique functionalities"], description: "Whether full floor or building, we'll partner with you to design, build, and manage a tailor-made layout." },
            { name: "Private Office", pricing: "Starting at ₹16,500/month", buttonLabel: "Learn More", image: "assets/images/workspace2.jpg", bestFor: ["Companies of 1-100+", "Satellite and established teams", "Autonomy within community"], description: "Enclosed, lockable offices can accommodate teams of any size. Move-in ready, with desks, chairs, and filing cabinets." },
            { name: "Dedicated Desk", pricing: "Starting at ₹12,000/month", buttonLabel: "Learn More", image: "assets/images/workspace3.jpg", bestFor: ["Startups and small agencies", "Collaboration and growth", "Everyday use"], description: "A desk of your own in a shared space at one location. You’ll set up shop in the same spot each day in your building." },
            { name: "Hot Desk", pricing: "Starting at ₹7,000/month", buttonLabel: "Learn More", image: "assets/images/workspace4.jpg", bestFor: ["Remote and part-time workers", "Client meetings", "More than a week per month"], description: "Guaranteed workspace in a common area at one location. Just bring your laptop, pick an open seat, and get to work." }
          ]
        },
        includedAmenities: {
          includedAmenitiesLabel: "Included Amenities",
          includedAmenitiesDescription: "You focus on growing your business, we take care of the rest.",
          includedAmenitiesAmenities: [
            { name: "Internet", icon: "fa fa-wifi" },
            { name: "Office Supplies", icon: "fa fa-briefcase" },
            { name: "Phone Booths", icon: "fa fa-phone" },
            { name: "Bike Storage", icon: "fa fa-motorcycle" },
            { name: "IT Support", icon: "fa fa-question-circle" },
            { name: "24/7 Building Access", icon: "fa fa-building" },
            { name: "Global Service", icon: "fa fa-globe" },
            { name: "24/7 Messages", icon: "fa fa-envelope-open" },
            { name: "Internet", icon: "fa fa-wifi" },
            { name: "Office Supplies", icon: "fa fa-briefcase" },
            { name: "Phone Booths", icon: "fa fa-phone" },
            { name: "Bike Storage", icon: "fa fa-motorcycle" },
            { name: "IT Support", icon: "fa fa-question-circle" },
            { name: "24/7 Building Access", icon: "fa fa-building" },
            { name: "Global Service", icon: "fa fa-globe" },
            { name: "24/7 Messages", icon: "fa fa-envelope-open" }
          ]
        },
        inItTogether: {
          inItTogetherLabel: "In It Together",
          inItTogetherDescription: "Whether it’s getting feedback on your product in real time, asking for a recommendation on a service provider, or fostering an engaging experience for your employees, the everyday connections of the WeWork community are invaluable."
        },
        benefitsForAll: {
          benefitsForAllLabel: "In It Together",
          benefitsForAllDescription: "Whether it’s getting feedback on your product in real time, asking for a recommendation on a service provider, or fostering an engaging experience for your employees, the everyday connections of the WeWork community are invaluable."
        },
        onDemand: {
          onDemandLabel: "On-Demand",
          onDemandHeading1: "Starting at US$45/month",
          onDemandHeading2: "1 day/month included",
          onDemandButtonLabel: "Learn More",
          onDemandImageUrl: "assets/images/mobile1.jpg",
          onDemandDescription: "We Membership is our pay-as-you-go plan. Book a desk for a day or a conference room for an hour at any location. We Membership is our pay-as-you-go plan. Book a desk for a day or a conference room for an hour at any location. "
        },
        theURSApp: {
          theURSAppLabel: "The URS Systems App",
          theURSAppHeading: "Included with every plan",
          theURSAppImageUrl: "assets/images/mobile1.jpg",
          theURSAppDescription: "We Membership is our pay-as-you-go plan. Book a desk for a day or a conference room for an hour at any location. We Membership is our pay-as-you-go plan. Book a desk for a day or a conference room for an hour at any location."
        },
        ursSystemsEnterprise: {
          ursSystemsEnterpriseLabel: "URS Systems Enterprise",
          ursSystemsEnterpriseHeading: "Office solutions for forward-thinking corporations.",
          ursSystemsEnterpriseButtonLabel: "Learn More",
          ursSystemsEnterpriseImageUrl: "assets/images/mobile1.jpg",
          ursSystemsEnterpriseDescription: "From a 500-person HQ to a one-person satellite, WeWork creates a custom workplace experience that eliminates hassle, inspires employees, and fosters a culture that attracts top talent."
        },
        ourClientsTell: {
          ourClientsTellLabel: "Our clients Tell It Like It Is",
          clients: [
            {
              name: "Ram Kumar", profession: "entrepreneur", image: "assets/images/image5.jpg", comments: "\"Grow your office as your team grows, or start with a desk and see where it takes you. \""
            },
            {
              name: "Ravi Sony", profession: "Founder Of world", image: "assets/images/image6.jpg", comments: "\"Grow your office as your team grows, or start with a desk and see where it takes you. \""
            },
            { name: "Kailash Sharma", profession: "entrepreneur", image: "assets/images/image7.jpg", comments: "\"Grow your office as your team grows, or start with a desk and see where it takes you. \"" },
            { name: "Vikas Kushwah", profession: "Tata Moters", image: "assets/images/image1.jpg", comments: "\"Grow your office as your team grows, or start with a desk and see where it takes you. \"" }
          ]
        },
        faq: {
          faqLabel: "Frequently Asked Questions",
          faqHeading: "Our team's always here to talk it out, just reach out by phone or email.",
          faqQuestions: [
            { question: "Am I allowed to bring my dog? What is your pet policy?", answer: "Our pet policy varies by building. Please ask the WeWork Community Manager when you take a tour for the most up-to-date information." },
             { question: "Can I add mail and package handling?", answer: "Mail and package handling is included for Dedicated Desk and Private Office plans. Hot Desk and We Membership plans offer this service à la carte at most buildings. Reach out to the local Community team at your desired location to find out more." }
          ]
        },
        ourServices: {
          ourServicesLabel: "Ous Services",
          location1Label: "Location 1",
          location2Label: "Location 2",
          location3Label: "Location 3",
          location4Label: "Location 4",
          location5Label: "Location 5",
          service1Label: "Service 1",
          service2Label: "Service 2",
          Service3Label: "Service 3",
          service4Label: "Service 4",
          service5Label: "Service 5",
          work1Label: "Work 1",
          work2Label: "Work 2",
          work3Label: "Work 3",
          work4Label: "Work 4",
          work5Label: "Work 5",
        },
        yourSite: {
          yourSiteLabel: "URS Systems 2018"
        }
      }
    }
  ];

  getPageContents() {
    return this.pageContents;
  }






  //---

}
