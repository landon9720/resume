import React from "react"
import { Link } from "react-router-dom"

export default () => (
  <div>
    <h1>
      <Link to="/helloworld">Landon Kuhn</Link>
    </h1>
    <p>
      <a href="mailto://landon9720@gmail.com">landon9720@gmail.com</a>
      <br />
      <Link to="/portland">Portland, Oregon, USA</Link>
      <br />
      971-645-5501
      <br />
      <Link to="/landon9720">landon9720.com</Link>
      <br />
    </p>
    <h2>Summary</h2>
    <p>
      I invent, build, and operate applications of software technology. I am
      trained in business, and I am passionate about delivering value in the
      form of deployed, operated, and continuously improving software systems. I
      am a coder, operator, and full-time team-member. I support and mentor both
      internal and external stakeholders, and team members. I work with
      customers to derive and prioritized requirements. I work internally to
      define deliverable work items, which I then implement in full or as part
      of a team. I have significant experience in the domain of web applications
      and services, and I consider myself a multiskilled Information Technology
      contributor. I have professional experience programming in languages
      including:
    </p>
    <ul>
      <li>TypeScript, JavaScript</li>
      <li>Scala, Java</li>
      <li>Perl, Python, Bash</li>
      <li>C, C++</li>
      <li>C#</li>
      <li className="no-print">
        <Link to="tech">Navigate here for the longer list</Link>
      </li>
    </ul>
    <p>
      My code runs in environments including AWS, web browsers, mobile devices,
      and personal computers.
    </p>
    <p>
      I practice iterative development, unit testing, clean code, continuous
      integration, and infrastructure-as-code. Every day I use Chrome, Git, and
      Visual Studio Code. My programming hobbies include simulations, genetic
      algorithms, and computer-generated music.
      <span className="no-print">
        {" "}
        I am a husband, and father of two teens. When not working, I{" "}
        <a href="https://landon9720.bandcamp.com">make</a>{" "}
        <a href="https://soundcloud.com/landon9720">music.</a>
      </span>
    </p>
    <h2>Experience</h2>
    <h3>Formant</h3>
    <em>Senior Software Engineer ~ Portland, Oregon, 2018-2021</em>
    <blockquote>
      <a href="https://formant.io">Formant</a> is a platform that connects
      robots and people. Formant provides data collection, visualization, and
      controls for robots and related devices. Formant web application includes
      visualization and export of telemetry data, management of fleets, user
      comments and annotations, and integration with external services.
    </blockquote>
    <p>
      Built product features covering the entire implementation stack, including
      HTTP REST APIs (TypeScript, NodeJS), data transformation (Kafka), storage
      and query (PostgreSQL). Built frontend UI for data visualization (React,
      SVG), and system configuration.
    </p>
    <ol>
      <li>
        Improved data ingestion to leverage realtime stream processing
        frameworks (initially Kinesis, later Kafka) to improve web service
        performance and system scalability, and to implement data aggregation
        and export to S3.
      </li>
      <li>
        Implemented new product features: Comments, and Annotations. These
        features allow robot telemetry data to be augmented with user input, and
        associated with records in external systems (Google Sheets). I
        implemented frontend user-input and configuration components (React),
        visualization and interaction with time-series data (SVG), APIs
        (TypeScript, NodeJS), database modeling and optimization (PostgreSQL).
      </li>
      <li>
        Implemented new product feature: Fleets, which is a higher level entity
        for organizing robot data. Implemented data models, APIs, configuration
        pages and incorporation throughout the frontend. Also implemented Fleet
        dashboard, which is a real-time display of metrics for all robots in the
        Fleet. Project work included frontend, APIs, data model, and background
        data preparation (React, TypeScript, NodeJS, Kafka, PostgreSQL).
      </li>
      <li>
        Implemented new product feature: Commands, which allows messages to be
        sent from Formant cloud to robots. Commands are used to invoke custom
        behavior, and can be triggered manually by user action, or automatically
        by continuous evaluation of user-inputted predicates against ingested
        robot telemetry data. I implemented data models, APIs, and the frontend
        for configuring, sending, and reviewing Commands.
      </li>
      <li>
        Implemented infrastructure observability improvements: collection of
        metrics, and integration external services (CloudWatch, DataDog). Allow
        monitoring for system failures identification of performance hot-spots.
        Includes continuous automated integration testing of full application
        stack.
      </li>
      <li>
        Integrated Formant telemetry data with downstream services to support
        analytics (S3, Athena). Developed and supported custom reports and
        dashboards for Formant customers (Looker, Tableau).
      </li>
      <li>Team communications (JIRA, Slack)</li>
    </ol>
    <h3>Sunsama</h3>
    <em>Software Architect ~ Portland, Oregon ~ 2017-2018</em>
    <blockquote>
      <a href="https://sunsama.com">Sunsama</a> is a unique team task management
      application. In 15 months, our team of 4 created a unique software product
      with an active and growing user base.
    </blockquote>
    <p>Developed and operated the entire software stack, including:</p>
    <ol>
      <li>
        User interface, with real time reactivity across all connected browsers
        (React, GraphQL, NodeJS, Meteor, Chrome)
      </li>
      <li>Back-end services (Meteor, Web Sockets, MongoDB, AWS SQS)</li>
      <li>API integration (Google Calendar, OAuth)</li>
      <li>Native desktop application (Electron)</li>
      <li>
        Infrastructure, build, and deployment (AWS, EC2, ECS, CloudWatch,
        Terraform, Jenkins, Docker, Bash)
      </li>
      <li>Operational monitoring and emergency support</li>
      <li>Software development process management (Scrum, Kanban)</li>
      <li>Team communications (Sunsama, Slack)</li>
    </ol>
    <h3>MobileRQ</h3>
    <em>Software Architect ~ Portland, Oregon ~ 2015-2017</em>
    <blockquote>
      <a href="http://mobilerq.com">MobileRQ</a> enables targeted content
      delivery and push notifications for mobile and web applications. MobileRQ
      was acquired by <a href="http://kochava.com">Kochava</a> in 2017.
    </blockquote>
    <p>
      Developed, operated, and supported MobileRQ's software products, including
      web applications and services on AWS, and iOS SDK. Responsibilities
      included all aspects of the software stack:
    </p>
    <ol>
      <li>User interface (HTML, CSS, jQuery, Bootstrap)</li>
      <li>Front-end API (Java, AWS Elastic Beanstalk)</li>
      <li>
        Data storage and transform (Scala, Apache Spark, RDS/PostgreSQL,
        DynamoDB, S3)
      </li>
    </ol>
    <p>Implemented major features and improvements including:</p>
    <ol>
      <li>
        Distributed matching engine that evaluates customer-defined predicates
        with customer data (Scala, Apache Ignite)
      </li>
      <li>
        Architectural refractors, resulting in order-of-magnitude cost saving
        and reliability improvement (Scala, AWS Kinesis, AWS DynamoDB)
      </li>
    </ol>
    <h3>Janrain</h3>
    <em>Software Architect ~ Portland, Oregon ~ 2013-2015</em>
    <blockquote>
      <a href="http://janrain.com">Janrain</a> provides social identity and user
      profile management services for web sites and mobile applications.
    </blockquote>
    <p>
      Designed and implemented of services for managing configuration data,
      featuring a DSL for modeling and transforming data over a graph database
      with compile-time correctness guarantees. (Scala)
    </p>
    <p>
      Built analytics products that leverage user profile and event data data.
      My responsibilities included architecture, vendor evaluations, and project
      planning and leadership. Implemented ETL, data access, and visualization
      (Scala, Apache Spark, AWS EMR, S3, AWS Redshift, SQL).
    </p>
    <h3>Marin Software</h3>
    <em>Senior Engineer ~ Portland, Oregon ~ 2012</em>
    <blockquote>
      <a href="http://marinsoftware.com">Marin Software</a> allows advertisers
      to manage online marketing campaigns across a variety of publishers,
      including Google and Facebook.
    </blockquote>
    <p>
      Developed search features and performance improvements. Developed a data
      pipeline for asynchronously loading search and aggregate data into the
      front-end web application. (Java, JavaScript)
    </p>
    <h3>ClearAccess Inc.</h3>
    <em>Senior Engineer ~ Vancouver, Washington ~ 2009-2012</em>
    <blockquote>
      ClearAccess provided Auto-Configuration Server (ACS) software and
      customer-premises equipment (CPE) firmware to deliver flexible and
      scalable device and application management based on the Broadband Forum's
      TR-069 standard. ClearAccess was acquired by Cisco Systems in March 2012.
    </blockquote>
    <p>Developed web applications and services, including:</p>
    <ol>
      <li>
        Web applications for management of wireless access points, cable and DSL
        modems, and NAT devices (Scala, Java, Tomcat)
      </li>
      <li>
        Implementation of TR-069, the protocol used to manage customer-premises
        equipment (Scala, Java, Tomcat, HTTP, XML)
      </li>
      <li>Data storage and transformation (MySQL, PostgreSQL)</li>
      <li>Device communication scripting (Java/JavaScript)</li>
      <li>
        Search and reporting features, including data indexing engine, custom
        query language, with text parser and user interface (Scala, Solr)
      </li>
    </ol>
    <h3>QUALCOMM, Inc.</h3>
    <em>Senior Engineer ~ Portland, Oregon ~ 2001-2009</em>
    <blockquote>
      <a href="http://qualcomm.com">Qualcomm</a> designs, manufactures, and
      markets wireless telecommunications products and services based on its
      CDMA technology, and delivers integrated wireless applications and
      services.
    </blockquote>
    <p>
      Implemented application features used by human drivers of hong-haul
      tractor-trailers. Developed applications for real-time monitoring of
      freight. Created algorithms for processing driver logs according to FMCSA
      Hours-of-Service regulations. Worked with position data, map
      visualization, geofencing, and SMS alerts. Maintained and responsible for
      build automation for multi-platform product SDK. These projects provided
      abundant opportunities for learning and growth. (C, C++, C#, Windows CE,
      Windows CE.NET, ASP.NET, Java, Perl, Python)
    </p>
    <p>
      Early supporter of unit testing, dependency injection/inversion of
      control, mock objects, and source control. At the time these were new
      ideas and required advocacy.
    </p>
    <p>
      I supported the IT infrastructure for the Portland office, including
      workstations for 50+ employees, on-premises servers, and other LAN, WAN,
      and telecommunications equipment.
    </p>
    <h2>Education</h2>
    <em>
      <a href="http://pdx.edu">Portland State University</a>
      {" ~ "}
      <a href="https://www.pdx.edu/business">The School of Business</a>
      {" ~ "}
      Bachelor of Science{" ~ "}
      Information Systems{" ~ "}
      Honors
    </em>
    <p>
      Coursework included Unix, C, C++, C#/.NET, SQL, data structures,
      algorithms, computer networking, data modeling, database management,
      business, finance, marketing.
    </p>
  </div>
)
