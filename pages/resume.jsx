import React from "react"
import { Link } from "react-router-dom"
import Mandelbrot from "../Mandelbrot.jsx"

export default () => (
  <div>
    <h1>
      <Link to="/helloworld">Landon Kuhn</Link>
    </h1>
    <p>
      Designs, implements, and operates software applications. Trained in
      business, expert programmer with a lifetime of experience, driven by a
      genuine passion for Information Technology. Works with stakeholders to
      derive and prioritize requirements, document implementation options, and
      create planning artifacts such as Stories and Tasks. Mentors team members
      and stakeholders. Manages and operates infrastructure. Has significant
      experience in web applications and services, and is a multi-skilled IT
      professional. Programming practices include iterative development, unit
      and functional testing, dependency injection, clean code, continuous
      integration, infrastructure-as-code, functional programming, and
      observability. Proficient in using Chrome, Git, IDEA, and Visual Studio
      Code. Has recent experience with Scala and TypeScript, and also has
      significant professional experience with Java, JavaScript, C/C++, and
      HTML/CSS and related technologies. Programming hobbies include
      simulations, 2D graphics, genetic algorithms, and computer-generated
      music.
      <span className="no-print">
        {" "}
        When not at work, <a href="https://landon9720.bandcamp.com">
          creates
        </a>{" "}
        <a href="https://soundcloud.com/landon9720">music</a>. See{" "}
        <Link to="tech">technology list</Link>, and profiles on{" "}
        <a href="https://stackoverflow.com/users/1785/landon-kuhn">
          StackOverflow
        </a>
        , <a href="https://github.com/landon9720">GitHub</a>, and{" "}
        <a href="https://www.linkedin.com/in/landonkuhn">LinkedIn</a>.
      </span>{" "}
      Email is <a href="mailto://landon9720@gmail.com">landon9720@gmail.com</a>.
      Locale is Portland, Oregon, USA.
    </p>
    <h2>Experience</h2>
    <h3>
      <a href="https://www.thatdot.com">thatDot</a> • Senior Software Engineer •
      2021-2022
    </h3>
    <blockquote>
      thatDot is an{" "}
      <a href="https://github.com/thatdot/quine">open-source graph database</a>{" "}
      with innovative features such as integration with streaming data
      platforms.
    </blockquote>
    <p>
      Designed, implemented, and supported product features, and improved
      quality. Developed <a href="https://quine.io/recipes">Recipe</a>, a YAML
      file that implements thatDot use-case. Recipes are descriptions of how to
      read records from sources, include how to transform and write records to
      persistent graph data model, how to query and output records to
      destinations. Added data sources and sinks, including UNIX{" "}
      <a href="https://docs.quine.io/components/ingest-sources/files-and-named-pipes.html#named-pipe">
        named pipes
      </a>
      , AWS Kinesis. Added Cypher language features, including variable length
      pattern matching, support for{" "}
      <a href="https://docs.quine.io/reference/cypher/cypher-functions.html#:~:text=time%20into%20string-,text.regexFirstMatch,-text.regexFirstMatch(text">
        regular expressions
      </a>
      ,{" "}
      <a href="https://docs.quine.io/reference/reify-time.html">
        functions for time modelling and indexing
      </a>
      . Developed product integration test to drive scenarios, measure
      performance, and assert correctness. Implemented multipart snapshots for
      unlimited record sizes despite underlying store limitations. (Scala, Akka,
      Akka Streams, Alpakka, endpoints4s, UNIX)
    </p>
    <h3>
      <a href="https://formant.io">Formant</a> • Senior Software Engineer •
      2018-2021
    </h3>
    <blockquote>
      Formant offers robotic data collection, visualization, and controls. Web
      application includes telemetry visualization and export, fleet management,
      user comments and annotations, and service integration.
    </blockquote>
    <p>
      Improved telemetry ingestion by leveraging realtime stream processing, to
      implement features such as aggregation, and export to S3. Implemented
      Annotations feature, to allow telemetry to be augmented with user input.
      Included building custom UI component for time-series data, and database
      modeling and optimization. Implemented Fleets feature to organize robot
      data, including data models, APIs, configuration pages, and dashboard for
      realtime display of robot metrics. Implemented Commands, which allows
      messages to be sent from Formant to robots, are used to invoke custom
      behavior, and are triggered manually or by evaluation of telemetry, and
      developed data models, APIs, and frontend for sending and reviewing
      Commands. Improved product observability by collection of metrics,
      integration to external services, and continuous automated integration
      testing of full application stack. Integrated with downstream services to
      support analytics. Developed reports and dashboards. (Athena, Canvas,
      CloudWatch, DataDog, Google Sheets, Kafka, Kinesis, Kubernetes, Looker,
      NodeJS, PostgreSQL, React, S3, SVG, Tableau, TypeScript)
    </p>
    <h3>
      <a href="https://sunsama.com">Sunsama</a> • Software Architect • 2017-2018
    </h3>
    <blockquote>
      Sunsama is a unique team task management application.
    </blockquote>
    <p>
      Developed and operated software stack (React, GraphQL, NodeJS, Meteor,
      Chrome, Web Sockets, MongoDB). Included user interface, with real-time
      reactivity across connected browsers. Included back-end services and
      integrations to Google Calendar, and OAuth. Built native desktop
      application (Electron). Managed build and deployment automation, and
      infrastructure (AWS, EC2, ECS, CloudWatch, Terraform, Jenkins, Docker,
      Bash).
    </p>
    <h3>
      <a href="http://mobilerq.com">MobileRQ</a> • Software Architect •
      2015-2017
    </h3>
    <blockquote>
      MobileRQ enables targeted content delivery and push notifications for
      mobile and web applications. Acquired by{" "}
      <a href="http://kochava.com">Kochava</a> in 2017.
    </blockquote>
    <p>
      Developed, operated, and supported software products. Included web all
      aspects of software stack: user interface (HTML, CSS, JavaScript, jQuery,
      Bootstrap), API (Java, Servlet, AWS Elastic Beanstalk), data storage and
      transform (Scala, RDS/PostgreSQL, DynamoDB, S3). Implemented major
      features and improvements, including: distributed matching engine to
      evaluate customer-defined predicates with customer data (Scala, Apache
      Ignite), architectural improvements resulting in order-of-magnitude cost
      saving, and reliability improvement (Scala, AWS Kinesis, AWS DynamoDB).
    </p>
    <h3>Janrain • Software Architect • 2013-2015</h3>
    <blockquote>
      Janrain provided social identity and user profile management services for
      web sites and mobile applications.
    </blockquote>
    <p>
      Designed and implemented services for managing configuration data,
      featuring a DSL for modeling and transforming data over a graph database
      (Scala). Built analytics products that leverage user profile and event
      data. Responsibilities included architecture, vendor evaluations, project
      planning, coordination with product owners, and facilitation of process
      meetings. Implemented ETL, data access, and visualization (Scala, Apache
      Spark, AWS EMR, S3, AWS Redshift, SQL).
    </p>
    <p></p>
    <h3>
      <a href="http://marinsoftware.com">Marin Software</a> • Senior Engineer •
      2012
    </h3>
    <blockquote>
      Marin Software allows advertisers to manage online marketing campaigns
      across a variety of publishers, including Google and Facebook.
    </blockquote>
    <p>
      Developed search features and performance improvements. Developed a data
      pipeline for asynchronously joining search and aggregate data in the
      front-end web application. Built backend microservice for managing
      customer records. (Java, JavaScript, DropWizard)
    </p>
    <h3>ClearAccess Inc. • Senior Engineer • 2009-2012</h3>
    <blockquote>
      ClearAccess provided Auto-Configuration Server (ACS) software and
      customer-premises equipment (CPE) firmware to deliver device management
      based on the Broadband Forum's TR-069 standard. Acquired by Cisco Systems
      in March 2012.
    </blockquote>
    <p>
      Developed web application full-stack, including data models, web services,
      and front end user interface for management of wireless access points,
      cable and DSL modems, and NAT devices. Developed search and reporting
      features, including data indexing engine, custom query language, with
      parser, and UI. Worked on TR-069 extensibility supported by user-facing
      scripts. (Scala, Java, JavaScript, Tomcat, MySQL, PostgreSQL, Hibernate)
    </p>
    <h3>
      <a href="http://qualcomm.com">QUALCOMM</a>, Inc. • Senior Engineer •
      2001-2009
    </h3>
    <blockquote>
      Qualcomm designs, manufactures, and markets wireless telecommunications
      products and services based on its CDMA technology, and delivers
      integrated wireless applications and services.
    </blockquote>
    <p>
      Implemented application features used by drivers of hong-haul
      tractor-trailers. Developed applications for real-time monitoring of
      freight. Created algorithms for processing and visualization of driver
      logs according to FMCSA Hours-of-Service regulations. Worked with position
      data, map visualization, geofencing, and SMS alerts. Maintained and
      responsible for build automation for multi-platform product SDK.
      Additionally supported IT infrastructure for Portland office, including
      workstations for 50+ employees, on-premises servers, LAN/WAN, and
      telecommunications equipment. (C, C++, C#, Windows CE, Windows CE.NET,
      ASP.NET, Java, Perl, Python)
    </p>
    <h2>Education</h2>
    <h3>
      <a href="http://pdx.edu">Portland State University</a>
      {" • "}
      <a href="https://www.pdx.edu/business">The School of Business</a>
      {" • "}
      Bachelor of Science{" • "}
      Business Administration: Information Systems
    </h3>
    <p>
      Coursework included UNIX, C, C++, C#/.NET, SQL, data structures,
      algorithms, computer networking, data modeling, database management,
      business, finance, marketing. Graduated August 2001 with honors.
    </p>
    <footer className="no-print">
      <a href="https://github.com/landon9720/resume/blob/master/Mandelbrot.jsx">
        <Mandelbrot />
      </a>
    </footer>
  </div>
)
