import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div className="resume">
        <h1>
            <Link to="/helloworld">Landon Kuhn</Link>
        </h1>
        <p>
            <a href="mailto://landon9720@gmail.com">landon9720@gmail.com</a>
            <br />
            <Link to="/portland">Portland, Oregon, USA</Link>
            <br />
            971-645-5501<br />
            <Link to="/landon9720">landon9720.com</Link>
            <br />
        </p>
        <h2>Summary</h2>
        <p>
            I invent, build, and operate web software. I am a prolific full-time coder. I focus on the right problem at
            the right time, enabled by experience and judgement. I find and highlight the direct path. I unambiguate and
            deliver.
        </p>
        <p>
            I work in the domain of web software development and operation: requirements, architecture, implementation,
            test, deployment, operation, monitoring, scaling, and support.
        </p>
        <p>I have professional experience in programing languages including:</p>
        <ul>
            <li>JavaScript</li>
            <li>Java, Scala</li>
            <li>Objective-C</li>
            <li>Perl, Python, Bash</li>
            <li>C, C++</li>
            <li>C#</li>
        </ul>
        <p>
            I write for runtime environments including Amazon Web Services (AWS), web browsers, mobile devices, and PC.
        </p>
        <p>
            I practice iterative development, unit testing, continuous integration, and automated deployment. I prefer
            functional programming. Tools I use include Visual Studio, Visual Studio Code, Intellij IDEA, Eclipse,
            ClearCase, Git, Perforce, Subversion, JIRA, Trello, Jenkins, Maven, SBT, Bash, Google Chrome, and Slack.
        </p>
        <p>My programming hobbies include simulations, genetic algorithms, and computer-generated music.</p>
        <h2>Experience</h2>
        <h3>Sunsama</h3>
        <em>Software Architect - Portland, Oregon - 2017-2018</em>
        <blockquote>
            <a href="https://sunsama.com">Sunsama</a> is a team calendar and task management application.
        </blockquote>
        <p>At Sunsama I work the entire development and operational stack, including:</p>
        <ol>
            <li>Component and container-level JSX (React)</li>
            <li>Front-end API (NodeJS)</li>
            <li>Data transport for real-time multi-user rich-text editor (Socket.io)</li>
            <li>Native desktop application (Electron)</li>
            <li>Build and deployment automation (Jenkins, Docker, Bash, EC2 Container Service)</li>
            <li>Operational monitoring and emergency support</li>
            <li>Software development process management (scrum)</li>
        </ol>
        <h3>MobileRQ</h3>
        <em>Software Architect - Portland, Oregon - 2015-2017</em>
        <blockquote>
            <a href="http://mobilerq.com">MobileRQ</a> enables targeted content delivery and push notifications for
            mobile and web applications. MobileRQ was acquired by <a href="http://kochava.com">Kochava</a> in 2017.
        </blockquote>
        <p>
            I developed, operated, and supported MobileRQ's software products, including web applications and services
            on AWS, and iOS SDK. My responsibilities included all aspects of the software stack:
        </p>
        <ol>
            <li>User interface (HTML, CSS, jQuery, Bootstrap)</li>
            <li>Front-end API (Java, AWS Elastic Beanstalk)</li>
            <li>Data storage and transformation (Scala, Apache Spark, RDS/PostgreSQL, DynamoDB, S3)</li>
        </ol>
        <p>I implemented major features and improvements including:</p>
        <ol>
            <li>
                A distributed matching engine that evaluates customer-defined predicates with customer data (Scala,
                Apache Ignite)
            </li>
            <li>
                Architectural refractors, resulting in order-of-magnitude cost saving and reliability improvement
                (Scala, AWS Kinesis, AWS DynamoDB)
            </li>
        </ol>
        <h3>Janrain</h3>
        <em>Software Architect - Portland, Oregon - 2013-2015</em>
        <blockquote>
            <a href="http://janrain.com">Janrain</a> provides social identity and user profile management services for
            web sites and mobile applications.
        </blockquote>
        <p>
            At Janrain I unified service configuration into a single system of record. I contributed design and
            implementation of services for managing configuration data, featuring a DSL for modeling and transforming
            data over a graph database with compile-time correctness guarantees. (Scala)
        </p>
        <p>
            Janrain services produce profile and event data from sources including social networks, web forms, and user
            action. At Janrain, I built analytics products that leverage this data. My responsibilities included
            architecture, vendor evaluations, and project planning and leadership. I implemented ETL and data access
            (Scala, Apache Spark, AWS EMR, S3, AWS Redshift).
        </p>
        <p>
            Janrain manages engineering projects using the methodologies of scrum, continuous delivery, and iterative
            development. At Janrain, I defined, prioritized, and sequenced work. I collaborated with individual
            contributors, and drove stakeholder understanding and alignment. I facilitated process meetings, including
            sprint planning, sprint retrospective, and demonstrations of progress.
        </p>
        <h3>Marin Software</h3>
        <em>Senior Engineer - Portland, Oregon - 2012</em>
        <blockquote>
            <a href="http://marinsoftware.com">Marin Software</a> allows advertisers to manage online marketing
            campaigns across a variety of publishers, including Google and Facebook.
        </blockquote>
        <p>
            I developed search features and performance improvements. I developed a data pipeline for asynchronously
            loading search and aggregate data into the front-end web application. (Java, JavaScript)
        </p>
        <h3>ClearAccess Inc.</h3>
        <em>Senior Engineer - Vancouver, Washington - 2009-2012</em>
        <blockquote>
            ClearAccess provided Auto-Configuration Server (ACS) software and customer-premises equipment (CPE) firmware
            to deliver flexible and scalable device and application management based on the Broadband Forum's TR-069
            standard. ClearAccess was acquired by Cisco Systems in March 2012.
        </blockquote>
        <p>I developed web applications and services, including:</p>
        <ol>
            <li>
                Web applications for management of wireless access points, cable and DSL modems, and NAT devices (Scala,
                Java, Tomcat)
            </li>
            <li>
                Implementation of TR-069, the protocol used to manage customer-premises equipment (Scala, Java, Tomcat,
                HTTP, XML)
            </li>
            <li>Data storage and transformation (MySQL, PostgreSQL)</li>
            <li>Device communication scripting (Java/JavaScript)</li>
            <li>
                Search and reporting features, including data indexing engine, custom query language, and user interface
                (Scala, Solr)
            </li>
        </ol>
        <h3>QUALCOMM, Inc.</h3>
        <em>Senior Engineer - Portland, Oregon - 2001-2009</em>
        <blockquote>
            <a href="http://qualcomm.com">Qualcomm</a> designs, manufactures, and markets wireless telecommunications
            products and services based on its CDMA technology, and delivers integrated wireless applications and
            services.
        </blockquote>
        <p>
            I implemented application features used by human drivers of hong-haul tractor-trailers. I developed
            applications for real-time monitoring of freight. I created algorithms for processing driver logs according
            to FMCSA Hours-of-Service regulations. I worked with position data, map visualization, geofencing, and SMS
            alerts. I maintained build scripts. These projects provided abundant opportunities for learning and growth.
            (C, C++, C#, Windows CE, Windows CE.NET, ASP.NET, Java, Perl, Python)
        </p>
        <p>I was an early promoter of unit testing, dependency injection/inversion of control, mock objects.</p>
        <p>
            I supported the IT infrastructure for the Portland office, including workstations for 50+ employees,
            on-premises servers, and other LAN, WAN, and telecommunications equipment.
        </p>
        <h2>Education</h2>
        <em>
            <a href="http://pdx.edu">Portland State University</a> - BS Information Systems and Quantitative Analysis -
            2001
        </em>
        <p>
            Coursework included C, C++, C#/.NET, SQL, data structures and algorithms, data modeling, finance, marketing,
            and communication.
        </p>
    </div>
)
